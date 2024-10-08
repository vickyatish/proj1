// MainContent.js
import React from 'react';
import Introduction from './Introduction';
import WalkwayQuality from './WalkwayQuality';
import UnmarkedWalkway from './UnmarkedWalkway';
import Bibliography from './Bibliography';
import Quiz from './Quiz';

const MainContent = ({ content, highlightedCitation, onCitationClick, onContentChange }) => {
  const renderContent = () => {
    switch (content) {
      case 'Introduction':
        return <Introduction />;
      case 'Walkway Quality':
        return <WalkwayQuality />;
      case 'Unmarked Walkway':
        return <UnmarkedWalkway onCitationClick={onCitationClick} />;
      case 'Bibliography':
        return <Bibliography highlightedCitation={highlightedCitation} />;
      case 'Quiz':
        return <Quiz />;
      default:
        return <Introduction />;
    }
  };

  return (
    <div className="main-content">
      {renderContent()}
    </div>
  );
};

export default MainContent;