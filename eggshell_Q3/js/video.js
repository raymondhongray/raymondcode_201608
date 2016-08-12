function videoPopup(videoId) {

    $('#youtube-iframe').attr('src', 'https://www.youtube.com/embed/' + videoId + '?rel=0&autoplay=1');
    $('.popup-video').css('display', 'block');
}

function fbEnsureInit(callback) {
    if (!window.fbApiInit) {
        setTimeout(function() { fbEnsureInit(callback); }, 50);
    } else {
        if (callback) {
            callback();
        }
    }
}

$(document).ready(function() {

    $('.popup-video-close').click(function() {
        $('#youtube-iframe').attr('src', '');
        $('.popup-video').css('display', 'none');
    });

    $('#thumbnail-0 > img, #thumbnail-0 > .player-btn').click(function() {
        var videoId = 'hWhFgcOMioQ';
        videoPopup(videoId);
    });

    fbEnsureInit(function() {
        console.log("this will be run once FB is initialized");

        $('.fb-share-btn').click(function() {

            var title = $(this).attr('v-title');
            var share_link = $(this).attr('v-share-link');
            var description = $(this).attr('v-description');
            var picture = $(this).attr('youtube-thumbnail-src');

            description = description + ' (' + window.location.protocol + '//' + window.location.hostname + window.location.pathname + ')';

            var publish = {
                name: title,
                method: 'feed',
                link: encodeURIComponent(share_link),
                description: description,
                picture: picture
            };

            var appId = '567431166777829';
            var redirect_uri = encodeURI(window.location.protocol + '//' + window.location.hostname + window.location.pathname);

            var permissionUrl = "https://m.facebook.com/dialog/feed?app_id=" + appId + "&display=touch&redirect_uri=" + redirect_uri + "&name=" + publish.name + "&description=" + publish.description + "&link=" + publish.link + "&picture=" + publish.picture;
            window.location = permissionUrl;

        });
    });
});
