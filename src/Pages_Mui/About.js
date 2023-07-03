import React from "react";
import content from "./content";
import Box from "@mui/material/Box";
import SlideShow from "./SlideShow";
import Example from "./Example"
import MyTeam from "./MyTeam";
import { Card, useMediaQuery } from "@mui/material";
import missioContent from "./Content/missionContent";
import { motion } from "framer-motion";
function About() {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down('xs'));
  return (
    <>
      <SlideShow/>
      
      <Box
        sx={{
          
          boxShadow: "0px 1px 2px 1px rgba(0,0,0,0.3)",
           display:isMobile ? "-ms-grid": "flex",gap:"5px"
        }}
      >
        
          {content.map((items) => (
            <Example item={items} key={items.id} />
          ))}
        
      </Box>
      <MyTeam/>
      <Card component={motion.div}
      whileHover={{scaleY:1.1}}
     sx={{display:isMobile ? "-ms-grid":"flex", gap:"3px",
    
    }}
      >
      {missioContent.map((items) => (
            <Example item={items} key={items.id} />
          ))}
      </Card>
    </>
  );
}

export default About;


