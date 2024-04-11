import React, { useState, useEffect } from 'react';
import './track.css';
import Nav from '../components/nav/nav1';

export default function Track() {
  // State to manage submitted requests
  const [submittedRequests, setSubmittedRequests] = useState([]);

  // Mock data for submitted requests (replace with actual data fetching logic if needed)
  useEffect(() => {
    const mockRequests = [
      { id: 1, description: 'First request' },
      { id: 2, description: 'Second request' },
    ];
    setSubmittedRequests(mockRequests);
  }, []);

  return (
    <div className='maindiv'>
      <Nav />
      <div className="feedbck">
        <p className="feed">
          <u>Track Request</u>
        </p>
        <p className="feedsen">Submitted Requests : {submittedRequests.length}</p>
      </div>
      <div className='track-container'>
        {/* Render a track-box for each submitted request */}
        {submittedRequests.map(request => (
          <div key={request.id} className='track-box'>
            <div className='request-box'>{request.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
