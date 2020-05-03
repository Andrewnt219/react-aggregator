import React from 'react'
import classes from './Backdrop.module.scss'

const Backdrop = ({ show, setShow, setNeedRefreshed }) => show
    ? <div
        onClick={() => {setNeedRefreshed && setNeedRefreshed(true); setShow(false)}}
        className={classes.Backdrop} />
    : null;

export default Backdrop
