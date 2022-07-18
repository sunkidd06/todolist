import React from "react";
import { NavLink } from "react-router-dom";
import { SITE_MAP } from "../../constants/Path";
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
              to={SITE_MAP.HOME}
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              All Task
            </NavLink>
          </li>
          <li className="item">
            <NavLink
              to={SITE_MAP.NEW_TASK}
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              New Task
            </NavLink>
          </li>
          <li className="item">
            <NavLink
              to={SITE_MAP.DOING_TASK}
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Doing Task
            </NavLink>
          </li>
          <li className="item">
            <NavLink
              to={SITE_MAP.DONE_TASK}
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
