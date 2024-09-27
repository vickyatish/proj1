import React from 'react';
import './UnmarkedWalkway.css';

const UnmarkedWalkway = () => {
  return (
    <div className="unmarked-walkway">
      <h1>Technologies in Computer Vision for Sidewalk Detection and Path Suggestion</h1>
    
    <p>Computer vision technologies are advancing rapidly, and one of their practical applications is in detecting sidewalks and suggesting safe paths for pedestrians, even when sidewalks are not clearly demarcated. Below, we discuss five key technologies that are pivotal in achieving these tasks.</p>
    
    <h2>1. Semantic Segmentation</h2>
    <p>Semantic segmentation is a process where each pixel of an image is classified into a specific category. In the case of sidewalk detection, categories might include "sidewalk", "road", "grass", etc.</p>
    <ul>
        <li><strong>Technology:</strong> Fully Convolutional Networks (FCNs), U-Net, and DeepLab are commonly used neural networks for semantic segmentation.</li>
        <li><strong>Use Case:</strong> By analyzing images from cameras, a system can determine which regions correspond to sidewalks and other surfaces, making it easier to detect safe pedestrian areas.</li>
    </ul>

    <h2>2. Object Detection and Recognition</h2>
    <p>Object detection focuses on identifying and classifying objects within an image, such as vehicles, pedestrians, and obstacles. This is essential for sidewalk detection, as road elements like curbs and road edges help determine where it’s safe to walk.</p>
    <ul>
        <li><strong>Technology:</strong> YOLO (You Only Look Once), SSD (Single Shot Multibox Detector), and Faster R-CNN are common object detection models.</li>
        <li><strong>Use Case:</strong> These models can recognize curbs, pedestrians, and other obstacles, providing contextual information that can infer the location of a sidewalk or safe pedestrian zones.</li>
    </ul>

    <h2>3. Depth Estimation and 3D Reconstruction</h2>
    <p>Depth estimation involves determining the distance of objects and surfaces in an image, creating a 3D model of the surroundings. This helps systems differentiate between various surfaces like sidewalks, roads, and obstacles.</p>
    <ul>
        <li><strong>Technology:</strong> Stereo vision, monocular depth estimation using deep learning (e.g., MiDaS), or depth sensors are used for generating depth maps.</li>
        <li><strong>Use Case:</strong> Depth maps generated from these technologies allow systems to perceive elevation changes, such as sidewalks or curbs, enabling safer path suggestions.</li>
    </ul>

    <h2>4. Lane and Edge Detection</h2>
    <p>Lane and edge detection algorithms are primarily used in autonomous driving to detect road boundaries, but they can also be applied to sidewalk detection or path inference.</p>
    <ul>
        <li><strong>Technology:</strong> Hough Transform, canny edge detection, and deep learning models like LaneNet are commonly used techniques for lane and edge detection.</li>
        <li><strong>Use Case:</strong> These algorithms can detect road edges and boundaries, allowing systems to infer potential sidewalk areas and provide pedestrians with a safe route, even when no sidewalk is marked.</li>
    </ul>

    <h2>5. LiDAR and Sensor Fusion</h2>
    <p>LiDAR (Light Detection and Ranging) technology provides detailed 3D maps of the surroundings by emitting laser beams and measuring their reflections. When combined with camera data (sensor fusion), this can enhance the accuracy of sidewalk detection and path planning.</p>
    <ul>
        <li><strong>Technology:</strong> LiDAR and camera-based sensor fusion can be used for 3D environmental mapping.</li>
        <li><strong>Use Case:</strong> LiDAR detects subtle differences in elevation and texture, helping to identify sidewalks or infer safe zones for pedestrians in areas without clear sidewalk markings.</li>
    </ul>

    <p>These technologies, when combined, provide a robust solution for detecting sidewalks and ensuring pedestrian safety in urban environments where infrastructure may not always be clearly defined.</p>
    </div>
  );
};

export default UnmarkedWalkway;