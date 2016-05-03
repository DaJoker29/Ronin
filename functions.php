<?php
/**
 * Ronin theme setup
 *
 * @package  ronin
 */
if( ! function_exists( 'ronin_setup') ) :

function ronin_setup() {

  add_theme_support( 'title-tag');
}
endif;
add_action( 'after_setup_theme', 'ronin_setup');

/**
 * Add scripts and styles to theme
 */
function add_theme_scripts() {
  /* Styles */
  wp_enqueue_style( 'bootstrap', get_template_directory_uri() . '/css/bootstrap.min.css', array ('jquery') );
  wp_enqueue_style( 'freelancer', get_template_directory_uri() . '/css/freelancer.css', array('bootstrap') );
  wp_enqueue_style( 'font_awesome', get_template_directory_uri() . '/font-awesome/css/font-awesome.min.css' );
  wp_enqueue_style( 'montserrat', 'https://fonts.googleapis.com/css?family=Montserrat:400,700' );
  wp_enqueue_style( 'lato', 'https://fonts.googleapis.com/css?family=Lato:400,700,400italic,700italic' );

  /* Scripts */
  wp_enqueue_script( 'jquery' );
  wp_enqueue_script( 'jquery-easing', 'http://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.3/jquery.easing.min.js', array('jquery') );
  wp_enqueue_script( 'bootstrap', get_template_directory_uri() . '/js/bootstrap.min.js', array('jquery') );
  wp_enqueue_script( 'classie', get_template_directory_uri() . '/js/classie.js' );
  wp_enqueue_script( 'cbpAnimatedHeader', get_template_directory_uri() . '/js/cbpAnimatedHeader.min.js' );
  wp_enqueue_script( 'jqBootstrapValidation', get_template_directory_uri() . '/js/jqBootstrapValidation.js', array('jquery', 'bootstrap') );
  wp_enqueue_script( 'contact_me', get_template_directory_uri() . '/js/contact_me.js', array( 'jquery' ) );
  wp_enqueue_script( 'freelancer', get_template_directory_uri() . '/js/freelancer.js', array( 'jquery' ) );
}
add_action( 'wp_enqueue_scripts', 'add_theme_scripts' );
?>