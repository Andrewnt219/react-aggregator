import React from 'react'
import classes from './Avatar.module.scss'

function Avatar({src}) {
    return (
        <div className={classes.Avatar}>
            <img  src={src} alt="User's avatar"  />
            <div className={classes.hiddenSettings}><p>Change avatar</p></div>
        </div>
    )
}

export default Avatar
