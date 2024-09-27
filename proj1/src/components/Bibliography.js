import React from 'react';
import './Bibliography.css';

const Bibliography = () => {
  return (
    <div className="bibliography">
      <h2>Bibliography</h2>
      <ul>
        <li>Smith, J. (2023). *Computer Vision in Accessibility*. Tech Press.</li>
        <li>Doe, A. (2022). *Enhancing Mobility for the Visually Impaired*. Innovation Books.</li>
        <li>Lee, K. (2021). *Advanced Algorithms for Obstacle Detection*. AI Publications.</li>
        {/* Add more references as needed */}
      </ul>
    </div>
  );
};

export default Bibliography;