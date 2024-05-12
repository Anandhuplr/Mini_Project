import React from "react";
import "../pages/profile.css";
import Nav from "../components/nav/nav2";
import edit from "../images/edit.png";
export default function Profile() {

  
  const name=localStorage.getItem("nam");
  const email=localStorage.getItem("em");
  const address=localStorage.getItem("add");
  const type=localStorage.getItem("typ");
  const phone=localStorage.getItem("ph");
  const username=localStorage.getItem("use");
  const govid =localStorage.getItem("gId2");

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
        <input className="edit-input" type="text" value={name} readOnly/>
        </div>
        {type === "L" && (
  <div className="sub-box">
  <p className="edit-name">Govt ID</p>
  <input className="edit-input" type="text" value={govid} readOnly></input>
  </div>
)}
{type === "V" && (
  <div className="sub-box">
  <p className="edit-name">Address</p>
  <input className="edit-input" type="text" value={address} readOnly></input>
  </div>
)}
        
        <div className="sub-box">
        <p className="edit-name">E-mail</p>
        <input className="edit-input" type="email" value={email} readOnly></input>
        </div>
        <div className="sub-box">
        <p className="edit-name">Phone Number</p>
        <input className="edit-input" type="tel" value={phone} readOnly></input>
        </div>
        <div className="sub-box">
        <p className="edit-name">UserName</p>
        <input className="edit-input" type="text" value={username} readOnly></input>
        </div>
        {/* <button className="button-gre" type="submit">Update</button> */}
      </div>
    </div>
  );
}
