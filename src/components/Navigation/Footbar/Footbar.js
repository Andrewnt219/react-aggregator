import React from 'react'
import classes from './Footbar.module.scss'
import NavigationItems from '../NavigationsItems/NavigationItems'
import NavigationItem from '../NavigationsItems/NavigationItem/NavigationItem'
import trend from 'assets/trend.png'
import bookmark from 'assets/bookmark.png'
import account from 'assets/account.png'
import code from 'assets/code.png'

function Footbar() {
    const active = classes.active;
    return (
        <footer className={classes.Footbar}>

            <NavigationItem active={active} to="/" exact src={trend}>Trending</NavigationItem>
            <NavigationItem active={active} to="/web-dev" src={code}>Code</NavigationItem>
            <NavigationItem active={active} to="/bookmark" exact src={bookmark}>Bookmark</NavigationItem>
            <NavigationItem active={active} to="/account" src={account}>Account</NavigationItem>

        </footer>
    )
}

export default Footbar
