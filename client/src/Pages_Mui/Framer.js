import React from 'react';
import { motion } from 'framer-motion';
//import './Card.css';

const Framer = ({ title, image, description }) => {
  const variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 }
  };

  return (
    <motion.div
      className="card"
      initial="hidden"
      animate="visible"
      variants={variants}
      transition={{ duration: 0.5 }}
    >
      <motion.img
        className="card-image"
        src={image}
        alt={title}
        whileHover={{ scale: 1.1 }}
      />
      <div className="card-content">
        <motion.h2
          className="card-title"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          {title}
        </motion.h2>
        <motion.p
          className="card-description"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          {description}
        </motion.p>
      </div>
    </motion.div>
  );
};

export default Framer;
