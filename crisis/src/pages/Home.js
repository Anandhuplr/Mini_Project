import React, { useState, useEffect } from "react";
import Nav from "../components/nav/nav1";
import "./Home.css";
import { useNavigate } from "react-router-dom";
export default function Home() {
  const navigate = useNavigate();
  const [submittedRequests, setSubmittedRequests] = useState([]);

  // Mock data for submitted requests (replace with actual data fetching logic if needed)
  useEffect(() => {
    const mockRequests = [
      { id: 1, des: "First request \n These are the request details provided by other victims affected by the disaster" },
      { id: 2, des: "Second request" },
      { id: 3, des: "Third request" },
      { id: 4, des: "forth request" },
    ];
    setSubmittedRequests(mockRequests);
  }, []);
  return (
    <div className="home">
      <Nav />
      <div className="home-inside">
        <div className="info">
          <p className="hello">Hello, Anandhu</p>
          <p className="sentence">
            Welcome to Crisis Connect Dashboard – Your central hub for managing
            requests, tracking progress, and staying informed during times of
            crisis.
          </p>
          <hr className="li"></hr>
          <div className="d1">
            <p className="h1">
              <u>Request Submission</u>
            </p>
            <p className="p1">
              Take the first step towards accessing Relief Aid by submitting
              your request here.{" "}
            </p>
            <button className="button-req">Click Here</button>
          </div>
          <div className="d1">
            <p className="h1">
              <u>Track Request </u>
            </p>
            <p className="p1">
              To monitor the progress of your submitted request, track its
              status here.
            </p>
            <button className="button-gre" onClick={() => navigate("/track")}>
              Click Here
            </button>
          </div>
          <div className="d1">
            <p className="h1">
              <u>Feedback Section</u>
            </p>
            <p className="p1">
              Your feedback is crucial in shaping our services. Take a moment to
              share your thoughts and help us enhance our support during crisis
              situations.{" "}
            </p>
            <button
              className="button-feed"
              onClick={() => navigate("/feedback")}
            >
              Click Here
            </button>
          </div>
        </div>
        <div className="update">
          <div className="update-inside">
            <p className="up-sen">UPDATES</p>
            <hr></hr>
            {/* Render boxes for each submitted request */}
            {submittedRequests.map((request) => (
              <div
                key={request.id}
                className="request-box"
               // onClick={() => navigate(`/track/${request.id}`)}
               onClick={() => navigate('/grievance')}
              >
                {request.des}
                
              </div>
              
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
