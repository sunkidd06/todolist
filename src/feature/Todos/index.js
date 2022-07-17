import { Row } from 'antd'
import React from 'react'
import { SingleTodo } from './SingleTodo'

export const Todos = () => {
    const todos = [{ title: "1", creator: "Dat", status: "new", description: "this is a task, this is a task, this is a task" },
    { title: "1", creator: "Dat", status: "new", description: "this is a task, this is a task, this is a task" },
    { title: "1", creator: "Dat", status: "new", description: "this is a task, this is a task, this is a task" },
    { title: "1", creator: "Dat", status: "new", description: "this is a task, this is a task, this is a task" },
    ]
    return (
        <Row className="gutter-box">
            {todos.map((todo, index) => (
                <SingleTodo key={index} todo={todo} />
            ))}
        </Row>
    )
}
