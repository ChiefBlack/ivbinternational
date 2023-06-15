import * as React from "react";
import { styled } from "@mui/material/styles";
import VideoCampaign from "./VideoCampaign";
const BoxCampaign = styled("div")(({ theme }) => ({
  display: "flex",
  gap: 2,
  margin:0,
  alignContent:"center",
  borderRadius: "7px",
  alignItems: "center",
  padding: theme.spacing(1, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));
const videoPlay = [
 { title:"Funding Video", 
  video:"https://www.dropbox.com/s/0ku5xt2hv1tgc0z/Leratong%20Old%20Age%20Home%20interview.mp4?dl=0"},
  {title:"FundRaising video",
    video:"https://www.dropbox.com/s/qhny7awjtkg7pwx/IVB%20Investment%201%20DVD%20Part%20One.mp4?dl=0"},
 { title:"DVD to buy video for funding",
  video:"https://www.youtube.com/watch?v=Z-ye1q_NfGc"}
];
export default function Campaign() {
  return (
    <BoxCampaign>
      {videoPlay.map((videolist, index) => {
        return <VideoCampaign video={videolist.video} title={videolist.title} key={index} />;
      })}
    
    </BoxCampaign>
  );
}
