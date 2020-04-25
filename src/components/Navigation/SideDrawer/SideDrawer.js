import React from 'react'
import classes from './SideDrawer.module.scss'
import NavigationItems from '../NavigationsItems/NavigationItems'
import background from 'assets/sideDrawer_backdrop.jpg'
import logo from 'assets/logo.png'
import Logo from 'components/ui/Logo/Logo'
import Background from 'components/ui/Background/Background'
import NavigationItem from '../NavigationsItems/NavigationItem/NavigationItem'
import trending from 'assets/trending.png'
import web from 'assets/web.png'

function SideDrawer({ show, setShow }) {
    let sideDrawer = (
        <div className={classes.SideDrawer} onClick={() => setShow(false)}>
            <Background src={background} />
            <Logo src={logo} width="15%" height="auto" />
            <NavigationItems>
                <NavigationItem src={trending} to="/" exact>Trending</NavigationItem>
                <NavigationItem src={web} to="/web-dev">Web development</NavigationItem>
            </NavigationItems>
        </div>
    )

    if (!show) sideDrawer = null;

    return sideDrawer;
}

export default SideDrawer
