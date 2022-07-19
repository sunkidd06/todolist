import React from 'react';
import {Field} from "formik";
import "./style.scss";
export const RadioButton = () => {
    return (
        <>
            <div id="my-radio-group" className="radio-title">Status</div>
            <div role="group" aria-labelledby="my-radio-group">
                <label className="radio-label">
                    <Field type="radio" name="status" value="New" />
                    New
                </label>
                <label className="radio-label">
                    <Field type="radio" name="status" value="Doing" />
                    Doing
                </label>
                <label className="radio-label">
                    <Field type="radio" name="status" value="Done" />
                    Done
                </label>
            </div>
        </>
    )
}
