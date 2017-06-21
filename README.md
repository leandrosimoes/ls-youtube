# ls-youtube
A litle youtube url manipulation lib

### Install

`bower install ls-youtube --save`

### Usage

```javascript
// Verify if is a valid Youtube URL format
ls_youtube.isValidUrl(url);

// Extract the Youtube video ID from URL
ls_youtube.getVideoId(url);

// Get url for the Youtube video from URL
ls_youtube.getVideoData(url, index);

// Append a Youtube video on page
ls_youtube.appendVideo(url, containerId, width, height);
```
