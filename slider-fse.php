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

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

function create_block_slider_fse_block_init() {
	register_block_type( __DIR__ . '/build/slider' );
}
add_action( 'init', 'create_block_slider_fse_block_init' );

/*
function wp_kube_load_script() {
    wp_enqueue_script(
        'swiper',
       //plugins_url( 'swiper-bundle.min.js', __FILE__ ),
        [], // Dipendenze, se necessarie. Puoi anche lasciare vuoto []
        '', // Versione, se necessario
        true // Caricare nello footer (true) o nell'header (false)
    );
}
add_action( 'wp_enqueue_scripts', 'wp_kube_load_script' );


*/



function my_plugin_enqueue_admin_scripts() {
    // Registra e carica lo script principale di React
    wp_enqueue_script(
        'my-plugin-admin-script',
        plugins_url('admin.js', __FILE__), // Assicurati che il percorso del file JavaScript sia corretto
        array('wp-element', 'wp-components'), // Dipendenze: React e ReactDOM sono già inclusi in WordPress
        '1.0',
        true
    );
    
    // Passa variabili PHP a JavaScript
    wp_localize_script(
        'my-plugin-admin-script',
        'myPluginData',
        array(
            'apiUrl' => esc_url(rest_url('my-plugin/v1/options')),
            'nonce'  => wp_create_nonce('wp_rest')
        )
    );
}

function my_plugin_admin_menu() {
    add_menu_page(
        'My Plugin Settings',
        'My Plugin',
        'manage_options',
        'my-plugin-settings',
        'my_plugin_settings_page',
        'dashicons-admin-generic',
        20
    );
}

function my_plugin_settings_page() {
    ?>
    <div id="my-plugin-admin-app"></div>
    <?php
}

add_action('admin_enqueue_scripts', 'my_plugin_enqueue_admin_scripts');
add_action('admin_menu', 'my_plugin_admin_menu');



function my_plugin_register_rest_routes() {
    register_rest_route('my-plugin/v1', '/options', array(
        'methods' => 'POST',
        'callback' => 'my_plugin_save_options',
        'permission_callback' => function () {
            return current_user_can('manage_options');
        }
    ));
}

function my_plugin_save_options(WP_REST_Request $request) {
    $options = $request->get_json_params();
    
    if (isset($options['color'])) {
        update_option('my_plugin_color', sanitize_hex_color($options['color']));
    }
    if (isset($options['text'])) {
        update_option('my_plugin_text', sanitize_text_field($options['text']));
    }

    return new WP_REST_Response('Settings saved', 200);
}

add_action('rest_api_init', 'my_plugin_register_rest_routes');
