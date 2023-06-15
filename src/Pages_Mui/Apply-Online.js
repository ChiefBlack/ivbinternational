import React from "react";
import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import backgroundImage from "./images/bgImage.jpg";
import { Button, Checkbox, FormControlLabel } from "@mui/material";
import { motion } from "framer-motion";
import backgroundImage1 from "./images/bgImage2.jpg";
import { useState } from "react";

const backgroundImages = [backgroundImage, backgroundImage1];

const StyledDiv = styled(motion.div)({
  marginTop: "35x",
  paddingTop: "20px",
  width: "100%",
  height: "100vh",
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
  backgroundColor: "white",
  color: "black",
});

const StyledMenuItem = styled(MenuItem)({
  fontSize: "16px",
});

const ApplyOnline = () => {
  const [backgroundImageIndex, setBackgroundImageIndex] = React.useState(0);
  const [termsChecked, setTermsChecked] = useState(false);
  const [formData, setFormData] = useState({
    maritalStatus: "",
    surname: "",
    email: "",
    cellNumber: "",
    idNumber: "",
    address: "",
    funding: "",
    name: "",
  });

  const changeBackgroundImage = () => {
    const nextIndex = (backgroundImageIndex + 1) % backgroundImages.length;
    setBackgroundImageIndex(nextIndex);
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleTermsChange = (e) => {
    setTermsChecked(e.target.checked);
  };

  const handleApplyHereClick = async (e) => {
    // TODO: Implement apply here button click functionality
    e.preventDefault();
    if (termsChecked) {
      try {
        const response = await fetch("index.php", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ formData }),
        });

        if (response.ok) {
          // Subscription successful, handle the response accordingly
          console.log(response);
        } else {
          // Subscription failed, handle the response accordingly
        }
      } catch (error) {
        // Send form data to the server
        // Handle error while sending the request
        console.log(error);
      }
    }
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
          onChange={handleInputChange}
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
          onChange={handleInputChange}
        />
        <StyledTextField
          label="Email"
          variant="outlined"
          type="email"
          fullWidth
          required
          onChange={handleInputChange}
        />
        <StyledTextField
          label="Cell Number"
          variant="outlined"
          fullWidth
          required
          onChange={handleInputChange}
        />
        <StyledTextField
          label="ID Number"
          variant="outlined"
          fullWidth
          required
          onChange={handleInputChange}
        />

        <FormControlLabel
          required
          control={
            <Checkbox checked={termsChecked} onChange={handleTermsChange} />
          }
          label="I accept the terms and conditions"
        />

        <Button variant="outlined" onClick={handleApplyHereClick}>
          Submit
        </Button>
      </StyledForm>
    </StyledDiv>
  );
};

export default ApplyOnline;
