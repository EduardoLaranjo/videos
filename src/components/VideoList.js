import React from 'react';
import VideoItem from "./VideoItem";

function VideoList({videos, onVideoSelect}) {

  const renderedList = videos.map(video =>
    <div className="ui relaxed divided list">
      <VideoItem video={video} onVideoSelect={onVideoSelect}/>
    </div>
  );

  return <div>{renderedList}</div>

}

export default VideoList;