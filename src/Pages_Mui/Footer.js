import React from "react";
import { Paper } from "@mui/material";
import styled from "@emotion/styled";

const styledFooter = styled(Paper)(({ theme }) => ({
  backgroundColor: "red",
  padding: theme.spacing(2),
  textAlign: "center",
  position: "fixed",
  left: 0,
  bottom: 0,
  width: "100%",
 
  "&:hover": {
    backgroundColor: "#03254E",
    color: "white",
  },
}));

function Footer() {
  return (
    <styledFooter>
      <Paper sx={{backgroundColor:"#03254E", height: "40px",}}>
        <p>Copyright © 2023</p>
      </Paper> 
    </styledFooter>
  );
}

export default Footer;
