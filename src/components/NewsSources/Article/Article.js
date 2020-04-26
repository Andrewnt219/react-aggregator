import React, { useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown, faCaretUp, faBookmark } from '@fortawesome/free-solid-svg-icons'
import { AnimatePresence, motion } from 'framer-motion'
import classes from './Article.module.scss'

function Article({ title, url, description }) {
    const [show, setShow] = useState(false);
    const [bookmark, setBookmark] = useState(false);

    return (
        <article className={classes.container} onMouseLeave={() => setShow(false)} >
            <a href={url} className={classes.Headline}>{title}</a>

            <button
                className={classes.DropDownButton}
                onClick={() => setBookmark((prevBookmark) => !prevBookmark)} 
            >
                <FontAwesomeIcon icon={faBookmark} color={bookmark && '#e71d36'} />
            </button>

            <button
                className={classes.DropDownButton}
                onClick={() => setShow((prevShow) => !prevShow)} >
                {show ? <FontAwesomeIcon icon={faCaretUp} /> : <FontAwesomeIcon icon={faCaretDown} />}
            </button>
            
            <AnimatePresence>
                {show && <motion.div
                    animate={{
                        opacity: [0, 1],
                        y: [-5, 0]
                    }}
                    exit={{ opacity: 0, y: -5 }}
                    transition={{ duration: .4 }}
                    className={classes.DropDownContent}>
                    {description}
                </motion.div>}
            </AnimatePresence>
        </article>
    )
}

export default Article
