function setSlideBS(slides) {
    $(slides).each(function () {
        var sctn = $(this);
        sctn.addClass('backstretched').backstretch(sctn.find('img').attr('src'), {fade: 1500});
    });
}

function init_page_script() {

    var s = [
        ['script1.js', 'plugin1.js',
            function () {
                plugin1_callback()
            }
        ],
        function (e) {
            script1_callback(e)
        }, 'script2.js', function () {
            script2_callback()
        }
    ];

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

    $('.factoidSlider').each(function (ind) {
        
        $(this).on('init', function (sld) {
            setSlideBS($(sld.target).closest('.factoidSection').find('.factoidImg'));
        }).slick({
            dots: true,
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
            // autoplay: true,
            autoplaySpeed: 2000,
            touchThreshold: 10
        });
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
        var firedEl = $(this), 
            unit = firedEl.closest('.object_unit'),
            url = firedEl.find('img').attr('src').replace(/(\.[a-zA-Z]+)$/, 'b$1');

        unit.find('.object_img_loader .objectMain[href="' + url + '"]').addClass('current').siblings().removeClass('current');
        
        return false;
    });

}

init_page_script();
