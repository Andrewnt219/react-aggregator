import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import classes from './Search.module.scss'
import { motion } from 'framer-motion'
function Search({  setShowSearch }) {
    const [value, setValue] = useState('');

    return (

        <motion.div
            animate={{ opacity: [0, 1], x: [500, 0] }}
            transition={{ duration: .2 }}
            className={classes.Search}>
            <FontAwesomeIcon style={{fontSize: '1.5rem'}} cursor="pointer" onClick={() => setShowSearch(false)} icon={faArrowLeft} color="white" />
            <input
                autoFocus
                type="text"
                placeholder="Search..."
                value={value}
                onChange={e => setValue(e.target.value)}
                className={classes.searchBar} />
        </motion.div>
    )
}

export default Search
