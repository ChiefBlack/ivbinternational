import React from "react";

const VideoCampaign = () => {
  const video_id = "t3XTFWE_FC4";
  return (
    <>
    
      <iframe
        src={`https://www.youtube.com/embed/${video_id}`}
        width="1200px"
        height="640ox"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
      
    </>
  );
};

export default VideoCampaign;
