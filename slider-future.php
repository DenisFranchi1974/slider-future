<?php

/**
 * Plugin Name:       Slider Future
 * Description:       The ultimate Gutenberg block for creating beautifully designed and animated web content.
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           1.0.0
 * Author:            Franchi Web Design
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       slider-future
 *
 * @package CreateBlock
 */

if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly.
}

// Registra il blocco
function slider_future_init()
{
    register_block_type(__DIR__ . '/build');
}
add_action('init', 'slider_future_init');


// Funzione per vedere se WooCommerce è attivo
if (!function_exists('is_plugin_active')) {
    include_once(ABSPATH . 'wp-admin/includes/plugin.php');
}

function slider_future_get_content($content_type = 'post', $include_categories = array(), $exclude_categories = array(), $order = 'ASC', $posts_per_page = 5, $exclude_post_id = null, $specific_posts = array(), $latest_posts = false)
{
    // Controlla se WooCommerce è attivo quando viene richiesto il tipo di contenuto 'product'
    if ($content_type === 'product' && !is_plugin_active('woocommerce/woocommerce.php')) {
        return new WP_Error('woocommerce_inactive', __('WooCommerce is not active. Please install and activate WooCommerce to use this feature.', 'slider-future'));
    }

    // Genera una chiave di cache unica basata sui parametri della query
    $cache_key = 'slider_future_' . md5(serialize(func_get_args()));
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

    // Se latest_posts è true, ignora gli altri filtri e recupera solo gli ultimi post
    if ($latest_posts) {
        $args['orderby'] = 'date';
        $args['order'] = $order;
    } else {
        // Includi post specifici se specificato
        if (!empty($specific_posts)) {
            $args['post__in'] = array_map('intval', $specific_posts);
        } else {
            // Aggiungi il filtro per includere categorie se specificato
            if (!empty($include_categories)) {
                $args['category__in'] = array_map('intval', $include_categories);
            }

            // Aggiungi il filtro per escludere categorie se specificato
            if (!empty($exclude_categories)) {
                $args['category__not_in'] = array_map('intval', $exclude_categories);
            }
        }
    }

    // Escludi il post corrente se specificato
    if (!empty($exclude_post_id)) {
        $args['post__not_in'] = array($exclude_post_id);
    }

    $posts = get_posts($args);

    // Se non ci sono post o prodotti, restituisci un errore
    if (empty($posts)) {
        return new WP_Error('no_content', __('No content found.', 'slider-future'));
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
function slider_future_register_rest_routes()
{
    // Rotta per i post
    register_rest_route('slider_future/v1', '/get-posts/', array(
        'methods' => 'GET',
        'callback' => function (WP_REST_Request $request) {
            $include_categories = $request->get_param('include_categories');
            $exclude_categories = $request->get_param('exclude_categories');
            $order = $request->get_param('order');
            $posts_per_page = $request->get_param('posts_per_page');
            $exclude_post_id = $request->get_param('exclude_post_id'); // Recupera il parametro
            $specific_posts = $request->get_param('specific_posts'); // Recupera il parametro
            $latest_posts = $request->get_param('latest_posts') === 'true';
            $include_categories = !empty($include_categories) ? explode(',', $include_categories) : array();
            $exclude_categories = !empty($exclude_categories) ? explode(',', $exclude_categories) : array();
            $specific_posts = !empty($specific_posts) ? explode(',', $specific_posts) : array();

            return slider_future_get_content('post', $include_categories, $exclude_categories, $order, $posts_per_page, $exclude_post_id, $specific_posts, $latest_posts);
        },
        'permission_callback' => '__return_true',
    ));
}

add_action('rest_api_init', 'slider_future_register_rest_routes');


// Registra l'endpoint REST API per il caricamento delle immagini
function slider_future_register_custom_image_upload_endpoint()
{
    register_rest_route('custom-plugin/v1', '/upload-image/', array(
        'methods' => 'POST',
        'callback' => 'slider_future_handle_image_upload',
        'permission_callback' => '__return_true', // Usa '__return_true' per testare; dovresti implementare controlli di autorizzazione
    ));
}
add_action('rest_api_init', 'slider_future_register_custom_image_upload_endpoint');

// Gestisce il download e il salvataggio dell'immagine
function slider_future_handle_image_upload(WP_REST_Request $request)
{
    $image_url = esc_url_raw($request->get_param('image_url'));

    // Verifica se l'URL dell'immagine è valido
    if (empty($image_url) || !filter_var($image_url, FILTER_VALIDATE_URL)) {
        return new WP_REST_Response(array('message' => __('Invalid image URL.', 'slider-future')), 400);
    }

    // Scarica l'immagine
    $response = wp_remote_get($image_url);

    if (is_wp_error($response)) {
        return new WP_REST_Response(array('message' => __('Error downloading image.', 'slider-future')), 500);
    }

    $image_data = wp_remote_retrieve_body($response);

    if (empty($image_data)) {
        return new WP_REST_Response(array('message' => __('Invalid image.', 'slider-future')), 400);
    }

    // Salva l'immagine nella directory uploads
    $upload_dir = wp_upload_dir();
    $image_name = basename($image_url);
    $image_path = $upload_dir['path'] . '/' . $image_name;

    $file_saved = file_put_contents($image_path, $image_data);

    if (false === $file_saved) {
        return new WP_REST_Response(array('message' => __('Error saving image.', 'slider-future')), 500);
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
        return new WP_REST_Response(array('message' => __('Error adding to media library.', 'slider-future')), 500);
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
function slider_future_register_slider_settings_page()
{
    add_menu_page(
        __('Slider Settings', 'slider-future'),
        __('Slider Future', 'slider-future'),
        'manage_options',
        'slider-settings',
        'slider_future_render_slider_settings_page',
        'dashicons-images-alt2',
        20
    );
}
add_action('admin_menu', 'slider_future_register_slider_settings_page');

// Funzione di rendering della pagina
function slider_future_render_slider_settings_page()
{
?>
    <div id="slider-settings-container"></div>
<?php
}

// Registra gli script necessari
function slider_future_enqueue_slider_settings_scripts($hook)
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
add_action('admin_enqueue_scripts', 'slider_future_enqueue_slider_settings_scripts');


// Registra l'endpoint REST per salvare le impostazioni
add_action('rest_api_init', function () {
    register_rest_route('wp/v2', '/slider-settings', array(
        'methods' => 'POST',
        'callback' => 'slider_future_save_slider_settings',
        'permission_callback' => function () {
            return current_user_can('manage_options');
        }
    ));
});

function slider_future_save_slider_settings($request)
{
    $params = $request->get_params();

    // Validazione dei dati
    if (!is_array($params)) {
        return new WP_Error('invalid_data', __('Invalid data format', 'slider-future'), array('status' => 400));
    }

    // Salva le impostazioni
    $result = update_option('slider_settings', $params);

    if ($result) {
        return rest_ensure_response([
            'success' => true,
            'message' => __('Settings saved successfully', 'slider-future')
        ]);
    } else {
        return new WP_Error('save_failed', __('Failed to save settings', 'slider-future'), array('status' => 500));
    }
}

// Registra l'endpoint REST per recuperare le impostazioni
add_action('rest_api_init', function () {
    register_rest_route('wp/v2', '/slider-settings', array(
        'methods' => 'GET',
        'callback' => 'slider_future_get_slider_settings',
        'permission_callback' => function () {
            return current_user_can('manage_options');
        }
    ));
});

function slider_future_get_slider_settings()
{
    $settings = get_option('slider_settings', [
        'autoplay' => true,
        'speed' => 3000,
        'primaryColor' => '#ab0052',
        // altre impostazioni di default...
    ]);

    return rest_ensure_response($settings);
}
