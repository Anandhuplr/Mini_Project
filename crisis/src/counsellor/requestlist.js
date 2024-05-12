import React, { useState, useEffect } from 'react';
import './requestlist.css';
import Nav from '../components/nav/nav2'
import { useNavigate } from "react-router-dom";
export default function Requestlist() {
    const navigate = useNavigate();
    const [Requestlist,setRequestlist] = useState([]);
    console.log(Requestlist)
    useEffect(() => {
      // Fetch data from the API
      async function fetchData() {
        try {
          const response = await fetch("http://127.0.0.1:8000/requests/list/");
          console.log(response)
          const data = await response.json();
          setRequestlist(data);
          // Assuming the API response is an array of objects
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }
  
      fetchData(); // Call the fetchData function when the component mounts
    }, []);
  
    const handleRequestClick = (requestId) => {
      localStorage.setItem("selectedRequestId", requestId); // Set selected request ID in local storage
      navigate(`/reqpage`); 
    };
  return (
    
    <div className='rlist'>
      <Nav/>
      <div className="feedbck">
        <p className="feed">
          <u>Request List </u>
        </p>
        
        <p className="feedsen">
          Number of request recieved : {Requestlist.length}
        </p>
        
      </div>
      <div className='list-cont'>
        {/* Render a track-box for each submitted request */}
        {Requestlist.map(request => (
          
          <div key={request.id} className='list-box'>
            <div className='request-desc'  onClick={() => handleRequestClick(request.id)} >
            <p>Req ID: {request.id}</p>
            <p>Username : {request.username}</p>
            <p>Email: {request.email}</p>
            <p>{request.request_desc}</p><br></br></div>
          </div>
        ))}
      </div>
    </div>
  )
}
