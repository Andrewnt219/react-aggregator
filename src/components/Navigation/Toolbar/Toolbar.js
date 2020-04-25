import React from 'react'
import NavigationItems from '../NavigationsItems/NavigationItems'
import HamburgerMenu from 'components/ui/HamburgerMenu/HamburgerMenu'
import classes from './Toolbar.module.scss'
function Toolbar(props) {
    return (
        <header className={classes.Toolbar}>
            <HamburgerMenu setShow={props.hamMenuClicked}/>
            <nav className={classes.nav}>
                <NavigationItems />
            </nav>

        </header>
    )
}

export default Toolbar
