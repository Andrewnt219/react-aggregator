import React from 'react'
import classes from './Card.module.scss'

function Card({children, ...rest}) {

    return (
        <div
            className={classes.Card}
            style={{ ...rest }}
        >
            {children}
        </div>
    )
}

export default Card
