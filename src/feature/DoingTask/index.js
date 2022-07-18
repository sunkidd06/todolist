import { Col, Row } from "antd";
import React from 'react';
import { useGetDoingTodosQuery } from '../../api/todoAPI';
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import { SingleTodo } from '../Todos/SingleTodo';
export const DoingTask = () => {

    const { data: doingTodos, isLoading, isSuccess} = useGetDoingTodosQuery();
    return (
        <>
            <Header />
            <Row>
                <Col span={4}>
                    <Sidebar />
                </Col>
                <Col span={20}>
                {isLoading && (<p>Loading.......</p>)}
                    {isSuccess && (<Row className="gutter-box"
                    style={{marginTop:"80px"}}>
                        {doingTodos.length > 0 ? doingTodos?.map((todo, index) => (
                            <SingleTodo key={index} todo={todo} />
                        )) : (<p>No todos found</p>)}
                    </Row>)}
                </Col>
            </Row></>
    )
}
