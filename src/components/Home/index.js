import { Col, Pagination, Row } from "antd";
import Search from "antd/lib/transfer/search";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Todos } from "../../feature/Todos";
import { Sidebar } from "../Sidebar";
export const Home = () => {
  const [status, setStatus] = useState("");
  const handleSearch = () => {

  }
  const handleChange = (e) => {
    const { name, value } = e.target;
    setStatus({
      [name]: value
    })
  }
  useEffect(() => {
    if (status?.status == "") {
      setStatus("");
    }
  }, [status])
  // console.log(status);
  return (
    <>
      <div className="header">
        <div className="header-wrap">
          <div className="row">
            <div className="header-left">
              <Link to="/todo">
                <button className="btn btn-create">Create New Task</button>
              </Link>
            </div>
            <div className="header-right">
              <input className="input" name="status" placeholder="Type something to search" onChange={handleChange} />
              <button className="btn" onClick={handleSearch}>
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
      <Row>
        <Col span={4} >
          <Sidebar />
        </Col>
        <Col span={20}>
          <Todos status={status} />
       
        </Col>
      </Row>
    </>
  );
};
