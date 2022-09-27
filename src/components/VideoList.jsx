import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({videos,onSelectVideo,video}) => {
    console.log(video,videos);
    const renderList = videos.filter((each) => each.etag!==video.etag).map((video) => {
        return<VideoItem video={video} onSelectVideo={onSelectVideo}/>
    })
    return (
        <>
            <div>{renderList}</div>
        </>
    );
};

export default VideoList;