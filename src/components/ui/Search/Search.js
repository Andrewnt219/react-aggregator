import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import classes from './Search.module.scss'
function Search({ showSearch, setShowSearch }) {
    const [value, setValue] = useState('');

    return (
        <div className={classes.Search}>
            <FontAwesomeIcon onClick={() => setShowSearch(false)} icon={faArrowLeft} color="white" />
            <input
                autoFocus
                type="text"
                placeholder="Search..."
                value={value}
                onChange={e => setValue(e.target.value)}
                className={classes.searchBar} />
        </div>
    )
}

export default Search
