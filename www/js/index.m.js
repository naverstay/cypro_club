function setSlideBS(a){$(a).each(function(){var a=$(this);a.addClass("backstretched").backstretch(a.find("img").attr("src"),{fade:1500})})}function init_page_script(){$(".mainSlider").on("init",function(a){setSlideBS($(a.target).find(".slide"))}).slick({dots:!1,infinite:!1,arrows:!1,speed:600,zIndex:1,initialSlide:0,slide:".slide",slidesToShow:1,slidesToScroll:1,autoplay:!0,autoplaySpeed:2e3,touchThreshold:10}),$(".promoSlider").on("init",function(a){setSlideBS($(a.target).find(".slide"))}).slick({dots:!1,infinite:!1,arrows:!1,speed:600,zIndex:1,initialSlide:0,slide:".slide",slidesToShow:1,slidesToScroll:1,autoplay:!0,autoplaySpeed:2e3,touchThreshold:10}),$(".objectSlider").each(function(a){$(this).slick({dots:!1,infinite:!1,arrows:!0,speed:600,zIndex:1,initialSlide:0,slide:".slide",slidesToShow:3,slidesToScroll:1,touchThreshold:10,responsive:[{breakpoint:960,settings:{slidesToShow:2}},{breakpoint:620,settings:{slidesToShow:1}}]})}),$(".serviceSlider").each(function(a){$(this).slick({dots:!1,infinite:!0,arrows:!0,speed:600,zIndex:1,initialSlide:0,slide:".slide",slidesToShow:4,slidesToScroll:1,touchThreshold:10,responsive:[{breakpoint:960,settings:{slidesToShow:3}},{breakpoint:720,settings:{slidesToShow:2}},{breakpoint:480,settings:{slidesToShow:1}}]})}),$(".objectMain").fancybox(),setSlideBS($(".slick-initialized .BSimg")),$("body").delegate(".objectThumb","click",function(){var a=$(this);return a.closest(".object_unit").find(".objectMain img").attr("src",a.find("img").attr("src").replace(/(\.[a-zA-Z]+)$/,"b$1")),!1})}init_page_script();