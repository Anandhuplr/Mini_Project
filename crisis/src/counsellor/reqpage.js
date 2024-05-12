import  { React,useState, useEffect } from "react";
import "./reqpage.css";
import Nav from "../components/nav/nav2";
import { useNavigate } from "react-router-dom";
import axios from "axios";
export default function ReqDetails() {
  const navigate = useNavigate();
  const tok= localStorage.getItem("tokenkey")
  const reqId = localStorage.getItem("selectedRequestId");
  const [requestDetails, setRequestDetails] = useState([]);
  // const[username,setusername]=useEffect(requestDetails.username);
   const[reqdet,setreqdet]=useState();
   const[grev,setgrev]=useState([]);
   

   console.log(requestDetails)
   console.log(grev)
  useEffect(() => {
    const fetchRequestDetails = async () => {
      try {
        const response = await axios.get(
          `http://127.0.0.1:8000/requests/requestdetails/${reqId}/`
        );
        setRequestDetails(response.data);
        console.log(reqId)
        
        // if (response.data && response.data.username) {
        //   console.log(response.data.username)
        //   const response1 = await axios.get(
        //     `http://127.0.0.1:8000/api/users/${response.data.username}/`
        //   );
        //   console.log(response1);
        //   setreqdet(response1.data);
        // }

        const response2 = await axios.get(
          `http://127.0.0.1:8000/grievance/grievancedetails/${reqId}/`
        );
        setgrev(response2.data);
        console.log(response2)
      } catch (error) {
        console.error("Error fetching request details:", error);
      }
    };

    if (reqId) {
      fetchRequestDetails();
    }
  }, [reqId]);
  
  
 
  return (
    <div className="counc1">
      <Nav />
      <div className="text1">
        <u>Request Details</u>
      </div>

      <div className="reqContainer">
      <div className="reqType">
  {requestDetails.type === "M" ? (
    <p className="head">Req Type : Medicine Aid</p>
  ) : (
    <p className="head">Req Type : Basic Needs</p>
  )}
  <p className="subhead">Request Id : {requestDetails.id}</p>
  <p className="subhead">Name : {requestDetails.username}</p>
  {/* <p className="subhead">Address :</p>
  <p className="subhead">Phone No :</p> */}
  <p className="subhead">E-mail : {requestDetails.email}</p>
</div>

        <div className="reqDescription">
          <p className="reqpara">
          {requestDetails.request_desc}
          </p>
        </div>
        <div className="grievanceNo">
          <p>
            Number of Grievances : {grev.length }
          </p>
          <a href="pagegrev" >Click Here</a>
          <p>to view grievance.</p>
        </div>
        <div className="applyANDcancel">
          <div className="apply-container">
            <p>Apply for Survay :</p>
            <button type="submit" className="apply" onClick={() => window.location.href = '/survey'}>
              Apply
            </button>
            {/* action??? */}
          </div>
         
        </div>
      </div>
    </div>
  );
}
