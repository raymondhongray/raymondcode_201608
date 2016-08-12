function videoPopup(videoId) {

    $('#youtube-iframe').attr('src', 'https://www.youtube.com/embed/' + videoId + '?rel=0&autoplay=1');
    $('.popup-video').css('display', 'block');
}

$(document).ready(function() {

    $('.popup-video-close').click(function() {
        $('#youtube-iframe').attr('src', '');
        $('.popup-video').css('display', 'none');
    });

    $('#thumbnail-0').click(function() {
        var videoId = 'hWhFgcOMioQ';
        videoPopup(videoId);
    });
});
