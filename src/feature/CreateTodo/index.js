import React from 'react';
import { useAddTodoMutation } from "../../api/todoAPI";
import { Col, Row } from "antd";
import { Header } from '../../components/Header';
import { Sidebar } from '../../components/Sidebar';
import uniqid from 'uniqid';
import moment from "moment";
import CreateTodoForm from '../../components/Form';


export const CreateTodo = () => {
    const [addTodo] = useAddTodoMutation();
    const handleClick = () => {
        addTodo({ id: uniqid(), title: "Task 1", create: "Loc", status: "New", description: "This is a task, This is a task, This is a task, This...", created_At: moment().format() });
    }
    return (
        <>
            <Header />
            <Row>
                <Col span={4}>
                    <Sidebar />
                </Col>
                <Col span={20} style={{ marginTop: "80px" }}>
                    <CreateTodoForm/>
                </Col>
            </Row>
        </>
    )
}

