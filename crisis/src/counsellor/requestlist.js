import React, { useState, useEffect } from 'react';
import './requestlist.css';
import Nav from '../components/nav/nav2'
import { useNavigate } from "react-router-dom";
export default function Requestlist() {
    const navigate = useNavigate();
    const [Requestlist,setRequestlist] = useState([]);

    useEffect(()=>{
      const req=[{
        id:1,desc:'Request 1',d:'Request Type :'
      },
      {id:2,desc:'Request 2'},
      {id:3,desc:'Request 3'},
    ];
    
    setRequestlist(req);
    },[]);
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
            <div className='request-desc'  onClick={()=>navigate('/reqpage')}><b>{request.desc}</b><br></br>{request.d}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
