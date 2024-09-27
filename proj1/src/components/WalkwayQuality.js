import React from 'react';
import './WalkwayQuality.css';

const WalkwayQuality = ({ onCitationClick }) => {
  return (
    <div className="walkway-quality">
      <h2>Assessing Walkway Quality (Normal/Damaged)</h2>

      <h3>Introduction</h3>
      <p>
        Ensuring the safety of walkways is crucial, especially for the visually impaired. Our system evaluates the condition of walkways to identify damages like cracks and potholes, facilitating safer navigation.
      </p>

      <h3>Previous Approaches</h3>
      <p>
        Earlier methods primarily used RGB images of roads or sensor data (e.g., accelerometer and gyroscope) to detect road cracks and potholes{' '}
        <button className="citation-button" onClick={() => onCitationClick(1)}>[1]</button>,{' '}
        <button className="citation-button" onClick={() => onCitationClick(2)}>[2]</button>,{' '}
        <button className="citation-button" onClick={() => onCitationClick(3)}>[3]</button>,{' '}
        <button className="citation-button" onClick={() => onCitationClick(4)}>[4]</button> and to recognize sidewalk anomalies{' '}
        <button className="citation-button" onClick={() => onCitationClick(5)}>[5]</button>,{' '}
        <button className="citation-button" onClick={() => onCitationClick(6)}>[6]</button> using machine learning algorithms.
      </p>

      <p>
        <img src="https://i.postimg.cc/W1MzGWhp/temp-Imagea-V1k-Jz.avif" alt="Walkway anomalies detection" />
      </p>

      <h3>Technologies Used</h3>
      <p>
        To improve performance, recent approaches have integrated various sensor modalities with advanced deep learning architectures. Key technologies include:
      </p>
      <ul>
        <li>
          <strong>Convolutional Neural Networks (CNNs):</strong> A type of deep learning model particularly effective for image recognition and classification tasks. CNNs automatically learn hierarchical feature representations from raw image data.
        </li>
        <li>
          <strong>Local Binary Pattern (LBP):</strong> An image texture descriptor that thresholds each pixel's neighborhood to create a binary number, capturing local texture information useful for pattern recognition.
        </li>
        <li>
          <strong>Gabor Filters:</strong> Linear filters used for edge detection, texture analysis, and feature extraction by responding to specific frequency and orientation components in images.
        </li>
        <li>
          <strong>YOLO v2 (You Only Look Once version 2):</strong> A real-time object detection system that processes images in a single evaluation, making it efficient for applications requiring speed{' '}
          <button className="citation-button" onClick={() => onCitationClick(7)}>[7]</button>.
        </li>
      </ul>

      <h3>Current Trends</h3>
      <p>
        The latest advancements involve using transformer-based architectures for detecting road surface anomalies{' '}
        <button className="citation-button" onClick={() => onCitationClick(8)}>[8]</button>. Transformers, initially designed for natural language processing, excel at capturing long-range dependencies in data, making them suitable for image analysis tasks.
      </p>
      <p>
        For depth estimation using a single (monocular) camera, Planar Parallax estimation techniques are utilized{' '}
        <button className="citation-button" onClick={() => onCitationClick(9)}>[9]</button>. This method estimates depth by analyzing the apparent motion (parallax) of objects between different frames, aiding in identifying surface irregularities.
      </p>

      <p>
        <img src="https://i.postimg.cc/vZB32Z1D/temp-Imagey-Tbo-HN.avif" alt="Transformer-based architecture for anomaly detection" />
      </p>

      <h3>Conclusion</h3>
      <p>
        By leveraging these advanced technologies, our system aims to provide accurate and real-time assessments of walkway quality, enhancing safety and accessibility for all pedestrians.
      </p>
    </div>
  );
};

export default WalkwayQuality;