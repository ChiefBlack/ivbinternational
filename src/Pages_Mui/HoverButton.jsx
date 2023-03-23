import styled from "@emotion/styled";
import { Button, Typography } from "@mui/material";
import { blueGrey } from "@mui/material/colors";
import React from "react";
import { Link } from "react-router-dom";

const CustomButton = styled(Button)(({ theme }) => ({
  border: "2px blueGrey solid",

  "&:hover": {
    backgroundColor: "#03254E",
    color: "white",
  },
}));
const ContactButton = styled(Button)(({ theme }) => ({
  border: "2px blueGrey solid",

  "&:hover": {
    backgroundColor: "#03254E",
    color: "white",
  },
}));
const ApplyButton = styled(Button)(({ theme }) => ({
  border: "2px blueGrey solid",

  "&:hover": {
    backgroundColor: "#2d5d7d",
    color: "white",
  },
}));
const CampaighnButton = styled(Button)(({ theme }) => ({
  border: "2px blueGrey solid",

  "&:hover": {
    backgroundColor: "#45eac",
    color: "white",
  },
}));
const AboutButton = styled(Button)(({ theme }) => ({
  border: "2px blueGrey solid",

  "&:hover": {
    backgroundColor: "#A7D8B8",
    color: "white",
  },
  li: {
    listStyleType: "none",
  },
}));

function HoverButton() {
  return (
    <div>
      <AboutButton
        sx={{
          backgroundColor: "#69D2E7",
          color: "white",
        }}
      >
        About us
      </AboutButton>

      <ApplyButton
        sx={{
          backgroundColor: "#457eac",
          color: "white",
        }}
      >
        Apply Online
      </ApplyButton>

      <CampaighnButton
        sx={{
          backgroundColor: "#2d5d7b",
          color: "white",
        }}
      >
        <Button> Campaign</Button>
      </CampaighnButton>
      <ContactButton
        sx={{
          backgroundColor: "#011C27",
          color: "white",
        }}
      >
        Contact Us
      </ContactButton>
    </div>
  );
}

export default HoverButton;
