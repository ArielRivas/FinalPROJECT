import React from "react";
import videoRocket from "../../../assets/controlRoom/Falcon Heavy #2 (SpaceX) Launch & Landing.mp4";

const RocketVideos = () => {
  return (
    <video className=''>
      <source src={videoRocket} type='video/mp4'></source>
      Your browser does not support the video tag.
    </video>
  );
};

export default RocketVideos;
