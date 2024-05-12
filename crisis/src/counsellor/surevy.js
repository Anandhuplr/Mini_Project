import { React, useState, useEffect } from "react";
import "./survey.css";
import Nav from "../components/nav/nav2";
import { useNavigate } from "react-router-dom";
import axios from "axios";
export default function ReqDetails() {
  const [approveChecked, setApproveChecked] = useState("");
  const tok = localStorage.getItem("tokenkey");
  const reqId = localStorage.getItem("selectedRequestId");
  console.log(approveChecked);
  const [formData, setFormData] = useState({
    survey_desc: "",
    survey_status: approveChecked,
    request_id: reqId,

    //request_id: requestId,
  });
  console.log(formData)
  useEffect(() => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      survey_status: approveChecked,
    }));
  }, [approveChecked]);
  console.log(formData);
  const handleSurvey = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/survey/create/",
        formData,
        {
          headers: {
            Authorization: `token ${tok}`,
            "Content-Type": "application/json",
          },
        }
      );

      console.log("Response from backend:", response.data);
      // Handle success or redirect to another page
    } catch (error) {
      console.error("Error sending data:", error);
      // Handle error
    }
  };

  const handleApproveChange = (e) => {
    setApproveChecked(e.target.value);
  };
  const handleGrievanceChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="counc1">
      <Nav />
      <div className="text1">
        <u>Survey Details</u>
      </div>

      <div className="reqContainer">
        <div className="reqsurv">
          <p className="subhead">Approve Request</p>
          <select
            value={approveChecked}
            onChange={(e) => setApproveChecked(e.target.value)}
            className="approve"
          >
            {approveChecked === "" && (
              <option value="">Choose your position</option>
            )}
            {approveChecked !== "" && (
              <option disabled>Choose your position</option>
            )}
            <option value="A">Approved</option>
            <option value="R">Rejected</option>
            {/* <option value="collector">Collector</option> */}
          </select>
        </div>

        <div className="reqDescription">
          <p className="reqpara"></p>
        </div>

        <div className="applyANDcancel">
          <div className="cancel-container">
            <p>Survey Description :</p>
            <div className="cancelPos">
              <div className="cancelReason">
                <textarea
                  type="text"
                  id="cancelDescription"
                  placeholder="Survey Description"
                  name="survey_desc"
                  value={formData.survey_desc}
                  onChange={handleGrievanceChange}
                />
              </div>
              <button type="submit" className="cancel" onClick={handleSurvey}>
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
