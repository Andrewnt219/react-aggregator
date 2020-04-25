import React from 'react'
import classes from './NavigationItems.module.scss'

function NavigationItems({ children }) {
  return (
    <ul className={classes.NavigationItems}>
      {children}
    </ul>
  )
}

export default NavigationItems
