import React from 'react'
import {useForm, ErrorMessage } from 'react-hook-form'

function Form() {
    const {register, handleSubmit, errors } = useForm({validateCriteriaMode: "all"});
    const onSubmit = (data) => {
        console.log(data);
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input ref={register} name="lastName" />

            <input ref={register} name="firstName" />

            <input ref={register({
                required: "Email is required",
                pattern: {
                    value: /@.*\..*$/,
                    message: "Invalid email format. E.g. example@ex.com"
                },
                minLength: {
                    value: 6,
                    message: "Min length is 6"
                }
            })} name="email" />
            <ErrorMessage errors={errors} name="email" >
                {({messages}) => 
               { console.log(messages);return messages &&
                Object.entries(messages).map(([type, message]) => (
                    <p key={type}>{message}</p>
                ))} }
            </ErrorMessage>

            <input ref={register({
                required: "Password is required",
                minLength: {
                    value: 6,
                    message: "Password is at lease 6 characters"
                }
            })} name="password" />
            <input type="submit" value="Submit"/>
        </form>
    )
}

export default Form
