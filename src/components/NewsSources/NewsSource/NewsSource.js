import React from 'react'
import Article from '../Article/Article'
import classes from './NewsSource.module.scss'

function NewsSource({name, articles}) {
    return (
        <article className={classes.container}>
            <h1>{name}</h1>
            {articles.map((article) => <Article key={article.title} {...article} />)}
        </article>
    )
}

export default NewsSource
