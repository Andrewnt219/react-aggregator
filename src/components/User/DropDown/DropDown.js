import React from 'react'
import classes from './DropDown.module.scss'

function DropDown(props) {
    return (
        <div className={classes.DropDown}>
            {props.children}
        </div>
    )
}

export default DropDown
