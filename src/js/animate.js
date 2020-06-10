$(function () {
  $('section').addClass('wow fadeIn');
  $('section').attr('data-wow-delay', '50ms');
  $('section').attr('data-wow-duration', '1500ms');
});

$(document).ready(function () {
  $('a[href*="#"]').click(function () {
    var $target = $(this.hash);
    if ($target.length) {
      var targetOffset = $target.offset().top;
      $('html,body').animate(
        {
          scrollTop: targetOffset,
        },
        3000,
      );
      return false;
    }
  });
});

new WOW().init();