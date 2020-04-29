import React from 'react'
import Button from 'components/ui/Button/Button'
import { useDispatch } from 'react-redux'
import { logout, selectIsLoggedIn } from 'features/authSlice'

function User() {
    const dispatch = useDispatch();

    return (
        <div>
            Hello authenticated User
            <Button clicked={() => dispatch(logout())}>Logout</Button>
        </div>

    )
}

export default User
