import React from "react";
import "../../css/Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-menu">
        <ul className="upper-menu">
          <li className="sidebar-contacts">
            <a href="/contacts">
              <span class="icon">
                <i class="fa fa-address-book"></i>
              </span>
              <span class="menu-item__text">Contacts</span>
            </a>
          </li>
          <li className="sidebar-account">
            <a type="button" href="/account">
              <span class="icon">
                <i class="fa fa-building" aria-hidden="true"></i>
              </span>
              <span class="menu-item__text">Account</span>
            </a>
          </li>
          <li className="sidebar-settings">
            <a href="/dashboard">
              <span class="icon">
                <i class="fa fa-wrench" aria-hidden="true"></i>
              </span>
              <span class="menu-item__text">Settings</span>
            </a>
          </li>
          <li className="sidebar-apps">
            <a href="/dashboard">
              <span class="icon">
                <i class="fa fa-question" aria-hidden="true"></i>
              </span>
              <span class="menu-item__text">Apps</span>
            </a>
          </li>
          <li className="sidebar-help">
            <a href="/dashboard">
              <span class="icon">
                <i class="fa fa-question" aria-hidden="true"></i>
              </span>
              <span class="menu-item__text">Help</span>
            </a>
          </li>
        </ul>
        <ul class="bottom-menu">
          <li>
            <div class="language-selector">
              <button type="button">
                <span class="menu-item__text">Languages</span>
              </button>
            </div>
          </li>
          <li>
            <a
              href="https://docs.google.com/a/alti.mobi/forms/d/1wAcBo7INN7s345SUqnfDNIP2eHczciQ0gPsug79VGj8/viewform"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span class="icon">
                <i class="fa fa-heart" aria-hidden="true"></i>
              </span>
              <span class="menu-item__text">Give your feedback</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
