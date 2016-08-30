var loading_value = 0;
var img_length = $('img').length;

function getQueryStrByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

function move_to(target_obj, offset) {

    var scroll_offset = target_obj.offset().top + offset;
    $('html, body').animate({
        scrollTop: scroll_offset
    }, 500);
}

function fix_menu_wrapper_issue() {
    // 修正特殊情境項目 if screen width  大於等於 screen height 
    if ($(window).width() >= $(window).height()) {
        $('.nav-menu-wrapper').css('overflow-y', 'auto');
    } else {
        $('.nav-menu-wrapper').css('overflow-y', '');
    }
}

function set_menu_events() {

    $('#menu-back-home').click(function() {
        move_to($('body'), 0);
    });

    $('#menu-baby-star').click(function() {
        move_to($('#menu-02'), -($('header').height()));
    });

    $('#menu-best-videos').click(function() {
        move_to($('#menu-03'), -($('header').height()));
    });

    $('#menu-vote').click(function() {
        move_to($('#menu-04'), -($('header').height()));
    });

    $('#menu-product').click(function() {
        move_to($('#product-intro'), -($('header').height()));
    });

    $('#menu-rules').click(function() {
        move_to($('#menu-06'), -($('header').height()));
    });
}

$(window).resize(function() {
    // 修正特殊情境項目 if screen width  大於等於 screen height  
    fix_menu_wrapper_issue();
});

$(document).ready(function() {
    // 修正特殊情境項目 if screen width  大於等於 screen height  
    fix_menu_wrapper_issue();

    $('#nav-hamburger').click(function() {

        if ($(this).hasClass('active')) {
            $('#nav-menu').css('display', 'none');
            $('.notice-sign').fadeIn(500);
            $('body').css('overflow', 'auto');
        } else {
            $('#nav-menu').css('display', 'block');
            $('.notice-sign').fadeOut(200);
            $('body').css('overflow', 'hidden');
        }

        $('#nav-hamburger').toggleClass('active');
        setTimeout(function() { $('#nav-menu > .nav-menu-wrapper').toggleClass('active'); }, 100);
    });
    $('#nav-menu > .nav-menu-opacity').click(function() {

        $('#nav-menu').css('display', 'none');
        $('#nav-hamburger, #nav-menu > .nav-menu-wrapper').toggleClass('active');
        $('body').css('overflow', 'auto');
    });

    $('.nav-menu-wrapper img').click(function() {
        $('#nav-hamburger').click();
    });
});

$(window).load(function() {
    $('.loading-effect').fadeOut('slow');

    set_menu_events();

    //為了所有臉書分享重導後的成功訊息
    if (getQueryStrByName('post_id') !== null) {
        setTimeout(function() {
            alert('臉書分享成功');
        }, 1500);
    }
});
