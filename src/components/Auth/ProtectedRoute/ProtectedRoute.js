import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { selectIsLoggedIn } from 'features/authSlice'
import { useSelector } from 'react-redux'

function ProtectedRoute({ component: Component, ...rest }) {
    const isLoggedIn = useSelector(selectIsLoggedIn);

    return <Route {...rest} render={props => isLoggedIn
        ? <Component {...props} />
        : <Redirect to="/account" />
    } />

}

export default ProtectedRoute
