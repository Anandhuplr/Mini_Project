import React, { useState, useEffect } from 'react';
import './requestlist.css';
import Nav from '../components/nav/nav2'
import { useNavigate } from "react-router-dom";
export default function Approvedlist() {
    const navigate = useNavigate();
    const [Requestlist,setRequestlist] = useState([]);

    useEffect(()=>{
      const req=[{
        id:1,desc:'Request 1',d:'Request Type :'
      },
      
      
    ];
    
    setRequestlist(req);
    },[]);
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
            <div className='request-desc'  onClick={()=>navigate('/user')}><b>{request.desc}</b><br></br>{request.d}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
