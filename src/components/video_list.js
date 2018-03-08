import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => {
    const videoItems = props.videos.map((video) => {
        return ( 
        <VideoListItem                                              
            onVideoSelect={props.onVideoSelect}                       //pass the callback thats in props coming from App into each item onVideoSelect 
            key={video.etag} 
            video={video} />
        );    
    });

    return (
        <ul className='col-md-4 list-group'>
            {videoItems}
        </ul>
    );
};

export default VideoList;