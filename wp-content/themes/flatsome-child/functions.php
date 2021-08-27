<?php
// Add custom Theme Functions here
function get_fs_icon($name){
    return '<i class="'.$name.'" aria-hidden="true"></i>';
}

function enqueue_our_required_stylesheets(){
    wp_enqueue_style('font-awesome', get_stylesheet_directory_uri() . '/assets/css/font-awesome.min.css', array(), '4.7.0', 'all');
}
add_action('wp_enqueue_scripts','enqueue_our_required_stylesheets');

function devvn_ux_builder_element(){
    add_ux_builder_shortcode('ux_product_info', array(
        'name'      => __('Product Info'),
        'category'  => __('Content'),
        'thumbnail' => get_template_directory_uri() . '/inc/builder/shortcodes/thumbnails/blog_posts.svg',
    ));
}
add_action('ux_builder_setup', 'devvn_ux_builder_element');

function flatsome_product_info_shortcode( $atts ) {
    if( is_product() ) {
        wp_enqueue_script('custom-product-page.js', get_stylesheet_directory_uri().'/assets/js/custom-product-page.js', array('jquery'), filemtime(get_stylesheet_directory() . '/assets/js/custom-product-page.js'),true);
    }

    extract( shortcode_atts( array(
        '_id' => 'product-'.rand(),
    ), $atts ) );


    $info = "";
    $so_phong = get_field('so_phong');
    $toilet = get_field('toilet');
    $huong_nha = get_field('huong_nha');
    $dien_tich = get_field('dien_tich');
    $so_tien = get_field('so_tien');
    $tien_ich = get_field('tien_ich');
    $nha_phat_trien = get_field('nha_phat_trien');
    $vitri = get_field('location');
    $thoi_gian = get_field('thoi_gian_ban');
    $dac_diem_nha_dat = get_field('dac_diem_nha_dat');
    $giay_to_phap_ly = get_field('giay_to_phap_ly');
    $loai_can_ho = get_field('loai_can_ho');

    $top_info = '<div class="top-info row"><ul>';
    if( $so_phong ) {
        $top_info .= '<li><i class="fa fa-bed" aria-hidden="true"></i>&nbsp;<span>'.$so_phong.'</span></li>';
        $info .= '<div class="col medium-6">Phòng ngủ: <span>'.$so_phong.'</span></div>';
    }
    if( $toilet ) {
        $top_info .= '<li><i class="fa fa-bath" aria-hidden="true"></i>&nbsp;<span>'.$toilet.'</span></li>';
        $info .= '<div class="col medium-6">Nhà tắm: <span>'.$toilet.'</span></div>';
    }
    if( $huong_nha ) {
        $top_info .= '<li><i class="fa fa-compass" aria-hidden="true"></i>&nbsp;<span>'.$huong_nha.'</span></li>';
    }
    if( $dien_tich ) {
        $top_info .= '<li><i class="fa fa-area-chart" aria-hidden="true"></i>&nbsp;<span>'.$dien_tich.'</span></li>';
        $info .= '<div class="col medium-6">Diện tích: <span>'.$dien_tich.'</span></div>';
    }
    if( $so_tien ) {
        $top_info .= '<li class="red"><i class="fa fa-usd" aria-hidden="true"></i>&nbsp;<span>'.$so_tien.'</span></li>';
        $info .= '<div class="col medium-6">Giá bán: <span>'.$so_tien.'</span></div>';
    }
    $top_info .= '</ul></div>';

    $tienich = "";
    if ($tien_ich) {
        $tienich .= '<ul class="tienich">';
        $tien_ich = explode(',', $tien_ich);
        if (is_array($tien_ich)) {
            foreach ($tien_ich as $val) {
                $tienich .= '<li>'.trim($val).'</li>';
            }
        } else {
            $tienich .= '<li>'.$tien_ich.'</li>';
        }
        $tienich .= '</ul>';
    }

    if ($vitri) {
        $location = $vitri;
    } else {
        $location = 'Đang cập nhật';
    }

    if ($loai_can_ho) {
        $info .= '<div class="col medium-6">Loại căn hộ: <span>'.$loai_can_ho.'</span></div>';
    }

    if ($giay_to_phap_ly) {
        $info .= '<div class="col medium-6">Giấy tờ pháp lý: <span>'.$giay_to_phap_ly.'</span></div>';
    }

    if ($dac_diem_nha_dat) {
        $info .= '<div class="col medium-6">Đặc điểm nhà/đất: <span>'.$dac_diem_nha_dat.'</span></div>';
    }

    if ($nha_phat_trien) {
        $info .= '<div class="col medium-6">Dự án: <span>'.$nha_phat_trien.'</span></div>';
    }

    if ($thoi_gian) {
        $info .= '<div class="col medium-6">Thời gian bắt đầu bán: <span>'.$thoi_gian.'</span></div>';
    }

    $content = '<div class="product-custom-info" id="'. $_id.'">
        '.$top_info.'
        <div class="clearfix"></div>
        <div class="gap-element" style="display:block;height:auto;padding-top:10px"></div>
        <div class="thongtinchung view-more-desc">
            <h3 class="bds-title">Tổng quan:</h3>
            '.do_shortcode('[ux_product_excerpt]').'
            <div class="clearfix"></div>
        </div>
        <p><a href="javascript:void(0);" class="view-more-cyan" data-expanded-text="Thu gọn" data-text="Xem thêm"><span>Xem thêm</span><i class="fa fa-angle-down" aria-hidden="true"></i></a></p>
        <div class="clearfix"></div>
        <div class="gap-element" style="display:block;height:auto;padding-top:10px"></div>
        <div class="ttcb row">
          <h3 class="bds-title">Thông tin cơ bản:</h3>
          '.$info.'
        </div>
        <div class="clearfix"></div>
        <div class="gap-element" style="display:block;height:auto;padding-top:20px"></div>
        <div class="ttt-bds">
            <h3 class="bds-title location">Vị trí: <span style="text-transform:none;font-weight:400;font-size:16px!important;">'.$location.'</span></h3>';
            if (!empty($tienich)) {
                $content .= '<button class="accordion">Tiện nghi:</button><div class="panel" style="display: none;">' . $tienich . '</div>';
            }
      $content .= '</div><div class="is-divider divider clearfix" style="margin-top:0.5em;margin-bottom:0.5em;max-width:100%;height:1px;"></div></div>';
    return $content;
}
add_shortcode('ux_product_info', 'flatsome_product_info_shortcode');

/**
 * Add Vietnam currency (VND)
 */
add_filter( 'woocommerce_currencies', 'add_vnd_currency' );
function add_vnd_currency( $currencies ) {
    $currencies['VND'] = __( 'Việt Nam Đồng', 'woocommerce' );
    return $currencies;
}

add_filter('woocommerce_currency_symbol', 'add_vnd_currency_symbol', 10, 2);
function add_vnd_currency_symbol( $currency_symbol, $currency ) {
    switch( $currency ) {
        case 'VND': $currency_symbol = ' VNĐ '; break;
    }
    return $currency_symbol;
}

// [blog_posts]
function shortcode_latest_from_blog_custom($atts, $content = null, $tag) {

    extract(shortcode_atts(array(
        "_id" => 'row-'.rand(),
        'style' => '',
        'class' => '',

        // Layout
        "columns" => '4',
        "columns__sm" => '1',
        "columns__md" => '',
        'col_spacing' => '',
        "type" => 'slider', // slider, row, masonery, grid
        'width' => '',
        'grid' => '1',
        'grid_height' => '600px',
        'grid_height__md' => '500px',
        'grid_height__sm' => '400px',
        'slider_nav_style' => 'reveal',
        'slider_nav_position' => '',
        'slider_nav_color' => '',
        'slider_bullets' => 'false',
        'slider_arrows' => 'true',
        'auto_slide' => 'false',
        'infinitive' => 'true',
        'depth' => '',
        'depth_hover' => '',

        // posts
        'posts' => '12',
        'ids' => false, // Custom IDs
        'cat' => '',
        'excerpt' => 'visible',
        'excerpt_length' => 15,
        'offset' => '',

        // Read more
        'readmore' => '',
        'readmore_color' => '',
        'readmore_style' => 'outline',
        'readmore_size' => 'small',

        // div meta
        'post_icon' => 'true',
        'comments' => 'true',
        'show_date' => 'badge', // badge, text
        'badge_style' => '',
        'show_category' => 'false',

        //Title
        'title_size' => 'large',
        'title_style' => '',

        // Box styles
        'animate' => '',
        'text_pos' => 'bottom',
        'text_padding' => '',
        'text_bg' => '',
        'text_size' => '',
        'text_color' => '',
        'text_hover' => '',
        'text_align' => 'center',
        'image_size' => 'medium',
        'image_width' => '',
        'image_radius' => '',
        'image_height' => '56%',
        'image_hover' => '',
        'image_hover_alt' => '',
        'image_overlay' => '',
        'image_depth' => '',
        'image_depth_hover' => '',

    ), $atts));

    ob_start();

    $classes_box = array();
    $classes_image = array();
    $classes_text = array();

    // Fix overlay color
    if($style == 'text-overlay'){
        $image_hover = 'zoom';
    }
    $style = str_replace('text-', '', $style);

    // Fix grids
    if($type == 'grid'){
        if(!$text_pos) $text_pos = 'center';
        $columns = 0;
        $current_grid = 0;
        $grid = flatsome_get_grid($grid);
        $grid_total = count($grid);
        echo flatsome_get_grid_height($grid_height, $_id);
    }

    // Fix overlay
    if($style == 'overlay' && !$image_overlay) $image_overlay = 'rgba(0,0,0,.25)';

    // Set box style
    if($style) $classes_box[] = 'box-'.$style;
    if($style == 'overlay') $classes_box[] = 'dark';
    if($style == 'shade') $classes_box[] = 'dark';
    if($style == 'badge') $classes_box[] = 'hover-dark';
    if($text_pos) $classes_box[] = 'box-text-'.$text_pos;

    if($image_hover)  $classes_image[] = 'image-'.$image_hover;
    if($image_hover_alt)  $classes_image[] = 'image-'.$image_hover_alt;
    if($image_height) $classes_image[] = 'image-cover';

    // Text classes
    if($text_hover) $classes_text[] = 'show-on-hover hover-'.$text_hover;
    if($text_align) $classes_text[] = 'text-'.$text_align;
    if($text_size) $classes_text[] = 'is-'.$text_size;
    if($text_color == 'dark') $classes_text[] = 'dark';

    $css_args_img = array(
        array( 'attribute' => 'border-radius', 'value' => $image_radius, 'unit' => '%' ),
        array( 'attribute' => 'width', 'value' => $image_width, 'unit' => '%' ),
    );

    $css_image_height = array(
        array( 'attribute' => 'padding-top', 'value' => $image_height),
    );

    $css_args = array(
        array( 'attribute' => 'background-color', 'value' => $text_bg ),
        array( 'attribute' => 'padding', 'value' => $text_padding ),
    );

    // Add Animations
    if($animate) {$animate = 'data-animate="'.$animate.'"';}

    $classes_text = implode(' ', $classes_text);
    $classes_image = implode(' ', $classes_image);
    $classes_box = implode(' ', $classes_box);

    // Repeater styles
    $repeater['id'] = $_id;
    $repeater['tag'] = $tag;
    $repeater['type'] = $type;
    $repeater['class'] = $class;
    $repeater['style'] = $style;
    $repeater['slider_style'] = $slider_nav_style;
    $repeater['slider_nav_position'] = $slider_nav_position;
    $repeater['slider_nav_color'] = $slider_nav_color;
    $repeater['slider_bullets'] = $slider_bullets;
    $repeater['auto_slide'] = $auto_slide;
    $repeater['row_spacing'] = $col_spacing;
    $repeater['row_width'] = $width;
    $repeater['columns'] = $columns;
    $repeater['columns__md'] = $columns__md;
    $repeater['columns__sm'] = $columns__sm;
    $repeater['depth'] = $depth;
    $repeater['depth_hover'] = $depth_hover;

    $args = array(
        'post_status' => 'publish',
        'post_type' => 'post',
        'offset' => $offset,
        'cat' => $cat,
        'posts_per_page' => $posts,
        'ignore_sticky_posts' => true
    );

    // If custom ids
    if ( !empty( $ids ) ) {
        $ids = explode( ',', $ids );
        $ids = array_map( 'trim', $ids );
        $posts = 9999;
        $offset = 0;

        $args = array(
            'post__in' => $ids,
            'numberposts' => -1,
            'orderby' => 'post__in',
            'posts_per_page' => 9999,
            'ignore_sticky_posts' => true,
        );
    }

    $recentPosts = new WP_Query( $args );

// Disable slider if less than selected products pr row.
    if ( $recentPosts->post_count < ($repeater['columns']+1) ) {
        if($repeater['type'] == 'slider') $repeater['type'] = 'row';
    }

// Get Repater HTML
    echo get_flatsome_repeater_start($repeater);

    while ( $recentPosts->have_posts() ) : $recentPosts->the_post();

        $col_class = array('post-item');

        if(get_post_format() == 'video') $col_class[] = 'has-post-icon';

        if($type == 'grid'){
            if($grid_total > $current_grid) $current_grid++;
            $current = $current_grid-1;

            $col_class[] = 'grid-col';
            if($grid[$current]['height']) $col_class[] = 'grid-col-'.$grid[$current]['height'];

            if($grid[$current]['span']) $col_class[] = 'large-'.$grid[$current]['span'];
            if($grid[$current]['md']) $col_class[] = 'medium-'.$grid[$current]['md'];

            // Set image size
            if($grid[$current]['size']) $image_size = $grid[$current]['size'];

            // Hide excerpt for small sizes
            if($grid[$current]['size'] == 'thumbnail') $excerpt = 'false';
        }

        ?>
        <div class="col <?php echo implode(' ', $col_class); ?>" <?php echo $animate;?>>
            <div class="col-inner">
                <a href="<?php the_permalink() ?>" class="plain">
                    <div class="box <?php echo $classes_box; ?> box-blog-post has-hover">
                        <?php if(has_post_thumbnail()) { ?>
                            <div class="box-image" <?php echo get_shortcode_inline_css($css_args_img); ?>>
                                <div class="<?php echo $classes_image; ?>" <?php echo get_shortcode_inline_css($css_image_height); ?>>
                                    <?php the_post_thumbnail($image_size); ?>
                                    <?php if($image_overlay){ ?><div class="overlay" style="background-color: <?php echo $image_overlay;?>"></div><?php } ?>
                                    <?php if($style == 'shade'){ ?><div class="shade"></div><?php } ?>
                                </div>
                                <?php if($post_icon && get_post_format()) { ?>
                                    <div class="absolute no-click x50 y50 md-x50 md-y50 lg-x50 lg-y50">
                                        <div class="overlay-icon">
                                            <i class="icon-play"></i>
                                        </div>
                                    </div>
                                <?php } ?>
                            </div><!-- .box-image -->
                        <?php } ?>
                        <div class="box-text <?php echo $classes_text; ?>" <?php echo get_shortcode_inline_css($css_args); ?>>
                            <div class="box-text-inner blog-post-inner">

                                <?php do_action('flatsome_blog_post_before'); ?>

                                <?php if($show_category !== 'false') { ?>
                                    <p class="cat-label <?php if($show_category == 'label') echo 'tag-label'; ?> is-xxsmall op-7 uppercase">
                                        <?php
                                        foreach((get_the_category()) as $cat) {
                                            echo $cat->cat_name . ' ';
                                        }
                                        ?>
                                    </p>
                                <?php } ?>
                                <h5 class="post-title is-<?php echo $title_size; ?> <?php echo $title_style;?>"><?php the_title(); ?></h5>
                                <?php if((!has_post_thumbnail() && $show_date !== 'false') || $show_date == 'text') {?><div class="post-meta is-small op-8"><?php echo get_the_date(); ?></div><?php } ?>
                                <div class="is-divider"></div>
                                <?php if($excerpt !== 'false') { ?>
                                    <p class="from_the_blog_excerpt <?php if($excerpt !== 'visible'){ echo 'show-on-hover hover-'.$excerpt; } ?>"><?php
                                        $the_excerpt = get_the_excerpt();
                                        echo flatsome_string_limit_words($the_excerpt, $excerpt_length) . '[...]';
                                        ?>
                                    </p>
                                <?php } ?>

                                <?php if( get_field('kd_price') ) { ?>
                                  <div class="fs-price">Giá: <span><?php the_field('kd_price'); ?></span></div>
                                <?php } ?>

                                <?php if($comments == 'true' && comments_open() && '0' != get_comments_number()){ ?>
                                    <p class="from_the_blog_comments uppercase is-xsmall"><?php echo get_comments_number( get_the_ID() ); ?> comments</p>
                                <?php } ?>

                                <?php if($readmore) { ?>
                                    <button href="<?php echo get_the_permalink(); ?>" class="button <?php echo $readmore_color; ?> is-<?php echo $readmore_style; ?> is-<?php echo $readmore_size; ?> mb-0">
                                        <?php echo $readmore ;?>
                                    </button>
                                <?php } ?>

                                <?php do_action('flatsome_blog_post_after'); ?>

                            </div><!-- .box-text-inner -->
                        </div><!-- .box-text -->
                        <?php if(has_post_thumbnail() && ($show_date == 'badge' || $show_date == 'true')) {?>
                            <?php if(!$badge_style) $badge_style = flatsome_option('blog_badge_style'); ?>
                            <div class="badge absolute top post-date badge-<?php echo $badge_style; ?>">
                                <div class="badge-inner">
                                    <span class="post-date-day"><?php echo get_the_time('d', get_the_ID()); ?></span><br>
                                    <span class="post-date-month is-xsmall"><?php echo get_the_time('M', get_the_ID()); ?></span>
                                </div>
                            </div>
                        <?php } ?>
                    </div><!-- .box -->
                </a><!-- .link -->
            </div><!-- .col-inner -->
        </div><!-- .col -->
    <?php endwhile;
    wp_reset_query();

    // Get repeater end
    echo get_flatsome_repeater_end($atts);

    $content = ob_get_contents();
    ob_end_clean();
    return $content;
}

add_action( 'init', 'my_custom_shortcodes_blog_posts' );
function my_custom_shortcodes_blog_posts()
{
    remove_shortcode( 'blog_posts' );
    add_shortcode("blog_posts", "shortcode_latest_from_blog_custom");
}


add_shortcode( 'my_permalink', 'my_permalink' );
// The Permalink Shortcode
function my_permalink() {
    ob_start();
    the_permalink();
    return ob_get_clean();
}

//add_action('wp_footer', 'khang_dien_custom_chat', 20);
//function khang_dien_custom_chat() {
//  echo "<!-- Load Facebook SDK for JavaScript -->";
//  echo '<div id="fb-root"></div>';
//  echo "<script>(function(d, s, id) {
//          var js, fjs = d.getElementsByTagName(s)[0];
//          if (d.getElementById(id)) return;
//          js = d.createElement(s); js.id = id;
//          js.src = 'https://connect.facebook.net/vi_VN/sdk/xfbml.customerchat.js#xfbml=1&version=v2.12&autoLogAppEvents=1';
//          fjs.parentNode.insertBefore(js, fjs);
//	      }(document, 'script', 'facebook-jssdk'));</script>";
//  echo "<!-- Your customer chat code -->";
//  echo '<div class="fb-customerchat" attribution=setup_tool page_id="228055727818486" theme_color="#0084ff"></div>';
//}

function hidden_phone($number) {
	$middle_string = "";
	$length = strlen($number);
	if ($length < 3) {
		return $length == 1 ? "*" : "*". substr($number,  - 1);
	} else {
		$part_size = floor( $length / 3 ) ;
		$middle_part_size = $length - ( $part_size * 2 );
		for ($i=0;$i<$middle_part_size;$i++) {
			$middle_string .= "*";
		}
		return substr($number, 0, $part_size ) . $middle_string  . substr($number,  - $part_size );
	}
}


add_action( 'wp_enqueue_scripts', 'my_custom_script_load' );
function my_custom_script_load(){
	wp_enqueue_script( 'my-custom-script', get_stylesheet_directory_uri() . '/assets/js/custom.js', array( 'jquery' ) );
}