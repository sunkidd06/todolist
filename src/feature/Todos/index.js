import { Row } from 'antd';
import React, { useEffect } from 'react';
import { useGetTodosQuery } from '../../api/todoAPI';
import { SingleTodo } from './SingleTodo';
import { useDispatch } from 'react-redux';
import { setTodos } from '../../redux/todoSlice';
// json-server --watch data/db.json --port 3005;

export const Todos = () => {
    const { data: todos, isLoading, isSuccess} = useGetTodosQuery();
    const dispatch = useDispatch();
    useEffect(() => {
        if (isSuccess) {
            dispatch(setTodos(todos));
        }
    }, [isSuccess]);
    return (
        <Row className="gutter-box" style={{marginTop:"80px"}}>
            {isLoading && <p>Loading...................</p>}
            {isSuccess && todos &&(
                todos.map((todo, index) => (
                    <SingleTodo key={index} todo={todo} />
                ))
            )}
        </Row>
    )
}
