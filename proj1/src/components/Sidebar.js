import React from 'react';
import './Sidebar.css';

const Sidebar = ({ onContentChange }) => {
  const contents = ['Home', 'About', 'Services', 'Contact'];

  return (
    <div className="sidebar">
      <h2 className="sidebar-title">Menu</h2>
      <ul className="sidebar-list">
        {contents.map((item) => (
          <li
            key={item}
            className="sidebar-item"
            onClick={() => onContentChange(item)}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;