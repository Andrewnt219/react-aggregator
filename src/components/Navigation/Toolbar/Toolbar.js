import React, { useState } from 'react'
import NavigationItems from '../NavigationsItems/NavigationItems'
import HamburgerMenu from 'components/ui/HamburgerMenu/HamburgerMenu'
import classes from './Toolbar.module.scss'
import Logo from 'components/ui/Logo/Logo'
import Search from 'components/ui/Search/Search'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'


function Toolbar(props) {
    const [showSearch, setShowSearch] = useState(false);

    let toolbar = (
        <>
            <HamburgerMenu setShow={props.hamMenuClicked} />
            <Logo />
            <FontAwesomeIcon icon={faSearch} onClick={() => setShowSearch(true)} color="white"  />
        </>

    )

    if (showSearch)
        toolbar = (
            <Search setShowSearch={setShowSearch}/>
        )

    return (
        <header className={classes.Toolbar}>
            {toolbar}
        </header>
    );
}

export default Toolbar
