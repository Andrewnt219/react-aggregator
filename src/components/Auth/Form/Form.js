import React from 'react'
import { useForm } from 'react-hook-form'
import Input from './Input/Input';
import classes from './Form.module.scss';
import Button from 'components/ui/Button/Button';


function Form({ title, onSubmit }) {
    const { register, handleSubmit, errors } = useForm({ validateCriteriaMode: "all" });

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={classes.Form}>
            <h1>{title || 'form'}</h1>
            <Input
                type="text"
                name="lastName"
                label="Last Name"
                errors={errors}
                register={register}
                placeholder="Last name" />

            <Input
                type="text"
                errors={errors}
                register={register}
                name="firstName"
                placeholder="First Name"
                title="Please enter your first name"
                label="First name" />

            <Input
                type="email"
                name="email"
                errors={errors}
                label="Email"
                placeholder="example@ex.com"
                register={register({
                    required: "Email is required",
                    pattern: {
                        value: /@.*\..+$/,
                        message: "Invalid email format"
                    },
                    minLength: {
                        value: 6,
                        message: "Min length is 6"
                    }
                })} />


            <Input
                type="password"
                name="password"
                label="Password"
                errors={errors}
                register={register({
                    required: "Password is required",
                    minLength: {
                        value: 6,
                        message: "Password is at least 6 characters"
                    }
                })} />

            <Button type="submit">SUBMIT</Button>
        </form>
    )
}

export default Form
