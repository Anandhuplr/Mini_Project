import React from "react";
import "../pages/profile.css";
import Nav from "../components/nav/nav2";
import edit from "../images/edit.png";
export default function Profile() {
  return (
    <div className="maindiv">
      <Nav />
      <div className="feedbck">
        <p className="feed">
          <u>My Profile</u>
        </p>
        <div className="feed1">
          <p className="feedsen">Edit Profile</p>
          <img src={edit} className="edit-img" />
        </div>
      </div>
      <div className="edit-box">
        <div className="sub-box">
        <p className="edit-name">Full Name</p>
        <input className="edit-input" type="text" ></input>
        </div>
        <div className="sub-box">
        <p className="edit-name">Govt ID</p>
        <input className="edit-input" type="text"></input>
        </div>
        <div className="sub-box">
        <p className="edit-name">E-mail</p>
        <input className="edit-input" type="email"></input>
        </div>
        <div className="sub-box">
        <p className="edit-name">Phone Number</p>
        <input className="edit-input" type="tel"></input>
        </div>
        <div className="sub-box">
        <p className="edit-name">UserName</p>
        <input className="edit-input" type="text"></input>
        </div>
        <div className="sub-box">
        <p className="edit-name">Password</p>
        <input className="edit-input"></input>
        </div>
        <button className="button-gre" type="submit">Update</button>
      </div>
    </div>
  );
}
