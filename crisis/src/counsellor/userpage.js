import React, { useState, useEffect } from "react";
import "./userpage.css";
import Nav from "../components/nav/nav2";
import { useNavigate } from "react-router-dom";
import { get_profile } from "../apis/user";

const token = localStorage.getItem("userkey");
localStorage.setItem("tokenkey",token);
const govtid=localStorage.getItem("gId");
localStorage.setItem("gId2",govtid)
export default function UserPage() {
  const navigate = useNavigate();
  const [name, setName] = useState('');

  useEffect(() => {
    async function fetchData() {
      try {
        const profileResponse = await get_profile(token);
        setName(profileResponse.response.name); // Assuming the API response is an object with a 'name' property
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData(); // Call the fetchData function when the component mounts
  }, []); // Empty dependency array ensures this effect runs only once (on mount)

  return (
    <div className="user">
      <Nav />
      <div className="info">
        <p className="hello">Hello, {name}</p>
        <p className="sentence">
          Ward counsellor<br />
          Govt ID : {govtid}
        </p>
      </div>
      <div id="products">
        <div className="container">
          <h1 className="sub-title">Functions</h1>
          <div className="service-list">
            <button className="service-btn" onClick={() => navigate('/requestlist')}>
              <p className="list">Request List</p>
              <p>To view all the requests submitted by the victims.</p>
              <a href="/recommd">Click Here!</a>
            </button>
            <button className="service-btn" onClick={() => navigate('/approvedlist')}>
              <p className="list">Approved Requests</p>
              <p>List of requests approved for survey.</p>
              <a href="/update">Click Here!</a>
            </button>
            <button className="service-btn" onClick={() => navigate('/rejected')}>
              <p className="list">Rejected Requests</p>
              <p>List of requests rejected due to some reason.</p>
              <a href="/search">Click Here!</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
