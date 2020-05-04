import React from 'react'
import HamburgerMenu from 'components/ui/HamburgerMenu/HamburgerMenu'
import classes from './Toolbar.module.scss'
import Logo from 'components/ui/Logo/Logo'
import { Link } from 'react-router-dom'

function Toolbar(props) {
    return (
        <header className={classes.Toolbar}>
            <HamburgerMenu setShow={props.hamMenuClicked} />
            <Link to="/"><h1>AGGREGATOR</h1></Link>
            <Logo />
        </header>
    );
}

export default Toolbar
