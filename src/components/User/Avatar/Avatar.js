import React from 'react'
import classes from './Avatar.module.scss'

function Avatar({ src, setShowAvatarSelection }) {
    return (
        <div className={classes.Avatar}>
            <img src={src} alt="User's avatar" />
            <div
                className={classes.hiddenSettings}
                onClick={() => setShowAvatarSelection(true)}>
                <p>Change avatar</p>
            </div>
        </div>
    )
}

export default Avatar
