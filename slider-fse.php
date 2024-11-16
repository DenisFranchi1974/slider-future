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

// Block
// Registra il blocco
function create_block_slider_fse_block_init() {
    register_block_type(__DIR__ . '/build/slider');
}
add_action('init', 'create_block_slider_fse_block_init');

// Codice amministrativo
if (is_admin()) {
// Admin Dashboard
function my_plugin_admin_menu() {
    add_menu_page(
        'My Plugin Settings', // Titolo della pagina
        'My Plugin', // Testo del menu
        'manage_options', // Capacità necessaria
        'my-plugin', // Slug della pagina
        'my_plugin_render_admin_page', // Funzione di callback
        'dashicons-admin-generic', // Icona del menu (opzionale)
        20 // Posizione nel menu
    );
}

add_action('admin_menu', 'my_plugin_admin_menu');

function my_plugin_render_admin_page() {
    echo '<div id="my-plugin-admin-page"></div>';
}

// Carica gli script e gli stili per la pagina di amministrazione
function my_plugin_enqueue_scripts($hook) {
    if ($hook !== 'toplevel_page_my-plugin') {
        return;
    }

    $dev_mode = true; // Imposta a false per la produzione

    if ($dev_mode) {
        wp_enqueue_script(
            'my-plugin-admin-js',
            'http://localhost:3000/static/js/bundle.js', // URL del bundle di sviluppo
            ['wp-element', 'wp-components', 'wp-api-fetch', 'wp-api', 'wp-i18n'],
            null,
            true // Carica nel footer
        );
    } else {
        $manifest_path = plugin_dir_path(__FILE__) . 'admin-dashboard/build/asset-manifest.json';
        $manifest = json_decode(file_get_contents($manifest_path), true);
        $main_js = ltrim($manifest['files']['main.js'], '/');
    

        wp_enqueue_script(
            'my-plugin-admin-js',
            plugin_dir_url(__FILE__) . 'admin-dashboard/build/' . $main_js,
            ['wp-element', 'wp-components', 'wp-api-fetch', 'wp-api', 'wp-i18n'],
            filemtime(plugin_dir_path(__FILE__) . 'admin-dashboard/build/' . $main_js),
            true
        );
    }

    // Recupera il colore iniziale dal database
    $initialColor = get_option('my_plugin_color', '#fff');


    wp_localize_script(
        'my-plugin-admin-js', // Usa lo stesso handle dello script registrato
        'myPluginData',
        array(
            'rest_url' => esc_url_raw(rest_url('my-plugin/v1/save-color')),
            'nonce' => wp_create_nonce('wp_rest'),
            'initialColor' => $initialColor, // Passa il colore iniziale al client
            'pluginUrl' => plugin_dir_url(__FILE__)
        )
    );
}

add_action('admin_enqueue_scripts', 'my_plugin_enqueue_scripts');

// Registra la rotta REST per salvare il colore
function my_plugin_register_rest_routes() {
    register_rest_route('my-plugin/v1', '/save-color', array(
        'methods' => 'POST',
        'callback' => 'my_plugin_save_color',
        'permission_callback' => function () {
            return current_user_can('manage_options');
        }
    ));
}

add_action('rest_api_init', 'my_plugin_register_rest_routes');

// Funzione per salvare il colore
function my_plugin_save_color(WP_REST_Request $request) {
    $color = sanitize_text_field($request->get_param('color'));

    if (empty($color)) {
        return new WP_Error('no_color', 'Colore non fornito', array('status' => 400));
    }

    update_option('my_plugin_color', $color);

    // Log per verificare il valore salvato
    error_log('Colore salvato: ' . $color);

    return rest_ensure_response(array('success' => true));
}

}



// Carica gli stili per il blocco
function my_plugin_enqueue_block_editor_assets() {
    $primary_color = get_option('my_plugin_color', '#ab0052'); // Colore di default se non impostato

    // Carica il file CSS del blocco
    wp_enqueue_style(
        'slider-fse-editor-style', // Handle del file CSS del blocco editor
        plugin_dir_url(__FILE__) . 'build/slider/style-index.css', // Percorso al file CSS del blocco
        array(), // Dipendenze
       
    );

    // Aggiungi gli stili inline
    wp_add_inline_style(
        'slider-fse-editor-style', // Usa lo stesso handle dello stile
        ":root { --primary-color: {$primary_color}; }"
    );
}
add_action('enqueue_block_assets', 'my_plugin_enqueue_block_editor_assets');


// Funzione per vedere se WooCommerce è attivo
if (!function_exists('is_plugin_active')) {
    include_once(ABSPATH . 'wp-admin/includes/plugin.php');
}


function cocoblocks_get_content($content_type = 'post', $include_categories = array(), $exclude_categories = array(), $order = 'ASC',$posts_per_page = 5) {
    // Controlla se WooCommerce è attivo quando viene richiesto il tipo di contenuto 'product'
    if ($content_type === 'product' && !is_plugin_active('woocommerce/woocommerce.php')) {
        return new WP_Error('woocommerce_inactive', __('WooCommerce non è attivo. Per favore installa e attiva WooCommerce per utilizzare questa funzione.', 'cocoblocks'));
    }

    // Configura la query per recuperare i post o i prodotti
    $args = array(
        'post_type' => $content_type, // Tipo di contenuto ('post' o 'product')
        'posts_per_page' => $posts_per_page, // Numero di post da visualizzare
        'orderby' => 'date',
        'order' => $order, // Ordine dinamico
        'post_status' => 'publish',
    );

  // Aggiungi il filtro per includere categorie se specificato
  if (!empty($include_categories)) {
    $args['category__in'] = array_map('intval', $include_categories);
}

// Aggiungi il filtro per escludere categorie se specificato
if (!empty($exclude_categories)) {
    $args['category__not_in'] = array_map('intval', $exclude_categories);
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

    return $post_data;
}

// Registra le rotte REST per i post e i prodotti
function cocoblocks_register_rest_routes() {
    // Rotta per i post
    register_rest_route('cocoblocks/v1', '/get-posts/', array(
        'methods' => 'GET',
        'callback' => function(WP_REST_Request $request) {
            $include_categories = $request->get_param('include_categories');
            $exclude_categories = $request->get_param('exclude_categories');
            $order = $request->get_param('order');
            $posts_per_page = $request->get_param('posts_per_page');
            $include_categories = !empty($include_categories) ? explode(',', $include_categories) : array();
            $exclude_categories = !empty($exclude_categories) ? explode(',', $exclude_categories) : array();
            return cocoblocks_get_content('post', $include_categories, $exclude_categories,$order,$posts_per_page);
        },
        'permission_callback' => '__return_true',
    ));

    // Rotta per i prodotti di WooCommerce
    register_rest_route('cocoblocks/v1', '/get-products/', array(
        'methods' => 'GET',
        'callback' => function(WP_REST_Request $request) {
            $include_categories = $request->get_param('include_categories');
            $exclude_categories = $request->get_param('exclude_categories');
            $order = $request->get_param('order');
            $posts_per_page = $request->get_param('posts_per_page');
            $include_categories = !empty($include_categories) ? explode(',', $include_categories) : array();
            $exclude_categories = !empty($exclude_categories) ? explode(',', $exclude_categories) : array();
            return cocoblocks_get_content('product', $include_categories, $exclude_categories,$order,$posts_per_page);
        },
        'permission_callback' => '__return_true',
    ));
}

add_action('rest_api_init', 'cocoblocks_register_rest_routes');


// Registra l'endpoint REST API for image upload
// Registra l'endpoint REST API per il caricamento delle immagini
function register_custom_image_upload_endpoint() {
    register_rest_route('custom-plugin/v1', '/upload-image/', array(
        'methods' => 'POST',
        'callback' => 'handle_image_upload',
        'permission_callback' => '__return_true', // Usa '__return_true' per testare; dovresti implementare controlli di autorizzazione
    ));
}
add_action('rest_api_init', 'register_custom_image_upload_endpoint');

// Gestisce il download e il salvataggio dell'immagine
function handle_image_upload(WP_REST_Request $request) {
    $image_url = esc_url_raw( $request->get_param('image_url') );

    // Verifica se l'URL dell'immagine è valido
    if ( empty( $image_url ) || !filter_var( $image_url, FILTER_VALIDATE_URL ) ) {
        return new WP_REST_Response( array( 'message' => 'URL immagine non valido.' ), 400 );
    }

    // Scarica l'immagine
    $response = wp_remote_get($image_url);

    if ( is_wp_error( $response ) ) {
        return new WP_REST_Response( array( 'message' => 'Errore durante il download dell\'immagine.' ), 500 );
    }

    $image_data = wp_remote_retrieve_body($response);

    if ( empty( $image_data ) ) {
        return new WP_REST_Response( array( 'message' => 'Immagine non valida.' ), 400 );
    }

    // Salva l'immagine nella directory uploads
    $upload_dir = wp_upload_dir();
    $image_name = basename($image_url);
    $image_path = $upload_dir['path'] . '/' . $image_name;

    $file_saved = file_put_contents($image_path, $image_data);

    if ( false === $file_saved ) {
        return new WP_REST_Response( array( 'message' => 'Errore durante il salvataggio dell\'immagine.' ), 500 );
    }

    // Inserisce l'immagine nella libreria media di WordPress
    $attachment_id = wp_insert_attachment(array(
        'guid'           => $upload_dir['url'] . '/' . $image_name,
        'post_mime_type' => wp_check_filetype( $image_path )['type'],
        'post_title'     => sanitize_file_name($image_name),
        'post_content'   => '',
        'post_status'    => 'inherit'
    ), $image_path);

    if ( is_wp_error( $attachment_id ) ) {
        return new WP_REST_Response( array( 'message' => 'Errore durante l\'inserimento nella libreria media.' ), 500 );
    }

    require_once(ABSPATH . 'wp-admin/includes/image.php');
    $attach_data = wp_generate_attachment_metadata($attachment_id, $image_path);
    wp_update_attachment_metadata($attachment_id, $attach_data);

    return new WP_REST_Response( array(
        'attachment_id' => $attachment_id,
        'url' => wp_get_attachment_url( $attachment_id ),
    ), 200 );
}
