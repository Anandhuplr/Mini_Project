import React from "react";
import "./signin.css";
import Nav from "../components/nav/nav";
import { useNavigate } from "react-router-dom";
import google from "../images/google.png";
import log from "../images/login1.jpg";

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
          <button className="button-Login">
            
            <img src={google} className="google"/>
            Sign in with Google
            
            </button>
          </div>
          
        </div>
        <div className="new">
          <img src={log} className="new-img" />
        </div>
      </div>
    </div>
  );
}
