import React from 'react'
import classes from './Button.module.scss'

function Button({children, ...htmlAttrs}) {
    return (
        <button 

        className={classes.Button} {...htmlAttrs}>
            {children}
        </button>
    )
}

export default Button
