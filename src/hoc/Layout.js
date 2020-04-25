import React, { useState } from 'react'
import Toolbar from 'components/Navigation/Toolbar/Toolbar'
import SideDrawer from 'components/Navigation/SideDrawer/SideDrawer'
import Backdrop from 'components/ui/Backdrop/Backdrop'
import classes from './Layout.module.scss'
import Footbar from 'components/Navigation/Footbar/Footbar'

// waiting for toolbar, hamburgerMenu
function Layout(props) {
    const [showSideDrawer, setShowSideDrawer] = useState(false);

    return (
        <>
            <Backdrop show={showSideDrawer} setShow={setShowSideDrawer} />
            <SideDrawer show={showSideDrawer} setShow={setShowSideDrawer} />
            <Toolbar hamMenuClicked={setShowSideDrawer} />
            <Footbar />
            <main className={classes.main}>
                {props.children}
            </main>
        </>
    )
}

export default Layout
