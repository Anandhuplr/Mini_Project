import React, { useState } from "react";
import "./Request.css";
import Nav from "../components/nav/nav1";
import axios from "axios";
import attach_icon from "../images/pin.png";

export default function Request() {
  const [requestType, setRequestType] = useState("");
  const [reqDesc, setReqDesc] = useState("");
  const [Add, setAdd] = useState(""); // Use null for file states
  const [ration, setration] = useState(""); // Use null for file states
  const token = localStorage.getItem("User_token");
  
  async function save(event) {
    event.preventDefault();
    const formData = new FormData(); 
    const requestData = {
      type: requestType,
      request_desc: reqDesc,
      aadhar_no:Add,
      ration_no:ration,
      formData
    };
    // Create FormData object for file uploads
    
    // Append file to FormData object

    try {
      await axios.post("http://127.0.0.1:8000/requests/create/", requestData, {
        headers: {
          "Content-Type": "multipart/form-data", // Use multipart/form-data for file uploads
          Authorization: `token ${token}`,
        },
      });
      console.log("Form submitted successfully!");
      alert("Student Registration Successful");
      setRequestType("");
      setReqDesc("");
      setAdd(""); // Reset file states after successful submission
      setration("");
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  }

  return (
    <div className="req">
      <Nav />
      <div className="heading">
        <p className="feed">
          <u>Request Submission Form</u>
        </p>
      </div>
      <div className="fillDetails">
        <p>Fill the following Details</p>
      </div>
      <div className="block2">
        <div className="titleName">
          <p>
            <br />
            Title / Type of Request <label className="star">*</label>
          </p>
        </div>
        <div className="dropdown">
          <select value={requestType} onChange={(e) => setRequestType(e.target.value)}>
            {requestType=== "" && <option value="">Select...</option>}
            {requestType!== "" && <option disabled>Select...</option>}
            <option value="B">Basic Needs</option>
            <option value="M">Medicine</option>
            {/* <option value="collector">Collector</option> */}
          </select>
        </div>
        <div className="titleName">
        <p className="loctionMD">Ration No<label className="star">*</label></p>
      </div>
        <div className="reqBox">
          <input
            type="text"
            id="requestType"
            placeholder="Enter the type"
            value={ration}
            onChange={(event) => {
              setration(event.target.value);
            }}
          />
        </div>
        
      </div>
      <div className="titleName">
        <p className="loctionMD">Aadhaar No <label className="star">*</label></p>
      </div>
      <div className="reqBox">
          <input
            type="text"
            id="requestType"
            placeholder="Enter the type"
            value={Add}
            onChange={(event) => {
              setAdd(event.target.value);
            }}
          />
        </div>
      <div className="titleName">
        <p>
          <br />
          Description <label className="star">*</label>
        </p>
      </div>
      <div className="reqBox2">
        <textarea
          type="text"
          id="description"
          placeholder="Enter the detailed description of request"
          value={reqDesc}
          onChange={(event) => {
            setReqDesc(event.target.value);
          }}
        />
      </div>
      <div className="submit-container">
        <button type="submit" className="submit" onClick={save}>
          Submit
        </button>
      </div>
    </div>
  );
}
