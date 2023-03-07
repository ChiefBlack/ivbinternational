import React from 'react'
import './project.css'
function Project() {
    return (
        <div>
            <h1> projects I Have worked on</h1>

                 <div className='grid'>
                 <div className="card">
                     <img src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="John" style={{width:"100%"}}/>
                       <h1>John Doe</h1>
                          <p className="title">CEO & Founder, Example</p>
                         <p>Harvard University</p>
                          <a href="#"><i className="fa fa-dribbble"></i></a>
                         <a href="#"><i className="fa fa-twitter"></i></a>
                         <a href="#"><i className="fa fa-linkedin"></i></a>
                         <a href="#"><i className="fa fa-facebook"></i></a>
                       <p><button>Contact</button></p>
            </div>
                
                
                
                 </div>   

           



        </div>
    )
}

export default Project
