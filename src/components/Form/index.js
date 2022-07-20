import { Form, Formik, Field } from "formik";
import { useState } from "react";
import * as Yup from "yup";
import { useAddTodoMutation, useUpdateTodoMutation, useDeleteTodoMutation } from "../../api/todoAPI";
import Input from '../Input';
import { RadioButton } from "../RadioButton";
import "./style.scss";
import uniqid from 'uniqid';
import moment from "moment";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Alert } from "antd";
export default function CreateTodoForm(props) {
    const [addTodo] = useAddTodoMutation();
    const [updateTodo] = useUpdateTodoMutation();
    const [deleteTodo] = useDeleteTodoMutation();
    const navigate = useNavigate();
    // Get todo with id form URL
    const { idTodo } = props;
    const todos = useSelector(state => state.todos);
    const editTodo = todos.find(todo => todo.id === idTodo);

    // 
    const [newTodo, setNewTodo] = useState({
        title: editTodo ? editTodo.title : "",
        creator: editTodo ? editTodo.creator : "",
        created_At: editTodo ? editTodo.created_At : new Date(),
        status: "New",
        description: editTodo ? editTodo.description : ""
    });
    const { title, creator, created_At, description, status } = newTodo;
    // handle change
    const handleTodoChange = (e) => {
        const { value, name } = e.target;
        setNewTodo({ ...newTodo, [name]: value })
    }
    // ADD todo
    const addNewTodo = (e) => {
        addTodo({ id: uniqid(), title, creator, status, description, created_At: moment(created_At).format('MM/DD/YYYY') });
        setNewTodo({
            title: "",
            creator: "",
            created_At: new Date(),
            status: "New",
            description: ""
        })
        navigate("/");
    }
    // Edit todo
    const handleEditTodo = (e) => {
        updateTodo({ id: editTodo.id, title, creator, status, description, created_At: moment(created_At).format('MM/DD/YYYY') })
        navigate("/");
    }
    // Delete todo
    const handleDeleteTodo = (e) => {
        deleteTodo({ id: editTodo.id });
        alert(`Todo id: ${editTodo.id} is deleted`);
        navigate("/");
    }
    // Reset todo
    const handleReset = (e) => {
        setNewTodo({
            title: "",
            creator: "",
            created_At: moment(new Date()).format("MMMM Do YYYY, h:mm:ss a"),
            status: "New",
            description: ""
        })
    }

    // validate with Yub
    const TodoValidation = Yup.object({
        title: Yup.string()
            .required("Title is required.")
            .min(3, "Title too short")
            .max(10, "Title too long"),
        creator: Yup.string()
            .required("Creator is required.")
            .max(25)
            .min(1, "Creator must be at least 1 characters")
    })
    return (
        <div>
            <div className="login_wrap">
                <div className="login_2">
                    <div className="login_2_wrap">
                        <Formik
                            enableReinitialize
                            initialValues={{
                                title, creator, created_At, description, status
                            }}
                            validationSchema={TodoValidation}
                        >
                            {
                                (formikProps) => (
                                    <Form>
                                        <Input type="text" placeholder={editTodo ? editTodo.title : "Place holder"} name="title" onChange={handleTodoChange} bottom label="Title" value={title} />
                                        <Input type="text" placeholder={editTodo ? editTodo.creator : "Name of creator"} name="creator" onChange={handleTodoChange} bottom label="Creator" value={creator} />
                                        <Input type="text" placeholder={moment(new Date()).format("MMMM Do YYYY, h:mm:ss a")} name="createdAt" onChange={handleTodoChange} bottom label="Created at" value={moment(created_At).format("MMMM Do YYYY, h:mm:ss a")} />
                                        <Input type="text" placeholder={editTodo ? editTodo.description : "Description"} name="description" onChange={handleTodoChange} bottom label="Description" value={description} />
                                        {!idTodo && (<div className="btn-submit">
                                            <button onClick={addNewTodo} className="save_btn btn">ADD</button>
                                        </div>)}
                                        {idTodo && (<>
                                            <RadioButton />
                                            <div className="btn-submit">
                                                <button onClick={handleEditTodo} className="save_btn btn">Save</button>
                                                <button onClick={handleReset} className="reset_btn btn">Reset</button>
                                                <button onClick={handleDeleteTodo} className="delete_btn btn">Delete</button>
                                            </div>
                                        </>)
                                        }
                                    </Form>
                                )
                            }
                        </Formik>
                    </div>

                </div>

            </div>
        </div>
    )
}

