import Form from "components/Auth/Form/Form";
import withErrorHandler from 'hoc/withErrorHandler'
import React from 'react'
import { useDispatch } from "react-redux";
import { register } from 'features/authSlice'

function Auth() {
    const dispatch = useDispatch();

    function onSubmit(data) {
        console.log('Submitted');
        dispatch(register({data}));
    }

    return (
        <Form title="register" onSubmit={onSubmit} />
    )
}

export default withErrorHandler(Auth)
