import React from 'react'
import Modal from '../Modal/Modal'
import Backdrop from '../Backdrop/Backdrop'
import classes from './Popup.module.scss'

import { motion, AnimatePresence } from 'framer-motion'
import Button from '../Button/Button'

function Popup({ children, show, setShow }) {
    return (
        <>
            <AnimatePresence>
                {show && <motion.div
                    className={classes.Modal}
                    initial={{ y: "-200vh", x: "-50%", opacity: 0 }}
                    animate={{ y: "-50%", x: "-50%", opacity: 1 }}
                    exit={{ y: "20px", x: "-50%", opacity: 0 }}
                    transition={{ duration: .4 }}
                >
                    <Button onClick={() => setShow(false)}>GO BACK</Button>
                    {children}
                </motion.div>}
            </AnimatePresence>

            <Backdrop setShow={setShow} show={show} />
        </>
    )
}

export default Popup
