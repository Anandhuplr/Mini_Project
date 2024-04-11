import React, { useState } from "react";
import "./signup.css";
import Nav from "./components/nav/nav";

export default function Signup() {
  const [position, setPosition] = useState("");

  const handleChange = (e) => {
    setPosition(e.target.value);
  };

  return (
    <div className="sign">
      <Nav />
      <div className="white">
        <p>Create your account</p>
        <div className="dropdown">
          <select value={position} onChange={handleChange}>
            {position === "" && <option value="">Choose your position</option>}
            {position !== "" && <option disabled>Choose your position</option>}
            <option value="victim">Victim</option>
            <option value="counsellor">Counsellor</option>
            <option value="collector">Collector</option>
          </select>
        </div>

        {position === "victim" && (
          <div className="inputs">
            <div className="input-row">
              <div className="input">
                <p className="pin">Full Name</p>
                <input type="text" required placeholder="Enter your name" />
              </div>
              <div className="input">
                <p className="pin">Address</p>
                <input type="text" required placeholder="Enter Address" />
              </div>
            </div>

            <div className="input-row">
              <div className="input">
                <p className="pin">Email</p>
                <input type="email" required placeholder="Enter E-mail"/>
              </div>
              <div className="input">
                <p className="pin">Phone Number</p>
                <input type="tel" required placeholder="Enter phone number" />
              </div>
            </div>
            <div className="input-row">
              <div className="input">
                <p className="pin">Username</p>
                <input type="text" required placeholder="Enter UserName"/>
              </div>
              <div className="input">
                <p className="pin">Password</p>
                <input type="password" required placeholder="Enter Password"/>
              </div>
            </div>
            <div className="end">
            <button type="submit">SignUp</button>
            <p>Already have an account? <a href="/login">Sign in </a>Sign in here!</p>
            </div>
            
          </div>
        )}

        {(position === "counsellor" || position === "collector") && (
          <div className="inputs">
          <div className="input-row">
            <div className="input">
              <p className="pin">Full Name</p>
              <input type="text" required placeholder="Enter your name" />
            </div>
            <div className="input">
              <p className="pin">Govt-ID</p>
              <input type="text" required placeholder="Enter Govt-ID" />
            </div>
          </div>

          <div className="input-row">
            <div className="input">
              <p className="pin">Email</p>
              <input type="email" required placeholder="Enter E-mail"/>
            </div>
            <div className="input">
              <p className="pin">Phone Number</p>
              <input type="tel" required placeholder="Enter phone number" />
            </div>
          </div>
          <div className="input-row">
            <div className="input">
              <p className="pin">Username</p>
              <input type="text" required placeholder="Enter UserName"/>
            </div>
            <div className="input">
              <p className="pin">Password</p>
              <input type="password" required placeholder="Enter Password"/>
            </div>
          </div>
          <div className="end">
          <button type="submit">SignUp</button>
          <p>Already have an account? <a href="/login">Sign in </a>Sign in here!</p>
          </div>
          
        </div>
          

        )}
      </div>
    </div>
  );
}
