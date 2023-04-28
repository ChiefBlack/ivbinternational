import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { SocialIcon } from 'react-social-icons';

export default function TeamCard({profileImage,body,position}) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={profileImage}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {position}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {body}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small"><SocialIcon url='https://www.linkedin.com/'/></Button>
        <Button size="small"><SocialIcon url='https://twitter.com'/></Button>
      </CardActions>
    </Card>
  );
}
