import React from 'react';
import './signin.css';
import Nav from '../components/nav/nav';
import { useNavigate } from 'react-router-dom';
import google from "../images/google.png";
import log from "../images/login1.jpg";
import Home from '../pages/Home';
import Login from "../components/googleauth";

export default function Signin() {
  const navigate = useNavigate();

  return (
    <div className="sign">
    <Nav />
    <div className="white-login">
      <div className="par">
        <p className="p1">Login/Sign-up</p>
        
        <div className="input-box">
          <p className="p-input">
            For secure <span className="red">login</span> and <span className="red">sign-up </span>use your google account.
          </p>
        <Login/>
        </div>
        
      </div>
      <div className="new">
        <img src={log} className="new-img" />
      </div>
    </div>
  </div>
);
}
