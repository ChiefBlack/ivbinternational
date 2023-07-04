import React, { useState } from 'react';
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
  Box,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import InfoIcon from '@mui/icons-material/Info';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CampaignIcon from '@mui/icons-material/Campaign';
import { Link } from 'react-router-dom';



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
    <Box>
      
  <IconButton
        edge="start"
        color="inherit"
        aria-label="menu"
        onClick={toggleDrawer}
      >
        <MenuIcon  />
      </IconButton>
    
      <Drawer anchor="left" open={isOpen} onClose={toggleDrawer}>
        <List>
          <ListItem button onClick={handleLinkClick}component={Link} to="/about">
            <ListItemIcon>
              <InfoIcon />
            </ListItemIcon>
            <ListItemText primary="About" />
          
          </ListItem>
          <ListItem button onClick={handleLinkClick}component={Link} to="/apply-online">
            <ListItemIcon>
              <CheckCircleIcon />
            </ListItemIcon>
            <ListItemText primary="Apply Online" />
          
          </ListItem>
          <ListItem button onClick={handleLinkClick}component={Link} to="/campaign">
            <ListItemIcon>
              <CampaignIcon/>
            </ListItemIcon>
            <ListItemText primary="Campaign" />
            
            
          </ListItem>
          <ListItem button onClick={handleLinkClick}component={Link} to="/cantact-us">
            <ListItemIcon>
              <CampaignIcon/>
            </ListItemIcon>
            <ListItemText primary="Contact" />
            
            
          </ListItem>
        </List>
      </Drawer>
    </Box>
  );
};

export default MobileNavbar;
