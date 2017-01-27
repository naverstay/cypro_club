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

    $('.objectSlider').each(function (ind) {
        $(this).slick({
            dots: false,
            infinite: false,
            arrows: true,
            speed: 600,
            zIndex: 1,
            initialSlide: 0,
            slide: '.slide',
            // prevArrow: sld.closest('.reviewHolder').find('.slider_prev'),
            // nextArrow: sld.closest('.reviewHolder').find('.slider_next'),
            // appendDots: sld.closest('.reviewHolder').find('.slider_dots'),
            slidesToShow: 3,
            slidesToScroll: 1,
            // autoplay: true,
            // autoplaySpeed: 2000,
            touchThreshold: 10,
            responsive: [
                {
                    breakpoint: 960,
                    settings: {
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 620,
                    settings: {
                        slidesToShow: 1
                    }
                }
            ]
        });
    });

    $('.serviceSlider').each(function (ind) {
        $(this).slick({
            dots: false,
            infinite: true,
            arrows: true,
            speed: 600,
            zIndex: 1,
            initialSlide: 0,
            slide: '.slide',
            // prevArrow: sld.closest('.reviewHolder').find('.slider_prev'),
            // nextArrow: sld.closest('.reviewHolder').find('.slider_next'),
            // appendDots: sld.closest('.reviewHolder').find('.slider_dots'),
            slidesToShow: 4,
            slidesToScroll: 1,
            // autoplay: true,
            // autoplaySpeed: 2000,
            touchThreshold: 10,
            responsive: [
                {
                    breakpoint: 960,
                    settings: {
                        slidesToShow: 3
                    }
                },
                {
                    breakpoint: 720,
                    settings: {
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1
                    }
                }
            ]
        });
    });

    $(".objectMain").fancybox();

    setSlideBS($('.slick-initialized .BSimg'));

    $('body').delegate('.objectThumb', 'click', function () {
        var firedEl = $(this);

        firedEl.closest('.object_unit').find('.objectMain img').attr('src', firedEl.find('img').attr('src'));

        return false;
    });

    $('.sendMailForm').on('submit', function () {
        var form = $(this);

        var msg = form.serialize() + '&form_title=' + form.find('.form_title').text();

        console.log(form.find('.form_title').text(), msg);
        
        $.ajax({
            type: form.attr('method'),
            url: form.attr('action'),
            data: msg,
            success: function (data) {
                alert('Сообщение отправлено');
                form.trigger('reset').closest('.ui-dialog').find('.ui-dialog-titlebar-close').click();
            },
            error: function (xhr, str) {
                alert('Возникла ошибка: ' + xhr.responseCode);
            }
        });

        return false;
    });

});