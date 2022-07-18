import React from "react";
import { NavLink } from "react-router-dom";
export const Sidebar = () => {
  let activeStyle = {
    textDecoration: "underline",
    color: "#675BF1",
  };

  return (
    <div className="container" >
      <div className="navbar" style={{width: "100%"}}>
        <ul className="list">
          <li className="item">
            <NavLink
              to="/todos"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              All Task
            </NavLink>
          </li>
          <li className="item">
            <NavLink
              to="/newtask"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              New Task
            </NavLink>
          </li>
          <li className="item">
            <NavLink
              to="/doingtask"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Doing Task
            </NavLink>
          </li>
          <li className="item">
            <NavLink
              to="/donetask"
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
