import React from 'react';
import { useAddTodoMutation } from "../../api/todoAPI";
import { Col, Row } from "antd";
import { Header } from '../../components/Header';
import { Sidebar } from '../../components/Sidebar';

export const CreateTodo = () => {
    const [addTodo] = useAddTodoMutation();
    const handleClick = () => {
        addTodo({ id:5,title: "Task 1", create: "Loc", status: "New" , description: "This is a task, This is a task, This is a task, This..."});
    }
    return (
        <>
            <Header />
            <Row>
                <Col flex="150px">
                    <Sidebar />
                </Col>
                <Col flex="auto">
                    <button onClick={handleClick}>CLick MEEE</button>
                </Col>
            </Row>
        </>
    )
}
