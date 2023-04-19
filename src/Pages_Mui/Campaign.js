import * as React from "react";

import Card from "@mui/joy/Card";
import { styled } from "@mui/material/styles";
import bgImage from "./images/bgImage.jpg";
import { CardCover } from "@mui/joy";
import VideoCampaign from "./VideoCampaign";
const BoxCampaign = styled("div")(({ theme }) => ({
display:"flex",
  gap: 2,
  
  borderRadius: "7px",
  alignItems: "center",
  padding: theme.spacing(1, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  //justifyContent: "flex-start",
  //backgroundImage: `url(${bgImage})`,
  backgroundSize: "cover",
}));

export default function Campaign() {
  return (
    <BoxCampaign>
      <VideoCampaign/>
      <VideoCampaign/>
      
      {/* <Card variant="outline" sx={{ width: "350px",height:"400px"}}>
        <CardCover>
          
        </CardCover>
      </Card> */}
    </BoxCampaign>
  );
}
