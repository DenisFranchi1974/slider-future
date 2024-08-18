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

function create_block_slider_fse_block_init() {
    register_block_type(__DIR__ . '/build/slider');
}
add_action('init', 'create_block_slider_fse_block_init');

add_action('admin_menu', 'my_plugin_admin_menu');

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

function my_plugin_render_admin_page() {
    echo '<div id="my-plugin-admin-page"></div>';
}

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

function cocoblocks_get_content($content_type = 'post') {
    // Controlla se WooCommerce è attivo quando viene richiesto il tipo di contenuto 'product'
    if ($content_type === 'product' && !is_plugin_active('woocommerce/woocommerce.php')) {
        return new WP_Error('woocommerce_inactive', __('WooCommerce non è attivo. Per favore installa e attiva WooCommerce per utilizzare questa funzione.', 'cocoblocks'));
    }

    // Configura la query per recuperare i post o i prodotti
    $args = array(
        'post_type' => $content_type, // Tipo di contenuto ('post' o 'product')
        'posts_per_page' => -1, // Recupera tutti i post/prodotti
    );

    $posts = get_posts($args);

    // Se non ci sono post o prodotti, restituisci un errore
    if (empty($posts)) {
        return new WP_Error('no_content', __('Nessun contenuto trovato.', 'cocoblocks'));
    }

    $post_data = array();

    foreach ($posts as $post) {
        $post_data[] = array(
            'id' => $post->ID,
            'title' => get_the_title($post->ID),
            'excerpt' => get_the_excerpt($post->ID),
            'image' => get_the_post_thumbnail_url($post->ID, 'full'),
            'link' => get_permalink($post->ID),
        );
    }

    return $post_data;
}

function cocoblocks_register_rest_routes() {
    // Rotta per i post
    register_rest_route('cocoblocks/v1', '/get-posts/', array(
        'methods' => 'GET',
        'callback' => function() {
            $content = cocoblocks_get_content('post');
            if (is_wp_error($content)) {
                return rest_ensure_response(array(
                    'error' => true,
                    'message' => $content->get_error_message()
                ));
            }
            return rest_ensure_response($content);
        },
    ));

    // Rotta per i prodotti di WooCommerce
    register_rest_route('cocoblocks/v1', '/get-products/', array(
        'methods' => 'GET',
        'callback' => function() {
            $content = cocoblocks_get_content('product');
            if (is_wp_error($content)) {
                return rest_ensure_response(array(
                    'error' => true,
                    'message' => $content->get_error_message()
                ));
            }
            return rest_ensure_response($content);
        },
    ));
}

add_action('rest_api_init', 'cocoblocks_register_rest_routes');














function cocoblocks_slider_shortcode($atts) {
    // Estrai gli attributi dallo shortcode
    $atts = shortcode_atts(array(
        'content_type' => 'post-based', // Default value
    ), $atts, 'cocoblocks_slider');

    // Recupera i contenuti in base al tipo specificato
    $content = cocoblocks_get_content($atts['content_type']);

    if (is_wp_error($content)) {
        return '<p>' . esc_html($content->get_error_message()) . '</p>';
    }

    if (empty($content)) {
        return '<p>' . __('Nessun contenuto trovato.', 'cocoblocks') . '</p>';
    }

    // Iniziamo a costruire il markup HTML della slider
    ob_start();
    ?>
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <?php foreach ($content as $item): ?>
                <div class="swiper-slide">
                    <?php if (!empty($item['image'])) : ?>
                        <img src="<?php echo esc_url($item['image']); ?>" alt="<?php echo esc_attr($item['title']); ?>" />
                    <?php endif; ?>
                    <?php if (!empty($item['title'])) : ?>
                        <h3><?php echo esc_html($item['title']); ?></h3>
                    <?php endif; ?>
                    <?php if (!empty($item['excerpt']) && $atts['content_type'] === 'post-based') : ?>
                        <p><?php echo esc_html($item['excerpt']); ?></p>
                    <?php endif; ?>
                    <?php if (!empty($item['link'])) : ?>
                        <a href="<?php echo esc_url($item['link']); ?>">
                            <?php echo $atts['content_type'] === 'woocommerce-based' ? __('View Product', 'cocoblocks') : __('Read More', 'cocoblocks'); ?>
                        </a>
                    <?php endif; ?>
                </div>
            <?php endforeach; ?>
        </div>
        <!-- Aggiungi i pulsanti di navigazione e la paginazione di Swiper se necessario -->
    </div>
    <?php
    return ob_get_clean();
}

// Registra lo shortcode
add_shortcode('cocoblocks_slider', 'cocoblocks_slider_shortcode');
