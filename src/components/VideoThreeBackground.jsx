import React from 'react';

const VideoBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden -z-10">
      <video className="object-cover object-center w-full h-full" autoPlay muted loop>
        <source src="/roses.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoBackground;
