import React from 'react';
import './Sidebar.css';

const Sidebar = ({ onContentChange, activeContent }) => {
  const contents = ['Introduction', 'Walkway Quality', 'Unmarked Walkway', 'Bibliography', 'Quiz'];

  return (
    <div className="sidebar">
      <h2 className="sidebar-title">Menu</h2>
      <div className="sidebar-list-container">
        <ul className="sidebar-list">
          {contents.map((item) => (
            <li
              key={item}
              className={`sidebar-item ${item === activeContent ? 'active' : ''}`}
              onClick={() => onContentChange(item)}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;