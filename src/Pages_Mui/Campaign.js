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
  //justifyContent: "flex-start",
  //backgroundImage: `url(${bgImage})`,
  backgroundSize: "cover",
}));

export default function Campaign() {
  return (
    <BoxCampaign>
      <VideoCampaign />
      <VideoCampaign />

      {/* <Card variant="outline" sx={{ width: "350px",height:"400px"}}>
        <CardCover>
          
        </CardCover>
      </Card> */}
    </BoxCampaign>
  );
}
