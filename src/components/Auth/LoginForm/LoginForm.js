import React from 'react'
import { useForm } from 'react-hook-form'
import Input from '../Input/Input';
import classes from '../Form.module.scss';
import Button from 'components/ui/Button/Button';
import LoadingIndicator from 'components/ui/LoadingIndicator/LoadingIndicator';


function LoginForm({ onSubmit, isLoading }) {
    const { register, handleSubmit, errors, triggerValidation } = useForm();
    const inputSetting = { errors, triggerValidation };
    return (
        <form onSubmit={handleSubmit(onSubmit)} className={classes.Form}>
            <h1>Login</h1>
            <Input
                type="email"
                name="email"
                inputSetting={inputSetting}
                label="Email"
                placeholder="example@ex.com"
                register={register} />


            <Input
                type="password"
                name="password"
                label="Password"
                placeholder="password"
                inputSetting={inputSetting}
                register={register} />

            {isLoading ? <LoadingIndicator size="1rem" /> : <Button type="submit">SUBMIT</Button>}
        </form>
    )
}

export default LoginForm
