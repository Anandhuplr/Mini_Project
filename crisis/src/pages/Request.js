import React from "react";
import "./Request.css";
import Nav from "../components/nav/nav1";
import attach_icon from "../images/pin.png";
export default function Request() {
  return (
    <div className="req">
      <Nav/>
      <div className="heading">
        <p className="feed">
          {" "}
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
        {/* request type text --> */}
        <div className="reqBox">
          <input type="text" id="reqeustType" placeholder="Enter the type" />
        </div>
        <div className="rightOr">
          <div className="titleName">
            <p>
              <br />
              Medical Document 
              
            </p>
            {/* medical --> */}
            <div className="file-input-wrapper">
              <input type="file" id="file-upload-ID" />
              <label for="file-upload-ID">
                <img src={attach_icon} alt="" />{" "}
                <text className="attachtext">Attach the relevant file</text>
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className="titleName">
        <p className="loctionMD">
        Identification Proof <label className="star">*</label>
        </p>
      </div>
      {/* medical doc file --> */}
      <div className="fileip">
        <div className="file-input-wrapper">
          <input type="file" id="file-upload-MD" />
          <label for="file-upload-MD">
            <img src={attach_icon} alt="" />{" "}
            <text className="attachtext">Attach the relevant file</text>
          </label>
        </div>
      </div>

      <div className="titleName">
        <p>
          <br />
          Description <label className="star">*</label>
        </p>
      </div>
      {/* description text area --> */}
      <div className="reqBox2">
        <textarea
          type="text"
          id="reqeustDescription"
          placeholder="Enter the detailed description of request"
        />
      </div>
      {/* submit butto*/}
      <div className="submit-container">
        <button type="submit" className="submit">
          Submit
        </button>
        {/* action??? */}
      </div>
    </div>
  );
}
//
