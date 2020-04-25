import React from 'react'

function NewsCards(props) {
    return (
        <div className="NewsCards">
            <h1 style={{
                border: '1px solid',
                padding: '.5rem 3rem',
                color: '#e71d36',
                width: 'max-content',
                margin: '0 auto 1rem auto'
            }}>{props.title}</h1>
            {props.children}
        </div>
    )
}

export default NewsCards
