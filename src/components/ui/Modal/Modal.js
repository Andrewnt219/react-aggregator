import React from 'react'
import classes from './Modal.module.scss'
import {motion } from 'framer-motion'

function Modal({ children, clicked, show }) {

    return (
        show && <motion.div
            onClick={clicked}
            className={classes.Modal}
            initial={{ y: "-200vh", x: "-50%", opacity: 0 }}
            animate={{ y: "-50%", x: "-50%", opacity: 1 }}
            transition={{ duration: .4}}
        >
            {children}
            <p>(Click to dismiss)</p>
        </motion.div>
    );
}

export default Modal
