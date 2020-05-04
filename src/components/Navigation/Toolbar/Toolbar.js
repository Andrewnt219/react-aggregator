import React from 'react'
import classes from './Toolbar.module.scss'
import { Link } from 'react-router-dom'

function Toolbar() {
    return (
        <header className={classes.Toolbar}>
            <Link to="/"><h1>AGGREGATOR</h1></Link>
        </header>
    );
}

export default Toolbar
