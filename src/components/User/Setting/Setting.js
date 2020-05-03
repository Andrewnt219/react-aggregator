import React, { useState } from 'react'
import classes from './Setting.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import DropDown from '../DropDown/DropDown'

function Setting(props) {
    const [showDropDown, setShowDropDown] = useState(false);
    const settingClass = showDropDown ? [classes.Setting, classes.active] : [classes.Setting];
    return (
        <>
            <div onClick={() => setShowDropDown(prev => !prev)} 
            className={settingClass.join(' ')}>
                <FontAwesomeIcon icon={props.icon} />
                <p>{props.title}</p>
            </div>
            <DropDown show={showDropDown}>
                {props.children}
            </DropDown>
        </>
    )
}

export default Setting
