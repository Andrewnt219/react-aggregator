import React from 'react'
import classes from './Spinner.module.scss'

function Spinner() {
    return (
        <div className={classes.Spinner}>
            <div className={classes.loader}></div>
        </div>
    )
}

export default Spinner
