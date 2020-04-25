import React from 'react'
import classes from './Logo.module.scss'
import { Link } from 'react-router-dom'
import logo from 'assets/logo.png'

function Logo({ showTitle, width, height }) {
    return (
        <Link to="/" className={classes.container}>
            <img
                src={logo}
                style={{
                    width: width ? width : '2.5rem',
                    height: height ? height : '2.5rem',
                }}
                className={classes.Logo} alt="Logo" />
            {showTitle && <h1>AGGREGATOR</h1>}
        </Link>
    )
}

export default Logo
