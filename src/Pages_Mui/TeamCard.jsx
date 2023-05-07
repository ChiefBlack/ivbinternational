import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { SocialIcon } from 'react-social-icons';
import infoRoles from './Content/InfoContent';

export default function TeamCard() {
  return (
  <>
  {
    infoRoles.map((info, index)=>{

      return(  <Card sx={{ maxWidth: 345 }} key={index}>
        <CardMedia
          sx={{ height: 140 }}
          image={info.image}
          title={info.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" color="#1B3358">
            {info.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {info.role}
            
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small"><SocialIcon url='https://www.linkedin.com/'/></Button>
          <Button size="small"><SocialIcon url='https://twitter.com'/></Button>
        </CardActions>
      </Card>)
    })
  }
  
  </>
  );
}
