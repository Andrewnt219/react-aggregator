import React from 'react';

import { NavLink } from 'react-router-dom';
import classes from './NavigationItem.module.scss'

function NavigationItem(props) {
    const { to, children, active, ...passing } = props;

    return (
        <li className={classes.NavigationItem}>
            {props.src && <img src={props.src} className={classes.icon} alt="icon" />}
            <NavLink style={{color: props.color}}
                className={classes.NavLink}
                to={to}
                activeClassName={active}
                {...passing}
            >
                {children}
            </NavLink>
        </li>
    )
}

export default NavigationItem;
