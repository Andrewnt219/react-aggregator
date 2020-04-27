import React from 'react'
import { useForm } from 'react-hook-form'
import Input from './Input/Input';

function Form() {
    const { register, handleSubmit, errors } = useForm({ validateCriteriaMode: "all" });

    const onSubmit = (data) => {
        console.log(data);
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Input
                name="lastName"
                label="Last Name"
                errors={errors}
                register={register}
                placeholder="Last name" />

            <Input
                errors={errors}
                register={register}
                name="firstName"
                placeholder="First Name"
                title="Please enter your first name"
                label="First name" />

            <Input
                name="email"
                errors={errors}
                label="Email"
                register={register({
                    required: "Email is required",
                    pattern: {
                        value: /@.*\..+$/,
                        message: "Invalid email format. E.g. example@ex.com"
                    },
                    minLength: {
                        value: 6,
                        message: "Min length is 6"
                    }
                })} />


            <Input
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

            <input type="submit" value="Submit" />
        </form>
    )
}

export default Form
