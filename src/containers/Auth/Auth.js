import RegisterForm from "components/Auth/RegisterForm/RegisterForm";
import withErrorHandler from 'hoc/withErrorHandler'
import React, { useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { auth, selectIsLoggedIn, selectIsLoading, setIsLoading } from 'features/authSlice'
import LoginForm from "components/Auth/LoginForm/LoginForm";
import classes from './Auth.module.scss'
import { Redirect } from "react-router-dom";
import useTitle from "hooks/useTitle";


function Auth(props) {
    const isLoggedIn = useSelector(selectIsLoggedIn);
    const dispatch = useDispatch();
    const [isLogin, setIsLogin] = useState(true);
    const isLoading = useSelector(selectIsLoading);

    useTitle(isLogin ? 'Login' : 'Signup');

    function onSubmit(data) {
        data = { ...data, displayName: data.displayName ? data.displayName : data.firstName + ' ' + data.lastName };
        dispatch(setIsLoading({ isLoading: true }));
        dispatch(auth({ data, isLogin }));
    }

    const {from} = props.location.state || {from: {pathname: "account/me"}}

    let form = (
        <>
            <LoginForm onSubmit={onSubmit} isLoading={isLoading} />
            <div className={classes.switchContainer}>
                <span style={{ color: '#bbb' }}>New to Aggregator? </span>
                <span onClick={() => setIsLogin(false)}>Create an account</span>
            </div>
        </>
    )

    if (!isLogin) {

        form = (
            <>
                <RegisterForm onSubmit={onSubmit} isLoading={isLoading} />
                <div className={classes.switchContainer}>
                    <span style={{ color: '#bbb' }}>Already have an account? </span>
                    <span onClick={() => setIsLogin(true)}>Sign in</span>
                </div>

            </>
        )
    }

    return isLoggedIn ? <Redirect to={from.pathname} /> : form

}

export default withErrorHandler(Auth)
