import React from 'react'
import NavigationItems from 'components/Navigation/NavigationsItems/NavigationItems'
import NavigationItem from 'components/Navigation/NavigationsItems/NavigationItem/NavigationItem'

// waiting for toolbar, hamburgerMenu
function Layout(props) {
    return (
        <>
            <NavigationItems>
                <NavigationItem to="/" exact>Home</NavigationItem>
                <NavigationItem to="/news">News</NavigationItem>
            </NavigationItems>
            {props.children}
        </>
    )
}

export default Layout
