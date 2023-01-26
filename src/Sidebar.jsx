import React, { useState } from 'react'

import "./sidebar.css"
import Tabs from './tabs';
function Sidebar() {
const [mini,setMini]=useState(true);


    const toggleSideBar=()=>{
  
      //setMini(false); 

    document.getElementById("mySideBar").style.width="250px";
    document.getElementById("mySideBar").style.backgroundColor="grey";
    document.getElementById("mySideBar").style.boxShadow="solid rgb(255, 255,250,0.1)6px";
    
    
  
 }
 
 const toggleStateBar = ()=>{
 
  document.getElementById("mySideBar").style.width="55px";
  document.getElementById("mySideBar").style.backgroundColor="black";
  //setMini(true);
 
 }

  
    return (
        <div className='sidebar'id='mySideBar' onMouseOver={toggleSideBar} onMouseOut={toggleStateBar}>
            <li id='homeTop'><i  className="fa fa-home" ></i>Home</li>
            <li><i className="fa fa-history" aria-hidden="true"></i>history</li>
            <li><i className="fa fa-briefcase" aria-hidden="true"></i>careers</li>
            <li><i className="fa fa-user" aria-hidden="true"></i>profile</li>
        </div>
        
    );
}

export default Sidebar
