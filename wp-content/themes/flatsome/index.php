<?php
/**
 * The blog template file.
 *
 * @package flatsome
 */

get_header();

?>

<div id="content" class="blog-wrapper blog-archive page-wrapper page-right-sidebar custom-list-blogs container">
<!--		--><?php //get_template_part( 'template-parts/posts/layout', get_theme_mod('blog_layout','right-sidebar') ); ?>
    <div class="row">
        <div id="content" class="large-9 left col col-divided" role="main">
            <div class="page-inner">
                <?php

                $the_press = new WP_Query(array('post_type' => 'post','posts_per_page' => 6,'cat' => get_query_var('cat'), 'paged'=> get_query_var('paged') ));
                // The Loop
                while ($the_press->have_posts()) : $the_press->the_post();
                    ?>
                    <div class="row boxtinok">

                        <div class="post-item wow fadeInUp">
                            <div class="box-image">
                                <a href="<?php echo the_permalink(); ?>"><?php the_post_thumbnail(); ?></a>
                            </div>
                            <div class="box-text">
                                <h5 class="post-title"><a href="<?php echo the_permalink(); ?>"><?php the_title(); ?></a></h5>
                                <p class="excerpt-gory"><?php the_excerpt(); ?></p>
                            </div>
                        </div>
                    </div>

                <?php endwhile; ?>
                <?php if (function_exists('netweb_wp_corenavi')) netweb_wp_corenavi($the_press); ?>
                <?php wp_reset_postdata();?>
            </div>
        </div>
        <div class="large-3 col custom-list-new">
            <!--            --><?php //get_sidebar(); ?>
            <div class="box-top-sidebar">
                <h4 class="widget-title "><span>Tin nóng</span></h4>
                <div class="is-divider small"></div>
                <div class="carousel " data-flickity='{ "groupCells": true, "autoPlay": 6000 }'>
                    <div class="carousel-cell">
                        <?php $the_press1 = new WP_Query(array('post_type' => 'post','posts_per_page' => 5, 'paged'=> get_query_var('paged') ));

                        while ($the_press1->have_posts()) : $the_press1->the_post(); ?>
                            <div class="row boxtinok">

                                <div class="post-item wow fadeInUp">
                                    <div class="box-image">
                                        <a href="<?php echo the_permalink(); ?>"><?php the_post_thumbnail(); ?></a>
                                    </div>
                                    <div class="box-text">
                                        <h5 class="post-title"><a href="<?php echo the_permalink(); ?>"><?php the_title(); ?></a></h5>
                                        <p class="excerpt-gory"><?php the_excerpt(); ?></p>
                                    </div>
                                </div>
                            </div>
                        <?php endwhile; ?>
                    </div>
                    <div class="carousel-cell ">
                        <?php $the_press2 = new WP_Query(array('post_type' => 'post','posts_per_page' => 5, 'paged'=> 2 ));
                        while ($the_press2->have_posts()) : $the_press2->the_post(); ?>
                            <div class="row boxtinok">

                                <div class="post-item wow fadeInUp">
                                    <div class="box-image">
                                        <a href="<?php echo the_permalink(); ?>"><?php the_post_thumbnail(); ?></a>
                                    </div>
                                    <div class="box-text">
                                        <h5 class="post-title"><a href="<?php echo the_permalink(); ?>"><?php the_title(); ?></a></h5>
                                        <p class="excerpt-gory"><?php the_excerpt(); ?></p>
                                    </div>
                                </div>
                            </div>
                        <?php endwhile; ?>
                    </div>
                </div>
            </div>
            <div class="box-bottom-sidebar mt-5" style="margin-top: 40px">
                <h4 class="widget-title"><span>Danh mục bài viết</span></h4>
                <div class="is-divider small"></div>
                <?php
                $categories =  get_categories();
                echo '<ul>';
                foreach  ($categories as $category) {
                    echo '<li><a href="' . get_category_link( $category->term_id ) . '">'. $category->cat_name .'</a></li>';
                }
                echo '</ul>';
                ?>
            </div>


        </div>
    </div>
</div>

<?php get_footer(); ?>