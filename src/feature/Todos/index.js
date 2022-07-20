import { Row } from 'antd';
import React, { useEffect } from 'react';
import { useGetTodosQuery } from '../../api/todoAPI';
import { SingleTodo } from './SingleTodo';
import { useDispatch } from 'react-redux';
import { setTodos } from '../../redux/todoSlice';
import { Skeleton } from 'antd';
// json-server --watch data/db.json --port 3005;

export const Todos = ({ status }) => {
    const params = status ? status : "";
    const { data: todos, isLoading, isSuccess } = useGetTodosQuery(params);
    const dispatch = useDispatch();
    useEffect(() => {
        if (isSuccess) {
            dispatch(setTodos(todos));
        }
    }, [isSuccess]);
    return (
        <Row className="gutter-box" style={{ marginTop: "80px" }}>
            {isLoading && <Skeleton />}
            {isSuccess && todos && (
                todos.map((todo, index) => (
                    <SingleTodo key={index} todo={todo} />
                ))
            )}
            {todos?.length === 0 && (<p>
                No todo founddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd</p>)}
        </Row>
    )
}
