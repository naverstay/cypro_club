var callback_popup, body, header, wnd, doc, bsTimer;

$(function ($) {
    header = $('.header');
    doc = $(document);
    wnd = $(window);
    body = $('body');

    callback_popup = $('#callback_popup').dialog({
        autoOpen: false,
        modal: true,
        closeOnEscape: true,
        closeText: '',
        dialogClass: 'dialog_close_butt_mod_1 dialog_g_size_1 ',
        appendTo: '.wrapper',
        width: 570,
        draggable: true,
        open: function (event, ui) {

        },
        close: function (event, ui) {

        }
    });

    body.delegate('.callbackBtn', 'click', function () {
        callback_popup.dialog('open');
        return false;
    });

    $('.mobMenuBtn').on('click', function () {
        body.toggleClass('open_menu');
        return false;
    });

    $('.validateMe').validationEngine({
        scroll: false,
        showPrompts: false,
        showArrow: false,
        addSuccessCssClassToField: 'success',
        addFailureCssClassToField: 'error',
        parentFormClass: '.orderForm',
        parentFieldClass: '.formCell',
        promptPosition: "centerRight",
        autoHidePrompt: true,
        autoHideDelay: 2000,
        autoPositionUpdate: true,
        addPromptClass: 'relative_mode',
        showOneMessage: false
    });

    $('.reviewSlider').each(function (ind) {
        var sld = $(this);

        sld.slick({
            dots: true,
            infinite: false,
            arrows: true,
            speed: 600,
            zIndex: 1,
            initialSlide: 0,
            slide: '.slide',
            prevArrow: sld.closest('.reviewHolder').find('.slider_prev'),
            nextArrow: sld.closest('.reviewHolder').find('.slider_next'),
            appendDots: sld.closest('.reviewHolder').find('.slider_dots'),
            slidesToShow: 1,
            slidesToScroll: 1,
            touchThreshold: 10
        });
    });

    wnd.on('scroll', function () {
        header.toggleClass('header_small', doc.scrollTop() > 60);
    });

    setSlideBS($('.BSimg'));

    all_dialog_close();

});

function setSlideBS(slides) {
    $(slides).each(function () {
        var sctn = $(this);
        sctn.addClass('backstretched').backstretch(sctn.find('img').attr('src'), {fade: 1500});
    });
}

function all_dialog_close() {
    body.on('click', '.ui-widget-overlay', all_dialog_close_gl);
}

function all_dialog_close_gl() {
    $(".ui-dialog-content").each(function () {
        var $this = $(this);
        if (!$this.parent().hasClass('always_open')) {
            $this.dialog("close");
        }
    });
}

$(window).on('resize', function () {

    $(".ui-dialog-content.popup").dialog("option", "position", {
        my: "center center",
        at: "center center",
        of: window
    });


    clearTimeout(bsTimer);

    bsTimer = setTimeout(function () {
        setSlideBS($('.backstretched'));
    }, 10);


});