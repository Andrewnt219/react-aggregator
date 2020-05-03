import { ErrorMessage } from 'react-hook-form'
import React from 'react'
import classes from './Input.module.scss'

const Input = ({ isTextArea, errors, name, label, register, handleChange, ...htmlAttrs }) => {
    console.log(errors);
    return (
        <div className={classes.Input}>
            {label && <label htmlFor={name}>{label}</label>}

            {isTextArea
                ? <textarea onChange={handleChange} id={name} name={name} ref={register} {...htmlAttrs} />
                : <input onChange={handleChange} id={name} name={name} ref={register} {...htmlAttrs} />}

            {errors && <ErrorMessage errors={errors} name={name}>
                {({ messages }) =>
                    messages &&
                    Object.entries(messages).map(([type, message]) => <p className={classes.Error} key={type}>{message}</p>)
                }
            </ErrorMessage>}
        </div>
    );
};

export default Input
