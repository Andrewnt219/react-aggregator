import React from 'react';

import { NavLink } from 'react-router-dom';
import classes from './NavigationItem.module.scss'

function NavigationItem(props) {
    const { to, children, ...passing } = props;
    return (
        <li className={classes.NavigationItem}>
            {props.src && <img src={props.src} className={classes.icon} alt="icon" />}
            <NavLink
                className={classes.NavLink}
                to={to}
                activeClassName={classes.active}
                {...passing}
            >
                {children}
            </NavLink>
        </li>
    )
}

export default NavigationItem;
