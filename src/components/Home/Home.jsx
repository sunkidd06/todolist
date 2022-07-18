import { Col, Row } from "antd";
import React from "react";
import { Todos } from "../../feature/Todos";
import { Header } from "../Header/Header";
import { Sidebar } from "../Sidebar/Sidebar";
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
    </>
  );
};
