var header = $('header');
var headerY = 0;

$('.hover').bind('touchstart touchend', function(e) {
    e.preventDefault();
    $(this).toggleClass('hover_effect');
});

window.setInterval(ratchet, 30);

function ratchet(){
  headerY = (window.scrollY * 0.5)
  if (headerY < 300){
    header.css("transform","translateY(-" + headerY + "px)");
  };
};

$(function () {
  $('[data-toggle="tooltip"]').tooltip()
});

$('nav li').click(function() {
  $('html, body').animate({ scrollTop: $($(this.children[0]).attr('href')).offset().top + 'px' }, 500);
});