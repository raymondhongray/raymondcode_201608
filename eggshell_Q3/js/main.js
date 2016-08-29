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

$(document).ready(function() {

    $('#nav-hamburger').click(function() {

        if ($(this).hasClass('active')) {
            $('#nav-menu').css('display', 'none');
            $('.notice-sign').fadeIn(500);
        } else {
            $('#nav-menu').css('display', 'block');
            $('.notice-sign').fadeOut(200);
        }

        $('#nav-hamburger').toggleClass('active');
        setTimeout(function() { $('#nav-menu > .nav-menu-wrapper').toggleClass('active'); }, 100);
    });
    $('#nav-menu > .nav-menu-opacity').click(function() {

        $('#nav-menu').css('display', 'none');
        $('#nav-hamburger, #nav-menu > .nav-menu-wrapper').toggleClass('active');
    });

    $('.menu-icon').click(function() {
        $('#nav-hamburger').click();
    });
});

$(window).load(function() {
    $('.loading-effect').fadeOut('slow');

    //為了所有臉書分享重導後的成功訊息
    if (getQueryStrByName('post_id') !== null) {
        setTimeout(function() {
            alert('臉書分享成功');
        }, 1500);
    }
});
