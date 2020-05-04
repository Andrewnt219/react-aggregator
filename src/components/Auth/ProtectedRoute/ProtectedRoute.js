import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { selectIsLoggedIn } from 'features/authSlice'
import { useSelector } from 'react-redux'

// Extract data from props
// Rename props.component to Component
function ProtectedRoute({ component: Component, ...rest }) {
    // Retrieve logIn state
    const isLoggedIn = useSelector(selectIsLoggedIn);

    // Render the passed Component or a Redirect, depend on loggedIn state
    // rest is path="/me", etc.
    return <Route {...rest} render={props => isLoggedIn
        ? <Component {...props} />
        : <Redirect to={{
            pathname: "/account",
            state: { from: props.location }
        }} />
    } />

}

export default ProtectedRoute
