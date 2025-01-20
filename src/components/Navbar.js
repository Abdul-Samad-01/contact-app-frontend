import React from "react";
import "../css/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <div className="gsc-logo">
          <img src="/images/gsc-squared-logo-128.png" alt="My Image" />
        </div>
      </div>
      <div className="navbar-right">
        <button className="navbar-button">Upgrade to Business</button>
        <span className="navbar-profile">Hi, User</span>
      </div>
    </nav>
  );
};

export default Navbar;
