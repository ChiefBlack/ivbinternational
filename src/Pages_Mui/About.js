import { styled } from "@mui/system";
import React from "react";
import content from "./content";
import Card from "./Card";


function About() {
  return <>
  {
   content.map(items=>(<Card  item={items}key={items.id}/>))

  }
  
  </>;
}

export default About;
