import React from "react";
import { Row, Col } from "antd";
import { Link } from "react-router-dom";

export const SingleTodo = (props) => {
  /* 
    {
  xs: '480px',
  sm: '576px',
  md: '768px',
  lg: '992px',
  xl: '1200px',
  xxl: '1600px',
}
  */

  const { todo } = props;
  let colorStatus =
    todo.status === "New"
      ? "#04BE00"
      : todo.status === "Doing"
      ? "#F88F14"
      : "#675BF1";

  return (
    <>
      <Col xl={6} lg={8} md={12} className="gutter-row">
        <Link to={`/todos/${todo.id}`}>
        <div className="todo">
          <div className="details">
            <div className="title">
              <span>Title: {todo.title}</span>
            </div>
            <div className="create">
              <span>Creator: {todo.creator}</span>
            </div>
            <div className="status">
              <span style={{ color: `${colorStatus + ""}` }}>
                Status:{` ${todo.status}`}
              </span>
            </div>
          </div>
          <div className="description">
            <p className="title">Description:</p>
            <p className="desc">
              {todo.description}
            </p>
          </div>
        </div>
        </Link>
      </Col>
    </>
  );
};
