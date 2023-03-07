import React from 'react'
import './contact.css'
function Contact() {
    return (
     <div>
        <h1>Hello contact form</h1>
        <div className="container">
  
     <div className='form'>
     <div className="row">
      <div className="col-25">
        <label for="fname">First Name</label>
      </div>
      <div className="col-75">
        <input type="text" id="fname" name="firstname" placeholder="Your name.."/>
      </div>
    </div>
    <div className="row">
      <div className="col-25">
        <label for="lname">Last Name</label>
      </div>
      <div className="col-75">
        <input type="text" id="lname" name="lastname" placeholder="Your last name.."/>
      </div>
    </div>
    <div className="row">
      <div className="col-25">
        <label for="country">Country</label>
      </div>
      <div className="col-75">
        <select id="country" name="country">
          <option value="australia">South Africa</option>
          <option value="canada">Canada</option>
          <option value="usa">USA</option>
        </select>
      </div>
    </div>
    <div className="row">
      <div className="col-25">
        <label for="subject">Subject</label>
      </div>
      <div className="col-75">
        <textarea id="subject" name="subject" placeholder="Write something.." style={{height:"200px"}}></textarea>
      </div>
    </div>

    <button type="submit">Submit</button>
    </div>
 
</div>  

    </div>
    )
}

export default Contact;
