import React, { useState } from 'react'
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
            <a href="/"><h1>AGGREGATOR</h1></a>
            <FontAwesomeIcon style={{fontSize: '1.5rem'}} icon={faSearch} onClick={() => setShowSearch(true)} color="white" cursor="pointer"  />
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
