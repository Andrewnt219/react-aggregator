import React, { useState, useCallback } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown, faCaretUp, faBookmark } from '@fortawesome/free-solid-svg-icons'
import { AnimatePresence, motion } from 'framer-motion'
import classes from './Article.module.scss'
import { selectUserId } from 'features/authSlice'
import { useDispatch, useSelector } from 'react-redux'
import { createBookmark } from 'features/bookmarkSlice'
import { updateBookmarkedAritcleInSources } from 'features/newsSlice'

function Article({ title, url, description, source, isBookmarked }) {
    const [show, setShow] = useState(false);
    const userId = useSelector(selectUserId);
    const dispatch = useDispatch();

    const toggleBookmark = useCallback(() => {
        dispatch(createBookmark({
            title,
            url,
            description,
            userId,
            isBookmarked: !isBookmarked,
            source
        }));
    }, [title, url, description, userId, isBookmarked, dispatch, source ])

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
