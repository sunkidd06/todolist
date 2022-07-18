import { Row } from 'antd';
import React, { useEffect } from 'react';
import { useGetTodosQuery } from '../../api/apiSlice';
import { SingleTodo } from './SingleTodo';
import { useDispatch } from 'react-redux';
import { setTodos } from "../../redux/todoSlice";
// json-server --watch data/db.json --port 3005;

export const Todos = () => {
    const { data: todos, isLoading, isSuccess, isError, error } = useGetTodosQuery();
    const dispatch = useDispatch();
    console.log(todos);
    useEffect(() => {
        if (isSuccess) {
            dispatch(setTodos(todos));
            console.log("Flag");
        }
    }, [isSuccess]);
    return (
        <Row className="gutter-box">
            {isLoading && <p>Loadding...................</p>}
            {isSuccess && todos &&(
                todos.map((todo, index) => (
                    <SingleTodo key={index} todo={todo} />
                ))
            )}
        </Row>
    )
}
