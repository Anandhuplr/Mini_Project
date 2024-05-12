import { React, useState } from "react";
import "./feedback.css";
import Nav from "../components/nav/nav1";
import axios from "axios";
export default function Feedback() {
  const[feed,setfeed]=useState("");
  const token=localStorage.getItem("User_token")
  async function save(event) {
    event.preventDefault();
    const requestData = {
      
      feedback_desc: feed,
      
    };
    console.log(requestData);
    try {
      await axios.post("http://127.0.0.1:8000/feedback/create/",requestData, {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `token ${token}`
        }
      });
      
      
      alert("FeedBack submitted");
     
      setfeed("");
      
    } catch (error) {
      console.error("Error submitting form:", error); 
    }
  }

  return (
    <div className="maindiv">
      <Nav />
      <div className="feedbck">
        <p className="feed">
          <u>Feedback Section </u>
        </p>
        <p className="feedsen">
          Your feedback is invaluable to us! Please take a moment to share your
          thoughts and suggestions to help us improve Crisis Connect and better
          serve your needs.
        </p>
        
      </div>
      <div className="feed-msg">
        <p className="feed2">Feedback Message</p>
        <textarea
          rows={8} // Adjust rows as needed
          placeholder="Enter your feedback about the platform."
          value={feed}
            onChange={(event) => {
              setfeed(event.target.value);
            }}
          required
        />
        
      </div>
      <button className="button-gre" type="submit" onClick={save}>Submit</button>
    </div>
  );
}
