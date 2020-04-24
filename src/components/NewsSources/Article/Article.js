import React, { useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'

import classes from './Article.module.scss'
   
function Article({title, url, description}) {
    const [show, setShow] = useState(false);
    return (
        <article className={classes.container}>
            <a href={url} className={classes.Headline}>{title}</a>
            <button className={classes.DropDownButton} onClick={() => setShow((prevShow) => !prevShow)}>
                <FontAwesomeIcon icon={faArrowDown} />
            </button>
            {show ? <div className={classes.DropDownContent}>{description}</div> : null}
        </article>
    )
}

export default Article
