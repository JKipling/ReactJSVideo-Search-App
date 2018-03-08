import React from 'react';

//({video}) is identical to "const video = props.video". The first argument in has a property called video, grab video
const VideoListItem = ({video, onVideoSelect}) => {
    const imageUrl = video.snippet.thumbnails.default.url;
    return (    //creates an onClick event and handles the call back function from video_list and index.js through props allowing you to click on a video to play it. 
        <li onClick={() => onVideoSelect(video)} className="list-group-item">               
            <div className='video-list media'>
                <div className='media-left'>
                    <img className='media-object' src={imageUrl} />
                </div>
                <div className='media-body'>
                    <div className='media-heading'>{video.snippet.title}</div>
                </div>
            </div>
        </li>
    );
};

export default VideoListItem;