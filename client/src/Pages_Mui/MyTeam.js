import React from "react";
import { motion } from "framer-motion";
import TeamCard from "./TeamCard";
import { Box, Container, Typography, styled } from "@mui/material";

const variantContainer = {
  hover: {
    scale: 1.1,
    transition: {
      duration: 0.3,
      yoyo: Infinity,
    },
  },
};
const MyContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(3),
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    alignItems:"center"
  },
}));

function MyTeam() {
  return (
    <Container maxWidth="lg">
      <Container
        component={motion.div}
        initial={{ x: -100 }}
        animate={{ x: 50 }}
        transition={{ duration: 2 }}
        sx={{
          color: "#1B3358",
        }}
      >
        <Typography
          component="h1"
        
        >
          Meet our IVB Team
        </Typography>
      </Container>
      <MyContainer 
        component={motion.div}
        variants={variantContainer}
        whileHover="hover"
        initial={{ translateX: -100 }}
        animate={{ translateX: 0 }}
        transition={{ duration: 4 }}
       
      >
        <TeamCard />
      </MyContainer >
    </Container>
  );
}

export default MyTeam;
