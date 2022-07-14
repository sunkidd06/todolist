import React from "react";
export const Header = () => {
  return (
    <div className="container">
      <div className="header">
        <div className="header-wrap">
          <div className="row">
            <div className="header-left">
              <a href="#">
                <button className="btn btn-create">Create New Task</button>
              </a>
            </div>
            <div className="header-right">
              <input className="input" placeholder="Type something to search"/>
              <button className="btn">Search</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
