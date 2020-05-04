import React from 'react'

import NewsSource from './NewsSource/NewsSource'
import classes from './NewsSources.module.scss'
function NewsSources({sources}) {
    return (
        <div className={classes.NewsSources}>
            {Object.entries(sources).map(([id, value]) => <NewsSource
                key={id}
                name={id}
                articles={value} />
            )}
        </div>
    )
}

export default NewsSources
