import React from "react";

const VideoCampaign = ({ video }) => {
  return (
    <>
      <iframe
        src={`${video}`}
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
