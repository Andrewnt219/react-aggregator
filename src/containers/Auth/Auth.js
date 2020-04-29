import RegisterForm from "components/Auth/RegisterForm/RegisterForm";
import withErrorHandler from 'hoc/withErrorHandler'
import React, { useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { auth, selectIsLoggedIn } from 'features/authSlice'
import LoginForm from "components/Auth/LoginForm/LoginForm";
import classes from './Auth.module.scss'
import { Redirect } from "react-router-dom";


function Auth() {
    const isLoggedIn = useSelector(selectIsLoggedIn);
    const dispatch = useDispatch();
    const [isLogin, setIsLogin] = useState(true);

    function onSubmit(data) {
        dispatch(auth({ data, isLogin }));
    }

    let form = (
        <>
            <LoginForm onSubmit={onSubmit} />
            <div className={classes.switchContainer}>
                <span style={{ color: '#bbb' }}>New to Aggregator? </span>
                <span onClick={() => setIsLogin(false)}>Create an account</span>
            </div>
        </>
    )

    if (!isLogin) {

        form = (
            <>
                <RegisterForm onSubmit={onSubmit} />
                <div className={classes.switchContainer}>
                    <span style={{ color: '#bbb' }}>Already have an account? </span>
                    <span onClick={() => setIsLogin(true)}>Sign in</span>
                </div>

            </>
        )
    }

    return isLoggedIn ? <Redirect to="/me"/> : form

}

export default withErrorHandler(Auth)