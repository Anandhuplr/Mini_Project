import React, { useState, useEffect } from "react";
import "./track.css";
import Nav from "../components/nav/nav1";
import axios from "axios";
import { FaCamera, FaClipboardList } from "react-icons/fa";
import { FaCheckCircle, FaTimesCircle, FaSpinner } from "react-icons/fa";
import { IoIosPaperPlane } from "react-icons/io";
const tokenk = localStorage.getItem("tokenkey");
localStorage.setItem("tkey", tokenk);
console.log(tokenk);
export default function Track() {
  // State to manage submitted requests

  const [requestDetails, setRequestDetails] = useState([]);

  useEffect(() => {
    // Fetch request details from API using requestId
    const fetchRequestDetails = async () => {
      try {
        const response = await axios.get(
          `http://127.0.0.1:8000/requests/user-list/`,
          {
            headers: {
              Authorization: `token ${tokenk}`,
            },
          }
        );

        console.log(response);
        setRequestDetails(response.data); // Assuming the API response contains request details
      } catch (error) {
        console.error("Error fetching request details:", error);
      }
    };

    fetchRequestDetails();
  }, []);
  // Mock data for submitted requests (replace with actual data fetching logic if needed)
  const getProgressColor = (status) => {
    if (status === "P" || "A" || "R") {
      return "#ff4732";
    }
    return "rgba(68, 68, 68, 0.781)";
  };
  return (
    <div className="maindiv">
      <Nav />
      <div className="feedbck">
        <p className="feed">
          <u>Track Request</u>
        </p>
        <p className="feedsen">Submitted Requests : {requestDetails.length}</p>
      </div>
      <div className="track-container">
        {/* Render a track-box for each submitted request */}
        {requestDetails.map((request) => (
          <div key={request.id} className="track-box">
            <div className="request-box">
              <p className="pT">Req Id : {request.id}</p>
              {request.type === "B" && (
                <>
                  <p className="pT">Type : Basic Needs</p>
                </>
              )}
              {request.type === "M" && (
                <>
                  <p className="pT">Type : Medicine</p>
                </>
              )}
              <p className="pT">Request Description</p>
              <p className="pd">{request.request_desc}</p>

              {/* {request.survey_status === "P" && (
              <>
                <p className='p2'>Your Request is <span className='pend'>PENDING..</span> </p>
                
              </>
            )}
            {request.survey_status === "A" && (
              <p className='p2'>Your Request is <span className='app'>APPROVED..</span>  </p>
            )}
            {request.survey_status === "R" && (
              <p className='p2'>Your Request is <span className='rej'>REJECTED..</span> </p>
            )} */}

              <div className="prog">
                <ul>
                  <li>
                    <div
                      className="line line-one"
                      style={{
                        backgroundColor: getProgressColor(
                          request.survey_status
                        ),
                      }}
                    ></div>
                    <FaClipboardList className="icon" />
                    <div
                      className="progress one"
                      style={{
                        backgroundColor: getProgressColor(
                          request.survey_status
                        ),
                      }}
                    >
                      <p>1</p>
                      <i className="uil uil-check" />
                    </div>
                    <p className="text">Details Filled</p>
                  </li>
                  <li>
                    <div
                      className="line line-one"
                      style={{ backgroundColor: "rgba(68, 68, 68, 0.781)" }}
                    ></div>
                    {request.survey_status === "A" && (
                      <div
                        className="line line-one"
                        style={{ backgroundColor: "green" }}
                      ></div>
                    )}
                    {request.survey_status === "R" && (
                      <div
                        className="line line-one"
                        style={{ backgroundColor: "#8B0000" }}
                      ></div>
                    )}
                    <IoIosPaperPlane className="icon" />
                    <div
                      className="progress two"
                      style={{
                        backgroundColor: getProgressColor(
                          request.survey_status
                        ),
                      }}
                    >
                      <p>2</p>
                      <i className="uil uil-check" />
                    </div>
                    <p className="text">
                      Request Submitted<br></br>
                      (Forwarded to Local Authority)
                    </p>
                  </li>

                  <li>
                    {request.survey_status === "P" && (
                      <>
                      <FaSpinner className="icon" />
                      <div className="progress three">
                        <p>3</p>
                        <i className="uil uil-check" />
                      </div>
                    </>
                    )}
                    {request.survey_status === "A" && (
                     <>
                     <FaCheckCircle className="iconA" />
                     <div className="progress three"style={{ backgroundColor: "green" }}>
                       <p>3</p>
                       <i className="uil uil-check" />
                     </div>
                   </>
                    )}
                    {request.survey_status === "R" && (
                      <>
                        <FaTimesCircle className="iconR" />
                        <div className="progress three" style={{ backgroundColor: "#8B0000" }}>
                          <p>3</p>
                          <i className="uil uil-check" />
                        </div>
                      </>
                    )}

                    {request.survey_status === "P" && (
                      <p className="text">Pending...</p>
                    )}
                    {request.survey_status === "A" && (
                      <p className="textA">Approved</p>
                    )}
                    {request.survey_status === "R" && (
                      <p className="textR">Rejected</p>
                    )}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
