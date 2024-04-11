import React from "react";
import "./mis.css";
import Img1 from "../image/img1";
export default function mis() {
  return (
    <div>
      <div className="first">
        <h2>Our Mission</h2>
        <Img1 />
      </div>
      <div className="second">
        <p className="parag">
          The mission of "CRISIS CONNECT" is to provide a user-friendly and
          efficient platform for disaster victims to submit their requests for
          relief aids in the aftermath of a disaster. Many individuals affected
          by disasters struggle to access basic necessities like food, clothing,
          medicine, etc So CRISIS CONNECT aims to bridge this gap by connecting
          their requests with authorities and facilitating the effective
          distribution of aid resources to those in need. Through a better
          transparency and coordination, our goal is to ensure that relief aids
          reach disaster victims promptly and efficiently.
        </p>
      </div>
    </div>
  );
}
