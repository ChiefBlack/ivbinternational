import { styled } from "@mui/system";
import React from "react";
import content from "./content";
import Card from "./Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Container from "@mui/system";
import logoIBV from "./images/logoIBV.png";
import Box from '@mui/material/Box';

function About() {
  return (
    <Box sx={{
      display: 'flex',
      boxShadow: '0px 1px 2px 1px rgba(0,0,0,0.3)',
    }}>
      <Box sx={{ flex: '1 1 30%' }}>
      {content.map((items) => (
        <Card item={items} key={items.id} />
      ))}
</Box>
</Box>
  );
}

export default About;



<styledCard>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="140"
          image={logoIBV}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
      
    </styledCard>