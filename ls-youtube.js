; (function (window, document, commonjs) {
	"use strict";
	
    var ls_youtube = {
        isValidUrl: function(url) {
            if (!url) return false;

            var regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=|\?v=)([^#\&\?]*).*/;
            var match = url.match(regExp);
            if (match && match[2].length == 11) {
                return true;
            } else {
                return false;
            }
        },
        getVideoId: function(url) {
            if (!ls_youtube.isValidUrl(url)) return null;

            var videoId = url.split('v=')[1];
            var ampersandPosition = videoId.indexOf('&');
            if (ampersandPosition != -1) {
                videoId = videoId.substring(0, ampersandPosition);
            }

            return videoId;
        },
        getVideoThumbnail: function(url, index) {
            if (!ls_youtube.isValidUrl(url)) return null;

            index = parseInt(index) || 0;

            var videoId = ls_youtube.getVideoId(url);

            if (videoId.length !== 11) return null;

            return 'https://img.youtube.com/vi/' + videoId + '/' + index + '.jpg';
        },
        appendVideo: function(url, containerId, width, height) {
            if (!ls_youtube.isValidUrl(url)) throw 'url is required';

            var videoId = ls_youtube.getVideoId(url),
                newUrl = 'https://www.youtube.com/embed/' + videoId,
                container = document.getElementById(containerId);

            if(!container) {
                container = document.createElement('div');
                container.id = 'video-area-' + new Date().getTime();

                document.body.appendChild(container);
            }

            var iframe = document.createElement('iframe');
            iframe.id = 'yt-iframe-' + new Date().getTime();
            iframe.width = width || 560;
            iframe.height = height || 349;
            iframe.src = newUrl;
            iframe.frameBorder = 0;

            container.appendChild(iframe);
        }
    };
	
	if (commonjs) {
        module.exports = ls_youtube;
    } else {
        window.ls_youtube = ls_youtube;
    }	
})(window, document, typeof (exports) !== "undefined");