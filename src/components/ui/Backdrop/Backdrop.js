import React from 'react'
import classes from './Backdrop.module.scss'

const Backdrop = ({ show, setShow }) => show
    ? <div
        onClick={() => setShow(false)}
        className={classes.Backdrop} />
    : null;

export default Backdrop
