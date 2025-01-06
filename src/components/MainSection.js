import React from "react";
import "./MainSection.css";
import Sharing from './Sharing';

const MainSection = () => {
  return (
    <div className="main-section">
      {/* Label Section */}
      <div className="label-section">
        <div className="my-contact">
          <div className="name">
            <img src="/images/pngwing.com.png" alt="google-logo" height="20px" />
            <p>My Contact</p>
          </div>
          <Sharing />
        </div>
        <div className="search-filter">
          <p>search and filter</p>
        </div>
        <ul className="label-list">
          <li className="label-item">
            <input type="checkbox" />
            <span>024 Client (0)</span>
          </li>
          <li className="label-item">
            <input type="checkbox" />
            <span>024 Various (1)</span>
          </li>
          <li className="label-item">
            <input type="checkbox" />
            <span>Custom Fields Testing (0)</span>
          </li>
          {/* Add more labels as needed */}
        </ul>
      </div>

      {/* Contact Details Section */}
      <div className="contact-details-section">
        <h3>Select a Label</h3>
        <p>No label selected. Please choose a label to view details.</p>
      </div>
    </div>
  );
};

export default MainSection;
