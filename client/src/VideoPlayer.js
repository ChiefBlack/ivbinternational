import React from "react";
import { Card, CardContent, Typography, Grid } from "@mui/material";

import ReactPlayer from "react-player";

const videoPlayer = [
  {
    title: "Funding Video",
    video:
      "https://www.dropbox.com/s/0ku5xt2hv1tgc0z/Leratong%20Old%20Age%20Home%20interview.mp4?dl=0",
  },
  {
    title: "FundRaising video",
    video:
      "https://www.dropbox.com/s/qhny7awjtkg7pwx/IVB%20Investment%201%20DVD%20Part%20One.mp4?dl=0",
  },
  {
    title: "DVD to buy video for funding",
    video: "https://www.youtube.com/watch?v=Z-ye1q_NfGc",
  },
  
];

function VideoCard({ title, imageUrl }) {
  return (
    <Card>
      {/* <CardMedia title={title} component="img" src={`${imageUrl}`} /> */}
      <ReactPlayer url={`${imageUrl}`} />
      <CardContent>
        <Typography variant="h6" gutterBottom>
          {title}
        </Typography>
      </CardContent>
    </Card>
  );
}

function VideoCardGrid() {
  return (
    <Grid container spacing={2}>
      {videoPlayer.map((items, index) => {
        return (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <VideoCard title={items.title} imageUrl={items.video} />
          </Grid>
        );
      })}
    </Grid>
  );
}

export default VideoCardGrid;
