import React from 'react';


//  import component
import Map from './map';

//import css  files 
import './css/office.css';
import './css/contact.css';
//  import img files
import Facebook from '../../img/facebook-logo.png';
import Twitter from '../../img/twitter-logo-button.png';
import Instagram from '../../img/instagram-logo.png';
import Global from '../../img/global.png';
const OfficeData =()=>{
    return(
        <div className="office col-12 col-lg-6 col-md-12">
            <div>
                <div>
                    <i className="material-icons md-24">work</i>
                    <h4>Our office</h4>
                </div>
                <p>Feel free to ask if you have any question regarding our services or if you just want to say Hello, we would love to hear from you.</p>
                </div>
             <div>
                <p>Vesperr Labs Inc</p>
                <p>X123 Street, palm 05 ave Peterongan Semarang, Indonesia 50242</p>
                <p className="contactp"> <i className="material-icons md-24">call</i><span>Phone:</span> +6221 999 888 77 or +6221 999 888 66</p>
                <p className="contactp"><i className="material-icons md-24">voice_chat</i><span>Skype:</span>vesperr.contact</p>
                <p className="contactp"><i className="material-icons md-24">email</i><span>Email:</span>info@yourdomainname.com</p>
             </div>

             <div>
                <div>
                    <i className="material-icons md-24">work</i>
                    <h4>Our office</h4>
                </div>
                <p>
                    <img src={Facebook} alt="" />
                    <img src={Twitter} alt="" />
                    <img src={Instagram} alt="" />
                    <img src={Global} alt="" />
                </p>
               </div>
              <div>
                   <Map/>
                </div>

         </div>
    )

}

export default OfficeData;