import React from 'react';
import { Paper, Typography } from '@material-ui/core';

const VideoDetail = ({ video }) => {

    if(!video) return <div>loading</div>;

    console.log(video);

    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

    console.log(videoSrc);

    return (
        <>
            <Paper elevation={6} style={{height: '70%'}}>
                <iframe frameBorder="0" height="100%" width="100%" title="video layer" src={videoSrc} />
            </Paper>
            <Paper elevation={6} style={{padding: '15px'}}>
                <Typography variant="h6">{video.snippet.title} - {video.snippet.channelTitle}</Typography>
                <Typography variant="subtitle1">{video.snippet.channelTitle}</Typography>
                <Typography variant="subtitle2">{video.snippet.description}</Typography>
            </Paper>
        </>
    )
}

export default VideoDetail;