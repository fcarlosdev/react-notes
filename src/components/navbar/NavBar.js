import React from "react";

import { FaBars, FaSearch, FaCog } from "react-icons/fa";
import { GiBookmarklet } from "react-icons/gi";
import { FiGrid } from "react-icons/fi";

import "./navbar.css";


export default function NavBar() {
  return (
    <div className="nav-bar">
      <div className="nav-left">
        <FaBars />
        <div className="logo">
          <span className="logo-img">
            <GiBookmarklet />
          </span>
          <span className="logo-text">Notes</span>
        </div>
      </div>
      <div className="search-box">
        <div className="s-form">
        <form className="form-search">
          <button className="search-btn"><FaSearch /></button>
          <input type="text" className="search-field" placeholder="Search" />
        </form>
        </div>
      </div>
      <div className="buttons">
        <div className="op-button"> <FiGrid /> </div>
        <div className="op-button"> <FaCog /> </div>
      </div>
    </div>
  );
}
