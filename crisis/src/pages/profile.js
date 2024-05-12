import {React, useState,useEffect } from "react";
import "./profile.css";
import axios from 'axios';
import { get_profile } from "../apis/user";
import Nav from "../components/nav/nav1";
import edit from "../images/edit.png";
import { useNavigate } from "react-router-dom";
export default function Profile() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const[address,setaddress]=useState("");
  const[type,settype]=useState("");
  const[phone,setphone]=useState("");
  const[govt,setgovt]=useState("");
  const user = localStorage.getItem("Username");
  const[username,setusername]=useState("");
  
  const token = localStorage.getItem("key");
  
  localStorage.setItem("nam",name);
  localStorage.setItem("em",email);
  localStorage.setItem("userkey", token);
  localStorage.setItem("add",address);
  localStorage.setItem("typ",type);
  localStorage.setItem("ph",phone);
  localStorage.setItem("gId",govt);
  localStorage.setItem("use",username);
  //console.log(localStorage.getItem("ph"))
  useEffect(() => {
    const fetchData = async () => {
      try {
        const profileResponse = await get_profile(token);
        
        setName(profileResponse.response.name);
        setEmail(profileResponse.response.email);
       
        
        setusername(profileResponse.response.username);
        
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
      },[]);

      const updateProfile = async () => {
        const updateData = {
          address: address,
          // Add other fields as needed
        };
    
        try {
          const response = await axios.post(
            `http://127.0.0.1:8000/users/${user}/`,
            updateData,
            // {
            //   headers: {
            //     "Authorization": `token ${token}`,
            //     "Content-Type": "application/json",
            //     'Access-Control-Allow-Origin':'*',
            //     'Access-Control-Allow-Methods': 'PUT, GET, HEAD, POST, DELETE, OPTIONS,PATCH',
            //     "Access-Control-Expose-Headers":'*',
                
        
            //   }
            // }
          );
          console.log(response)
          // Optionally, you can re-fetch the profile data here to update the UI with the latest changes
        } catch (error) {
          console.error("Error updating profile:", error);
        }
      };

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
        <input
            className="edit-input"
            type="text"
            value={name}
            readOnly // Prevent user from editing this field
          />
        </div>
        
        <div className="dropdown">
          <select value={type} onChange={(e) => settype(e.target.value)}>
            {type === "" && <option value="">Choose your position</option>}
            {type!== "" && <option disabled>Choose your position</option>}
            <option value="V">Victim</option>
            <option value="L">Counsellor</option>
            {/* <option value="collector">Collector</option> */}
          </select>
        </div>
        {type === "L" && (
  <div className="sub-box">
    <p className="edit-name">Govt-ID</p>
    <input
      className="edit-input"
      type="text"
      value={govt}
      onChange={(e) => setgovt(e.target.value)}
    />
  </div>
)}
        <div className="sub-box">
        <p className="edit-name">Address</p>
        <input className="edit-input" type="text" value={address}
            onChange={(e) => setaddress(e.target.value)}></input>
        </div>
        <div className="sub-box">
        <p className="edit-name">E-mail</p>
        <input className="edit-input" type="email" value={email}
            readOnly ></input>
        </div>
        <div className="sub-box">
        <p className="edit-name">Phone Number</p>
        <input className="edit-input" type="tel" value={phone}
            onChange={(e) => setphone(e.target.value)}></input>
        </div>
        <div className="sub-box">
        <p className="edit-name">UserName</p>
        <input className="edit-input" type="text" value={username} readOnly></input>
        </div>
        
        {type === "V" ? (
        <button className="button-gre" type="submit" onClick={() => window.location.href = '/home'}>Update</button>
      ) : (
        <button className="button-gre" type="submit" onClick={() => window.location.href = '/user'}>Update</button>
      )}
      </div>
    </div>
  );
}
