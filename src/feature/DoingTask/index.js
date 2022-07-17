import React from 'react'
import { Header } from "../../components/Header/Header";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import { Col, Row } from "antd";
import { useSelector } from "react-redux";
import { SingleTodo } from '../Todos/SingleTodo';
export const DoingTask = () => {
    const todos = useSelector(state => state.todos);
    const newTodos = todos.filter((todo, index) =>
        todo.status === "Doing"
    );
    console.log(newTodos);
    return (
        <>
            <Header />
            <Row>
                <Col flex="150px">
                    <Sidebar />
                </Col>
                <Col flex="auto">
                    <Row className="gutter-box">
                        {newTodos.length > 0 ? newTodos?.map((todo, index) => (
                            <SingleTodo key={index} todo={todo} />
                        )) : (<p>No todos found</p>)}
                    </Row>
                </Col>
            </Row></>
    )
}
