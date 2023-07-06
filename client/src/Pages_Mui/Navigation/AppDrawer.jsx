// import React from "react";
// import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
// import ChevronRightIcon from "@mui/icons-material/ChevronRight";
// import Drawer from "@mui/material/Drawer";
// import Divider from "@mui/material/Divider";
// import MuiAppBar from "@mui/material/AppBar";
// import SideBar from "../SideBar";
// import IconButton from "@mui/material/IconButton";
// import MenuIcon from "@mui/icons-material/Menu";
// import { styled, useTheme } from "@mui/material/styles";
// import { Box, CssBaseline, } from "@mui/material";
// import { Toolbar } from "material";


// const drawerWidth = 240;



// const DrawerHeader = styled("div")(({ theme }) => ({
//   display: "flex",
//   alignItems: "center",
//   padding: theme.spacing(0, 1),
//   // necessary for content to be below app bar
//   ...theme.mixins.toolbar,
//   justifyContent: "flex-start",
// }));

// const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
//   ({ theme, open }) => ({
//     flexGrow: 1,
//     padding: theme.spacing(3),
//     transition: theme.transitions.create("margin", {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.leavingScreen,
//     }),
//     marginRight: -drawerWidth,
//     ...(open && {
//       transition: theme.transitions.create("margin", {
//         easing: theme.transitions.easing.easeOut,
//         duration: theme.transitions.duration.enteringScreen,
//       }),
//       marginRight: 0,
//     }),
//   })
// );

// function AppDrawer() {
//   const [open, setOpen] = React.useState(false);
//   const theme = useTheme();
//   const handleDrawerOpen = () => {
//     setOpen(true);
//   };

//   const handleDrawerClose = () => {
//     setOpen(false);
//   };
//   return (
//     <Box sx={{ display: "flex" }}>
//       <CssBaseline />
      
//         <Toolbar>
          

//           <IconButton
//             color="inherit"
//             aria-label="open drawer"
//             edge="end"
//             onClick={handleDrawerOpen}
//             sx={{ ...(open && { display: "none" }) }}
//           >
//             <MenuIcon />
//           </IconButton>
//         </Toolbar>
    
//       <MenuIcon />
//       <Main open={open}>
//         <DrawerHeader />
//       </Main>
//       <Drawer
//         sx={{
//           width: drawerWidth,
//           flexShrink: 0,
//           "& .MuiDrawer-paper": {
//             width: drawerWidth,
//           },
//         }}
//         variant="persistent"
//         anchor="right"
//         open={open}
//       >
//         <DrawerHeader>
//           <IconButton onClick={handleDrawerClose}>
//             {theme.direction === "rtl" ? (
//               <ChevronLeftIcon />
//             ) : (
//               <ChevronRightIcon />
//             )}
//           </IconButton>
//         </DrawerHeader>
//         <Divider />
//         <SideBar />
//         <Divider />
//       </Drawer>
//     </Box>
//   );
// }

// export default AppDrawer;

// {/* <Box sx={{ display: "flex" }}>
//   <CssBaseline />
//   <AppBar position="fixed" open={open}>
//     <Toolbar>
//       <Typography variant="h6" noWrap sx={{ flexGrow: 1 }} component="div">
//         <motion.img
//           whileHover={{ scale: 0.5 }}
//           src={logoIBV}
//           alt="logo"
//           style={{ height: "90px", objectFit: "cover" }}
//         />
//       </Typography>

//       <IconButton
//         color="inherit"
//         aria-label="open drawer"
//         edge="end"
//         onClick={handleDrawerOpen}
//         sx={{ ...(open && { display: "none" }) }}
//       >
//         <MenuIcon />
//       </IconButton>
//     </Toolbar>
//   </AppBar>

//   <Main open={open}>
//     <DrawerHeader />
//   </Main>
//   {window.screen.width <= 768 ? (
//     <Drawer
//       sx={{
//         width: drawerWidth,
//         flexShrink: 0,
//         "& .MuiDrawer-paper": {
//           width: drawerWidth,
//         },
//       }}
//       variant="persistent"
//       anchor="right"
//       open={open}
//     >
//       <DrawerHeader>
//         <IconButton onClick={handleDrawerClose}>
//           {theme.direction === "rtl" ? (
//             <ChevronLeftIcon />
//           ) : (
//             <ChevronRightIcon />
//           )}
//         </IconButton>
//       </DrawerHeader>
//       <Divider />
//       <SideBar />
//       <Divider />
//     </Drawer>
//   ) : (
//     <></>
//   )}
// </Box>; */}
