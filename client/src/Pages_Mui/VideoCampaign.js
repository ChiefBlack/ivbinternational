import { Box, Card, Typography } from "@mui/material";
import React from "react";
import ReactPlayer from "react-player";

const VideoCampaign = ({ video, title }) => {
  const videoName = video.split("/").pop().split(".")[0];
  return (
    <>
      <Card>
        <ReactPlayer
          url={`${video}`}
          //width="1200px"
          // height="640px"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
        <Typography variant="body2" color="text.secondary">
          <p>{title}</p>
          <Box>{videoName}</Box>
        </Typography>
      </Card>
    </>
  );
};

export default VideoCampaign;
