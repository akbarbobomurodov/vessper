import React from 'react';

//  import css files
import '../css/contact.css'
import './css/contact.css'
// import './css/media-376.css';
//  import components
import Formgroup from './yourdata';
import OfficeData from './officedata';

const Contact = () => {
    return (
        <div className="container-fluid  contact" id="contact">
            <h1>GET IN TOUCH</h1>
             <span></span>
             <p>We have a history of doing what our name implies, creating a visual language around the beliefs of the brands we work with.</p>
         <div className="row">
              <Formgroup/>
              <OfficeData/>
         </div>
    </div>
            )
        }
        
export default Contact;