import React from "react";
import { motion } from "framer-motion";
import TeamCard from "./TeamCard";
import { Container } from "@mui/material";
import { Height } from "@mui/icons-material";



function MyTeam() {
  
  return (
    <>
    <motion.div
        animate={{ x: "40%" }}
        transition={{ duration: 2 }}
        style={{ color: "#1B3358" }}
      >
        <h1>Meet our IVB Team</h1>
      </motion.div>
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: "30%" }}
        transition={{ duration: 5 }}
        style={{display:"flex",gap:"10px" }}
      >
       
         <TeamCard />
       
      </motion.div>
    </>
  );
}

export default MyTeam;
