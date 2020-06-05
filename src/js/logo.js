$('.js-ham-menu').on('click', function () {
  if ($('.js-header__logo').hasClass('active')) {
    $('.js-header__logo').removeClass('active');
    $('.js-header__nav-wrap').addClass('close').removeClass('open');
  } else {
    $('.js-header__logo').addClass('active');
    $('.js-header__nav-wrap').addClass('open').removeClass('close');
  }
});
$(window).on('load resize', function () {
  const ww = window.innerWidth;

  if (ww > 959 && $('.js-header__nav-wrap').hasClass('close')) {
    $('.js-header__nav-wrap').removeClass('close');
  }
});
