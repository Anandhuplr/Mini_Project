import React, { useState, useEffect } from 'react';
import './requestlist.css';
import Nav from '../components/nav/nav2'
import { useNavigate } from "react-router-dom";
export default function Approvedlist() {
  const navigate = useNavigate();
  const [Requestlist,setRequestlist] = useState([]);
  console.log(Requestlist)
  useEffect(() => {
    
    async function fetchData() {
      try {
        const response = await fetch("http://127.0.0.1:8000/requests/rejected");
        console.log(response)
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setRequestlist(data);
    
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData(); 
  }, []);
  return (
    
    <div className='rlist'>
      <Nav/>
      <div className="feedbck">
        <p className="feed">
          <u>Rejected Request</u>
        </p>
        <p className="feedsen">
          Number of Rejected Request : {Requestlist.length}
        </p>
        
      </div>
      <div className='list-cont'>
        {/* Render a track-box for each submitted request */}
        {Requestlist.map(request => (
          
          <div key={request.id} className='list-box'>
            <div className='request-desc'  onClick={()=>navigate('/user')}>
            <p>Req Id : {request.id}</p>
              <p>Username : {request.username}</p>
              <b>{request.request_desc}</b><br></br>{request.d}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
