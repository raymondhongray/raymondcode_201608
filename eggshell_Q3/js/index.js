var pass_siteA = true;
var pass_siteB = true;

function add_active(obj, img_src, action) {
    obj.addClass(action);
    obj.find('img').attr('src', img_src);
    setTimeout(function() {
        obj.removeClass(action);
    }, 1000);
}

function listen_event_btn() {
    console.log(document.body.scrollTop);
    // 第一階段
    if (document.body.scrollTop >= ($('.show-videos').offset().top - $('.show-videos').height())) {
        if (pass_siteA) {

            var img_src = 'img/index/event_btn_B.png';
            add_active($('.participate'), img_src, 'rotate-yAxis');
            pass_siteA = false;
        } else {
            // 第二階段
            if (document.body.scrollTop >= ($('.upload-video-link').offset().top - $('.upload-video-link').height())) {
                if (pass_siteB) {

                    var img_src = 'img/index/event_btn_C.png';
                    add_active($('.participate'), img_src, 'rotate-yAxis');
                    pass_siteB = false;
                } else {
                    // 第三階段
                }
            } else {
                if (!pass_siteB) {

                    var img_src = 'img/index/event_btn_B.png';
                    add_active($('.participate'), img_src, 'rotate-yAxis');
                    pass_siteB = true;
                }
            }
        }
    } else {
        if (!pass_siteA) {

            var img_src = 'img/index/event_btn_A.png';
            add_active($('.participate'), img_src, 'rotate-yAxis');
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
        }else {
        	$(this).find('.ic-btn').attr('data', 'img/index/cut06/ic_remove_24px.svg');
        	$('.drop-down-content[data-id="' + data_id + '"]').css('display', 'block');
        }
        $(this).toggleClass('active');
    });
});
