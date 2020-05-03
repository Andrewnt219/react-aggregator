import React from 'react'
import classes from './DropDown.module.scss'
import { motion, AnimatePresence } from 'framer-motion'
function DropDown(props) {
    return (
        <AnimatePresence>
            {props.show && <motion.div
                className={classes.DropDown}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: .3 }}
                exit={{ opacity: 0 }}
            >
                {props.children}
            </motion.div>}
        </AnimatePresence>
    )
}

export default DropDown
