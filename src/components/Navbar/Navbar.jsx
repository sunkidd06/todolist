import React from "react";
import { NavLink } from "react-router-dom";
export const Navbar = () => {
  let activeStyle = {
    textDecoration: "underline",
  };

  let activeClassName = "underline";
  return (
    <div className="container">
      <div className="navbar">
        <ul className="list">
          <li className="item">
            <NavLink
              to="alltask"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              All Task
            </NavLink>
          </li>
          <li className="item">
            <NavLink
              to="newtask"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              New Task
            </NavLink>
          </li>
          <li className="item">
            <NavLink
              to="doingtask"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Doing Task
            </NavLink>
          </li>
          <li className="item">
            <NavLink
              to="donetask"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Done Task
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};