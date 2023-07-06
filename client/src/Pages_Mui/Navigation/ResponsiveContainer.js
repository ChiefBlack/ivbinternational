// import React from "react";
// import { Box, useTheme } from "@mui/material";
// import Example from "../Example";
// import content from "../content";

// const ResponsiveContainer = () => {
//   const theme = useTheme();

//   return (
//     <Box
//       sx={{
//         display: "flex",

//         maxWidth: 1100,
//         gap: 1,
//         [theme.breakpoints.down("xs")]: {
//           display: "-ms-grid",
//         },
//       }}
//     >
//       {content.map((items) => (
//         <Example item={items} key={items.id} />
//       ))}
//       {/* Flex items */}
//       {/* <div>Item 1</div>
//       <div>Item 2</div>
//       <div>Item 3</div>
//       <div>Item 4</div> */}
//     </Box>
//   );
// };

// export default ResponsiveContainer;
import React from 'react';
import { Grid, Card } from '@mui/material';
import Example from '../Example';
import content from '../content';

const ResponsiveContainer = () => {
  

  return (
    <Grid container spacing={2}>
      {content.map((items, index) => (
        <Grid key={index} item xs={12} sm={6} md={4} lg={3}>
          <Card sx={{ height: '100%' }}>
            
            
         <Example item={items} />
       
        
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default ResponsiveContainer;