import React from "react";
import { motion } from "framer-motion";
import TeamCard from "./TeamCard";
import { Box, Container,  styled } from "@mui/material";

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
    <Container >
      <Container
        component={motion.div}
        initial={{ x: 0 }}
        animate={{ x: 100 }}
        transition={{ duration: 2 }}
      
      >
        {/* <Typography
        variant="h6"
        sx={{alignItems:"center"}}
        >
          Meet our IVB Team
        </Typography> */}
      </Container>
      <MyContainer 
        component={motion.div}
        variants={variantContainer}
        whileHover="hover"
       
       
      >
        <TeamCard />
      </MyContainer >
    </Container>
  );
}

export default MyTeam;
