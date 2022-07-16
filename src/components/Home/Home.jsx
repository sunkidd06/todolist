import React from "react";
import { SingleTodo } from "../../feature/Todos/SingleTodo";
import { Header } from "../Header/Header";
import { Navbar } from "../Navbar/Navbar";
import { Layout } from "antd";
import { Col, Divider, Row } from "antd";
import { Todos } from "../../feature/Todos";
export const Home = () => {
  const { Footer, Sider, Content } = Layout;
  return (
    <>
      <Header />
      <Row>
        <Col flex="150px">
          <Navbar />
        </Col>
        <Col flex="auto">
          <Todos />
        </Col>
      </Row>
    </>
  );
};
