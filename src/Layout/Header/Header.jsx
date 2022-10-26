import React from "react";
import { NavLink } from "react-router-dom";
import Home from "../../Component/Menu/Menu";
import "./Header.css";

const Header = () => {
  return (
    <div className="header-div">
      <div className="navigation-div">
        <Home></Home>
      </div>
      <div>
        <NavLink
          to="/"
          style={({ isActive }) => ({
            color: "#ee5b0d",
            textDecorationLine: "none",
          })}
        >
          <h1>GEORGI'S PROJECT</h1>
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
