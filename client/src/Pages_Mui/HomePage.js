import { Typography, Box, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import { motion } from "framer-motion";

import backgroundImage1 from "./images/bgImage2.jpg";
import backgroundImage2 from "./images/interestRate.jpg";
import backgroundImage3 from "./images/calculateRate.jpg";
import serviceContent from "./ServiceContent";
import Example from "./Example";
import { UserBox } from "./About";

const variantContainer = {
  hover: {
    scale: 0.9,
    transition: {
      duration: 0.3,
      yoyo: Infinity,
    },
  },
};

const Title = styled(Typography)({
  fontSize: "4.5rem",
  fontWeight: "bold",
  marginBottom: "2rem",
  color: "white",
});

const Description = styled(Typography)({
  fontSize: "1.2rem",
  lineHeight: 1.5,
  marginBottom: "1rem",
});

const BackgroundImage = styled(motion.div)(({ imageUrl }) => ({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundImage: `url(${imageUrl})`,
}));

const images = [backgroundImage1, backgroundImage2, backgroundImage3];

export default function HomePage() {
  const imageIndex = [2];

  return (
    <>
      <Box sx={{ position: "relative", height: "100vh" }}>
        <BackgroundImage
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          exit={{ opacity: 0 }}
          key={images[imageIndex]}
          imageUrl={images[imageIndex]}
        />
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            textAlign: "center",
            zIndex: 1,
          }}
        >
          <Title>Welcome to Business and Investment</Title>
          <Description>
            <Button variant="outlined" href="/about">
              Read More
            </Button>
            <Button variant="contained" href="/contact-us">
              In touch
            </Button>
          </Description>
        </Box>
      </Box>
      <UserBox
        sx={{ display: "flex" }}
        component={motion.div}
        variants={variantContainer}
        initial={{ translateX: -50 }}
        animate={{ translateX: 0 }}
        whileHover="hover"
        variant="contained"
      >
        {serviceContent.map((items) => {
          return <Example item={items} key={items.id} />;
        })}
      </UserBox>
    </>
  );
}
