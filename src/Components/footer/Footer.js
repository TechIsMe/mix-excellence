import React from "react";
import './Footer.css';
import { FaInstagram } from 'react-icons/fa';


function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          <div className="col">
            <h4>Email:</h4>
            <h1 className="list-unstyled">
              <li>Roelprado@Mixcellence</li>
              <li>Mixcellence@Mixcellence</li>
            </h1>
          </div>
          <div className="col">
            <ui className="list-unstyled">
              <li>
                <FaInstagram/>
                @Mixcellence</li>
              
            </ui>
          </div>
          <div className="col">
            <ui className="list-unstyled">
              <li>Phone</li>
               <li>831-578-1863</li>
            </ui>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;