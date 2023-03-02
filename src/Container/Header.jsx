import React from 'react'
import { Link } from 'react-router-dom'
import './header.css'
function Header() {
    return (
        // <div className='header'>

            <nav>
                  
                    <ul>
                        <li className="logo">Company Logo</li>
                       <Link className='links' to='/photos'><li>photos </li></Link> 
                       <Link className='links' to='/profile'> <li>Profile</li></Link>
                        <Link className='links' to='/contact'><li>Contact</li></Link>
                        <Link className='links' to='projects'>  <li>projects</li></Link>
                   </ul>
            </nav>

        //  </div>
    )
}

export default Header
