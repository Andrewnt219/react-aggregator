import { ErrorMessage } from 'react-hook-form'
import React from 'react'
import classes from './Input.module.scss'

const Input = ({ errors, name, label, register, ...htmlAttrs }) => {
    return (
        <div className={classes.Input}>
            {label && <label htmlFor={name}>{label}</label>}
            
            <input id={name} name={name} ref={register} {...htmlAttrs} />

            <ErrorMessage errors={errors} name={name}>
                {({ messages }) =>
                    messages &&
                    Object.entries(messages).map(([type, message]) => <p className={classes.Error} key={type}>{message}</p>)
                }
            </ErrorMessage>
        </div>
    );
};

export default Input
