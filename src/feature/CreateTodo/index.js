import React from 'react';
import { useAddTodoMutation } from "../../api/apiSlice";
import { Col, Row } from "antd";
import { Header } from '../../components/Header/Header';
import { Sidebar } from '../../components/Sidebar/Sidebar';

export const CreateTodo = () => {
    const [addTodo] = useAddTodoMutation();
    const handleClick = () => {
        addTodo({ title: "Task 1", create: "Loc", status: "New" , description: "This is a task, This is a task, This is a task, This..."});
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
