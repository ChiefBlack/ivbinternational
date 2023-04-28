import * as React from "react";
import { styled } from "@mui/material/styles";
import VideoCampaign from "./VideoCampaign";
const BoxCampaign = styled("div")(({ theme }) => ({
  display: "flex",
  gap: 2,
  borderRadius: "7px",
  alignItems: "center",
  padding: theme.spacing(1, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));
const videoPlay = [
  "https://www.dropbox.com/s/0ku5xt2hv1tgc0z/Leratong%20Old%20Age%20Home%20interview.mp4?dl=0",
  "https://www.dropbox.com/s/gudww0jqm8wm2hg/IVB%20confirmed%20pitch%20deck.mp4?dl=0",
];
export default function Campaign() {
  return (
    <BoxCampaign>
      {videoPlay.map((videolist, index) => {
        return <VideoCampaign video={videolist} key={index} />;
      })}
    </BoxCampaign>
  );
}
