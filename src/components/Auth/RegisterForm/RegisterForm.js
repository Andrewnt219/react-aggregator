import React from 'react'
import { useForm } from 'react-hook-form'
import Input from '../Input/Input';
import classes from '../Form.module.scss';
import Button from 'components/ui/Button/Button';
import LoadingIndicator from 'components/ui/LoadingIndicator/LoadingIndicator';

function RegisterForm({ onSubmit, isLoading }) {
    const { register, handleSubmit, errors, watch, triggerValidation } = useForm({ validateCriteriaMode: "all" });
    const watchPassword = watch("password");
    const inputSetting = { errors, triggerValidation };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={classes.Form}>
            <h1>Sign Up</h1>
            <Input
                type="text"
                inputSetting={inputSetting}
                register={register}
                name="firstName"
                placeholder="First Name"
                title="Please enter your first name"
                label="First name" />

            <Input
                type="text"
                name="lastName"
                label="Last Name"
                inputSetting={inputSetting}
                register={register}
                placeholder="Last name" />


            <Input
                type="text"
                inputSetting={inputSetting}
                register={register({required: 'Display name is required'})}
                name="displayName"
                placeholder="Display Name"
                title="Please enter your display name"
                label="Display Name" />

            <Input
                type="email"
                name="email"
                inputSetting={inputSetting}
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
                placeholder="Password"
                inputSetting={inputSetting}
                register={register({
                    required: "Password is required",
                    minLength: {
                        value: 6,
                        message: "Password is at least 6 characters"
                    }
                })} />

            <Input
                type="password"
                name="confirmPassword"
                label="Confirm Password"
                placeholder="Confirm your password"
                inputSetting={inputSetting}
                register={register({
                    validate: value => value === watchPassword || "Password does not match"
                })} />

            {isLoading ? <LoadingIndicator size="1rem" /> : <Button type="submit">SUBMIT</Button>}
        </form>
    )
}

export default RegisterForm
