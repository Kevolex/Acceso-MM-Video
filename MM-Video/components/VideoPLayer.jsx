import React from 'react';
import VideoPlayer from 'react-native-video-controls';

const Video = () => {
return (
    <VideoPlayer
    source={{uri: 'https://example.com/video.mp4'}}
    style={{width: '100%', height: 300}}
    resizeMode="contain"
    />
);
};

export default Video;