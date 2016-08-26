var pass_siteA = true;
var pass_siteB = true;

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

    // 第一階段
    if (document.body.scrollTop >= ($('.step-text').offset().top - $('.step-text').height())) {
        if (pass_siteA) {

            var img_src = 'img/index/event_btn_B.gif';
            add_active($('.participate'), img_src, 'act-hiding');
            replace_class($('.participate'), 'want-to', 'how-to');
            pass_siteA = false;
        } else {
            // 第二階段
            if (document.body.scrollTop >= ($('.upload-video-link').offset().top - $('.upload-video-link').height())) {
                if (pass_siteB) {

                    var img_src = 'img/index/event_btn_C.gif';
                    add_active($('.participate'), img_src, 'act-hiding');
                    replace_class($('.participate'), 'product', 'want-to');
                    pass_siteB = false;
                } else {
                    // 第三階段
                }
            } else {
                if (!pass_siteB) {

                    var img_src = 'img/index/event_btn_B.gif';
                    add_active($('.participate'), img_src, 'act-hiding');
                    replace_class($('.participate'), 'want-to', 'product');
                    pass_siteB = true;
                }
            }
        }
    } else {
        if (!pass_siteA) {

            var img_src = 'img/index/event_btn_A.gif';
            add_active($('.participate'), img_src, 'act-hiding');
            replace_class($('.participate'), 'how-to', 'want-to');
            pass_siteA = true;
        }
    }
}

$(window).load(function() {
    window.onscroll = function() {
        listen_event_btn();
    };

    $('.flexslider').flexslider({
        animation: "slide"
    });


    $('body').on('click', '.how-to', function() {
        move_to($('.step-text'), -100);
    });

    $('body').on('click', '.upload-link-btn, .want-to', function() {
        move_to($('.upload-video-link'), -100);
    });

    $('body').on('click', '.product', function() {
        move_to($('#product-intro'), -100);
        replace_class($('.participate'), 'back-top', 'product');
    });

    $('body').on('click', '.back-top', function() {
        move_to($('body'), -100);
        replace_class($('.participate'), 'how-to', 'back-top');
    });
});

$(document).ready(function() {

    $('.index-video').click(function() {

        var data_id = $(this).attr('data-id');

        $('#thumbnail-' + data_id + ' > img').click();
    });

    $('.slides-btn-prev').click(function() {
        $('.flex-prev').click();
    });
    $('.slides-btn-next').click(function() {
        $('.flex-next').click();
    });

    $('.activity-rule > .drop-down-btn').click(function() {
        var data_id = $(this).attr('data-id');
        var is_btn_active = $(this).hasClass('active');

        if (is_btn_active) {
            $(this).find('.ic-btn').attr('data', 'img/index/cut06/ic_add_24px.svg');
            $('.drop-down-content[data-id="' + data_id + '"]').css('display', 'none')
        } else {
            $(this).find('.ic-btn').attr('data', 'img/index/cut06/ic_remove_24px.svg');
            $('.drop-down-content[data-id="' + data_id + '"]').css('display', 'block');
        }
        $(this).toggleClass('active');
    });

    $('.popup-award-close, .popup-award-opacity').click(function() {
    	$('.popup-award').css('display', 'none');
    });
});
