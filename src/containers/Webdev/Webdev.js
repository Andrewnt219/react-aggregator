import React from 'react'
import NewsCards from '../../components/NewsCards/NewsCards'
import useSource from 'hooks/useSource'
import useTitle from 'hooks/useTitle'
import NewsSources from 'components/NewsSources/NewsSources';
import withErrorHandler from 'hoc/withErrorHandler'
import { selectLoading } from 'features/newsSlice';
import { useSelector } from 'react-redux';
import Spinner from 'components/ui/Spinner/Spinner';

const URLS = [
    'https://newsapi.org/v2/everything?domains=theverge.com',
    'https://newsapi.org/v2/everything?domains=medium.com',
    'https://newsapi.org/v2/everything?domains=smashingmagazine.com',
    'https://newsapi.org/v2/everything?domains=css-tricks.com',
    
]
const TITLE = 'Web Development';

function Webdev() {
    const loading = useSelector(selectLoading);
    // random token to separate links (in order to by pass limited tier of API)
    const sources = useSource(URLS.join('>>'))
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
