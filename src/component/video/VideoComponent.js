import "/node_modules/video-react/dist/video-react.css";
import React from 'react';
import { Player } from 'video-react';
import videoPath from "../../resource/video/video.mp4";

export default props => {
  return (
    <Player
      playsInline
      src={videoPath}
    />
  );
};