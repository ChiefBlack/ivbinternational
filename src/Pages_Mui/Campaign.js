import * as React from "react";
import Box from "@mui/joy/Box";
import Card from "@mui/joy/Card";
import CardCover from "@mui/joy/CardCover";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import bgImage from "./images/bgImage.jpg";
const BoxCampaign = styled("div")(({ theme }) => ({
  display: "flex",
  gap: 5,

  borderRadius: "10px",
  marginTop: "40px",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-start",
  backgroundImage: `url(${bgImage})`,
  backgroundSize: "cover",
}));

export default function Campaign() {
  return (
    
      <Card component="li" sx={{ minWidth: 300, flexGrow: 1 }}>
        <CardCover>
        <h1> content of the campaign Molapo </h1>
        </CardCover>
        <CardContent>
          <Typography
            level="h6"
            fontWeight="lg"
            textColor="#fff"
            mt={{ xs: 12, sm: 18 }}
          >
            Image
          </Typography>
        </CardContent>
      </Card>
    
  
  );
}
