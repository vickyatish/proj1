import React from 'react';
import './Introduction.css'; // Ensure this CSS file exists

const Introduction = ({ onContentChange }) => {
  return (
    <div className="introduction">
      <h2>Using Computer Vision to Enhance Walkway Accessibility for the Visually Impaired</h2>
      <p>
        This tutorial explores the challenges visually impaired individuals face with walkways and introduces our proposed computer vision solutions.
      </p>

      <div className="cards-container">
        <div className="card" onClick={() => onContentChange('Walkway Quality')}>
          <h3>Assessing Walkways Quality (Normal/Damaged)</h3>
          <img
            src="https://i.postimg.cc/nVsSTGzy/temp-Image-Ykyb-SQ.avif"
            alt="Assessing Walkways Quality"
            className="card-image"
          />
          <p>
            Our system evaluates the condition of walkways to identify damages and ensure safe navigation for the visually impaired.
          </p>
        </div>

        <div className="card" onClick={() => onContentChange('Unmarked Walkway')}>
          <h3>Curb Detection or Navigation in Unmarked Environments</h3>
          <img
            src="https://i.postimg.cc/bw6MgQWW/temp-Imagecg-YYBZ.avif"
            alt="Curb Detection"
            className="card-image"
          />
          <p>
            Utilizing advanced computer vision techniques, our solution detects curbs and assists users in navigating unmarked areas confidently.
          </p>
        </div>
      </div>

      <p>
        Let's look at each of the cases in detail and how we propose to deal with them.
      </p>
    </div>
  );
};

export default Introduction;