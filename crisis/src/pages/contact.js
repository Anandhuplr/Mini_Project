// contact.js

import React from 'react';
import './contact.css';
import Nav from '../components/nav/nav';

export default function Contact() {
  return (
    <div className="contact-container">
      <Nav />
      <div className="contact-content">
        <h1>Contact Us</h1>
        <div className="contact-info">
          <div className="contact-item">
            <img src={require('../images/phone.jpg')} alt="phone" />
            <p>Phone: 9074669356</p>
          </div>
          <div className="contact-item">
            <img src={require('../images/mail.jpg')} alt="mail" />
            <p>Email: crisisconnect@gmail.com</p>
          </div>
        </div>
      </div>
      <div className="footer">
        <p className="footer-text">&copy; 2024 CRISIS CONNECT. All rights reserved</p>
        <div className="footer-links">
          <a href="/terms">Terms of Service</a>
          <a href="/privacy">Privacy Policy</a>
        </div>
      </div>
    </div>
  );
}
