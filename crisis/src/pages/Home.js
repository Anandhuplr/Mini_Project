import  {React, useState, useEffect } from "react";
import Nav from "../components/nav/nav1";
import "./Home.css";
import { get_profile } from "../apis/user";
import { useNavigate } from "react-router-dom";
export default function Home() {
  const [name, setName] = useState("");
  const navigate = useNavigate();
  const [submittedRequests, setSubmittedRequests] = useState([]);
  const token = localStorage.getItem("userkey");
  localStorage.setItem("tokenkey",token);
  console.log(localStorage.getItem("tokenkey"));
  console.log(name)
  // Mock data for submitted requests (replace with actual data fetching logic if needed)
 
  useEffect(() => {
    // Fetch data from the API
    async function fetchData() {
      try {
        const response = await fetch("http://127.0.0.1:8000/requests/list/");
        console.log(response)
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setSubmittedRequests(data);
        const profileResponse = await get_profile(token);
        console.log(profileResponse)  
        setName(profileResponse.response.name); // Assuming the API response is an array of objects
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData(); // Call the fetchData function when the component mounts
  }, []);

  const handleRequestClick = (requestId) => {
    localStorage.setItem("selectedRequestId", requestId); // Set selected request ID in local storage
    navigate(`/grievance`); // Navigate to Grievance page with request ID as parameter
  };

  return (
    <div className="home">
      <Nav />
      <div className="home-inside">
        <div className="info">
          <p className="hello">Hello, {name}</p>
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
            <button className="button-req" onClick={()=>navigate('/req')}>Click Here</button>
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
                onClick={() => handleRequestClick(request.id)} 
 // Assuming you want to navigate to the track page with request ID
              >
                <p className="updateU">User-Id : {request.id}</p>
                <p className="updateN">Name : {request.username} </p>
                <p className="updateD"><b className="updateD1">Description: </b>{request.request_desc.slice(0, 100)}...</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
