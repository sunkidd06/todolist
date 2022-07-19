import { Col, Pagination, Row } from "antd";
import React from "react";
import { Todos } from "../../feature/Todos";
import { Header } from "../Header";
import { Sidebar } from "../Sidebar";
export const Home = () => {
  return (
    <>
      <Header />
        <Row>
          <Col span={4} >
            <Sidebar />
          </Col>
          <Col span={20}>
            <Todos />
          </Col>
        </Row>
        <Pagination defaultCurrent={1} total={50} style={{marginLeft:"45%"}}/>
    </>
  );
};
