import React, { useState } from "react";
import "./grievance.css";
import Nav from "../components/nav/nav1";

const Grievance = () => {
  let x = 0;
  const [No, setNo] = useState(x);
  const handleChange = () => {
    x = 1;
    setNo(x);
  };
  return (
    <div className="grev">
      <Nav />
      <div className="grev-req">
        <p className="grev-pa">Request Details</p>

        <p className="grev-pa2">Req No :</p>
        <p className="grev-pa2">Submitted By : </p>
        <p className="grev-pa2">Address : </p>
      </div>
      <div className="grev-req2">
        <p className="grev-pa3">Request description</p>
        <div className="grev-box"></div>
        <div className="gbox">
          <p>To apply Grievance </p>
          <button className="button-grev" onClick={handleChange}>
            Click Here
          </button>
        </div>
      </div>
      {No === 1 && (
        <div className="gbox2">
          <textarea
            rows={8} // Adjust rows as needed
            placeholder="Enter the detailed description of Grievance for this request."
            required
          />
          <button className="button-gre" >Submit</button>
        </div>
        
      )}
    </div>
  );
};
export default Grievance;
