import React from "react";
import { Link } from "react-router-dom";
import { Search } from "./Search";
export const Header = () => {
  return (
    <div className="container">
      <div className="header">
        <div className="header-wrap">
          <div className="row">
            <div className="header-left">
              <Link to="/todo">
                <button className="btn btn-create">Create New Task</button>
              </Link>
            </div>
            <div className="header-right">
              <input className="input" placeholder="Type something to search" />
              <button className="btn" >
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
