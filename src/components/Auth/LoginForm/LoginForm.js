import React from 'react'
import { useForm } from 'react-hook-form'
import Input from '../Input/Input';
import classes from '../Form.module.scss';
import Button from 'components/ui/Button/Button';


function LoginForm({ onSubmit }) {
    const { register, handleSubmit, errors } = useForm();

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={classes.Form}>
            <h1>Login</h1>
            <Input
                type="email"
                name="email"
                errors={errors}
                label="Email"
                placeholder="example@ex.com"
                register={register} />


            <Input
                type="password"
                name="password"
                label="Password"
                placeholder="password"
                errors={errors}
                register={register} />

            <Button type="submit">SUBMIT</Button>
        </form>
    )
}

export default LoginForm