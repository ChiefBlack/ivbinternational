import * as React from "react";

import Card from "@mui/joy/Card";
import { styled } from "@mui/material/styles";
import bgImage from "./images/bgImage.jpg";
import { CardCover } from "@mui/joy";
const BoxCampaign = styled("div")(({ theme }) => ({
  display: "flex",
  gap: 5,
  borderRadius: "7px",
  alignItems: "center",
  padding: theme.spacing(1, 2),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  //justifyContent: "flex-start",
  backgroundImage: `url(${bgImage})`,
  backgroundSize: "cover",
}));

export default function Campaign() {
  return (
    <BoxCampaign>
      <Card variant="outline" sx={{ width: "350px",height:"400px"}}>
        <CardCover>
          <h1> hello world</h1>
        </CardCover>
      </Card>
    </BoxCampaign>
  );
}
