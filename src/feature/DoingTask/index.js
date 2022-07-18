import React from 'react'
import { Header } from "../../components/Header/Header";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import { Col, Row } from "antd";
import { useSelector } from "react-redux";
import { SingleTodo } from '../Todos/SingleTodo';
export const DoingTask = () => {
    const todos = useSelector(state => state.todos);
    const doingTodos = todos.filter((todo, index) =>
        todo.status === "Doing"
    );
    return (
        <>
            <Header />
            <Row>
                <Col flex="150px">
                    <Sidebar />
                </Col>
                <Col flex="auto">
                    <Row className="gutter-box">
                        {doingTodos.length > 0 ? doingTodos?.map((todo, index) => (
                            <SingleTodo key={index} todo={todo} />
                        )) : (<p>No todos found</p>)}
                    </Row>
                </Col>
            </Row></>
    )
}
