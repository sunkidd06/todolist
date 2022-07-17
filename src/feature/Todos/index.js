import { Row } from 'antd'
import React from 'react'
import { useGetTodosQuery } from '../../api/apiSlice'
import { SingleTodo } from './SingleTodo'
// json-server --watch data/db.json --port 3005;

export const Todos = () => {
    // const todos = [
    //     { title: "task 1", creator: "Dat", status: "New", description: "this is a task, this is a task, this is a task" },
    //     { title: "task 2", creator: "Dat 1", status: "Doing", description: "this is a task, this is a task, this is a task" },
    //     { title: "task 3", creator: "Dat 2", status: "New", description: "this is a task, this is a task, this is a task" },
    //     { title: "task 4", creator: "Dat 3", status: "New", description: "this is a task, this is a task, this is a task" },
    // ]
    const { data: todos, isLoading, isSuccess, isError, error } = useGetTodosQuery();
    console.log(todos);

    return (
        <Row className="gutter-box">
            {isLoading && <p>Loadding...................</p>}
            {isSuccess && (
                todos.map((todo, index) => (
                    <SingleTodo key={index} todo={todo} />
                ))
           )}
        </Row>
    )
}
