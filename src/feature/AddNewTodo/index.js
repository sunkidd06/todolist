import React from 'react'
import { Header } from "../../components/Header/Header";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import { Col, Row } from "antd";

export const AddNewTodo = () => {
  return (
    <>
     <Header />
      <Row>
        <Col flex="150px">
          <Sidebar />
        </Col>
        <Col flex="auto">
        </Col>
      </Row></>
  )
}
