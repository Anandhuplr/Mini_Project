import React from "react";
import "./reqpage.css";
import Nav from "../components/nav/nav2";
export default function ReqDetails() {
  return (
    <div className="counc1">
      <Nav />
      <div className="text1">
        <u>Request Details</u>{" "}
      </div>

      <div className="reqContainer">
        <div className="reqType">
          <p className="head">Req Type</p>
          <p className="subhead">Request Id :</p>
          <p className="subhead">Name :</p>
          <p className="subhead">Address :</p>
          <p className="subhead">Phone No :</p>
          <p className="subhead">E-mail :</p>
           
        </div>
        <div className="reqDescription">
          <p className="reqpara">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
        </div>
        <div className="grievanceNo">
          <p>
            Number of Grievances :
          </p>
          <p>0</p>
          <a href="user">Click Here</a>
          <p>to view grievance.</p>
        </div>
        <div className="applyANDcancel">
          <div className="apply-container">
            <p>Apply for Survay :</p>
            <button type="submit" className="apply">
              Apply
            </button>
            {/* action??? */}
          </div>
          <div className="cancel-container">
            <p>Cancel Request :</p>
            <div className="cancelPos">
              <div className="cancelReason">
                <textarea
                  type="text"
                  id="cancelDescription"
                  placeholder="Cancel Reason"
                />
              </div>
              <button type="submit" className="cancel">
                Cancel
              </button>
              {/* action??? */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
