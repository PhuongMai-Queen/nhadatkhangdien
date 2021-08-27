<?php
/**
 * The template for displaying product content within loops.
 *
 * Override this template by copying it to yourtheme/woocommerce/content-product.php
 *
 * @author 		WooThemes
 * @package 	WooCommerce/Templates
 * @version     3.0.0
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

global $product;

// Ensure visibility
if ( empty( $product ) || ! $product->is_visible() ) {
  return;
}

// Check stock status
$out_of_stock = get_post_meta($post->ID, '_stock_status',true) == 'outofstock';

// Extra post classes
$classes = array();
$classes[] = 'product-small';
$classes[] = 'col';
$classes[] = 'has-hover';

if($out_of_stock) $classes[] = 'out-of-stock';

?>

<div <?php post_class( $classes ); ?>>
	<div class="col-inner">
	<?php do_action( 'woocommerce_before_shop_loop_item' ); ?>
	<div class="product-small box <?php echo flatsome_product_box_class(); ?>">
		<div class="box-image">
			<div class="<?php echo flatsome_product_box_image_class(); ?>">
				<a href="<?php echo get_the_permalink(); ?>">
					<?php
						/**
						 *
						 * @hooked woocommerce_get_alt_product_thumbnail - 11
						 * @hooked woocommerce_template_loop_product_thumbnail - 10
						 */
						do_action( 'flatsome_woocommerce_shop_loop_images' );
					?>
				</a>
			</div>
			<div class="image-tools is-small top right show-on-hover">
        <?php
          $label_vi_tri_du_an = get_field('label_vi_tri_du_an');
          if ($label_vi_tri_du_an) {
            echo '<div class="div_khu_vuc_small">'.$label_vi_tri_du_an.'</div>';
          }
        ?>
				<?php do_action('flatsome_product_box_tools_top'); ?>
			</div>
			<div class="image-tools is-small hide-for-small bottom left show-on-hover">
				<?php do_action('flatsome_product_box_tools_bottom'); ?>
			</div>
			<div class="image-tools <?php echo flatsome_product_box_actions_class(); ?>">
				<?php  do_action('flatsome_product_box_actions'); ?>
			</div>
			<?php if($out_of_stock) { ?><div class="out-of-stock-label"><?php _e( 'Out of stock', 'woocommerce' ); ?></div><?php }?>
		</div><!-- box-image -->

		<div class="box-text <?php echo flatsome_product_box_text_class(); ?>">
			<?php
				do_action( 'woocommerce_before_shop_loop_item_title' );

				echo '<div class="title-wrapper">';
				do_action( 'woocommerce_shop_loop_item_title' );
				echo '</div>';

				//echo '<div class="price-wrapper">';
				//do_action( 'woocommerce_after_shop_loop_item_title' );
				//echo '</div>';
                $so_phong = get_field('so_phong');
                $toilet = get_field('toilet');
                $dien_tich = get_field('dien_tich');
                $so_tien = get_field('so_tien');
                $vitri = get_field('location');

                $info = '<div class="kd-info clearfix">';
                if ($vitri) {
                    $info .= '<div class="kd-address">'.$vitri.'</div>';
                }
                $info .= '<div class="info-meta">';
                if ($so_phong) {
                    $info .= '<span class="bed">'.get_fs_icon("fa fa-bed").'&nbsp;'.$so_phong.'</span>';
                }
                if ($toilet) {
                    $info .= '<span class="bath">'.get_fs_icon("fa fa-bath").'&nbsp;'.$toilet.'</span>';
                }
                if ($dien_tich) {
                    $info .= '<span class="area">'.get_fs_icon("fa fa-area-chart").'&nbsp;'.$dien_tich.'</span>';
                }
                $info .= '</div>';
                if ($so_tien) {
                    $info .= '<div class="kd-price">'.get_fs_icon("fa fa-usd").'&nbsp;'.$so_tien.'</div>';
                }

			    $info .= '<div class="kd-contact"><span class="hidden-phone contact-phone btn-blue-7" data-phone="0911123055">'. hidden_phone('0911123055') .' · Hiện số</span></div>';

                $info .= '</div>';

				echo '<div class="bds-info">'.$info.'</div>';

				do_action( 'flatsome_product_box_after' );
			?>
		</div><!-- box-text -->
	</div><!-- box -->
	<?php do_action( 'woocommerce_after_shop_loop_item' ); ?>
	</div><!-- .col-inner -->
</div><!-- col -->
