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
const CampaignButton = styled(Button)(({ theme }) => ({
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
        href="/about"
        sx={{
          height: "40px",
          width: "200px",
          backgroundColor: "#69D2E7",
          color: "white",
        }}
      >
        About us
      </AboutButton>

      <ApplyButton
        href="/apply-online"
        sx={{
          height: "40px",
          width: "200px",
          backgroundColor: "#457eac",
          color: "white",
        }}
      >
        Apply Online
      </ApplyButton>

      <CampaignButton href="/campaign"
        sx={{
          height:"40px",
          width:"200px",
          backgroundColor: "#2d5d7b",
          color: "white",
        }}
      >
        <Button> Campaign</Button>
      </CampaignButton>
      <ContactButton href="/contact-us"
        sx={{ 
          height:"40px",
          width:"200px",
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
