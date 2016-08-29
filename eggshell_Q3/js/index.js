var pass_siteA = true;
var pass_siteB = true;
var pass_siteC = true;

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

            var img_src = 'img/index/want01.gif';
            add_active($('.participate'), img_src, 'act-hiding');
            replace_class($('.participate'), 'want-to', 'how-to');
            pass_siteA = false;
        } else {
            // 第二階段
            if (document.body.scrollTop >= ($('.upload-video-link').offset().top - $('.upload-video-link').height())) {
                if (pass_siteB) {

                    var img_src = 'img/index/product.gif';
                    add_active($('.participate'), img_src, 'act-hiding');
                    replace_class($('.participate'), 'product', 'want-to');
                    pass_siteB = false;
                } else {
                    // 第三階段
                    if (document.body.scrollTop >= ($('#product-intro').offset().top - $('#product-intro').height())) {
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
    	replace_class($('.participate'), 'how-to', 'back-top');
        move_to($('body'), -100);
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
            $('.drop-down-content[data-id="' + data_id + '"]').css('display', 'none');
        } else {
            $(this).find('.ic-btn').attr('data', 'img/index/cut06/ic_remove_24px.svg');
            $('.drop-down-content[data-id="' + data_id + '"]').css('display', 'block');
            move_to($('.drop-down-content[data-id="' + data_id + '"]'), -($('header').height() + 75));
        }
        $(this).toggleClass('active');
    });

    $('.popup-award-close, .popup-award-opacity').click(function() {
        $('.popup-award').css('display', 'none');
    });
});
