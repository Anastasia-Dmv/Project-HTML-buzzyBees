const ww = window.innerWidth;
if (ww < 1279) {
    $('.js-ham-menu').on('click', function () {
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
            document
                .querySelector('.logo-link--reverse')
                .classList.remove('open');
            document
                .querySelector('.js-header__logo')
                .classList.remove('close');
            $('.js-header__nav-wrap').addClass('close').removeClass('open');
            $('body').css('overflow', 'visible');
        } else {
            $(this).addClass('active');
            document.querySelector('.js-header__logo').classList.add('close');
            document.querySelector('.logo-link--reverse').classList.add('open');
            $('.js-header__nav-wrap').addClass('open').removeClass('close');
            $('body').css('overflow', 'hidden');
        }
    });
    $('.header__nav-link').on('click', function () {
        document.querySelector('.js-header__logo').classList.remove('close');
        $('.js-ham-menu').removeClass('active');
        $('.js-header__nav-wrap').addClass('close').removeClass('open');
        $('body').css('overflow', 'visible');
    });
    $('.header__nav-lesson-link').on('click', function () {
        document.querySelector('.js-header__logo').classList.remove('close');
        $('.js-ham-menu').removeClass('active');
        $('.js-header__nav-wrap').addClass('close').removeClass('open');
        $('body').css('overflow', 'visible');
    });
}
if (ww > 1279 && $('.js-header__nav-wrap').hasClass('close')) {
    $('.js-header__nav-wrap').removeClass('close');
}