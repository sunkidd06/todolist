import { Pagination, Row } from 'antd';
import React, { useEffect, useState } from 'react';
import { useGetTodosQuery } from '../../api/todoAPI';
import { SingleTodo } from './SingleTodo';
import { useDispatch } from 'react-redux';
import { setTodos } from '../../redux/todoSlice';
import { Skeleton } from 'antd';
// json-server --watch data/db.json --port 3005;

export const Todos = ({ status }) => {
    const params = status ? status : "";
    // const params = "New";
    console.log(params);
    const [current, setCurrent] = useState(1);
    // const params = "New";
    // `?_page=${current}&_limit=12&${params}`
    const { data: todos, isLoading, isSuccess } = useGetTodosQuery(params);
    // const { data: todos, isLoading, isSuccess } = useGetTodosQuery(`?_page=${current}&_limit=12&%s`,params);
    const { data: allTodo} = useGetTodosQuery("");
    const dispatch = useDispatch();
    useEffect(() => {
        if (isSuccess) {
            dispatch(setTodos(todos));
        }
    }, [isSuccess]);
    const onChange = (pageNumber) => {
        setCurrent(pageNumber);
    };
    return (
        <>
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

            <Pagination defaultCurrent={1} total={allTodo?.length} onChange={onChange} style={{ marginLeft: "200px" }} />
        </>
    )
}
