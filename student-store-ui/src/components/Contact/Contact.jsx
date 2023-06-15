import React from "react";
import happy from "./happy_person.svg"
import "./Contact.css"

export default function Contact(){
    return(
        <div id="contact" className="contact">
          <div className="content">
            <h3>Contact Us</h3>
            <div className="summary">
              <ul className="info">
                <li>
                  <span className="label">Email:</span>
                  <span>code@path.org</span>
                </li>
                <li>
                  <span className="label">Phone:</span>
                  <span>1-800-CODEPATH</span>
                </li>
                <li>
                  <span className="label">Address:</span>
                  <span>123 Fake Street, San Francisco, CA</span>
                </li>
              </ul>
              <div className="media">
                <img src={happy} alt="Person Happy"/>
              </div>
            </div>  
          </div>
        </div>
    )
}