function videoPopup(videoId) {

    $('#youtube-iframe').attr('src', 'https://www.youtube.com/embed/' + videoId + '?rel=0&autoplay=1');
    $('.popup-video').css('display', 'block');
}

$(document).ready(function() {

    var videoId = 'hWhFgcOMioQ';
    videoPopup(videoId);

    $('.popup-video-close').click(function() {
        $('#youtube-iframe').attr('src', '');
        $('.popup-video').css('display', 'none');
    });
});
