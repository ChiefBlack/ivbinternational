import React from "react";
import { BrowserRouter, Route,Switch } from "react-router-dom";
import PersistentDrawerRight from "./Pages_Mui/Navigation/AppNavigation";
import Contact from "./Pages_Mui/Contact-us";
import About from "./Pages_Mui/About";
import HomePage from "./Pages_Mui/HomePage";
import Campaign from "./Pages_Mui/Campaign";
import ApplyOnline from "./Pages_Mui/Apply-Online";
import FooterComponent from "./Pages_Mui/Footer";

const App = () => {
  return (
    <>
      <PersistentDrawerRight />
      <BrowserRouter>
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/" exact component={HomePage} />
          <Route path="/contact-us" component={Contact} />
          <Route path="/campaign" component={Campaign} />
          <Route path="/apply-online" component={ApplyOnline} />
        </Switch>
        <FooterComponent/>
       
      </BrowserRouter>
    </>
  );
};

export default App;
