import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import { ButtonGroup, useTheme } from "@mui/material";
import HoverButton from "../HoverButton";
import logoIBV from "../images/logoIBV.png";
import { motion } from "framer-motion";

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  color: "black",
  backgroundColor: "white",

  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,

    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: drawerWidth,
    color: "black",
    backgroundColor: "#EDF6F9",
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-start",
}));

export default function PersistentDrawerRight() {
  const theme = useTheme();

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" noWrap sx={{ flexGrow: 1 }} component="div">
            <motion.img
              whileHover={{ scale: 0.5 }}
              src={logoIBV}
              alt="logo"
              style={{ height: "90px", objectFit: "cover" }}
            />
          </Typography>

          <ButtonGroup
            variant="outline"
            aria-label="outlined primary button group"
            sx={{
              [theme.breakpoints.down("sm")]: { display: "none" },
            }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <HoverButton />
            </motion.div>
          </ButtonGroup>
        </Toolbar>
      </AppBar>

      <DrawerHeader />
    </Box>
  );
}
