import  { React,useState, useEffect } from "react";
import "./grievance.css";
import Nav from "../components/nav/nav1";
import axios from "axios";

const Grievance = () => {
  let x = 0;
  const [No, setNo] = useState(x);
  
  const requestId = localStorage.getItem("selectedRequestId");
  const [requestDetails, setRequestDetails] = useState([]);
  const [formData, setFormData] = useState({
    grievance_desc: "",
    request_id: requestId,
  });
  console.log(formData)
  // Fetch request details based on request ID
  useEffect(() => {
    const fetchRequestDetails = async () => {
      try {
        const response = await axios.get(
          `http://127.0.0.1:8000/requests/requestdetails/${requestId}/`
        );
        console.log(response);
        setRequestDetails(response.data); // Assuming the API response contains request details
      } catch (error) {
        console.error("Error fetching request details:", error);
      }
    };

    if (requestId) {
      fetchRequestDetails();
    }
  }, [requestId]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/grievance/create/",
        formData,
        {
          headers: {
            "Authorization": `token ${localStorage.getItem("tkey")}`,
            "Content-Type": "application/json",
          },
        }
      );

      console.log("Response from backend:", response.data);
      // Handle success or redirect to another page
    } catch (error) {
      console.error("Error sending data:", error);
      // Handle error
    }
  };

  const handleGrievanceChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleChange = () => {
    x = 1;
    setNo(x);
  };

  return (
    <div className="grev">
      <Nav />
      <div className="grev-req">
        <p className="grev-pa">Request Details</p>

        <p className="grev-pa2">Req No:{requestDetails.id}</p>
        <p className="grev-pa2">Submitted By:{requestDetails.username}</p>
        <p className="grev-pa2">Email:{requestDetails.email}</p>
      </div>
      <div className="grev-req2">
        <p className="grev-pa3">Request description</p>
        <div className="grev-box">{requestDetails.request_desc}</div>
        <div className="gbox">
          <p>To apply Grievance </p>
          <button className="button-grev" onClick={handleChange}>
            Click Here
          </button>
        </div>
      </div>
      {No === 1 && (
        <div className="gbox2">
          <textarea
            rows={8} // Adjust rows as needed
            placeholder="Enter the detailed description of Grievance for this request."
            name="grievance_desc"
            value={formData.grievance_desc}
            onChange={handleGrievanceChange}
            required
          />
          <button className="button-gre" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      )}
    </div>
  );
};

export default Grievance;
