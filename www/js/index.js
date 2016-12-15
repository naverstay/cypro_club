$(function ($) {

    $('.mainSlider')
        .on('init', function (sld) {
            setSlideBS($(sld.target).find('.slide'));
        }).slick({
        dots: false,
        infinite: false,
        arrows: false,
        speed: 600,
        zIndex: 1,
        initialSlide: 0,
        slide: '.slide',
        // prevArrow: sld.closest('.reviewHolder').find('.slider_prev'),
        // nextArrow: sld.closest('.reviewHolder').find('.slider_next'),
        // appendDots: sld.closest('.reviewHolder').find('.slider_dots'),
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        touchThreshold: 10
    });

    $('.promoSlider')
        .on('init', function (sld) {
            setSlideBS($(sld.target).find('.slide'));
        }).slick({
        dots: false,
        infinite: false,
        arrows: false,
        speed: 600,
        zIndex: 1,
        initialSlide: 0,
        slide: '.slide',
        // prevArrow: sld.closest('.reviewHolder').find('.slider_prev'),
        // nextArrow: sld.closest('.reviewHolder').find('.slider_next'),
        // appendDots: sld.closest('.reviewHolder').find('.slider_dots'),
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        touchThreshold: 10
    });

});