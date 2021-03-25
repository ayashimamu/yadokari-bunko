$("#hamburger").click(function () {
  $(this).toggleClass("active");
  $(".hamburger-menu").toggleClass("open");
});
$(".js_smooth_scroll").click(function
  () {
  const clicked = this;
  const scrollTargetSelector = $(this).
    data("scroll-target");
  var offset = $(scrollTargetSelector).
    offset().top;
  $('html,body').animate({
    scrollTop: offset
  });
});
$(".js_smooth_scroll_hamburger").click(function
  () {
  $("#hamburger").toggleClass("active")
  $(".hamburger-menu").toggleClass("open");
  const clicked = this;
  const scrollTargetSelector = $(this).
    data("scroll-target");
  var offset = $(scrollTargetSelector).
    offset().top;
  $('html,body').animate({
    scrollTop: offset
  });
});
$(function () {
  $('#slider-top').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      asNavFor: '#slider-bottom'
    });
    $('#slider-bottom').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      asNavFor: '#slider-top',
      centerMode: true,
      focusOnSelect: true,
  });
});
