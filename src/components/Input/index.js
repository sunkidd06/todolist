import { ErrorMessage, useField } from 'formik';
import React from 'react';
import {useMediaQuery} from "react-responsive";
import "./style.scss";
export default function LoginInput({ placeholder, bottom, label, ...props }) {
    const [field, meta] = useField(props);
    const desktopView = useMediaQuery({
        query: "(min-width:850px)", 
      })
    return (

        <div className="input_wrap">
            {meta.touched && meta.error && !bottom &&
                <div className={desktopView ? "input_error_desktop input_error": "input_error"}>
                    {meta.touched && meta.error && <ErrorMessage name={field.name} />}
                    {meta.touched && meta.error && (<div className={desktopView ? "error_arrow_left" : "error_arrow_top"}></div>)}
                </div>
            }
            <label className="label">{label}</label>
            <input
            className ="input"
                placeholder={placeholder}
                name={field.name}
                type={field.type} {...field}
                {...props}
            />
            {meta.touched && meta.error && bottom &&
                <div className={desktopView ? "input_error_desktop input_error": "input_error"}>
                    {meta.touched && meta.error && <ErrorMessage name={field.name} />}
                    {meta.touched && meta.error && (<div className={desktopView ? "error_arrow_left" : "error_arrow_bottom"}></div>)}
                </div>}
            {meta.touched && meta.error && <i className="error_icon" style={{ top: `${!bottom && !desktopView ? "80px" : "15px"}` }}></i>}


        </div>
    )
}
