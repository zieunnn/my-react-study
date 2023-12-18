import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <h1>
        <NavLink to="/" activeclassname="active-link">
          Jieun J. include
        </NavLink>
      </h1>
      <nav>
        <ul>
          <li>
            <NavLink to="/Projects" activeclassname="active-link">
              포트폴리오
            </NavLink>
          </li>
          <li>
            <NavLink to="/About" activeclassname="active-link">
              저는요
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
