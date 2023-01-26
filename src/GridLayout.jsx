import React from 'react'
import './gridlayout.css'
import Layout from './layout'
import Sidebar from './Sidebar'
import ProductList  from './Container/ProductList'
function GridLayout() {
    

    return (
       <div className='body'>
            <div className='header'>
            hello header

           </div>
          <div className='content'><ProductList/></div>
            <div className='nav'>
               <Sidebar/>
               </div>
               <div className='aside'>SideBar
 
               <div>
            <input type='date' className='diary'/>
            <h1>   &#128525;</h1>        <h1>   &#128526;</h1>
            <input type='range'  onClick/>
            <input type='search'/>
              </div>
           </div>
             <div className='footer'>
          <li>
         <a href="#" className="fa fa-facebook"></a>
         <a href="#" className="fa fa-twitter"></a>
        </li>
      </div>


       </div> 
    )
}

export default GridLayout
