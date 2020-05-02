import React from 'react'
import classes from './Setting.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Setting(props) {
    return (
        <div onClick={props.clicked} className={classes.Setting}>
            <FontAwesomeIcon icon={props.icon} />
            <p>{props.children}</p>
        </div>
    )
}

export default Setting
