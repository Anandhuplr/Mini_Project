import React from "react";
import "./userpage.css";
import Nav from "../components/nav/nav2";
import { useNavigate } from "react-router-dom";

export default function UserPage() {
  const navigate = useNavigate();
  return (
    <div className="user">
      <Nav />
      <div className="info">
        <p className="hello">Hello, Suraj</p>
        <p className="sentence">
          Ward counsellor<br />
          Govt ID :
        </p>
      </div>
      <div id="products">
        <div className="container">
          <h1 className="sub-title">Functions</h1>
          <div className="service-list">
            <button className="service-btn" onClick={()=>navigate('/requestlist')}>
              <p className="list">Request List</p>
              <p>To view all the request submitted by the victims.</p>
              <a href="/recommd">Click Here!</a>
            </button>
            <button className="service-btn" onClick={()=>navigate('/approvedlist')}>
              <p className="list">Approved Requests</p>
              <p>List of request approved for survey.</p>
              <a href="/update">Click Here!</a>
            </button>
            <button className="service-btn" onClick={()=>navigate('/rejected')}>
              <p className="list">Rejected Requests</p>
              <p>List of request rejected due to some reason.</p>
              <a href="/search">Click Here!</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
