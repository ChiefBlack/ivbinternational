import {themes,createThemes,useTheme, Paper, Drawer,Box, ListItem, ListItemText, ListItemButton, CardMedia} from '@mui/material';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import MuiAppBar from '@mui/material/AppBar';
import React from 'react'
import styled from '@emotion/styled';

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
  })(({ theme, open }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginRight: drawerWidth,
    }),
  }));
  const drawerWidth = 240;



function AppDrawer() {
    

    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const DrawerHeader = styled('div')(({ theme }) => ({
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-start',
      }));
  
    const handleDrawerOpen = () => {
      setOpen(true);
    };
  
    const handleDrawerClose = () => {
      setOpen(false);
    };
    return (
                        //      

                        // <Drawer  variant='temporary'></Drawer>
                        // </Paper>
 <>
           <Paper style={{//height:"120px",
                        backgroundColor:"#83C5BE"
                         }}
                         elevation="10"
            >
        <Box sx={{ display: 'flex' }}>
                        
                        <CssBaseline />
    
                        
                            <Toolbar>
                            <CardMedia  
                            image="../images/ivbLogo.png"
                            >
                             Companys Logo Image
                            </CardMedia>
                        </Toolbar>
                   
      
        </Box>
      </Paper>
        <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="right"
        open={open}
      >
            <Toolbar />
        <Divider />
        <List>
          {['BGAI Fund raising', 'NPO Fund raising', 'BGAI Investors', 'NPO Sponsorship'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
               
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
              

              </Drawer>


                           



       

      
                        
 </>
      
      


    )
}

export default AppDrawer
