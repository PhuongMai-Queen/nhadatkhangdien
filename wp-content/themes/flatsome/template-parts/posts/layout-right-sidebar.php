<?php
	do_action('flatsome_before_blog');
?>

<?php if(!is_single() && flatsome_option('blog_featured') == 'top'){ get_template_part('template-parts/posts/featured-posts'); } ?>
<div class="page-wrapper page-right-sidebar custom-list-blogs container">
<div class="row row-large <?php if(flatsome_option('blog_layout_divider')) echo 'row-divided ';?>">

	<div class="large-9 col">
	<?php if(!is_single() && flatsome_option('blog_featured') == 'content'){ get_template_part('template-parts/posts/featured-posts'); } ?>
	<?php
		if(is_single()){
			get_template_part( 'template-parts/posts/single');
			comments_template();
		} elseif(flatsome_option('blog_style_archive') && (is_archive() || is_search())){
			get_template_part( 'template-parts/posts/archive', flatsome_option('blog_style_archive') );
		} else {
			get_template_part( 'template-parts/posts/archive', flatsome_option('blog_style') );
		}
	?>
	</div>
<!--	<div class="post-sidebar large-3 col">-->
<!--		--><?php //flatsome_sticky_column_open( 'blog_sticky_sidebar' ); ?>
<!--		--><?php //get_sidebar(); ?>
<!--		--><?php //flatsome_sticky_column_close( 'blog_sticky_sidebar' ); ?>
<!--	</div>-->
    <div class="post-sidebar large-3 col custom-list-new">
        <!--            --><?php //get_sidebar(); ?>
        <div class="box-top-sidebar">
            <h4 class="widget-title "><span>Tin nóng</span></h4>
            <div class="is-divider small"></div>
            <div class="carousel " data-flickity='{ "groupCells": true, "autoPlay": 6000 }'>
                <div class="carousel-cell">
                    <?php $the_press1 = new WP_Query(array('post_type' => 'post','posts_per_page' => 5,'cat' => get_query_var('cat'), 'paged'=> get_query_var('paged') ));

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
                    <?php $the_press2 = new WP_Query(array('post_type' => 'post','posts_per_page' => 5,'cat' => get_query_var('cat'), 'paged'=> 2 ));
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
<?php
	do_action('flatsome_after_blog');
?>
