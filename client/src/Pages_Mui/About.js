import React from "react";
import content from "./content";
import Box from "@mui/material/Box";
import SlideShow from "./SlideShow";
import Example from "./Example";
import MyTeam from "./MyTeam";
import { styled,} from "@mui/material";
import missioContent from "./Content/missionContent";
import { motion } from "framer-motion";
//import ResponsiveContainer from "./Navigation/ResponsiveContainer";

export const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "5px",

  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",

    alignItems: "center",
  },
}));

function About() {
  return (
    <>
      <SlideShow />

      <UserBox>
        {content.map((items) => (
          <Example item={items} key={items.id} />
        ))}
        
      </UserBox>
    
     <MyTeam />
    
      
      <UserBox component={motion.div} whileHover={{ scaleY: 1.1 }}>
        {missioContent.map((items, index) => {
          return <Example item={items} key={index} />;
        })}
      </UserBox>
    </>
  );
}

export default About;
