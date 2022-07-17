import React from "react";
import { Row, Col } from "antd";

export const SingleTodo = () => {
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
  // const style = {
  //   background: "#0092ff",
  //   padding: "8px 0",
  //   width: "200px",
  //   minHeight: "150px",
  // };
  return (
    <>
      
        <Col xl={6} lg={8} md={8} className="gutter-row">
          <div className="todo">
            <div className="details">
              <div className="title">
                <span>Title: Task 1</span>
              </div>
              <div className="create">
                <span>Creator: Dat Vo</span>
              </div>
              <div className="status">
                <span style={{color:'#04BE00'}}>Status: New</span>
              </div>
            </div>
            <div className="description">
              <p className="title">Description:</p>
              <p className= "desc">This is a task. This is a task This is a task</p>
            </div>
          </div>
        </Col>
    </>
  );
};
