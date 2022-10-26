import React from "react";
import { NavLink } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-div">
      <NavLink
        to="/Contact"
        style={({ isActive }) => ({
          color: isActive ? "#ee5b0d" : "#000000",
          textDecorationLine: "none",
        })}
      >
        <h1>CONTACT US</h1>
      </NavLink>
    </div>
  );
};

export default Footer;
