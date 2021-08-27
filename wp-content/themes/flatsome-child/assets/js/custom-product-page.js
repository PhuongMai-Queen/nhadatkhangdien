jQuery('.view-more-cyan').click(function(){
  var btnM = jQuery(this);
  if(!jQuery('.view-more-desc').hasClass('expand_div')){
    jQuery(btnM).html('<span>Thu gọn</span>  <i class="fa fa-angle-up" aria-hidden="true"></i>');
    jQuery('.view-more-desc').addClass('expand_div');
  } else {
    jQuery(btnM).html('<span>Xem thêm</span>  <i class="fa fa-angle-down" aria-hidden="true"></i>');
    jQuery('.view-more-desc').removeClass('expand_div');

  }
});

var acc = document.getElementsByClassName("accordion");
var i;
for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}