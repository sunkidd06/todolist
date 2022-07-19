import { Form, Formik, Field } from "formik";
import { useState } from "react";
import * as Yup from "yup";
import Input from '../Input';
import { RadioButton } from "../RadioButton";
import "./style.scss";
export default function CreateTodoForm(props) {
    const { idTodo } = props;
    const [newTodo, setNewTodo] = useState({
        title: "",
        creator: "",
        createdAt: "",
        status: "New",
        description: ""
    });
    const [editTodo, setEditTodo] = useState({
        title: "",
        creator: "",
        createdAt: "",
        status: "",
        description: ""
    });
    const { title, creator, createdAt, description } = newTodo;
    const handleTodoChange = (e) => {
        const { value, name } = e.target;

        setNewTodo({ ...newTodo, [name]: value })
    }
    console.log(newTodo);
    const TodoValidation = Yup.object({
        title: Yup.string()
            .required("Title is required.")
            .min(3, "Title too short")
            .max(20, "Title too long"),
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
                                title, creator, createdAt, description
                            }}
                            validationSchema={TodoValidation}
                        >
                            {
                                (formikProps) => (
                                    <Form>
                                        <Input type="text" placeholder='Place holder' name="title" onChange={handleTodoChange} bottom label="Title" value={title} />
                                        <Input type="text" placeholder="Name of creator" name="creator" onChange={handleTodoChange} bottom label="Creator" />
                                        <Input type="text" placeholder={new Date()} value={new Date()} name="createdAt" onChange={handleTodoChange} bottom label="Created at" />
                                        <Input type="text" placeholder="Name of creator" name="description" onChange={handleTodoChange} bottom label="Description" />
                                        {!idTodo && (<div className="btn-submit">
                                            <button type="submit" className="save_btn btn">Save</button>
                                        </div>)}
                                        {idTodo && (<>
                                            <RadioButton />
                                            <div className="btn-submit">
                                                <button type="submit" className="save_btn btn">Save</button>
                                                <button type="submit" className="reset_btn btn">Reset</button>
                                                <button type="submit" className="delete_btn btn">Delete</button>
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

