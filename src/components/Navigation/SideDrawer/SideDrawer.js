import React from 'react'
import classes from './SideDrawer.module.scss'
import NavigationItems from '../NavigationsItems/NavigationItems'
import background from 'assets/sideDrawer_backdrop.jpg'
import Logo from 'components/ui/Logo/Logo'
import Background from 'components/ui/Background/Background'
import NavigationItem from '../NavigationsItems/NavigationItem/NavigationItem'
import { motion, AnimatePresence } from 'framer-motion'

function SideDrawer({ show, setShow }) {
    const active = classes.active;
    return (
        <AnimatePresence>
            {show && (
                <motion.div
                    initial={{ x: -100 }}
                    animate={{ x: 0 }}
                    transition={{ duration: .3 }}
                    exit={{ x: -250 }}
                    className={classes.SideDrawer}
                    onClick={() => setShow(false)}>
                    <Background src={background} />
                    <Logo showTitle width="15%" height="auto" />
                    <NavigationItems>
                        <NavigationItem active={active}  to="/" exact>Trending</NavigationItem>
                        <NavigationItem active={active}  to="/web-dev">Web development</NavigationItem>
                    </NavigationItems>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

export default SideDrawer
