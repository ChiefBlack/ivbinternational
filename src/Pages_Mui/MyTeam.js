import React from "react";
import { motion } from "framer-motion";
import TeamCard from "./TeamCard";
import { Box, Container } from "@mui/material";

const variantContainer = {
  hover: {
    scale: 1.1,
    transition: {
      duration: 0.3,
      yoyo: Infinity,
    },
  },
};

function MyTeam() {
  return (
    <Container maxWidth="lg" >
      <Container
        component={motion.div}
        initial={{ x: -100 }}
        animate={{ x: 200}}
        transition={{ duration: 2 }}
        sx={{
          color: "#1B3358",
         
        }}
      >
        <h1>Meet our IVB Team</h1>
      </Container >
      <Box 
        component={motion.div}
        variants={variantContainer}
        whileHover="hover"
        initial={{ translateX: -100 }}
        animate={{ translateX: 0 }}
        transition={{ duration: 4 }}
        sx={{ display: "flex", gap: "50px"}}
      >
        <TeamCard />
      </Box>
    </Container>
  );
}

export default MyTeam;
