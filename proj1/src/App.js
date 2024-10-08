// App.js
import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import './App.css';

function App() {
  const contents = ['Introduction', 'Walkway Quality', 'Unmarked Walkway', 'Bibliography', 'Quiz'];
  const [activeContent, setActiveContent] = useState('Introduction');
  const [highlightedCitation, setHighlightedCitation] = useState(null); // For Bibliography highlighting

  // Handler to change active content
  const handleContentChange = (content) => {
    setActiveContent(content);
    setHighlightedCitation(null); // Reset citation highlight when changing pages
  };

  // Handler to highlight a citation in Bibliography
  const handleCitationClick = (citationNumber) => {
    setActiveContent('Bibliography');
    setHighlightedCitation(citationNumber);
  };

  // Handlers for Previous and Next buttons
  const handlePrevious = () => {
    const currentIndex = contents.indexOf(activeContent);
    const previousIndex = (currentIndex - 1 + contents.length) % contents.length;
    setActiveContent(contents[previousIndex]);
    setHighlightedCitation(null);
  };

  const handleNext = () => {
    const currentIndex = contents.indexOf(activeContent);
    const nextIndex = (currentIndex + 1) % contents.length;
    setActiveContent(contents[nextIndex]);
    setHighlightedCitation(null);
  };

  return (
    <div className="app">
      <Sidebar onContentChange={handleContentChange} activeContent={activeContent} />
      <MainContent
        content={activeContent}
        highlightedCitation={highlightedCitation}
        onCitationClick={handleCitationClick}
        onContentChange={handleContentChange} // Pass handleContentChange to MainContent
      />
      <div className="navigation-buttons">
        <button onClick={handlePrevious} className="nav-button">Previous</button>
        <button onClick={handleNext} className="nav-button">Next</button>
      </div>
    </div>
  );
}

export default App;