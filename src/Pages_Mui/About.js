import React from "react";
import content from "./content";
import Box from "@mui/material/Box";
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


