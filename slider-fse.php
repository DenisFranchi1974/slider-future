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
	//register_block_type( __DIR__ . '/build/slide' );
	
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