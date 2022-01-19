import React from "react";
import "../css/Footer.css";
import {social} from '../data/data'

const Footer = () => {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
        <div className="col">
          <ul className="social-icons list-unstyled">
				{social.map((link) => {
					const { id, url, icon } = link;
					return (
						<li key={id}>
							<a href={url}>{icon}</a>
						</li>
					);
				})}
			</ul>
      <img src="https://i.ibb.co/Qfvn4z6/payment.png" />
        </div>
          {/* Column1 */}
          <div className="col">
            <h4>Store Locator</h4>
            <ul className="list-unstyled">
              <li>431 NE. Jefferson Stree</li>
              <li>San Jose, CA 95112</li>
            </ul>
          </div>
          {/* Column2 */}
          <div className="col">
            <h4>Client Care</h4>
            <ul className="list-unstyled">
              <li>Contact Us</li>
              <li>Help</li>
              <li>Feedback</li>
            </ul>
          </div>
           {/* Column3 */}
           <div className="col">
            <h4>Our Company</h4>
            <ul className="list-unstyled">
              <li>Overview</li>
              <li>Community</li>
              <li>Careers</li>
            </ul>
          </div>
        </div>
        <hr />
        <div className="row">
          <p className="col-sm">
          Terms & Conditions | Privacy Policy | Accessibility |  &copy; {new Date().getFullYear()} PJ'S POOCH ATTIRES <i className='fa fa-paw'></i> | All rights reserved.
            
          </p>
        </div>
      </div>
    </div>
  );
}



export default Footer
