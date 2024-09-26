import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import './App.css';

function App() {
  const [activeContent, setActiveContent] = useState('Home');

  const handleContentChange = (content) => {
    setActiveContent(content);
  };

  return (
    <div className="app">
      <Sidebar onContentChange={handleContentChange} />
      <MainContent content={activeContent} />
    </div>
  );
}

export default App;