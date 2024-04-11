import React from "react";
import "./feedback.css";
import Nav from "../components/nav/nav1";
export default function Feedback() {
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
          required
        />
        
      </div>
      <button className="button-gre" type="submit">Submit</button>
    </div>
  );
}
