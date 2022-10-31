import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faHouseChimney,
  faAddressCard,
  faCameraRetro,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import "./Menu.css";

const onActiveNavLink = (isActive) => ({
  color: isActive ? "#ee5b0d" : "#000000",
  textDecorationLine: "none",
});

const Menu = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen((state) => !state);
  };

  return (
    <div className="main-menu-div">
      <div className="icon-div">
        <FontAwesomeIcon icon={faBars} size="lg" onClick={toggleDropdown} />
      </div>
      {isDropdownOpen && (
        <div className="dropdown-div">
          <NavLink
            to="/"
            style={({ isActive }) => onActiveNavLink(isActive)}
            onClick={toggleDropdown}
          >
            <h4>
              <FontAwesomeIcon icon={faHouseChimney} /> MENU
            </h4>
          </NavLink>
          <NavLink
            to="/About"
            style={({ isActive }) => onActiveNavLink(isActive)}
            onClick={toggleDropdown}
          >
            <h4>
              <FontAwesomeIcon icon={faAddressCard} /> ABOUT
            </h4>
          </NavLink>
          <NavLink
            to="/Gallery"
            style={({ isActive }) => onActiveNavLink(isActive)}
            onClick={toggleDropdown}
          >
            <h4>
              <FontAwesomeIcon icon={faCameraRetro} />
              GALLERY
            </h4>
          </NavLink>
          <NavLink
            to="/Contact"
            style={({ isActive }) => onActiveNavLink(isActive)}
            onClick={toggleDropdown}
          >
            <h4>
              <FontAwesomeIcon icon={faEnvelope} />
              CONTACT US
            </h4>
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default Menu;
