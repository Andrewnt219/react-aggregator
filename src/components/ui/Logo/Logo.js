import React from 'react'
import classes from './Logo.module.scss'
import { Link } from 'react-router-dom'

function Logo({ src, width, height }) {
    return (
        <Link to="/" className={classes.container}>
            <img
                src={src}
                style={{
                    width: width ? width : '2.5rem',
                    height: height ? height : '2.5rem',
                }}
                className={classes.Logo} alt="Logo" />
            <h1>AGGREGATOR</h1>
        </Link>
    )
}

export default Logo
