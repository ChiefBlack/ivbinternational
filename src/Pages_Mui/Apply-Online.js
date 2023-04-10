import React from "react";
import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import backgroundImage from "./images/bgImage.jpg";
import RadioGroup from "@mui/material/RadioGroup";
import Radio from "@mui/material/Radio";
import FormControlLabel from "@mui/material/FormControlLabel";
import { Button } from "@mui/material";
import { motion } from "framer-motion";

import backgroundImage1 from "./images/bgImage2.jpg";
import backgroundImage2 from "./images/invest2.jpg";

import backgroundImage3 from "./images/investment.jpg";

const backgroundImages = [
  backgroundImage,
  backgroundImage1,
  backgroundImage2,
  backgroundImage3,
];

const StyledDiv = styled(motion.div)({
  marginTop: "35x",
  paddingTop: "20px",
  width: "100%",
  height: "100vh",
  background: `url(${backgroundImage}) no-repeat center center fixed`,
  backgroundSize: "cover",
  transition: "background-image 10s ease",
});

const StyledForm = styled("form")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "50%",
  margin: "auto",
  padding: "24px",
  backgroundColor: "#f5f5f5",
  borderRadius: "8px",
  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
  backgroundPosition: "center",
  backgroundSize: "cover",
  height: "auto",
});

const StyledTextField = styled(TextField)({
  marginBottom: "16px",
});

const StyledMenuItem = styled(MenuItem)({
  fontSize: "16px",
});

const ApplyOnline = () => {
  const [funding, setFunding] = React.useState("");

  const [sex, setSex] = React.useState("");
  const [backgroundImageIndex, setBackgroundImageIndex] = React.useState(0);

  const changeBackgroundImage = () => {
    const nextIndex = (backgroundImageIndex + 1) % backgroundImages.length;
    setBackgroundImageIndex(nextIndex);
  };

  const handleSexChange = (event) => {
    setSex(event.target.value);
  };

  const handleFundingChange = (event) => {
    setFunding(event.target.value);
  };

  const handleApplyHereClick = () => {
    // TODO: Implement apply here button click functionality
  };

  const handlePaymentGatewayClick = () => {
    // TODO: Implement payment gateway button click functionality
  };

  return (
    <StyledDiv
      style={{
        backgroundImage: `url(${backgroundImages[backgroundImageIndex]})`,
      }}
      onAnimationComplete={changeBackgroundImage}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1, loop: Infinity, repeatDelay: 2 }}
    >
      <StyledForm>
        <StyledTextField
          select
          label="Select Funding"
          variant="outlined"
          value={funding}
          onChange={handleFundingChange}
          fullWidth
          required
        >
          <StyledMenuItem value="funding">Funding</StyledMenuItem>
          <StyledMenuItem value="investment">Investment</StyledMenuItem>
          <StyledMenuItem value="charitable-services">
            Charitable Services
          </StyledMenuItem>
        </StyledTextField>
        <StyledTextField label="Name" variant="outlined" fullWidth required />
        <StyledTextField
          label="Marital Status"
          variant="outlined"
          fullWidth
          required
        />
        <StyledTextField
          label="Address"
          variant="outlined"
          fullWidth
          required
        />
        <StyledTextField
          label="Email"
          variant="outlined"
          type="email"
          fullWidth
          required
        />
        <StyledTextField
          label="Cell Number"
          variant="outlined"
          fullWidth
          required
        />
        <StyledTextField
          label="ID Number"
          variant="outlined"
          fullWidth
          required
        />

        <Button variant="outlined" onSubmit={handleApplyHereClick}>
          apply here
        </Button>
      </StyledForm>
    </StyledDiv>
  );
};

export default ApplyOnline;
