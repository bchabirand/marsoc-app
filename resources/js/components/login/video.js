import React from 'react';
import ReactDOM from 'react-dom';


export default function Video() {
  const bgVideo = {
    position: 'absolute',
    zIndex: -1,
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    overflow: 'hidden'
  }

  const video = {
    width: '100%',
    height: 'auto',
    position: 'absolute',
    zIndex: -1,
    top: '50%',
    left: '40%',
    transform: 'translate(-40%, -50%)'
  }

  const after = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(147, 129, 62, 0.5)',
    zIndex: 1
  }

  return (
    <div className="bg-video" style={bgVideo}>
      <video autoplay="true" src="/videos/marsoc-home.mp4" loop="true" muted="true" type="video/mp4" style={video}></video>
      <div className="bg-video-after" style={after}></div>
    </div>
  );
}
