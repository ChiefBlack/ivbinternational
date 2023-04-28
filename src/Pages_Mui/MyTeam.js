import React from "react";
import { motion } from "framer-motion";
import TeamCard from "./TeamCard";
import profile1 from "./images/profile1.jpeg";
import profile2 from "./images/profile2.jpeg";
import profile3 from "./images/profile3.jpeg";

function MyTeam() {
  const profileImages = [profile2, profile1, profile3];
  return (
    <>
      <motion.div
        animate={{ x: "50%" }}
        transition={{ duration: 2 }}
        style={{ color: "#1B3358" }}
      >
        <h1>MyTeam</h1>
      </motion.div>
      <motion.div
        initial={{ x: 10 }}
        animate={{ x: "20%" }}
        transition={{ duration: 5 }}
        style={{display:"flex",gap:"10px" }}
      >
       {profileImages.map((images,index)=>{
        return <TeamCard profileImage={images}  key={index}/>
       })}
      </motion.div>
    </>
  );
}

export default MyTeam;
