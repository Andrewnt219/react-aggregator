import React from 'react'
import classes from './Button.module.scss'

function Button({ children, clicked, ...htmlAttrs }) {
    return (
        <button
            className={classes.Button}
            onClick={clicked}
            {...htmlAttrs}>
            {children}
        </button>
    )
}

export default Button
