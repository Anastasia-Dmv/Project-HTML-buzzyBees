$('.js-ham-menu').on('click', function () {
  if ($(this).hasClass('active')) {
    $(this).removeClass('active');
    $('.js-header__nav-wrap').addClass('close').removeClass('open');
  } else {
    $(this).addClass('active');
    $('.js-header__nav-wrap').addClass('open').removeClass('close');
  }
});

$(window).on('load resize', function () {
  const ww = window.innerWidth;

  if (ww > 959 && $('.js-header__nav-wrap').hasClass('close')) {
    $('.js-header__nav-wrap').removeClass('close');
  }
});
