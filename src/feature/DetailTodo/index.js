import { Col, Row } from 'antd';
import React from 'react'
import { useParams } from "react-router-dom";
import CreateTodoForm from "../../components/Form";
import { Header } from '../../components/Header';
import { Sidebar } from '../../components/Sidebar';
export const DetailTodo = () => {
  const { id } = useParams();
  console.log(id);
  return (
    <>
      <Header />
      <Row>
        <Col span={4}>
          <Sidebar />
        </Col>
        <Col span={20} style={{ marginTop: "80px" }}>
          {/* <button onClick={handleClick}>CLick MEEE</button> */}
          <CreateTodoForm idTodo={id} />
        </Col>
      </Row>
    </>
  )
}
