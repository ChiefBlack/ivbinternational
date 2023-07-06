import React from "react";
import content from "./content";
import Box from "@mui/material/Box";
import SlideShow from "./SlideShow";
import Example from "./Example"
import MyTeam from "./MyTeam";
import { Card,  CardContent,  Grid,  styled,  useMediaQuery } from "@mui/material";
import missioContent from "./Content/missionContent";
import { motion } from "framer-motion";
import ResponsiveContainer from "./Navigation/ResponsiveContainer";
 
 
const UserBox = styled(Box)(({theme})=>({
display:"flex",
gap:"5px",
marginBottom:"6px",
[theme.breakpoints.down("xs")]:{display:"block",
width:"100%",
}
}));

function About() {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down('xs'));
  return (
    <>
      <SlideShow/>
      
      <UserBox
        sx={{
          width:"100%",
          boxShadow: "0px 1px 2px 1px rgba(0,0,0,0.3)",
          //  display:isMobile ? "grid": "flex",gap:"5px",
          
        }}
      >
        
          {content.map((items) => (
            <Example item={items} key={items.id} />
          ))}
        
      </UserBox>
      {/* <ResponsiveContainer/> */}
      <MyTeam/>
      <UserBox component={motion.div}
      whileHover={{scaleY:1.1}}
     sx={{display:isMobile ? "grid":"flex", gap:"3px",
    
    }}
      >

      {missioContent.map((items,index) => {
          return ( 
            

          <Example item={items} key={index} />
         
          );
  })}
  
      </UserBox>
    
    </>
  );
}

export default About;


