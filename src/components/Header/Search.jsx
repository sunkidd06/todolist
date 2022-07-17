import React from "react";
import {useSelector} from "react-redux";
export const Search = () => {
    const todos = useSelector(state => state.todos);
  return (
    <div className="header-right">
      <input className="input" placeholder="Type something to search" />
      <button className="btn">Search</button>
    </div>
  );
};
