import React, { useState } from "react";
// import './App.css';
import Layout from "./layout";
import MovieApp from "./MovieApp";
import Sidebar from "./Sidebar";
import GridLayout from "./GridLayout";
import Tabs from "./tabs";
import { BrowserRouter, Route, Router } from "react-router-dom";
import Header from "./Container/Header";
import Profile from "./Container/Profile";
// import Contact from "./Container/Contact";
import Project from "./Container/Project";
import ProductDetails from "../src/Container/ProductDetails";
import TodoApp from "./Test/TodoApp";
import TodoList from "./Test/TodoList";
import AppDrawer from "./Pages_Mui/Navigation/AppDrawer";
import PersistentDrawerRight from "./Pages_Mui/Navigation/AppNavigation";
import { createTheme } from "@mui/system";
import { ThemeProvider } from "styled-components";
import SideBar from "./Pages_Mui/SideBar";
import ImageLogo from "./Pages_Mui/ImageLogo";
import Contact from "./Pages_Mui/Contact-us";
import Framer from "./Pages_Mui/Framer";
import Body from "./Pages_Mui/Content/Body";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
      contrastText: "white",
    },
  },
});

const App = () => {
  const [count, setCount] = useState(0);
  const [movies, showMovies] = useState([]);
  const [searchTerm, setSearchTem] = useState("");

  const API_URL = "http://www.omdbapi.com/?apikey=8a9b4493";

  const searchMovie = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    showMovies(data.Search);
  };

  // setCount=()=>"i love yo";
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        {/* <ImageLogo/> */}
        <PersistentDrawerRight />
        
        <Route path="/contact-us" component={Contact}/>
        {/* <SideBar/> */}
        {/* <Header/>
      <TodoApp/>  
           <Route path="/"exact component={GridLayout}/>
           <Route path="/profile" component={Profile}/>
           <Route path="/contact-us" component={Contact}/>
           <Route path="/projects" component={Project}/>
            <Route path="/products/:prductID" component={ProductDetails}/>  */}
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;



