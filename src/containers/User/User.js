import React, { useState } from 'react'
import Button from 'components/ui/Button/Button'
import { useDispatch, useSelector } from 'react-redux'
import { logout, selectUser } from 'features/authSlice'
import Card from 'components/User/Card/Card';
import avatar from 'assets/avatar'
import Avatar from 'components/User/Avatar/Avatar';
import DropDownSetting from 'components/User/DropDownSetting/DropDownSetting';
import { faPalette, faComment, faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import classes from './User.module.scss'
import PopUpSetting from 'components/User/PopUpSetting/PopUpSetting';
import Contact from 'components/User/Contact/Contact';
import { storeUserResponse, selectIsLoading } from 'features/contactUsSlice';

function User() {
    const dispatch = useDispatch();
    const user = useSelector(selectUser);
    const isLoading = useSelector(selectIsLoading);


    function onSubmit(data) {
        dispatch(storeUserResponse(data));
    }

    return (
        <div className={classes.User}>
            <Card >
                <Avatar src={avatar[0]} />
                <h1>{user.displayName}</h1>
            </Card>

            <DropDownSetting icon={faInfoCircle} title="My profile" >
                <p>Email: {user.email} </p>
                <p>First name: {user.firstName}</p>
                <p>Last name: {user.lastName}</p>
                <p>Display name: {user.displayName}</p>
            </DropDownSetting>

            <DropDownSetting icon={faPalette} title="Change theme"></DropDownSetting>
            <PopUpSetting icon={faComment} title="Contact us">
                <Contact
                    email={user.email}
                    onSubmit={onSubmit}
                    isLoading={isLoading} />
            </PopUpSetting>

            <Button clicked={() => dispatch(logout())}>LOG OUT</Button>
        </div>

    )
}

export default User
