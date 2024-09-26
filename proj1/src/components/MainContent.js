import React from 'react';
import './MainContent.css';

const MainContent = ({ content }) => {
  const renderContent = () => {
    switch (content) {
      case 'Home':
        return <p>Welcome to the Home page!</p>;
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