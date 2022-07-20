import React from "react";
import { NavLink } from "react-router-dom";
import { NAV_LINKS } from "../../constants/NavLink";
export const Sidebar = () => {
  let activeStyle = {
    textDecoration: "underline",
    color: "#675BF1",
  };

  return (
    <div className="container" >
      <div className="navbar" style={{ width: "100%" }}>
        <ul className="list">
          {NAV_LINKS.map((navlink, index) => (
            <li key={index} className="item">
              <NavLink to={navlink.LINK_TO}
                style={({ isActive }) => (isActive ? activeStyle : undefined)}>
                  {navlink.NAME}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};


