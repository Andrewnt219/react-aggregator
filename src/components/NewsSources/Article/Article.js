import React, { useState, useCallback } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown, faCaretUp, faBookmark } from '@fortawesome/free-solid-svg-icons'
import { AnimatePresence, motion } from 'framer-motion'
import classes from './Article.module.scss'
import { selectUser } from 'features/authSlice'
import { useDispatch, useSelector } from 'react-redux'
import { createBookmark, deleteBookmark } from 'features/bookmarkSlice'

function Article({ id, title, url, description, source, isBookmarked }) {
    const [show, setShow] = useState(false);
    const {localId} = useSelector(selectUser);
    const dispatch = useDispatch();

    const toggleBookmark = useCallback(() => {
        if (!isBookmarked) {
            dispatch(createBookmark({
                title,
                url,
                description,
                userId: localId,
                isBookmarked: !isBookmarked,
                source
            }));
        } else {
            dispatch(deleteBookmark({ id }));
        }

    }, [title, url, description, localId, isBookmarked, dispatch, source, id])

    return (
        <article className={classes.container} onMouseLeave={() => setShow(false)} >
            <a href={url} className={classes.Headline}>{title}</a>

            <button
                className={classes.DropDownButton}
                onClick={toggleBookmark}
            >
                <FontAwesomeIcon icon={faBookmark} color={isBookmarked ? '#e71d36' : 'initial'} />
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
