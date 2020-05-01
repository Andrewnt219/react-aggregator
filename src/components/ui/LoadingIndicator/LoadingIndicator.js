import React from 'react'
import classes from './LoadingIndicator.module.scss'

function LoadingIndicator({size}) {
    return (
        <span style={{width: size, height: size}} className={classes.loader}></span>
    )
}

export default LoadingIndicator
