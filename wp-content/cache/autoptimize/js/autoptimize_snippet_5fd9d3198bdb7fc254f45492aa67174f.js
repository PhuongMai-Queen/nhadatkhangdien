jQuery('.hidden-phone').click(function(){var btnM=jQuery(this);var phone=btnM.data('phone');jQuery(btnM).html('<a href="tel:'+phone+'">'+phone+'</a>');btnM.removeClass('hidden-phone');});(function($){$(document).ready(function(){$(".home_news_main").on('click','.paginate_links a',function(e){e.preventDefault();var hrefThis=$(this).attr('href');var paged=hrefThis.match(/\/\d+\//)[0];paged=paged.match(/\d+/)[0];if(!paged)paged=1;console.log(hrefThis);$.ajax({type:"post",dataType:"json",url:devvn_array.admin_ajax,data:{action:"ajax_load_post",ajax_paged:paged,nonce:devvn_array.load_post_nonce},context:this,beforeSend:function(){$('.home_news_main').addClass('active');},success:function(response){console.log(response);if(response.success){$(response.data).addClass('holder');$(".home_news_main").empty();$(".home_news_main").append($(response.data));}
$('.home_news_main').removeClass('active');}});});});})(jQuery);