import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import './App.css';

function App() {
  const contents = ['Introduction', 'About', 'Services', 'Contact'];
  const [activeContent, setActiveContent] = useState('Home');

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
      <MainContent content={activeContent} />
      <div className="navigation-buttons">
        <button onClick={handlePrevious} className="nav-button">Previous</button>
        <button onClick={handleNext} className="nav-button">Next</button>
      </div>
    </div>
  );
}

export default App;