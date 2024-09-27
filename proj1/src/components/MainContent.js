import React from 'react';
import './MainContent.css';
import Introduction from './Introduction';
import WalkwayQuality from './WalkwayQuality';
import UnmarkedWalkway from './UnmarkedWalkway';
import Bibliography from './Bibliography';
import Quiz from './Quiz';

const MainContent = ({ content }) => {
  const renderContent = () => {
    switch (content) {
      case 'Introduction':
        return <Introduction />;
      case 'Walkway Quality':
        return <WalkwayQuality />;
      case 'Unmarked Walkway':
        return <UnmarkedWalkway />;
      case 'Bibliography':
        return <Bibliography />;
      case 'Quiz':
        return <Quiz />;
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