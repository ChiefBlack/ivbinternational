
 import React from 'react';
 import { Card, CardContent, } from '@mui/material';
import  makeStyles  from '@mui/styles';

// const videoPlay = [
//     { title:"Funding Video", 
//      video:"https://www.dropbox.com/s/0ku5xt2hv1tgc0z/Leratong%20Old%20Age%20Home%20interview.mp4?dl=0"},
//      {title:"FundRaising video",
//        video:"https://www.dropbox.com/s/qhny7awjtkg7pwx/IVB%20Investment%201%20DVD%20Part%20One.mp4?dl=0"},
//     { title:"DVD to buy video for funding",
//      video:"https://www.youtube.com/watch?v=Z-ye1q_NfGc"}
//    ];

  

const useStyles = makeStyles((theme) => ({
  card: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
  },
  video: {
    width: '100%',
    height: 'auto',
  },
  content: {
    flexGrow: 1,
  },
}));

// const VideoCard=({ title, videoUrl })=> {
//   const classes = useStyles();

//   return (
//     <Card className={classes.card}>
//       <video className={classes.video} controls>
//         <source src={videoUrl} type="video/mp4" />
//       </video>
//       <CardContent className={classes.content}>
        
//       </CardContent>
//     </Card>
//   );
// }
// export default VideoCard;