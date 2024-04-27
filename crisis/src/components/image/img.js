import React from "react";
import "./img.css";
import Log from '../login/login';

export default function img() {
  return (
    <div className="img">
      <h1 className="title">
  <span className="crisis">C</span><span className="crisis">R</span><span className="crisis">I</span><span className="crisis">S</span><span className="crisis">I</span><span className="crisis">S</span> <span>C</span><span>O</span><span>N</span><span>N</span><span>E</span><span>C</span><span>T</span><span>...</span>
</h1>

      <p className="para">
        Platform designed to simplify the process of requesting and distributing aid for disaster victims. Through intuitive interfaces and efficient communication channels, the platform connects individuals in need with local authorities and aid providers, aiming to expedite relief efforts and ensure timely assistance during crises.
      </p>
      <Log/>
    </div>
  );
}
