import React from 'react'
import classes from './HamburgerMenu.module.scss'
function HamburgerMenu({setShow}) {
    return (
        <div className={classes.HamburgerMenu} onClick={() => setShow(true)}>
            <div className={classes.line}></div>
            <div className={classes.line}></div>
            <div className={classes.line}></div>
        </div>
    )
}

export default HamburgerMenu
