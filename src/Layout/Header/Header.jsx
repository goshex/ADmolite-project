import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="header-div">
      <div>
        <NavLink to="/">
          <h1>FLEXSTART</h1>
        </NavLink>
      </div>
      <div className="menu-options">
        <NavLink to="/About">
          <h4>ABOUT</h4>
        </NavLink>
        <h4>MEMBERSHIP</h4>
        <h4>GUIDES</h4>
      </div>
    </div>
  );
};

export default Header;
