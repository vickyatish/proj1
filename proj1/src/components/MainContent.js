import React from 'react';
import './MainContent.css';
import Introduction from './Introduction';
import WalkwayQuality from './WalkwayQuality';
import UnmarkedWalkway from './UnmarkedWalkway';
import Bibliography from './Bibliography';
import Quiz from './Quiz';

const MainContent = ({ content, highlightedCitation, onCitationClick, onContentChange }) => {
  const renderContent = () => {
    switch (content) {
      case 'Introduction':
        return <Introduction onContentChange={onContentChange} />;
      case 'Walkway Quality':
        return <WalkwayQuality onCitationClick={onCitationClick} />;
      case 'Unmarked Walkway':
        return <UnmarkedWalkway />;
      case 'Bibliography':
        return <Bibliography highlightedCitation={highlightedCitation} />;
      case 'Quiz':
        return <Quiz />;
      default:
        return <p>Select a menu item.</p>;
    }
  };

  return (
    <div className="main-content">
      {renderContent()}
    </div>
  );
};

export default MainContent;