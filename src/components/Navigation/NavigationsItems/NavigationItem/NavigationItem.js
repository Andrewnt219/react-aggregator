import React from 'react';

import { NavLink } from 'react-router-dom';
import classes from './NavigationItem.module.scss'

function NavigationItem(props) {
    const { to, children, ...passing } = props;
    return (
        <NavLink
            className={classes.NavLink}
            activeStyle={{ fontWeight: 'bold' }}
            to={to}
            {...passing}
        >
            {children}
        </NavLink>
    )
}

export default NavigationItem;
