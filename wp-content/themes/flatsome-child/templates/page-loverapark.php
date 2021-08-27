<?php
/*
Template name: Lovera Park - Full Width
*/
?>
<!DOCTYPE html>
<!--[if IE 9 ]> <html <?php language_attributes(); ?> class="ie9 <?php flatsome_html_classes(); ?>"> <![endif]-->
<!--[if IE 8 ]> <html <?php language_attributes(); ?> class="ie8 <?php flatsome_html_classes(); ?>"> <![endif]-->
<!--[if (gte IE 9)|!(IE)]><!--><html <?php language_attributes(); ?> class="<?php flatsome_html_classes(); ?>"> <!--<![endif]-->
<head>
    <meta charset="<?php bloginfo( 'charset' ); ?>" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />

    <link rel="profile" href="http://gmpg.org/xfn/11" />
    <link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>" />

    <?php wp_head(); ?>
</head>

<body <?php body_class(); // Body classes is added from inc/helpers-frontend.php ?>>

<a class="skip-link screen-reader-text" href="#main"><?php esc_html_e( 'Skip to content', 'flatsome' ); ?></a>

<div id="wrapper">

    <?php do_action('flatsome_before_header'); ?>

    <header id="header" class="header <?php flatsome_header_classes();  ?>">
        <div class="header-wrapper">
            <div id="masthead" class="header-main ">
                <div class="header-inner flex-row container logo-left medium-logo-center" role="navigation">
                    <div id="logo" class="flex-col logo"> <a href="https://khangdienhome.net/" title="Dự án căn hộ nhà phố biệt thự Khang Điền quận 9 cơ hội đầu tư 2019 - Dự án căn hộ nhà phố biệt thự Khang Điền, CĐT uy tín, chất lượng số 1, tiện ích cao cấp, TT linh hoạt, PL sổ hồng,NH hỗ trợ 70%, ưu đãi hấp dẫn" rel="home"> <img width="220" height="90" src="https://khangdienhome.net/wp-content/uploads/2018/04/khang-dien-logo.png" class="header_logo header-logo" alt="Dự án căn hộ nhà phố biệt thự Khang Điền quận 9 cơ hội đầu tư 2019"/><img  width="220" height="90" src="https://khangdienhome.net/wp-content/uploads/2018/04/khang-dien-logo.png" class="header-logo-dark" alt="Dự án căn hộ nhà phố biệt thự Khang Điền quận 9 cơ hội đầu tư 2019"/></a></div>
                    <div class="flex-col show-for-medium flex-left">
                        <ul class="mobile-nav nav nav-left ">
                            <li class="nav-icon has-icon"> <a href="#" data-open="#main-menu" data-pos="left" data-bg="main-menu-overlay" data-color="" class="is-small" aria-controls="main-menu" aria-expanded="false"> <i class="icon-menu" ></i> </a></li>
                        </ul>
                    </div>
                    <div class="flex-col hide-for-medium flex-left
               flex-grow">
                        <ul class="header-nav header-nav-main nav nav-left  nav-uppercase" >
                            <li class="header-search header-search-dropdown has-icon has-dropdown menu-item-has-children">
                                <a href="#" class="is-small"><i class="icon-search" ></i></a>
                                <ul class="nav-dropdown nav-dropdown-default">
                                    <li class="header-search-form search-form html relative has-icon">
                                        <div class="header-search-form-wrapper">
                                            <div class="searchform-wrapper ux-search-box relative form- is-normal">
                                                <form role="search" method="get" class="searchform" action="https://khangdienhome.net/">
                                                    <div class="flex-row relative">
                                                        <div class="flex-col flex-grow"> <input type="search" class="search-field mb-0" name="s" value="" placeholder="Tìm kiếm&hellip;" /> <input type="hidden" name="post_type" value="product" /></div>
                                                        <div class="flex-col"> <button type="submit" class="ux-search-submit submit-button secondary button icon mb-0"> <i class="icon-search" ></i> </button></div>
                                                    </div>
                                                    <div class="live-search-results text-left z-top"></div>
                                                </form>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </li>
                            <li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-home  menu-item-11"><a href="https://khangdienhome.net/" class="nav-top-link">Trang chủ</a></li>
                            <li class="menu-item menu-item-type-taxonomy menu-item-object-category"><a href="#tong-quan" class="nav-top-link">Tổng Quan</a></li>
                            <li class="menu-item menu-item-type-taxonomy menu-item-object-category"><a href="#vi-tri" class="nav-top-link">Vị Trí</a></li>
                            <li class="menu-item menu-item-type-taxonomy menu-item-object-category"><a href="#so-do-mat-bang" class="nav-top-link">Sơ Đồ Mặt Bằng</a></li>
                            <li class="menu-item menu-item-type-taxonomy menu-item-object-category"><a href="#tien-ich" class="nav-top-link">Tiện Ích</a></li>
                            <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-23"><a href="#lien-he" class="nav-top-link">Liên hệ</a></li>
                        </ul>
                    </div>
                    <div class="flex-col hide-for-medium flex-right">
                        <ul class="header-nav header-nav-main nav nav-right  nav-uppercase"></ul>
                    </div>
                    <div class="flex-col show-for-medium flex-right">
                        <ul class="mobile-nav nav nav-right "></ul>
                    </div>
                </div>
                <div class="container">
                    <div class="top-divider full-width"></div>
                </div>
            </div>
            <div class="header-bg-container fill">
                <div class="header-bg-image fill"></div>
                <div class="header-bg-color fill"></div>
            </div>
        </div><!-- header-wrapper-->
    </header>

    <?php do_action('flatsome_after_header'); ?>

    <main id="main" class="<?php flatsome_main_classes();  ?>">


        <?php do_action( 'flatsome_before_page' ); ?>

        <div id="content" role="main" class="content-area">

            <?php while ( have_posts() ) : the_post(); ?>

                <?php the_content(); ?>

            <?php endwhile; // end of the loop. ?>

        </div>

        <?php do_action( 'flatsome_after_page' ); ?>

    </main><!-- #main -->

    <footer id="footer" class="footer-wrapper">

        <?php do_action('flatsome_footer'); ?>

    </footer><!-- .footer-wrapper -->

</div><!-- #wrapper -->

<?php wp_footer(); ?>
<style>
    .fone {
        font-size: 22px; /* chữ cạnh nút gọi */
        color: #cf9a46;
        line-height: 50px;
        font-weight: bold;
        padding-left: 48px; /* cách bên trái cho chữ */
        margin: 0 0;
    }
    .fix_tel {position:fixed;bottom:100px;left:25px;z-index:999;} /* left 18px là cách bên trái 18px. nếu muốn cho nút gọi sang phải thay là right */
    .fix_tel a {text-decoration: none; display:block;}
    .tel { background: #eee;width:205px; height:50px; position:relative; overflow:hidden;background-size:40px;border-radius:28px;border:none}
    .ring-alo-phone {
        background-color: transparent;
        cursor: pointer;
        height: 80px;
        position: absolute;
        transition: visibility 0.5s ease 0s;
        visibility: hidden;
        width: 80px;
        z-index: 200000 !important;
    }
    .ring-alo-phone.ring-alo-show {
        visibility: visible;
    }
    .ring-alo-phone.ring-alo-hover, .ring-alo-phone:hover {
        opacity: 1;
    }
    .ring-alo-ph-circle {
        animation: 1.2s ease-in-out 0s normal none infinite running ring-alo-circle-anim;
        background-color: transparent;
        border: 2px solid rgba(30, 30, 30, 0.4);
        border-radius: 100%;
        height: 70px;
        left: 10px;
        opacity: 0.1;
        position: absolute;
        top: 12px;
        transform-origin: 50% 50% 0;
        transition: all 0.5s ease 0s;
        width: 70px;
    }
    .ring-alo-phone.ring-alo-active .ring-alo-ph-circle {
        animation: 1.1s ease-in-out 0s normal none infinite running ring-alo-circle-anim !important;
    }
    .ring-alo-phone.ring-alo-static .ring-alo-ph-circle {
        animation: 2.2s ease-in-out 0s normal none infinite running ring-alo-circle-anim !important;
    }
    .ring-alo-phone.ring-alo-hover .ring-alo-ph-circle, .ring-alo-phone:hover .ring-alo-ph-circle {
        border-color: #ea700e;
        opacity: 0.5;
    }
    .ring-alo-phone.ring-alo-green.ring-alo-hover .ring-alo-ph-circle, .ring-alo-phone.ring-alo-green:hover .ring-alo-ph-circle {
        border-color: #baf5a7;
        opacity: 0.5;
    }
    .ring-alo-phone.ring-alo-green .ring-alo-ph-circle {
        border-color: #ea700e;
        opacity: 0.5;
    }
    .ring-alo-ph-circle-fill {
        animation: 2.3s ease-in-out 0s normal none infinite running ring-alo-circle-fill-anim;
        background-color: #000;
        border: 2px solid transparent;
        border-radius: 100%;
        height: 30px;
        left: 30px;
        opacity: 0.1;
        position: absolute;
        top: 33px;
        transform-origin: 50% 50% 0;
        transition: all 0.5s ease 0s;
        width: 30px;
    }
    .ring-alo-phone.ring-alo-hover .ring-alo-ph-circle-fill, .ring-alo-phone:hover .ring-alo-ph-circle-fill {
        background-color: rgba(0, 175, 242, 0.5);
        opacity: 0.75 !important;
    }
    .ring-alo-phone.ring-alo-green.ring-alo-hover .ring-alo-ph-circle-fill, .ring-alo-phone.ring-alo-green:hover .ring-alo-ph-circle-fill {
        background-color: rgba(117, 235, 80, 0.5);
        opacity: 0.75 !important;
    }
    .ring-alo-phone.ring-alo-green .ring-alo-ph-circle-fill {
        background-color: rgba(0, 175, 242, 0.5);
        opacity: 0.75 !important;
    }


    .ring-alo-ph-img-circle {
        animation: 1s ease-in-out 0s normal none infinite running ring-alo-circle-img-anim;
        border: 2px solid transparent;
        border-radius: 100%;
        height: 30px;
        left: 30px;
        opacity: 1;
        position: absolute;
        top: 33px;
        transform-origin: 50% 50% 0;
        width: 30px;
    }

    .ring-alo-phone.ring-alo-hover .ring-alo-ph-img-circle, .ring-alo-phone:hover .ring-alo-ph-img-circle {
        background-color: #fa061d;
    }
    .ring-alo-phone.ring-alo-green.ring-alo-hover .ring-alo-ph-img-circle, .ring-alo-phone.ring-alo-green:hover .ring-alo-ph-img-circle {
        background-color: #75eb50;
    }
    .ring-alo-phone.ring-alo-green .ring-alo-ph-img-circle {
        background-color: #fa061d;
    }
    @keyframes ring-alo-circle-anim {
        0% {
            opacity: 0.1;
            transform: rotate(0deg) scale(0.5) skew(1deg);
        }
        30% {
            opacity: 0.5;
            transform: rotate(0deg) scale(0.7) skew(1deg);
        }
        100% {
            opacity: 0.6;
            transform: rotate(0deg) scale(1) skew(1deg);
        }
    }


    @keyframes ring-alo-circle-img-anim {
        0% {
            transform: rotate(0deg) scale(1) skew(1deg);
        }
        10% {
            transform: rotate(-25deg) scale(1) skew(1deg);
        }
        20% {
            transform: rotate(25deg) scale(1) skew(1deg);
        }
        30% {
            transform: rotate(-25deg) scale(1) skew(1deg);
        }
        40% {
            transform: rotate(25deg) scale(1) skew(1deg);
        }
        50% {
            transform: rotate(0deg) scale(1) skew(1deg);
        }
        100% {
            transform: rotate(0deg) scale(1) skew(1deg);
        }
    }
    @keyframes ring-alo-circle-fill-anim {
        0% {
            opacity: 0.2;
            transform: rotate(0deg) scale(0.7) skew(1deg);
        }
        50% {
            opacity: 0.2;
            transform: rotate(0deg) scale(1) skew(1deg);
        }
        100% {
            opacity: 0.2;
            transform: rotate(0deg) scale(0.7) skew(1deg);
        }
    }
    .ring-alo-ph-img-circle a img {
        padding: 1px 0 12px 1px;
        width: 30px;
        position: relative;
        top: -1px;
    }
    }
</style>
<div class="fix_tel">
    <div class="ring-alo-phone ring-alo-green ring-alo-show" id="ring-alo-phoneIcon" style="right:145px;bottom:-6px;">
        <div class="ring-alo-ph-circle"></div>
        <div class="ring-alo-ph-circle-fill"></div>
        <div class="ring-alo-ph-img-circle">
            <a href="tel:+84909797244"><img class="lazy" src="https://khangdienhome.net/wp-content/uploads/2019/02/phone.png" alt="G"></a>
        </div>
    </div>
    <div class="tel">
        <a href="tel:+84909797244"><p class="fone">0909.797.244</p></a>
    </div>
</div>
</body>
</html>

