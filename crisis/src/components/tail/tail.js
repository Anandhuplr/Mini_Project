import React from "react";
import "./tail.css";
import img from "../../images/phone.jpg";
import img1 from "../../images/mail.jpg";

export default function Tail() {
  return (
    <div>
      <div className="Tail">
        <p className="pa">
          FOR ANY <span>QUERIES</span>
          <br />
          CONTACT US
        </p>
        <div className="inside">
          <div className="contact-item">
            <img src={img} alt="phone" />
            <p className="pa2">9074669356</p>
          </div>
          <div className="contact-item">
            <img src={img1} alt="mail" />
            <p className="pa2">crisisconnect@gmail.com</p>
          </div>
        </div>
      </div>
      <div className="line">
        <hr></hr>
        <div className="tailend">
        <p className="no"><span className='span1'>CRISIS </span>CONNECT</p>
        <p className="para">© 2024 CRISIS CONNECT. All right reserved</p>
        <p className="para">Terms of service</p>
        <p className="para">Privacy Policy</p>
        </div>
      </div>
      
    </div>
  );
}
