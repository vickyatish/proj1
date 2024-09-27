// src/components/MainContent.js

import React from 'react';
import './MainContent.css';
import Introduction from './Introduction'; // Ensure this path is correct

const MainContent = ({ content, onContentChange }) => {
  const renderContent = () => {
    switch (content) {
      case 'Introduction':
        return <Introduction onContentChange={onContentChange} />;
      case 'Walkway Quality':
        return <p>Walkway Quality</p>;
      case 'Unmarked walkway':
        return <p>Unmarked walkway</p>;
      case 'Bibliography':
        return <p>Bibliography</p>;
      case 'quiz':
        return <p>quiz</p>;
      default:
        return <p>Select a menu item.</p>;
    }
  };

  return (
    <div className="main-content">
      <h1>{content}</h1>
      {renderContent()}
    </div>
  );
};

export default MainContent;