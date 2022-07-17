import React from "react";
// import { SingleTodo } from "../../feature/Todos/SingleTodo";
import { Header } from "../Header/Header";
import { Sidebar } from "../Sidebar/Sidebar";
// import { Layout } from "antd";
import { Col, Row } from "antd";
import { Todos } from "../../feature/Todos";
export const Home = () => {
  // const { Footer, Sider, Content } = Layout;
  return (
    <>
      <Header />
      <Row>
        <Col flex="150px">
          <Sidebar />
        </Col>
        <Col flex="auto">
          <Todos />
        </Col>
      </Row>
    </>
  );
};
