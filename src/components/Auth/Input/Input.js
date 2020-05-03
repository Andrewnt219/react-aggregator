import { ErrorMessage } from 'react-hook-form'
import React from 'react'
import classes from './Input.module.scss'

const Input = ({ isTextArea, inputSetting, name, label, register, handleChange, ...htmlAttrs }) => {
    return (
        <div className={classes.Input}>
            {label && <label htmlFor={name}>{label}</label>}

            {isTextArea
                ? <textarea
                    onBlur={() => inputSetting.triggerValidation(name)}
                    onChange={handleChange}
                    id={name}
                    name={name}
                    ref={register}
                    {...htmlAttrs} />
                : <input
                    onBlur={() => inputSetting.triggerValidation(name)}
                    onChange={handleChange}
                    id={name}
                    name={name}
                    ref={register}
                    {...htmlAttrs} />}

            {inputSetting.errors && <ErrorMessage errors={inputSetting.errors} name={name}>
                {({ messages }) =>
                    messages &&
                    Object.entries(messages).map(([type, message]) => <p className={classes.Error} key={type}>{message}</p>)
                }
            </ErrorMessage>}
        </div>
    );
};

export default Input
