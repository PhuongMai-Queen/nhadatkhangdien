<?php

if ( ! defined( 'ABSPATH' ) ) {
  exit;
}

global $post, $product;
$columns           = apply_filters( 'woocommerce_product_thumbnails_columns', 4 );
$post_thumbnail_id = get_post_thumbnail_id( $post->ID );
$full_size_image   = wp_get_attachment_image_src( $post_thumbnail_id, 'full' );
$thumbnail_post    = get_post( $post_thumbnail_id );
$image_title       = $thumbnail_post->post_content;
$placeholder       = has_post_thumbnail() ? 'with-images' : 'without-images';
$wrapper_classes   = apply_filters( 'woocommerce_single_product_image_gallery_classes', array(
  'woocommerce-product-gallery',
  'woocommerce-product-gallery--' . $placeholder,
  'woocommerce-product-gallery--columns-' . absint( $columns ),
  'images',
) );

$slider_classes = array('product-gallery-slider','slider','slider-nav-circle','mb-half','slider-style-container','slider-nav-light','slider-load-first','no-overflow');
$rtl = 'false';
if(is_rtl()) $rtl = 'true';

?>
<?php do_action('flatsome_before_product_images'); ?>

<div class="product-images slider-wrapper relative mb-half has-hover <?php echo esc_attr( implode( ' ', array_map( 'sanitize_html_class', $wrapper_classes ) ) ); ?> " data-columns="<?php echo esc_attr( $columns ); ?>">
  <div class="absolute left right">
    <div class="container relative">
      <?php do_action('flatsome_sale_flash'); ?>
    </div>
  </div>

  <div class="custom-product-gallery woocommerce-product-gallery__wrapper slider
  slider-nav-dots-dashes-spaced slider-nav-simple slider-nav-large
  slider-nav-light slider-style-container is-draggable
  flickity-enabled <?php echo implode(' ', $slider_classes); ?>"
       data-flickity-options='{
            "cellAlign": "center",
            "imagesLoaded": true,
            "lazyLoad": 1,
            "freeScroll": false,
            "wrapAround": true,
            "autoPlay": 6000,
            "pauseAutoPlayOnHover" : true,
            "prevNextButtons": true,
            "contain" : true,
            "adaptiveHeight" : true,
            "dragThreshold" : 10,
            "percentPosition": true,
            "pageDots": true,
            "rightToLeft": false,
            "draggable": true,
            "selectedAttraction": 0.1,
            "parallax" : 0,
            "friction": 0.6,
              "rightToLeft": <?php echo $rtl; ?>
       }' tabindex="0">
    <?php
    $attributes = array(
      'title'             => $image_title,
      'data-large_image'        => $full_size_image[0],
      'data-large_image_width'  => $full_size_image[1],
      'data-large_image_height' => $full_size_image[2],
    );

    if ( has_post_thumbnail() ) {
      $html  = '<div data-thumb="' . get_the_post_thumbnail_url( $post->ID, 'shop_thumbnail' ) . '" class="first slide woocommerce-product-gallery__image"><a href="' . esc_url( $full_size_image[0] ) . '">';
      $html .= get_the_post_thumbnail( $post->ID, 'large', $attributes );
      $html .= '</a></div>';
    } else {
      $html  = '<div class="woocommerce-product-gallery__image--placeholder">';
      $html .= sprintf( '<img src="%s" alt="%s" class="wp-post-image" />', esc_url( wc_placeholder_img_src() ), esc_html__( 'Awaiting product image', 'woocommerce' ) );
      $html .= '</div>';
    }

    echo apply_filters( 'woocommerce_single_product_image_thumbnail_html', $html, get_post_thumbnail_id( $post->ID ) );

    do_action( 'woocommerce_product_thumbnails' );
    ?>
  </div>

  <div class="loading-spin centered dark"></div>

  <div class="absolute bottom left right">
    <div class="container relative image-tools">
      <div class="image-tools absolute bottom right z-3">
        <?php do_action('flatsome_product_image_tools_bottom'); ?>
        <?php do_action('flatsome_product_image_tools_top'); ?>
      </div>
    </div>
  </div>

</div>
<?php do_action('flatsome_after_product_images'); ?>
