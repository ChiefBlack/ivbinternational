import { styled } from "@mui/system";
import React from "react";
import content from "./content";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Container from "@mui/system";
import logoIBV from "./images/logoIBV.png";


function About() {
  return (
    <>
      {content.map((items) => (
        <Card item={items} key={items.id} />
      ))}

    </>
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
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="140"
          image={logoIBV}
        />
        <CardContent>
          <Typography gutterBottom variant="h4" component="div">
          Molapo 
          </Typography>
          <Typography variant="body2" color="text.secondary">
            ccccccccccccccccccccc
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </styledCard>