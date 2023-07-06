import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
//import Logo from './assets/images/company_logo.png';

function ImageLogo() {
  return (
    <AppBar position="static">
      <Toolbar>
        <img
          src={"./images/logoIBV.png"}
          alt="Company Logo"
          style={{ marginRight: 16, height: 32 }}
        />
        <Typography variant="h6">My App</Typography>
        {/* Other components of the AppBar... */}
      </Toolbar>
    </AppBar>
  );
}

export default ImageLogo;
