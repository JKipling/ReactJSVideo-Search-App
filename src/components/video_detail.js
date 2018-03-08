import React from 'react'

const VideoDetail = ({video}) => {
    if(!video){                                                         //React always wants to render itself even before it should. Sometimes the parent component cant fetch data fast engough to satisfy the children component.
        return <div>Loading...</div>;                                   //So we write a control to stop this from happening. 
    }

    const videoId = video.id.videoId;                                   //crafting our own embed URL
    const url = `https://www.youtube.com/embed/${videoId}`;             //this will create our URL. Syntax is the same as 'https....' + videoId.

    return (
        <div className='video-detail col-md-8'>
            <div className='embed-responsive embed-responsive-16by9'>
                <iframe className="embed-responsive-item" src={url} frameborder="0"></iframe>
            </div>
            <div className='details'>
                <div>{video.snippet.title}</div>
                <div>{video.snippet.description}</div>
            </div>
        </div>
    );
};

export default VideoDetail;