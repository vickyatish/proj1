import React from 'react';
import './UnmarkedWalkway.css';

const UnmarkedWalkway = () => {
  return (
    <div className="unmarked-walkway">
      <h2>Curb Detection or Navigation in Unmarked Environments</h2>
      <p>
        Utilizing advanced computer vision techniques, our solution detects curbs and assists users in navigating unmarked areas confidently.
      </p>
      <div className="card-container">
        <div className="card">
          <img
            src="https://i.postimg.cc/bw6MgQWW/temp-Imagecg-YYBZ.avif"
            alt="Curb Detection"
            className="card-image"
          />
          <p>
            Detecting curbs and obstacles to provide real-time navigation assistance.
          </p>
        </div>
        {/* Add more cards if needed */}
      </div>
    </div>
  );
};

export default UnmarkedWalkway;