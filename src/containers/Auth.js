import Form from "components/Auth/Form/Form";
import withErrorHandler from 'hoc/withErrorHandler'
import React from 'react'

function Auth() {
    return (
            <Form />
    )
}

export default withErrorHandler(Auth)
