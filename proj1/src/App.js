// src/App.js

import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import './App.css';

function App() {
  const contents = ['Introduction', 'Walkway Quality', 'Unmarked walkway', 'Bibliography', 'Quiz'];
  const [activeContent, setActiveContent] = useState('Introduction');

  const handleContentChange = (content) => {
    setActiveContent(content);
  };

  const handlePrevious = () => {
    const currentIndex = contents.indexOf(activeContent);
    const previousIndex = (currentIndex - 1 + contents.length) % contents.length;
    setActiveContent(contents[previousIndex]);
  };

  const handleNext = () => {
    const currentIndex = contents.indexOf(activeContent);
    const nextIndex = (currentIndex + 1) % contents.length;
    setActiveContent(contents[nextIndex]);
  };

  return (
    <div className="app">
      <Sidebar onContentChange={handleContentChange} activeContent={activeContent} />
      <MainContent content={activeContent} onContentChange={handleContentChange} />
      <div className="navigation-buttons">
        <button onClick={handlePrevious} className="nav-button">Previous</button>
        <button onClick={handleNext} className="nav-button">Next</button>
      </div>
    </div>
  );
}

export default App;