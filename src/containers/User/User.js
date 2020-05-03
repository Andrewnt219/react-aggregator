import React from 'react'
import Button from 'components/ui/Button/Button'
import { useDispatch, useSelector } from 'react-redux'
import { logout, selectUser } from 'features/authSlice'
import Card from 'components/User/Card/Card';
import avatar from 'assets/avatar'
import Avatar from 'components/User/Avatar/Avatar';
import Setting from 'components/User/Setting/Setting';
import { faPalette, faComment, faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import classes from './User.module.scss'

function User() {
    const dispatch = useDispatch();
    const user = useSelector(selectUser);

    return (
        <div className={classes.User}>
            <Card >
                <Avatar src={avatar[0]} />
                <h1>{user.displayName}</h1>
            </Card>

            <Setting icon={faInfoCircle}  title="My profile" >
                <p>Email: {user.email} </p>
                <p>First name: {user.firstName}</p>
                <p>Last name: {user.lastName}</p>
                <p>Display name: {user.displayName}</p>
            </Setting>

            <Setting icon={faPalette}  title="Change theme"></Setting>
            <Setting icon={faComment}  title="Contact us"></Setting>

            <Button clicked={() => dispatch(logout())}>LOG OUT</Button>
        </div>

    )
}

export default User
