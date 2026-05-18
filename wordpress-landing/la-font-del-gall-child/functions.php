<?php
/**
 * La Font del Gall Child Theme — functions.php
 * Encola el tema padre + Google Fonts para la landing.
 */

add_action( 'wp_enqueue_scripts', 'lafont_child_enqueue_styles' );

function lafont_child_enqueue_styles() {
    // Hoja de estilos del tema padre (Twenty Twenty-Two)
    wp_enqueue_style(
        'parent-style',
        get_template_directory_uri() . '/style.css'
    );

    // Google Fonts — Playfair Display + Lato
    wp_enqueue_style(
        'lafont-google-fonts',
        'https://fonts.googleapis.com/css2?family=Lato:wght@300;400;600&family=Playfair+Display:wght@700&display=swap',
        [],
        null
    );
}
