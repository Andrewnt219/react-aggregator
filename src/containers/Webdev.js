import React, { useState, useEffect } from 'react'
import NewsCards from '../components/NewsCards/NewsCards'

function Webdev() {
    useEffect(() => {
        document.title='Webdev'
    }, [])

    return (
            <NewsCards title="Webdev">
                <p>First web news</p>
                <p>Second web news</p>
            </NewsCards>
    )
}

export default Webdev
