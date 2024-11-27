<?php

/**
 * Plugin Name:       Slider Fse
 * Description:       Example block scaffolded with Create Block tool.
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       slider-fse
 *
 * @package CreateBlock
 */

if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly.
}

// Registra il blocco
function create_block_slider_fse_block_init()
{
    register_block_type(__DIR__ . '/build');
}
add_action('init', 'create_block_slider_fse_block_init');




// Funzione per vedere se WooCommerce è attivo
if (!function_exists('is_plugin_active')) {
    include_once(ABSPATH . 'wp-admin/includes/plugin.php');
}

function cocoblocks_get_content($content_type = 'post', $include_categories = array(), $exclude_categories = array(), $order = 'ASC', $posts_per_page = 5, $exclude_post_id = null)
{
    // Controlla se WooCommerce è attivo quando viene richiesto il tipo di contenuto 'product'
    if ($content_type === 'product' && !is_plugin_active('woocommerce/woocommerce.php')) {
        return new WP_Error('woocommerce_inactive', __('WooCommerce non è attivo. Per favore installa e attiva WooCommerce per utilizzare questa funzione.', 'cocoblocks'));
    }

    // Genera una chiave di cache unica basata sui parametri della query
    $cache_key = 'cocoblocks_' . md5(serialize(func_get_args()));
    $cached_posts = get_transient($cache_key);

    if ($cached_posts !== false) {
        return $cached_posts;
    }

    // Configura la query per recuperare i post o i prodotti
    $args = array(
        'post_type' => $content_type, // Tipo di contenuto ('post' o 'product')
        'posts_per_page' => $posts_per_page, // Numero di post da visualizzare
        'orderby' => 'date',
        'order' => $order, // Ordine dinamico
        'post_status' => 'publish',
        'no_found_rows' => true, // Evita il conteggio totale dei risultati
        'update_post_meta_cache' => false, // Evita di caricare i metadati inutilmente
        'update_post_term_cache' => false, // Evita di caricare i termini inutilmente
    );

    // Aggiungi il filtro per includere categorie se specificato
    if (!empty($include_categories)) {
        $args['category__in'] = array_map('intval', $include_categories);
    }

    // Aggiungi il filtro per escludere categorie se specificato
    if (!empty($exclude_categories)) {
        $args['category__not_in'] = array_map('intval', $exclude_categories);
    }

    // Escludi il post corrente se specificato
    if (!empty($exclude_post_id)) {
        $args['post__not_in'] = array($exclude_post_id);
    }

    $posts = get_posts($args);

    // Se non ci sono post o prodotti, restituisci un errore
    if (empty($posts)) {
        return new WP_Error('no_content', __('Nessun contenuto trovato.', 'cocoblocks'));
    }

    $post_data = array();

    foreach ($posts as $post) {
        // Recupera l'autore
        $author_name = get_the_author_meta('display_name', $post->post_author);

        // Recupera la data di pubblicazione
        $publish_date = get_the_date('Y-m-d', $post->ID);

        // Recupera le categorie come array di nomi
        $categories = get_the_category($post->ID);
        $category_names = [];
        if (!empty($categories)) {
            foreach ($categories as $category) {
                $category_names[] = $category->name;
            }
        }

        // Recupera i tag come array di nomi, limita a un massimo di 3
        $tags = get_the_tags($post->ID);
        $tag_names = [];
        if (!empty($tags)) {
            foreach ($tags as $tag) {
                $tag_names[] = $tag->name;
                if (count($tag_names) >= 3) {
                    break;
                }
            }
        }

        $post_data[] = array(
            'id' => $post->ID,
            'title' => get_the_title($post->ID),
            'excerpt' => get_the_excerpt($post->ID),
            'image' => get_the_post_thumbnail_url($post->ID, 'full'),
            'link' => get_permalink($post->ID),
            'author' => $author_name, // Aggiungi l'autore
            'date' => $publish_date, // Aggiungi la data di pubblicazione
            'categories' => $category_names, // Aggiungi le categorie
            'tags' => $tag_names, // Aggiungi i tag
        );
    }

    // Memorizza i risultati nella cache per 1 ora
    set_transient($cache_key, $post_data, HOUR_IN_SECONDS);

    return $post_data;
}

// Registra le rotte REST per i post e i prodotti
function cocoblocks_register_rest_routes()
{
    // Rotta per i post
    register_rest_route('cocoblocks/v1', '/get-posts/', array(
        'methods' => 'GET',
        'callback' => function (WP_REST_Request $request) {
            $include_categories = $request->get_param('include_categories');
            $exclude_categories = $request->get_param('exclude_categories');
            $order = $request->get_param('order');
            $posts_per_page = $request->get_param('posts_per_page');
            $include_categories = !empty($include_categories) ? explode(',', $include_categories) : array();
            $exclude_categories = !empty($exclude_categories) ? explode(',', $exclude_categories) : array();
            return cocoblocks_get_content('post', $include_categories, $exclude_categories, $order, $posts_per_page);
        },
        'permission_callback' => '__return_true',
    ));

    register_rest_route('cocoblocks/v1', '/get-posts/', array(
        'methods' => 'GET',
        'callback' => function (WP_REST_Request $request) {
            $include_categories = $request->get_param('include_categories');
            $exclude_categories = $request->get_param('exclude_categories');
            $order = $request->get_param('order');
            $posts_per_page = $request->get_param('posts_per_page');
            $exclude_post_id = $request->get_param('exclude_post_id'); // Recupera il parametro
            $include_categories = !empty($include_categories) ? explode(',', $include_categories) : array();
            $exclude_categories = !empty($exclude_categories) ? explode(',', $exclude_categories) : array();
            return cocoblocks_get_content('post', $include_categories, $exclude_categories, $order, $posts_per_page, $exclude_post_id);
        },
        'permission_callback' => '__return_true',
    ));
}

add_action('rest_api_init', 'cocoblocks_register_rest_routes');

// Registra l'endpoint REST API per il caricamento delle immagini
function register_custom_image_upload_endpoint()
{
    register_rest_route('custom-plugin/v1', '/upload-image/', array(
        'methods' => 'POST',
        'callback' => 'handle_image_upload',
        'permission_callback' => '__return_true', // Usa '__return_true' per testare; dovresti implementare controlli di autorizzazione
    ));
}
add_action('rest_api_init', 'register_custom_image_upload_endpoint');

// Gestisce il download e il salvataggio dell'immagine
function handle_image_upload(WP_REST_Request $request)
{
    $image_url = esc_url_raw($request->get_param('image_url'));

    // Verifica se l'URL dell'immagine è valido
    if (empty($image_url) || !filter_var($image_url, FILTER_VALIDATE_URL)) {
        return new WP_REST_Response(array('message' => 'URL immagine non valido.'), 400);
    }

    // Scarica l'immagine
    $response = wp_remote_get($image_url);

    if (is_wp_error($response)) {
        return new WP_REST_Response(array('message' => 'Errore durante il download dell\'immagine.'), 500);
    }

    $image_data = wp_remote_retrieve_body($response);

    if (empty($image_data)) {
        return new WP_REST_Response(array('message' => 'Immagine non valida.'), 400);
    }

    // Salva l'immagine nella directory uploads
    $upload_dir = wp_upload_dir();
    $image_name = basename($image_url);
    $image_path = $upload_dir['path'] . '/' . $image_name;

    $file_saved = file_put_contents($image_path, $image_data);

    if (false === $file_saved) {
        return new WP_REST_Response(array('message' => 'Errore durante il salvataggio dell\'immagine.'), 500);
    }

    // Inserisce l'immagine nella libreria media di WordPress
    $attachment_id = wp_insert_attachment(array(
        'guid'           => $upload_dir['url'] . '/' . $image_name,
        'post_mime_type' => wp_check_filetype($image_path)['type'],
        'post_title'     => sanitize_file_name($image_name),
        'post_content'   => '',
        'post_status'    => 'inherit'
    ), $image_path);

    if (is_wp_error($attachment_id)) {
        return new WP_REST_Response(array('message' => 'Errore durante l\'inserimento nella libreria media.'), 500);
    }

    require_once(ABSPATH . 'wp-admin/includes/image.php');
    $attach_data = wp_generate_attachment_metadata($attachment_id, $image_path);
    wp_update_attachment_metadata($attachment_id, $attach_data);

    return new WP_REST_Response(array(
        'attachment_id' => $attachment_id,
        'url' => wp_get_attachment_url($attachment_id),
    ), 200);
}



// Aggiungi la voce di menu
function register_slider_settings_page()
{
    add_menu_page(
        __('Slider Settings', 'your-text-domain'),    // Titolo della pagina
        __('Slider', 'your-text-domain'),            // Testo del menu
        'manage_options',                            // Capabilities richieste
        'slider-settings',                           // Slug della pagina
        'render_slider_settings_page',               // Callback per il rendering
        'dashicons-images-alt2',                     // Icona
        20                                          // Posizione nel menu
    );
}
add_action('admin_menu', 'register_slider_settings_page');

// Funzione di rendering della pagina
function render_slider_settings_page()
{
?>
    <div id="slider-settings-container"></div>
<?php
}

// Registra gli script necessari
function enqueue_slider_settings_scripts($hook)
{
    // Carica gli script solo nella pagina delle impostazioni
    if ($hook !== 'toplevel_page_slider-settings') {
        return;
    }

    wp_enqueue_script(
        'slider-settings',
        plugins_url('build/settings.js', __FILE__),  // Assicurati che il percorso sia corretto
        ['wp-element', 'wp-components', 'wp-api-fetch'],
        filemtime(plugin_dir_path(__FILE__) . 'build/settings.js'),
        true
    );
    wp_enqueue_style(
        'slider-settings-style',
        plugins_url('build/settings.css', __FILE__),  // Assicurati che il percorso sia corretto
        [],
        filemtime(plugin_dir_path(__FILE__) . 'build/settings.css')
    );

    wp_enqueue_style(
        'wp-components'
    );
}
add_action('admin_enqueue_scripts', 'enqueue_slider_settings_scripts');


// Registra l'endpoint REST per salvare le impostazioni
add_action('rest_api_init', function () {
    register_rest_route('wp/v2', '/slider-settings', array(
        'methods' => 'POST',
        'callback' => 'save_slider_settings',
        'permission_callback' => function () {
            return current_user_can('manage_options');
        }
    ));
});

function save_slider_settings($request)
{
    $params = $request->get_params();

    // Validazione dei dati
    if (!is_array($params)) {
        return new WP_Error('invalid_data', 'Invalid data format', array('status' => 400));
    }

    // Salva le impostazioni
    $result = update_option('slider_settings', $params);

    if ($result) {
        return rest_ensure_response([
            'success' => true,
            'message' => __('Settings saved successfully', 'your-text-domain')
        ]);
    } else {
        return new WP_Error('save_failed', 'Failed to save settings', array('status' => 500));
    }
}

// Registra l'endpoint REST per recuperare le impostazioni
add_action('rest_api_init', function () {
    register_rest_route('wp/v2', '/slider-settings', array(
        'methods' => 'GET',
        'callback' => 'get_slider_settings',
        'permission_callback' => function () {
            return current_user_can('manage_options');
        }
    ));
});

function get_slider_settings()
{
    $settings = get_option('slider_settings', [
        'autoplay' => true,
        'speed' => 3000,
        'primaryColor' => '#ab0052',
        // altre impostazioni di default...
    ]);

    return rest_ensure_response($settings);
}






/*----------------------------------------------------------------------------------
    Category Pattern
-----------------------------------------------------------------------------------*/

if (! function_exists('slider_register_block_pattern_category')) :

    function slider_register_block_pattern_category()
    {
        // Header
        register_block_pattern_category(
            'sf-slider',
            array(
                'label' => __('Slider', 'coco-one'),
                'description' => __('Descrizione Slider Categoria', 'coco-one'),
            )
        );
    }
endif;

add_action('init', 'slider_register_block_pattern_category');






function slider_register_block_patterns()
{

    if (class_exists('WP_Block_Patterns_Registry')) {

        require_once plugin_dir_path(__FILE__) . 'test.php';
    }
}
add_action('init', 'slider_register_block_patterns');
