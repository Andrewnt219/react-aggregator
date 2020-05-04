import React from 'react'
import classes from './HamburgerMenu.module.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

function HamburgerMenu({ show, setShow }) {
    return (

        <div
            className={classes.HamburgerMenu}
            onClick={() => setShow(prev => !prev)}
        >
            <input
                type="checkbox"
                id="hamburgerMenu" />
            {show ? <FontAwesomeIcon icon={faTimes} color="white" fontSize="2rem" /> : <div className={classes.line} />}
            {/* <div className={classes.line}></div>
            <div className={classes.line}></div> */}
        </div>



    )
}

export default HamburgerMenu
