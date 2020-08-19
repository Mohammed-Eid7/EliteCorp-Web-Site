$(function () {
    'use strict';
    var widowH = $(window).height(),
        upperh = $('.upper-ber').outerHeight(),
        navh = $('.navbar').outerHeight(),
        testem = $('.testimonl').outerHeight();
   
    $('.slider, .slider .carousel-item').height(widowH - (upperh + navh));
    $('.features-word ul li').on('click', function () {
        $(this).addClass('active').siblings().removeClass('active');
        if ($(this).data('class') === '.all') {
            $('.features-word .rowimg').css('opacity', 1);
        } else {
            $('.features-word .rowimg').css('opacity', 0.1);
            $($(this).data('class')).parent().css('opacity', 1);
        }
    });
    $('.testimonl .carousel-inner').height(testem);
    $('.testimonl .active').each(function () {
        if ($(this).is(':last-child')) {
            $('.testimonl .back:first-of-type').addClass('baccolored').siblings().removeClass('baccolored').addClass('backblack');
        }
    });
});
