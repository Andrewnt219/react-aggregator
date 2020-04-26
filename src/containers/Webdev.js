import React, { useEffect } from 'react'
import NewsCards from '../components/NewsCards/NewsCards'
import useSource from 'hooks/useSource'
import useTitle from 'hooks/useTitle'
import NewsSources from 'components/NewsSources/NewsSources';
import withErrorHandler from 'hoc/withErrorHander'

const URLS = [
    'https://newsapi.org/v2/everything?domains=theverge.com',
    'https://newsapi.org/v2/everything?domains=medium.com',
    'https://newsapi.org/v2/everything?domains=smashingmagazine.com'
]
const TITLE = 'Web Development';

function Webdev() {
    const sources = useSource(URLS)
    useTitle(TITLE);

    return (
        <NewsCards title={TITLE}>
            <NewsSources sources={sources} />
        </NewsCards>
    )
}

export default withErrorHandler(Webdev) 
