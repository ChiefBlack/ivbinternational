import React, { useState } from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
  Box,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import InfoIcon from "@mui/icons-material/Info";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CampaignIcon from "@mui/icons-material/Campaign";

import { Link } from "react-router-dom";

import logoIBV from "../images/logoIBV.png";
import { motion } from "framer-motion";

const MobileNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setIsOpen(false);

    // Handle any additional logic when a link is clicked
  };

  return (
    <Box sx={{ display: "flex" }}>
      <IconButton
        edge="right"
        color="inherit"
        aria-label="menu"
        onClick={toggleDrawer}
      >
        <MenuIcon />
      </IconButton>

      <Drawer anchor="left" open={isOpen} onClose={toggleDrawer}>
        <List>
          <ListItem
            button
            onClick={handleLinkClick}
            component={Link}
            to="/about"
          >
            <ListItemIcon>
              <InfoIcon />
            </ListItemIcon>
            <ListItemText primary="About" />
          </ListItem>
          <ListItem
            button
            onClick={handleLinkClick}
            component={Link}
            to="/apply-online"
          >
            <ListItemIcon>
              <CheckCircleIcon />
            </ListItemIcon>
            <ListItemText primary="Apply Online" />
          </ListItem>
          <ListItem
            button
            onClick={handleLinkClick}
            component={Link}
            to="/campaign"
          >
            <ListItemIcon>
              <CampaignIcon />
            </ListItemIcon>
            <ListItemText primary="Campaign" />
          </ListItem>
          <ListItem
            button
            onClick={handleLinkClick}
            component={Link}
            to="/contact-us"
          >
            <ListItemIcon>
              <CampaignIcon />
            </ListItemIcon>
            <ListItemText primary="Contact" />
          </ListItem>
        </List>
      </Drawer>
      <Typography variant="h6" noWrap sx={{ flexGrow: 1 }} component="div">
        <motion.img
          whileHover={{ scale: 0.5 }}
          src={logoIBV}
          alt="logo"
          style={{ height: "90px", objectFit: "cover" }}
        />
      </Typography>
    </Box>
  );
};

export default MobileNavbar;
