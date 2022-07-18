import React from 'react'
import { Header } from "../../components/Header/Header";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import { Col, Row } from "antd";
import { SingleTodo } from '../Todos/SingleTodo';
import { useGetDoneTodosQuery } from '../../api/todoAPI';

export const DoneTask = () => {
    const { data: doneTodos, isLoading, isSuccess, isError, error } = useGetDoneTodosQuery();

    return (
        <>
            <Header />
            <Row>
                <Col span={4}>
                    <Sidebar />
                </Col>
                <Col span={20}>
                    {isLoading && (<p>Loading.......</p>)}
                    {isSuccess && (<Row className="gutter-box">
                        {doneTodos.length > 0 ? doneTodos?.map((todo, index) => (
                            <SingleTodo key={index} todo={todo} />
                        )) : (<p>No todos found</p>)}
                    </Row>)}
                </Col>
            </Row></>
    )
}
