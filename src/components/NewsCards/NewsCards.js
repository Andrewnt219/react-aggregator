import React from 'react'

function NewsCards(props) {
    return (
        <div className="NewsCards">
            <h1>{props.title}</h1>
            {props.children}
        </div>
    )
}

export default NewsCards
