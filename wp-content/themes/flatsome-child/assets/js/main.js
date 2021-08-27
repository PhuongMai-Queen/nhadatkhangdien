$(document).ready(function() {
	function removeActive(class_name){
		$('#li1 a').removeClass('active');
		$('#li2 a').removeClass('active');
		$('#li3 a').removeClass('active');
		$('#li4 a').removeClass('active');
		$('#li5 a').removeClass('active');
		$('#li6 a').removeClass('active');
		

		$(class_name).addClass('active');

	};
	function removeActivemenu(class_name){
		$('a#aside1').removeClass('active-menu');
		$('a#aside2').removeClass('active-menu');
		$('a#aside3').removeClass('active-menu');
		$('a#aside4').removeClass('active-menu');
		$('a#aside5').removeClass('active-menu');
		$('a#aside6').removeClass('active-menu');
		$('a#aside7').removeClass('active-menu');
		$('a#aside8').removeClass('active-menu');
		$('a#aside9').removeClass('active-menu');

		$(class_name).addClass('active-menu');
	};

	$('#fullpage').fullpage({
		lockAnchors:false,
		anchors:['tong-quan','gioi-thieu', 'vi-tri', 'tien-ich', 'mat-bang', 'ly-do', 'tien-do', 'chinh-sach', 'lien-he'],
		navigation: true,
		navigationPosition: 'left',
		navigationTooltips: ['Tổng Quan', 'Giới Thiệu', 'Vị Trí', 'Tiện Ích', 'Mặt Bằng', 'Chính Sách' ,'Liên Hệ'],
		showActiveTooltip: true,
		responsiveWidth: 1100,
		// slidesNavigation: true,
		// slidesNavPosition: 'bottom',
		// slideTooltips: ["S0Slide 0", "S0Slide 1", "S0Slide 2", "S0Slide 3", "S1Slide 0", "S1Slide 1", "S1Slide 2", "S1Slide 3", "S2Slide 0", "S2Slide 1", "S2Slide 2", "S2Slide 3"]
		afterRender: function(){
      	},
		afterLoad: function(anchorLink, index) {
			
			switch(anchorLink) {
				case "tong-quan":					
					$('#li1 a').removeClass('active');
					$('#li2 a').removeClass('active');
					$('#li3 a').removeClass('active');
					$('#li4 a').removeClass('active');
					$('#li5 a').removeClass('active');
					$('#li6 a').removeClass('active');
					removeActivemenu('a#aside1');
					$('.navbar-nav').addClass('blue-themes').removeClass('white-themes');
				break;
				case "gioi-thieu":
					removeActive('#li1 a');
					removeActivemenu('a#aside2');
					$('.navbar-nav').addClass('blue-themes').removeClass('white-themes');
				break;
				case "vi-tri":
					removeActive('#li2 a');
					removeActivemenu('a#aside3');
					$('.navbar-nav').addClass('blue-themes').removeClass('white-themes');
					$('svg#Layer_1_map').css('display','block');
				break;
				case "tien-ich":
					removeActive('#li3 a');
					removeActivemenu('a#aside4');
					$('.navbar-nav').addClass('white-themes').removeClass('blue-themes');
				break;				
				case "mat-bang":
					removeActive('#li4 a');
					removeActivemenu('a#aside5');
					$('.navbar-nav').addClass('blue-themes').removeClass('white-themes');
				break;
				case "ly-do":
					$('#li1 a').removeClass('active');
					$('#li2 a').removeClass('active');
					$('#li3 a').removeClass('active');
					$('#li4 a').removeClass('active');
					$('#li5 a').removeClass('active');
					$('#li6 a').removeClass('active');
					$('.navbar-nav').addClass('white-themes').removeClass('blue-themes');
					removeActivemenu('a#aside6');
				break;
        case "tien-do":
          $('#li1 a').removeClass('active');
          $('#li2 a').removeClass('active');
          $('#li3 a').removeClass('active');
          $('#li4 a').removeClass('active');
          $('#li5 a').removeClass('active');
          $('#li6 a').removeClass('active');
          $('.navbar-nav').addClass('blue-themes').removeClass('white-themes');
          removeActivemenu('a#aside7');
          $(".embed-responsive-item")[0].contentWindow.postMessage('{"event":"command","func":"' + 'playVideo' + '","args":""}', '*');
        break;
				case "chinh-sach":
					removeActive('#li5 a');
					removeActivemenu('a#aside8');
					$('.navbar-nav').addClass('blue-themes').removeClass('white-themes');
				break;
				case "lien-he":
					removeActive('#li6 a');
					removeActivemenu('a#aside9');
					$('.navbar-nav').addClass('white-themes').removeClass('blue-themes');
				break;
			}
		},
		onLeave: function(index, nextIndex, direction){

				switch(nextIndex) {
					case 1:
						
					break;
					case 2:
						$(".gioi-thieu .animated").addClass('go');
					break;
					case 3:
						$(".vi-tri .animated").addClass('go');
					break;
					case 4:
						$(".tien-ich .animated").addClass('go');
					break;
					case 5:
						$(".mat-bang .animated").addClass('go');
					break;
					case 6:
						$(".ly-do .animated").addClass('go');
					break;
                    case 7:
                        $(".tien-do .animated").addClass('go');
                    break;
					case 8:
						$(".chinh-sach .animated").addClass('go');
					break;
					case 9:
						$(".lien-he .animated").addClass('go');
					break;
				}
			},
	});		

});


$(document).ready(function(){
	$('#nav-icon2').click(function(){
		$(this).toggleClass('open');
		$('aside').toggle();
	});


// Vegas Slider
// var slide = [];
// slide.push({ src: 'images/banner/slide-1.jpg' });  
// slide.push({ src: 'images/banner/slide-2.jpg' }); 
// slide.push({ src: 'images/banner/slide-3.jpg' });  
$("#tongquan").vegas({
   // slides: slide,
   timer: false,
   transition: 'zoomOut2', 
   transitionDuration: 2000,
   delay: 8000,
   animationDuration: 2000,
   animation: ['random'],
   slides: [
            { src: "/wp-content/themes/khangdien/assets/images/banner/slide-1.jpg" },
            { src: "/wp-content/themes/khangdien/assets/images/banner/slide-2.jpg" },
            { src: "/wp-content/themes/khangdien/assets/images/banner/slide-3.jpg"}
        ],
     walk: function (index, slideSettings) {
            $('#tongquan .description').html(slideSettings.text);
        }

});
    // $('#tongquan .description').addClass('fadeInLeft delay-750 animated go');

// Slick Slider
$('.photo-item').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        responsive: [{
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    });
});


// Hover image tong-quan
$(".img1").on({
   mouseenter: function(){
    $(this).attr('src','/wp-content/themes/khangdien/assets/images/gioi-thieu/1b.png');
    $('p.img1').css('color','#E85120');
  },
  mouseleave: function(){
    $(this).attr('src','/wp-content/themes/khangdien/assets/images/gioi-thieu/1.png');
    $('p.img1').css('color','#000');
  }
});

$(".img2").on({
   mouseenter: function(){
    $(this).attr('src','/wp-content/themes/khangdien/assets/images/gioi-thieu/2b.png');
    $('p.img2').css('color','#E85120');
  },
  mouseleave: function(){
    $(this).attr('src','/wp-content/themes/khangdien/assets/images/gioi-thieu/2.png');
    $('p.img2').css('color','#000');
  }
});

$(".img3").on({
   mouseenter: function(){
    $(this).attr('src','/wp-content/themes/khangdien/assets/images/gioi-thieu/3b.png');
    $('p.img3').css('color','#E85120');
  },
  mouseleave: function(){
    $(this).attr('src','/wp-content/themes/khangdien/assets/images/gioi-thieu/3.png');
    $('p.img3').css('color','#000');
  }
});

$(".img4").on({
   mouseenter: function(){
    $(this).attr('src','/wp-content/themes/khangdien/assets/images/gioi-thieu/4b.png');
    $('p.img4').css('color','#E85120');
  },
  mouseleave: function(){
    $(this).attr('src','/wp-content/themes/khangdien/assets/images/gioi-thieu/4.png');
    $('p.img4').css('color','#000');
  }
});

$(".img5").on({
   mouseenter: function(){
    $(this).attr('src','/wp-content/themes/khangdien/assets/images/gioi-thieu/5b.png');
    $('p.img5').css('color','#E85120');
  },
  mouseleave: function(){
    $(this).attr('src','/wp-content/themes/khangdien/assets/images/gioi-thieu/5.png');
    $('p.img5').css('color','#000');
  }
});

$(".img6").on({
   mouseenter: function(){
    $(this).attr('src','/wp-content/themes/khangdien/assets/images/gioi-thieu/6b.png');
    $('p.img6').css('color','#E85120');
  },
  mouseleave: function(){
    $(this).attr('src','/wp-content/themes/khangdien/assets/images/gioi-thieu/6.png');
    $('p.img6').css('color','#000');
  }
});

$(".img7").on({
   mouseenter: function(){
    $(this).attr('src','/wp-content/themes/khangdien/assets/images/gioi-thieu/7b.png');
    $('p.img7').css('color','#E85120');
  },
  mouseleave: function(){
    $(this).attr('src','/wp-content/themes/khangdien/assets/images/gioi-thieu/7.png');
    $('p.img7').css('color','#000');
  }
});

$(".img8").on({
   mouseenter: function(){
    $(this).attr('src','/wp-content/themes/khangdien/assets/images/gioi-thieu/8b.png');
    $('p.img8').css('color','#E85120');
  },
  mouseleave: function(){
    $(this).attr('src','/wp-content/themes/khangdien/assets/images/gioi-thieu/8.png');
    $('p.img8').css('color','#000');
  }
});
$(".img9").on({
   mouseenter: function(){
    $(this).attr('src','/wp-content/themes/khangdien/assets/images/gioi-thieu/9b.png');
    $('p.img9').css('color','#E85120');
  },
  mouseleave: function(){
    $(this).attr('src','/wp-content/themes/khangdien/assets/images/gioi-thieu/9.png');
    $('p.img9').css('color','#000');
  }
});
$(".img10").on({
   mouseenter: function(){
    $(this).attr('src','/wp-content/themes/khangdien/assets/images/gioi-thieu/10b.png');
    $('p.img10').css('color','#E85120');
  },
  mouseleave: function(){
    $(this).attr('src','/wp-content/themes/khangdien/assets/images/gioi-thieu/10.png');
    $('p.img10').css('color','#000');
  }
});

$(".tech1").on({
  mouseenter: function(){
    $('.image-on-ipad').css("background-image", "url(/wp-content/themes/khangdien/assets/images/other/ThietKe-ThongMinh-1.png)") ;
    $('.image-on-ipad').css("background-size", " cover");
    // $('.image-on-ipad').css("transition", "all 0.5s ease-in-out");
    $('.image-on-ipad').css("-webkit-transform", " scale(1)");
    $('.image-on-ipad').css("transform", " scale(1)");
    $('.image-on-ipad').css("opacity","1");    
    $('.tech-text1').css("animation","fadeInUp"); 
    $('.text-type').css('display','none');
    $('.tech-text1').css('display','block');
  },
  mouseleave: function(){
    $('.image-on-ipad').css("background-image", "url(/wp-content/themes/khangdien/assets/images/slide-3.jpg)") ;
    $('.image-on-ipad').css("background-size", " contain");
    // $('.image-on-ipad').css("transition", "all 1s ease-in-out");
    $('.image-on-ipad').css("-webkit-transform", " scale(1.1)");
    $('.image-on-ipad').css("transform", " scale(1.1)");
    $('.image-on-ipad').css("-webkit-transition:", " .3s ease-in-out");
    $('.image-on-ipad').css("transition", ".3s ease-in-out");
    $('.image-on-ipad').css("opacity","0");
    $('.text-type').css('display','none');
  }
});
$(".tech2").on({
  mouseenter: function(){
    $('.image-on-ipad').css("background-image", "url(/wp-content/themes/khangdien/assets/images/other/ThietKe-ThongMinh-2.png)") ;
    $('.image-on-ipad').css("background-size", " cover");
    // $('.image-on-ipad').css("transition", "all 0.5s ease-in-out");
    $('.image-on-ipad').css("-webkit-transform", " scale(1)");
    $('.image-on-ipad').css("transform", " scale(1)");
    $('.image-on-ipad').css("opacity","1");
    $('.tech-text2').css("animation","fadeInUp");
    $('.text-type').css('display','none');
    $('.tech-text2').css('display','block');
  },
  mouseleave: function(){
    $('.image-on-ipad').css("background-image", "url(/wp-content/themes/khangdien/assets/images/slide-3.jpg)") ;
    $('.image-on-ipad').css("background-size", " contain");
    // $('.image-on-ipad').css("transition", "all 1s ease-in-out");
    $('.image-on-ipad').css("-webkit-transform", " scale(1.1)");
    $('.image-on-ipad').css("transform", " scale(1.1)");
    $('.image-on-ipad').css("-webkit-transition:", " .3s ease-in-out");
    $('.image-on-ipad').css("transition", ".3s ease-in-out");
    $('.image-on-ipad').css("opacity","0");
    $('.text-type').css('display','none');
  }
});
$(".tech3").on({
  mouseenter: function(){
    $('.image-on-ipad').css("background-image", "url(/wp-content/themes/khangdien/assets/images/other/ThietKe-ThongMinh-3.png)") ;
    $('.image-on-ipad').css("background-size", " cover");
    // $('.image-on-ipad').css("transition", "all 0.5s ease-in-out");
    $('.image-on-ipad').css("-webkit-transform", " scale(1)");
    $('.image-on-ipad').css("transform", " scale(1)");
    $('.image-on-ipad').css("opacity","1");
    $('.tech-text3').css("animation","fadeInUp");
    $('.text-type').css('display','none');
    $('.tech-text3').css('display','block');
  },
  mouseleave: function(){
    $('.image-on-ipad').css("background-image", "url(/wp-content/themes/khangdien/assets/images/slide-3.jpg)") ;
    $('.image-on-ipad').css("background-size", " contain");
    // $('.image-on-ipad').css("transition", "all 1s ease-in-out");
    $('.image-on-ipad').css("-webkit-transform", " scale(1.1)");
    $('.image-on-ipad').css("transform", " scale(1.1)");
    $('.image-on-ipad').css("-webkit-transition:", " .3s ease-in-out");
    $('.image-on-ipad').css("transition", ".3s ease-in-out");
    $('.image-on-ipad').css("opacity","0");
    $('.text-type').css('display','none');
  }
});
$(".tech4").on({
  mouseenter: function(){
    $('.image-on-ipad').css("background-image", "url(/wp-content/themes/khangdien/assets/images/other/ThietKe-ThongMinh-4.png)") ;
    $('.image-on-ipad').css("background-size", " cover");
    // $('.image-on-ipad').css("transition", "all 0.5s ease-in-out");
    $('.image-on-ipad').css("-webkit-transform", " scale(1)");
    $('.image-on-ipad').css("transform", " scale(1)");
    $('.image-on-ipad').css("opacity","1");
    $('.tech-text4').css("animation","fadeInUp");
    $('.text-type').css('display','none');
    $('.tech-text4').css('display','block');
  },
  mouseleave: function(){
    $('.image-on-ipad').css("background-image", "url(/wp-content/themes/khangdien/assets/images/slide-3.jpg)") ;
    $('.image-on-ipad').css("background-size", " contain");
    // $('.image-on-ipad').css("transition", "all 1s ease-in-out");
    $('.image-on-ipad').css("-webkit-transform", " scale(1.1)");
    $('.image-on-ipad').css("transform", " scale(1.1)");
    $('.image-on-ipad').css("-webkit-transition:", " .3s ease-in-out");
    $('.image-on-ipad').css("transition", ".3s ease-in-out");
    $('.image-on-ipad').css("opacity","0");
    $('.text-type').css('display','none');
  }
});
$(".tech5").on({
  mouseenter: function(){
    $('.image-on-ipad').css("background-image", "url(/wp-content/themes/khangdien/assets/images/other/ThietKe-ThongMinh-5.png)") ;
    $('.image-on-ipad').css("background-size", " cover");
    // $('.image-on-ipad').css("transition", "all 0.5s ease-in-out");
    $('.image-on-ipad').css("-webkit-transform", " scale(1)");
    $('.image-on-ipad').css("transform", " scale(1)");
    $('.image-on-ipad').css("opacity","1");
    $('.tech-text5').css("animation","fadeInUp");
    $('.text-type').css('display','none');
    $('.tech-text5').css('display','block');
  },
  mouseleave: function(){
    $('.image-on-ipad').css("background-image", "url(/wp-content/themes/khangdien/assets/images/slide-3.jpg)") ;
    $('.image-on-ipad').css("background-size", " contain");
    // $('.image-on-ipad').css("transition", "all 1s ease-in-out");
    $('.image-on-ipad').css("-webkit-transform", " scale(1.1)");
    $('.image-on-ipad').css("transform", " scale(1.1)");
    $('.image-on-ipad').css("-webkit-transition:", " .3s ease-in-out");
    $('.image-on-ipad').css("transition", ".3s ease-in-out");
    $('.image-on-ipad').css("opacity","0");
    $('.text-type').css('display','none');
  }
});
$(".tech6").on({
  mouseenter: function(){
    $('.image-on-ipad').css("background-image", "url(/wp-content/themes/khangdien/assets/images/other/ThietKe-ThongMinh-6.png)") ;
    $('.image-on-ipad').css("background-size", " cover");
    // $('.image-on-ipad').css("transition", "all 0.5s ease-in-out");
    $('.image-on-ipad').css("-webkit-transform", " scale(1)");
    $('.image-on-ipad').css("transform", " scale(1)");
    $('.image-on-ipad').css("opacity","1");
    $('.tech-text6').css("animation","fadeInUp");
    $('.text-type').css('display','none');
    $('.tech-text6').css('display','block');

  },
  mouseleave: function(){
    $('.image-on-ipad').css("background-image", "url(/wp-content/themes/khangdien/assets/images/slide-3.jpg)") ;
    $('.image-on-ipad').css("background-size", " contain");
    // $('.image-on-ipad').css("transition", "all 1s ease-in-out");
    $('.image-on-ipad').css("-webkit-transform", " scale(1.1)");
    $('.image-on-ipad').css("transform", " scale(1.1)");
    $('.image-on-ipad').css("-webkit-transition:", " .3s ease-in-out");
    $('.image-on-ipad').css("transition", ".3s ease-in-out");
    $('.image-on-ipad').css("opacity","0");
    $('.text-type').css('display','none');
  }
});

$(".tech1").on({
   mouseenter: function(){
    $(this).attr('src','/wp-content/themes/khangdien/assets/images/other/1b.png');
    $(this).css('cursor','pointer');
  },
  mouseleave: function(){
    $(this).attr('src','/wp-content/themes/khangdien/assets/images/other/1.png');
  }
});
$(".tech2").on({
   mouseenter: function(){
    $(this).attr('src','/wp-content/themes/khangdien/assets/images/other/2b.png');
    $(this).css('cursor','pointer');
  },
  mouseleave: function(){
    $(this).attr('src','/wp-content/themes/khangdien/assets/images/other/2.png');
  }
});

$(".tech3").on({
   mouseenter: function(){
    $(this).attr('src','/wp-content/themes/khangdien/assets/images/other/3b.png');
    $(this).css('cursor','pointer');
  },
  mouseleave: function(){
    $(this).attr('src','/wp-content/themes/khangdien/assets/images/other/3.png');
  }
});

$(".tech4").on({
   mouseenter: function(){
    $(this).attr('src','/wp-content/themes/khangdien/assets/images/other/4b.png');
    $(this).css('cursor','pointer');
  },
  mouseleave: function(){
    $(this).attr('src','/wp-content/themes/khangdien/assets/images/other/4.png');
  }
});

$(".tech5").on({
   mouseenter: function(){
    $(this).attr('src','/wp-content/themes/khangdien/assets/images/other/5b.png');
    $(this).css('cursor','pointer');
  },
  mouseleave: function(){
    $(this).attr('src','/wp-content/themes/khangdien/assets/images/other/5.png');
  }
});

$(".tech6").on({
   mouseenter: function(){
    $(this).attr('src','/wp-content/themes/khangdien/assets/images/other/7b.png');
    $(this).css('cursor','pointer');
  },
  mouseleave: function(){
    $(this).attr('src','/wp-content/themes/khangdien/assets/images/other/7.png');
  }
});

if (screen.width < 769) {

  $('.open-s').on('click', function() {
    $('.close-s').slideToggle("slow");
    $('.dd-s-contact-footer .dd-b-container').css('padding-top','0');
    $('p.close-s').css('margin','0 2px');
    $('p.close-s').css('padding','0 2px');
    $('.doi-tac p').css('background','#fff');
    $('.doi-tac p').css('border-radius',' 5px');
  });

  $('.tech1').on('click', function() {
    $('.other').css('background','url(/wp-content/themes/khangdien/assets/images/other/ThietKe-ThongMinh-1.jpg)') ;
    $('.other').css("background-size", " cover");
    $('.other').css("background-position", " 50%");
    $('.tech-text1').css('display','block');
    $('.tech-text2').css('display','none');
    $('.tech-text3').css('display','none');
    $('.tech-text4').css('display','none');
    $('.tech-text5').css('display','none');
    $('.tech-text6').css('display','none');
  });
  $('.tech2').on('click', function() {
    $('.other').css('background','url(/wp-content/themes/khangdien/assets/images/other/ThietKe-ThongMinh-2.jpg)') ;
    $('.other').css("background-size", " cover");
    $('.other').css("background-position", " 50%");
    $('.tech-text1').css('display','none');
    $('.tech-text2').css('display','block');
    $('.tech-text3').css('display','none');
    $('.tech-text4').css('display','none');
    $('.tech-text5').css('display','none');
    $('.tech-text6').css('display','none');
  });
  $('.tech3').on('click', function() {
    $('.other').css('background','url(/wp-content/themes/khangdien/assets/images/other/ThietKe-ThongMinh-3.jpg)') ;
    $('.other').css("background-size", " cover");
    $('.other').css("background-position", " 50%");
    $('.tech-text1').css('display','none');
    $('.tech-text2').css('display','none');
    $('.tech-text3').css('display','block');
    $('.tech-text4').css('display','none');
    $('.tech-text5').css('display','none');
    $('.tech-text6').css('display','none');
  });
  $('.tech4').on('click', function() {
    $('.other').css('background','url(/wp-content/themes/khangdien/assets/images/other/ThietKe-ThongMinh-4.jpg)') ;
    $('.other').css("background-size", " cover");
    $('.other').css("background-position", " 50%");
    $('.tech-text1').css('display','none');
    $('.tech-text2').css('display','none');
    $('.tech-text3').css('display','none');
    $('.tech-text4').css('display','block');
    $('.tech-text5').css('display','none');
    $('.tech-text6').css('display','none');
  });
  $('.tech5').on('click', function() {
    $('.other').css('background','url(/wp-content/themes/khangdien/assets/images/other/ThietKe-ThongMinh-5.jpg)') ;
    $('.other').css("background-size", " cover");
    $('.other').css("background-position", " 50%");
    $('.tech-text1').css('display','none');
    $('.tech-text2').css('display','none');
    $('.tech-text3').css('display','none');
    $('.tech-text4').css('display','none');
    $('.tech-text5').css('display','block');
    $('.tech-text6').css('display','none');
  });
  $('.tech6').on('click', function() {
    $('.other').css('background','url(/wp-content/themes/khangdien/assets/images/other/ThietKe-ThongMinh-6.jpg)') ;
    $('.other').css("background-size", " cover");
    $('.other').css("background-position", " 50%");
    $('.tech-text1').css('display','block');
    $('.tech-text2').css('display','none');
    $('.tech-text3').css('display','none');
    $('.tech-text4').css('display','none');
    $('.tech-text5').css('display','none');
    $('.tech-text6').css('display','block');
  });
}

$('.tab_image').on('click',function(){
	$('.tab_image').removeClass('active current');
	$(this).addClass('active current');
});
$('.tab1').click(function(){	
	$('.sub-tab').css('display','none');
	$('.tab-1').css('display','block');
	// $('.tab-1').addClass('active');
});
$('.tab2').click(function(){
	$('.sub-tab').css('display','none');
	$('.tab-2').css('display','block');	
	// $('.tab-2').addClass('active');
});
$('.tab3').click(function(){
	$('.sub-tab').css('display','none');
	$('.tab-3').css('display','block');
	// $('.tab-3').addClass('active');
});
$('.tab4').click(function(){
	$('.sub-tab').css('display','none');
	$('.tab-4').css('display','block');
	// $('.tab-4').addClass('active');
});

$(".tab1").click(function() {
	$('.mat-bang').css("background-image", "url(/wp-content/themes/khangdien/assets/images/mat-bang/masterplan1-2.jpg)");
	$('.fadeInDownShort.go').css("animation-name", "fadeInLeftShort");
	$('.delay-500').css("animation-delay", "0s");
});
$(".tab2").click(function() {
	$('.mat-bang').css("background-image", "url(/wp-content/themes/khangdien/assets/images/mat-bang/masterplan3-3a.jpg)");
	$('.fadeInDownShort.go').css("animation-name", "fadeInDownShort");
	$('.delay-500').css("animation-delay", "0s");
});
$(".tab3").click(function() {
	$('.mat-bang').css("background-image", "url(/wp-content/themes/khangdien/assets/images/mat-bang/masterplan5-23.jpg)");
	$('.fadeInDownShort.go').css("animation-name", "fadeInRightShort");
	$('.delay-500').css("animation-delay", "0s");
});
$(".tab4").click(function() {
	$('.mat-bang').css("background-image", "url(/wp-content/themes/khangdien/assets/images/mat-bang/masterplan24.jpg)");
	$('.fadeInDownShort.go').css("animation-name", "fadeInRightShort");
	$('.delay-500').css("animation-delay", "0s");
});


$('.tab_image').click(function(){
  $(".info-block").removeClass("current");
   var class_name = $(this).attr('class');
   var class_arr = class_name.split(" ");
   var tab = class_arr[1];
   var current = class_arr[3];
  $("#"+tab+" .info-block"). addClass(current);
});
$(".onarea").hover(function(e) {
  if ($(window).width() > 1100) {

      $(".house-text").removeClass("show");
      var t = $(this).attr("data-name"),
          a = e.clientX,
          o = e.clientY,
          i = $(".info-block.current .house-text[data-block='" + t + "']").width();
      $(".info-block.current .house-text[data-block='" + t + "']").innerHeight();
      $(".info-block.current .house-text[data-block='" + t + "']").css({
          left: a + i / 2,
          top: o - 50
      }), $(".info-block.current .house-text[data-block='" + t + "']").addClass("show");
  }
});

$( ".onarea" ).click(function() {
  if ($(window).width() > 1100) {
    var t = $(this).attr("href");
    // alert( t );
    // window.location = t;
  }
});

$(document).ready(function () {
        $('#tab2 .fancybox').fancybox({padding:0});
        $(".carousel").swipe({
          swipe: function(event, direction, distance, duration, fingerCount, fingerData) {
            if (direction == 'left') $(this).carousel('next');
            if (direction == 'right') $(this).carousel('prev');
          },
          allowPageScroll:"vertical"

        });
});


(function($) {
  $.fn.openPopup = function( settings ) {
    var elem = $(this);
    // Establish our default settings
    var settings = $.extend({
      anim: 'fade'
    }, settings);
    elem.show();
    elem.find('.popup-content').addClass(settings.anim+'In');
  }
  
  $.fn.closePopup = function( settings ) {
    var elem = $(this);
    // Establish our default settings
    var settings = $.extend({
      anim: 'fade'
    }, settings);
    elem.find('.popup-content').removeClass(settings.anim+'In').addClass(settings.anim+'Out');
    
    setTimeout(function(){
        elem.hide();
        elem.find('.popup-content').removeClass(settings.anim+'Out')
      }, 500);
  }
    
}(jQuery));

// Click functions for popup
$('.open-popup').click(function(){
  $('#'+$(this).data('id')).openPopup({
    anim: (!$(this).attr('data-animation') || $(this).data('animation') == null) ? 'fade' : $(this).data('animation')
  });
});
$('.close-popup').click(function(){
  $('#'+$(this).data('id')).closePopup({
    anim: (!$(this).attr('data-animation') || $(this).data('animation') == null) ? 'fade' : $(this).data('animation')
  });
});




(function (factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['jquery'], factory);
    } else if (typeof exports === 'object') {
        // CommonJS / nodejs module
        module.exports = factory(require('jquery'));
    } else {
        // Browser globals
        factory(jQuery);
    }
}(function ($) {
    // Namespace all events.
    var eventNamespace = 'waitForImages';

    // Is srcset supported by this browser?
    var hasSrcset = (function(img) {
        return img.srcset && img.sizes;
    })(new Image());

    // CSS properties which contain references to images.
    $.waitForImages = {
        hasImageProperties: [
            'backgroundImage',
            'listStyleImage',
            'borderImage',
            'borderCornerImage',
            'cursor'
        ],
        hasImageAttributes: ['srcset']
    };

    // Custom selector to find all `img` elements with a valid `src` attribute.
    $.expr[':']['has-src'] = function (obj) {
        // Ensure we are dealing with an `img` element with a valid
        // `src` attribute.
        return $(obj).is('img[src][src!=""]');
    };

    // Custom selector to find images which are not already cached by the
    // browser.
    $.expr[':'].uncached = function (obj) {
        // Ensure we are dealing with an `img` element with a valid
        // `src` attribute.
        if (!$(obj).is(':has-src')) {
            return false;
        }

        return !obj.complete;
    };

    $.fn.waitForImages = function () {

        var allImgsLength = 0;
        var allImgsLoaded = 0;
        var deferred = $.Deferred();
        var originalCollection = this;
        var allImgs = [];

        // CSS properties which may contain an image.
        var hasImgProperties = $.waitForImages.hasImageProperties || [];
        // Element attributes which may contain an image.
        var hasImageAttributes = $.waitForImages.hasImageAttributes || [];
        // To match `url()` references.
        // Spec: http://www.w3.org/TR/CSS2/syndata.html#value-def-uri
        var matchUrl = /url\(\s*(['"]?)(.*?)\1\s*\)/g;

        var finishedCallback;
        var eachCallback;
        var waitForAll;

        // Handle options object (if passed).
        if ($.isPlainObject(arguments[0])) {

            waitForAll = arguments[0].waitForAll;
            eachCallback = arguments[0].each;
            finishedCallback = arguments[0].finished;

        } else {

            // Handle if using deferred object and only one param was passed in.
            if (arguments.length === 1 && $.type(arguments[0]) === 'boolean') {
                waitForAll = arguments[0];
            } else {
                finishedCallback = arguments[0];
                eachCallback = arguments[1];
                waitForAll = arguments[2];
            }

        }

        // Handle missing callbacks.
        finishedCallback = finishedCallback || $.noop;
        eachCallback = eachCallback || $.noop;

        // Convert waitForAll to Boolean.
        waitForAll = !! waitForAll;

        // Ensure callbacks are functions.
        if (!$.isFunction(finishedCallback) || !$.isFunction(eachCallback)) {
            throw new TypeError('An invalid callback was supplied.');
        }

        this.each(function () {
            // Build a list of all imgs, dependent on what images will
            // be considered.
            var obj = $(this);

            if (waitForAll) {

                // Get all elements (including the original), as any one of
                // them could have a background image.
                obj.find('*').addBack().each(function () {
                    var element = $(this);

                    // If an `img` element, add it. But keep iterating in
                    // case it has a background image too.
                    if (element.is('img:has-src') &&
                        !element.is('[srcset]')) {
                        allImgs.push({
                            src: element.attr('src'),
                            element: element[0]
                        });
                    }

                    $.each(hasImgProperties, function (i, property) {
                        var propertyValue = element.css(property);
                        var match;

                        // If it doesn't contain this property, skip.
                        if (!propertyValue) {
                            return true;
                        }

                        // Get all url() of this element.
                        while (match = matchUrl.exec(propertyValue)) {
                            allImgs.push({
                                src: match[2],
                                element: element[0]
                            });
                        }
                    });

                    $.each(hasImageAttributes, function (i, attribute) {
                        var attributeValue = element.attr(attribute);
                        var attributeValues;

                        // If it doesn't contain this property, skip.
                        if (!attributeValue) {
                            return true;
                        }

                        allImgs.push({
                            src: element.attr('src'),
                            srcset: element.attr('srcset'),
                            element: element[0]
                        });
                    });
                });
            } else {
                // For images only, the task is simpler.
                obj.find('img:has-src')
                    .each(function () {
                    allImgs.push({
                        src: this.src,
                        element: this
                    });
                });
            }
        });

        allImgsLength = allImgs.length;
        allImgsLoaded = 0;

        // If no images found, don't bother.
        if (allImgsLength === 0) {
            finishedCallback.call(originalCollection);
            deferred.resolveWith(originalCollection);
        }

        // Now that we've found all imgs in all elements in this,
        // load them and attach callbacks.
        $.each(allImgs, function (i, img) {

            var image = new Image();
            var events =
              'load.' + eventNamespace + ' error.' + eventNamespace;

            // Handle the image loading and error with the same callback.
            $(image).one(events, function me (event) {
                // If an error occurred with loading the image, set the
                // third argument accordingly.
                var eachArguments = [
                    allImgsLoaded,
                    allImgsLength,
                    event.type == 'load'
                ];
                allImgsLoaded++;

                eachCallback.apply(img.element, eachArguments);
                deferred.notifyWith(img.element, eachArguments);

                // Unbind the event listeners. I use this in addition to
                // `one` as one of those events won't be called (either
                // 'load' or 'error' will be called).
                $(this).off(events, me);

                if (allImgsLoaded == allImgsLength) {
                    finishedCallback.call(originalCollection[0]);
                    deferred.resolveWith(originalCollection[0]);
                    return false;
                }

            });

            if (hasSrcset && img.srcset) {
                image.srcset = img.srcset;
                image.sizes = img.sizes;
            }
            image.src = img.src;
        });

        return deferred.promise();

    };
}));
(function($) {
  $(document).ready(function() {
    var $window = $(window).eq(0);
        var $body = $('body').eq(0);
        var flashscreen = $('.dd-s-flashscreen');
    var textLogo = $('.dd-text-logo');
      var fpNav;
      var contactSlider = $('.dd-contact-slider');

    // init the flash screen
    flashscreen.addClass('start');
      // loading all images of the page
      $('body').waitForImages(function() {
        setTimeout(function(){
        flashscreen.fadeOut(1000, function(){
          $(this).remove();
        });
      },1000);
    });

    // hide slider and show it back after the fullpage is run.
    var bluePrintSlider = $('.dd-blueprint-slider');
    var gallerySlider = $('.dd-b-gallery-slider');
    bluePrintSlider.hide();
    gallerySlider.hide();
    // show and init slick sliders
    bluePrintSlider.show().on('afterChange', function(event, slick, direction){
      var curSlide = bluePrintSlider.slick("slickCurrentSlide");
      var $slides = bluePrintSlider.slick("getSlick").$slides;
      var direction = $slides.eq(curSlide).data("direction");
      // change compass here
      // do something
    }).slick({
      arrows: false,
      dots: true,
      infinite: true,
      speed: 500,
      fade: true,
      cssEase: 'linear',
      autoplay: false,
        autoplaySpeed: 6000,
        initialSlide: 0
    });

    var contentGalleryPopin = $('.dd-b-gallery-popin');
    var placeholder = contentGalleryPopin.find('.dd-placeholder');
    gallerySlider.show().on('init', function(event, slick, direction) {
      var headings = ['Hồ bơi', 'Pool Skybar', 'Công Viên', 'Vườn Cổ Tích', 'Garden Coffee', 'Vườn nướng BBQ', 'Khu vui chơi công cộng'];
      gallerySlider.find('.slick-dots li').each(function(i) {
        var $this = $(this);
        $this.append('<span class="js-open-content dd-hotpot" data-index="' + i + '"></span>').find('button').attr('data-heading', headings[i]);
      });
      
      var closeContentBtn = contentGalleryPopin.find('.js-close-content');
      var galleryWrapper = $('.dd-s-gallery');
      var openContentBtn = galleryWrapper.find('.js-open-content');
      openContentBtn.click(function(){
        var $this = $(this);
        var getContent = $this.parents('.slick-slider').find('.slick-slide').eq($this.data('index')).find('.dd-b-body').html();
        placeholder.html(getContent);
            contentGalleryPopin.fadeIn();
            return false;
          });
      closeContentBtn.click(function(){
            contentGalleryPopin.fadeOut(function(){
              placeholder.html('');
            });
            return false;
          });
    }).on('beforeChange', function(event, slick, direction){
      contentGalleryPopin.fadeOut(function(){
          placeholder.html('');
        });
    }).slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      dots: true,
      infinite: true,
      cssEase: 'linear',
      autoplay: true,
        autoplaySpeed: 10000
    });

    
        // when click on the page
    $(document).bind('click', function() {
      $(this).removeClass('open');
    });

    // when touch on the page
    $(document).bind("touchstart",function() {
                
    });

    // form filled inputs
    $(document).on('change', 'input[type="text"], textarea', function() {
      if ('' !== $(this).val()) {
        $(this).addClass('has-value').parent().addClass('input--filled');
      } else {
        $(this).removeClass('has-value').parent().removeClass('input--filled');
      }
    });
  });
})(jQuery);


$(document).ready(function() {
  $('.click2play').on('click', function(ev) {
    $(".embed-responsive-item")[0].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
    $(this).css('display','none');
    $('.click2pause').css('display','block');
    ev.preventDefault(); 
  });
  $('.click2pause').on('click', function(ev) {
    $(".embed-responsive-item")[0].contentWindow.postMessage('{"event":"command","func":"' + 'playVideo' + '","args":""}', '*');
    $(this).css('display','none');
    $('.click2play').css('display','block');
    ev.preventDefault(); 
  });

//play when video is visible
var videos = document.getElementsByTagName("embed-responsive-item"), fraction = 0.8;

function checkScroll() {


  for(var i = 0; i < videos.length; i++) {
    var video = videos[i];

    var x = 0,
        y = 0,
        w = video.width,
        h = video.height,
        r, //right
        b, //bottom 
        visibleX, visibleY, visible,
        parent;


    parent = video;
    while (parent && parent !== document.body) {
      x += parent.offsetLeft;
      y += parent.offsetTop;
      parent = parent.offsetParent;
    }

    r = x + parseInt(w);
    b = y + parseInt(h);


    visibleX = Math.max(0, Math.min(w, window.pageXOffset + window.innerWidth - x, r - window.pageXOffset));
    visibleY = Math.max(0, Math.min(h, window.pageYOffset + window.innerHeight - y, b - window.pageYOffset));


    visible = visibleX * visibleY / (w * h);


    if (visible > fraction) {
      playVideo();
    } else {
      pauseVideo();

    }
  }

};

window.addEventListener('scroll', checkScroll, false);
window.addEventListener('resize', checkScroll, false);

//check at least once so you don't have to wait for scrolling for the video to start
window.addEventListener('load', checkScroll, false);
checkScroll();

});