import * as React from "react";
import { styled } from "@mui/material/styles";

import VideoCardGrid from "../VideoPlayer";
const BoxCampaign = styled("div")(({ theme }) => ({
 
  padding: theme.spacing(1, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

export default function Campaign() {
  return (
    <>
      <BoxCampaign>
        <VideoCardGrid />
      </BoxCampaign>
    </>
  );
}
