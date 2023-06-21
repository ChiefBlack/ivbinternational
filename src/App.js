import React from "react";
import { Route, Routes } from "react-router-dom";
import PersistentDrawerRight from "./Pages_Mui/Navigation/AppNavigation";
import Contact from "./Pages_Mui/Contact-us";
import About from "./Pages_Mui/About";
import HomePage from "./Pages_Mui/HomePage";
import Campaign from "./Pages_Mui/Campaign";
import ApplyOnline from "./Pages_Mui/Apply-Online";
import FooterComponent from "./Pages_Mui/Footer";
import MobileNavbar from "./Pages_Mui/Navigation/MobileNavBar";

const App = () => {
  return (
    <>
      {window.screen.width >= 768 ? <PersistentDrawerRight /> :<MobileNavbar/>}
      {/* <MobileNavbar/> */}
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/" exact element={<HomePage />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/campaign" element={<Campaign />} />
        <Route path="/apply-online" element={<ApplyOnline />} />
      </Routes>
      <FooterComponent />
    </>
  );
};

export default App;
