// import React from "react";
// import './Footer.css';
// import { FaInstagram } from 'react-icons/fa';


// function Footer() {
//   return (
//     <div classNameNameName="main-footer">
//       <div classNameNameName="container">
//         <div classNameNameName="row">
//           <div classNameNameName="col">
//             <h4 classNameNameName="list-unstyled">Email:</h4>
//             <h1 classNameNameName="list-unstyled">
//               <li>Roelprado@Mixcellence</li>
//               <li>Mixcellence@Mixcellence</li>
//             </h1>
//           </div>
//           <div classNameNameName="col">
//             <ul classNameNameName="list-unstyled">
//               <li>
//                 <FaInstagram/>
//                 @Mixcellence</li>
              
//             </ul>
//           </div>
//           <div classNameNameName="col">
//             <ul classNameNameName="list-unstyled">
//               <li>Phone</li>
//                <li>831-578-1863</li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Footer;


import React from "react";
import './Footer.css';
import { FaInstagram } from 'react-icons/fa';


function Footer() {
  return (
    
    <div >
       <footer className="footer-distributed">
        <div className="footer-left">
            <h3>Email:</h3>
            <p className="footer-company-name">Roelprado@mixcellence.com
                <p className="footer-company-name">Mixcellence@mixcellence</p>
                </p>
        </div>
        <div className="footer-center">
            <div>
                <p><span>
                  <FaInstagram /> @Mixcellence_mobile_bar</span>
                   </p>
            </div>
        </div>
        <div className="footer-right">
            <p className="footer-company-about">
                <span>Phone:</span>
                <span>831-578-1863</span> </p>

        </div>
    </footer>
    </div>

  );
}

export default Footer;