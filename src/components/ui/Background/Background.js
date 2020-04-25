import React from 'react'
import classes from './Background.module.scss'

function Background({ src, children }) {
    return (
        <div className={classes.container}>
            <img src={src} alt="background" className={classes.Background} />
        </div>

    )
}

export default Background
