jQuery('.hidden-phone').click(function(){
  var btnM = jQuery(this);
  var phone = btnM.data('phone');
  jQuery(btnM).html('<a href="tel:' + phone + '">' + phone + '</a>');
  btnM.removeClass('hidden-phone');
});