// src/components/MainContent.js

import React from 'react';
import './MainContent.css';
import Introduction from './Introduction'; // Import the Introduction component

const MainContent = ({ content }) => {
  const renderContent = () => {
    switch (content) {
      case 'Introduction':
        return <Introduction />;
      case 'About':
        return <p>Learn more About us here.</p>;
      case 'Services':
        return <p>These are our Services.</p>;
      case 'Contact':
        return <p>Get in touch with us on the Contact page.</p>;
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