import React from "react";
import content from "./content";
import Box from "@mui/material/Box";
import SlideShow from "./SlideShow";
import Example from "./Example"
import MyTeam from "./MyTeam";
import { Card } from "@mui/material";
import missioContent from "./Content/missionContent";
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
      <MyTeam/>
      <Card sx={{display:"flex", gap:2}}>
      {missioContent.map((items) => (
            <Example item={items} key={items.id} />
          ))}
      </Card>
    </>
  );
}

export default About;


