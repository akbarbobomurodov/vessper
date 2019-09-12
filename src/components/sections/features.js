import React from 'react';
import {Link} from 'react-scroll';

import './css/features.css'
import './css/media/feamedia.css';
const Features = () => {
    return (
        <div className="features" id="features">
              <div>
                <Link
                    activeClass="active"
                    to="home"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                     ><span>V</span>esperr</Link>
                <p>© Vesperr labs Inc - All right reserved</p>
                  <p>Created By: 
                      Akbar  :)
                  </p>

                  </div>
        </div>
    )
}

export default Features;