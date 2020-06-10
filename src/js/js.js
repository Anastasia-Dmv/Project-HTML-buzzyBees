$(function () {
  $('.slider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
  });
  $('section').addClass('wow fadeIn');
  $('section').attr('data-wow-delay', '50ms');
  $('section').attr('data-wow-duration', '1500ms');
});

$(document).ready(function () {
  $('.toggle-text').slideToggle(0); // скрывает текст
  $('.about-toggle_show').click(function () {
    $(this).prev('.toggle-text').slideToggle(200);
    if ($(this).hasClass('active')) {
      $(this).html('Свернуть');
    } else {
      $(this).html('Читать дальше');
    }
    $(this).toggleClass('active');
  });
  $('a[href*="#"]').click(function () {
    var $target = $(this.hash);
    // if the section exists
    if ($target.length) {
      var targetOffset = $target.offset().top;
      $('html,body').animate(
        {
          scrollTop: targetOffset,
        },
        2000,
      );
      return false;
    }
  });
});

new WOW().init();
