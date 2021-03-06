var pass_siteA = true;
var pass_siteB = true;
var pass_siteC = true;
var flexsliderInterval;

function add_active(obj, img_src, action) {
    obj.addClass(action);
    obj.find('img').attr('src', img_src);
    setTimeout(function() {
        obj.removeClass(action);
    }, 1000);
}

function replace_class(obj, target, src) {
    obj.removeClass(src);
    obj.addClass(target);
}

function listen_event_btn() {
    var pos = $(document).scrollTop();
    // 第一階段
    if (pos >= ($('.step-text').offset().top - $('.step-text').height())) {
        if (pass_siteA) {

            var img_src = 'img/index/want01.gif';
            add_active($('.participate'), img_src, 'act-hiding');
            replace_class($('.participate'), 'want-to', 'how-to');
            pass_siteA = false;
        } else {
            // 第二階段
            if (pos >= ($('.upload-video-link').offset().top - $('.upload-video-link').height())) {
                if (pass_siteB) {

                    var img_src = 'img/index/product.gif';
                    add_active($('.participate'), img_src, 'act-hiding');
                    replace_class($('.participate'), 'product', 'want-to');
                    pass_siteB = false;
                } else {
                    // 第三階段
                    if (pos >= ($('#product-intro').offset().top - $('#product-intro').height())) {
                        if (pass_siteC) {

                            var img_src = 'img/index/back_top.gif';
                            add_active($('.participate'), img_src, 'act-hiding');
                            replace_class($('.participate'), 'back-top', 'product');
                            pass_siteC = false;
                        } else {
                            // 第四階段
                        }
                    } else {
                        if (!pass_siteC) {
                            var img_src = 'img/index/product.gif';
                            add_active($('.participate'), img_src, 'act-hiding');
                            replace_class($('.participate'), 'product', 'back-top');
                            pass_siteC = true;
                        }
                    }
                }
            } else {
                if (!pass_siteB) {

                    var img_src = 'img/index/want01.gif';
                    add_active($('.participate'), img_src, 'act-hiding');
                    replace_class($('.participate'), 'want-to', 'product');
                    pass_siteB = true;
                }
            }
        }
    } else {
        if (!pass_siteA) {

            var img_src = 'img/index/how01.gif';
            add_active($('.participate'), img_src, 'act-hiding');
            replace_class($('.participate'), 'how-to', 'want-to');
            pass_siteA = true;
        }
    }
}

function set_flexslider() {
    $('.flexslider').flexslider({
        animation: "slide",
        slideshow: false
    });

    flexsliderInterval = setInterval(function() {
        $('.flex-next').click();
    }, 5000);

    $('.slides-btn-prev').click(function() {
        $('.flex-prev').click();
    });
    $('.slides-btn-next').click(function() {
        $('.flex-next').click();
    });
}

$(window).load(function() {
    window.onscroll = function() {
        listen_event_btn();
    };

    $('body').on('click', '.how-to', function() {
        move_to($('.step-text'), -75);
        ga('send', 'event', '首頁', 'Click', '如何參加(引導鍵)');
    });

    $('body').on('click', '.upload-link-btn, .want-to', function() {
        move_to($('.upload-video-link'), -100);
        ga('send', 'event', '首頁', 'Click', '馬上參加(引導鍵)');
    });

    $('body').on('click', '.product', function() {
        move_to($('#product-intro'), -100);
        ga('send', 'event', '首頁', 'Click', '開心玩樂秘訣大公開(引導鍵)');
    });

    $('body').on('click', '.back-top', function() {
        move_to($('body'), -100);
        ga('send', 'event', '首頁', 'Click', '回頂(引導鍵)');
    });
});

$(document).ready(function() {

    set_flexslider();

    $('.index-video').click(function() {

        var data_id = $(this).attr('data-id');

        $('#thumbnail-' + data_id + ' > img').click();
    });

    $('.activity-rule > .drop-down-btn').click(function() {
        var data_id = $(this).attr('data-id');
        var is_btn_active = $(this).hasClass('active');

        if (is_btn_active) {
            $(this).find('.ic-btn').attr('data', 'img/index/cut06/ic_add_24px.svg');
            $('.drop-down-content[data-id="' + data_id + '"]').css('display', 'none');
        } else {
            $(this).find('.ic-btn').attr('data', 'img/index/cut06/ic_remove_24px.svg');
            $('.drop-down-content[data-id="' + data_id + '"]').css('display', 'block');
            move_to($('.drop-down-content[data-id="' + data_id + '"]'), -($('header').height() + 75));
        }
        $(this).toggleClass('active');
    });

    $('.show-popup-award').click(function() {
        $('.popup-award').css('display', 'block');
        $('body').css('overflow', 'hidden');
    });

    $('.popup-award-close, .popup-award-opacity').click(function() {
        $('.popup-award').css('display', 'none');
        $('body').css('overflow', 'auto');
    });
});
