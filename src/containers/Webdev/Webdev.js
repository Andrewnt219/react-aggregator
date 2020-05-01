import React from 'react'
import NewsCards from '../../components/NewsCards/NewsCards'
import useSource from 'hooks/useSource'
import useTitle from 'hooks/useTitle'
import NewsSources from 'components/NewsSources/NewsSources';
import withErrorHandler from 'hoc/withErrorHandler'
import Spinner from 'components/ui/Spinner/Spinner';

const URLS = [
    'https://newsapi.org/v2/everything?domains=theverge.com',
    'https://newsapi.org/v2/everything?domains=medium.com',
    'https://newsapi.org/v2/everything?domains=smashingmagazine.com'
]
const TITLE = 'Web Development';

function Webdev() {
    // random token separating urls, to by pass free tier newsapi
    const [sources, loading] = useSource(URLS.join('>>'))
    useTitle(TITLE);

    return (
        loading 
        ? <Spinner />
        :
        <NewsCards title={TITLE}>
            <NewsSources sources={sources} />
        </NewsCards>
    )
}

export default withErrorHandler(Webdev) 
