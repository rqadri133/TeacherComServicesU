
import {React, useState } from 'react' 


const VideoContent = ({props}) => {
    
  const currentContext = props;
  const src = currentContext.videoUrl;
    const disabled  = props.disabled;
  
     


    return (
      <>
        <video disabled={currentContext.disabled} src={src} controls width="100%">
          Sorry, your browser doesn't support embedded videos.
        </video>
      </>
    );
  };
  export default VideoContent;