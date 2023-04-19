import React from "react";
import content from "./content";
import Card from "./Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Container from "@mui/system";
import logoIBV from "./images/logoIBV.png";
import Box from "@mui/material/Box";
import Slideshow from "./SlideShow";
import SlideShow from "./SlideShow";
import Example from "./Example"
function About() {
  return (
    <>
      <SlideShow/>
      
      <Box
        sx={{
          display: "flex",
          boxShadow: "0px 1px 2px 1px rgba(0,0,0,0.3)",
        }}
      >
        
          {content.map((items) => (
            <Example item={items} key={items.id} />
          ))}
        
      </Box>
    </>
  );
}

export default About;


