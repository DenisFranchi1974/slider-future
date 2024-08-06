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

    $dev_mode = true; // Imposta a true durante lo sviluppo poi a false per la produzione

    if ($dev_mode) {
        // Carica i file direttamente dal server di sviluppo di React
        wp_enqueue_script(
            'my-plugin-admin-js',
            'http://localhost:3000/static/js/bundle.js', // URL del bundle di sviluppo
            ['wp-element', 'wp-components', 'wp-api-fetch','wp-api'],
            null,
            true // Carica nel footer
        );

       
    } else {
        // Carica i file dalla build di produzione
        wp_enqueue_script(
            'my-plugin-admin-js',
            plugin_dir_url(__FILE__) . 'build/static/js/main.js',
            ['wp-element', 'wp-components', 'wp-api-fetch','wp-api'],
            filemtime(plugin_dir_path(__FILE__) . 'build/static/js/main.js'),
            true
        );

       
    }

    wp_localize_script('my-plugin-admin-js', 'MyPluginSettings', [
        'nonce' => wp_create_nonce('my_plugin_nonce'),
        'settings' => get_option('my_plugin_settings')
    ]);
}

add_action('admin_enqueue_scripts', 'my_plugin_enqueue_scripts');









