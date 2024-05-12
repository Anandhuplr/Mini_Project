import { React, useState, useEffect } from 'react';
import './requestlist.css';
import axios from "axios";
import Nav from '../components/nav/nav2'
export default function Pagegrev() {
    const reqId = localStorage.getItem("selectedRequestId");
    const[grevdetails,setgrevdetails]=useState([]);
    useEffect(() => {
        const fetchRequestDetails = async () => {
          try {
           
    
            const response = await axios.get(
              `http://127.0.0.1:8000/grievance/grievancedetails/${reqId}/`
            );
            setgrevdetails(response.data);
            console.log(response)
          } catch (error) {
            console.error("Error fetching request details:", error);
          }
        };
    
       
          fetchRequestDetails();
        
      }, []);


    return (
        

        <div className='rlist'>
          <Nav/>
          <div className="feedbck">
            <p className="feed">
              <u>Grievance List </u>
            </p>
            <p className="feedsen">
              Number of request recieved : {grevdetails.length}
            </p>
            
          </div>
          <div className='list-cont'>
            
          {grevdetails.map(request => (
          
          <div key={request.id} className='list-box'>
            <div className='request-desc'  >
                <p>{request.username}</p>
                <b>{request.request_desc}</b>
                <br></br>{request.grievance_desc}</div>
          </div>
        ))}
            
          </div>
        </div>
      )
    }