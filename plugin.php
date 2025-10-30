<?php

/**
 * Plugin Name: Dataviews DataForm Examples
 * Description: Examples of using DataViews with DataForm.
 * Version: 1.0.1
 * Requires at least: 6.1
 * Requires PHP: 7.4
 * Author: JuanMa Garrido
 * License: GPLv2 or later
 * License URI: https://www.gnu.org/licenses/old-licenses/gpl-2.0.html
 * Text Domain: dataviews-dataform-plugin
 *
 * @package dataviews-dataform-examples
 */

defined( 'ABSPATH' ) || exit;

add_action( 'admin_menu', 'dataviews_dataform_examples_admin_menu' );

/**
 * Creates a new root level menu option for DataViews & DataForm Examples with submenus.
 */
function dataviews_dataform_examples_admin_menu() {
	// Add main menu
	add_menu_page(
		__( 'DataViews & DataForm Examples', 'dataviews-dataform-plugin' ),
		__( 'DataViews & DataForm Examples', 'dataviews-dataform-plugin' ),
		'manage_options',
		'dataviews-dataform-examples',
		'dataviews_dataform_examples_main_page',
		'dashicons-database',
		30
	);

	// Add DataViews submenu
	add_submenu_page(
		'dataviews-dataform-examples',
		__( 'DataViews', 'dataviews-dataform-plugin' ),
		__( 'DataViews', 'dataviews-dataform-plugin' ),
		'manage_options',
		'dataviews-dataform-examples', // Same slug as parent to replace the first submenu item
		'dataviews_dataform_examples_main_page'
	);

	// Add DataViewsPicker submenu
	add_submenu_page(
		'dataviews-dataform-examples',
		__( 'DataViewsPicker', 'dataviews-dataform-plugin' ),
		__( 'DataViewsPicker', 'dataviews-dataform-plugin' ),
		'manage_options',
		'dataviews-picker',
		'dataviews_dataform_examples_picker_page'
	);

	// Add DataForm submenu
	add_submenu_page(
		'dataviews-dataform-examples',
		__( 'DataForm', 'dataviews-dataform-plugin' ),
		__( 'DataForm', 'dataviews-dataform-plugin' ),
		'manage_options',
		'dataform-examples',
		'dataviews_dataform_examples_dataform_page'
	);
}

/**
 * Render the DataViews page
 */
function dataviews_dataform_examples_main_page() {
	printf(
		'<h1>%s</h1><div id="dataviews-examples-root" data-page="dataviews"></div>',
		esc_html__( 'DataViews Examples', 'dataviews-dataform-plugin' )
	);
}

/**
 * Render the DataViewsPicker page
 */
function dataviews_dataform_examples_picker_page() {
	printf(
		'<h1>%s</h1><div id="dataviews-examples-root" data-page="dataviews-picker"></div>',
		esc_html__( 'DataViewsPicker Examples', 'dataviews-dataform-plugin' )
	);
}

/**
 * Render the DataForm page
 */
function dataviews_dataform_examples_dataform_page() {
	printf(
		'<h1>%s</h1><div id="dataviews-examples-root" data-page="dataform"></div>',
		esc_html__( 'DataForm Examples', 'dataviews-dataform-plugin' )
	);
}

add_action( 'admin_enqueue_scripts', 'dataviews_dataform_examples_admin_enqueue_assets' );

/**
 * Enqueues JS and CSS files for our custom DataViews & DataForm Examples pages.
 *
 * @param string $hook_suffix The current admin page.
 */
function dataviews_dataform_examples_admin_enqueue_assets( $hook_suffix ) {
	// Load on all our plugin pages
	$allowed_pages = array(
		'toplevel_page_dataviews-dataform-examples',
		'dataviews-dataform-examples_page_dataviews-picker',
		'dataviews-dataform-examples_page_dataform-examples',
	);

	if ( ! in_array( $hook_suffix, $allowed_pages, true ) ) {
		return;
	}

	$dir = plugin_dir_path( __FILE__ );
	$url = plugin_dir_url( __FILE__ );

	$asset_file = $dir . 'build/index.asset.php';

	if ( ! file_exists( $asset_file ) ) {
		return;
	}

	$asset = include $asset_file;

	wp_enqueue_script(
		'dataviews-dataform-script',
		$url . 'build/index.js',
		$asset['dependencies'],
		$asset['version'],
		array(
			'in_footer' => true,
		)
	);

	wp_enqueue_style(
		'dataviews-dataform-styles',
		$url . 'build/style-index.css',
		array( 'wp-components' ),
		$asset['version'],
	);
}
