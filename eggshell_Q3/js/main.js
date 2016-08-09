$(document).ready(function() {
    $('#nav-hamburger').click(function() {

        if ($(this).hasClass('active')) {
            $('#nav-menu').css('display', 'none');
        } else {
            $('#nav-menu').css('display', 'block');
        }

        $('#nav-hamburger').toggleClass('active');
        setTimeout(function(){ $('#nav-menu > .nav-menu-wrapper').toggleClass('active'); }, 100);     
    });
    $('#nav-menu > .nav-menu-opacity').click(function() {

        $('#nav-menu').css('display', 'none');
        $('#nav-hamburger, #nav-menu > .nav-menu-wrapper').toggleClass('active');
    });
});

$(window).load(function() {
	$('.loading-effect').fadeOut('slow');
});
