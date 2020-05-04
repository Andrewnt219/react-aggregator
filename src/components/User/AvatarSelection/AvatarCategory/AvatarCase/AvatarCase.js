import React from 'react'
import { useDispatch } from 'react-redux';
import { updateUserProfile } from 'features/authSlice';
import classes from './AvatarCase.module.scss'

function AvatarCase({ id, avatarSrc, setShowAvatarSelection }) {
    const dispatch = useDispatch();

    return <img
        className={classes.AvatarCase}
        onClick={() => {
            setShowAvatarSelection(false);
            dispatch(updateUserProfile(id, { avatar: avatarSrc }))
        }}
        src={avatarSrc}
        alt="avatar" />
}

export default AvatarCase
