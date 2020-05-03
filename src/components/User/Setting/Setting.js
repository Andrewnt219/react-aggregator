import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classes from './Setting.module.scss'

function Setting({active, clicked, icon, title}) {
    const settingClass = active ? [classes.DropDownSetting, classes.active] : [classes.DropDownSetting];
    return (
        <div onClick={clicked}
            className={settingClass.join(' ')}>
            <FontAwesomeIcon icon={icon} />
            <p>{title}</p>
        </div>
    )
}

export default Setting
