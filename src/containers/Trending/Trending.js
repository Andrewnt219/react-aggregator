import React from 'react'
import NewsCards from '../../components/NewsCards/NewsCards'
import NewsSources from 'components/NewsSources/NewsSources';
import useSource from 'hooks/useSource'
import withErrorHandler from 'hoc/withErrorHandler';
import useTitle from 'hooks/useTitle';
import Spinner from 'components/ui/Spinner/Spinner';
import { useSelector } from 'react-redux';
import { selectLoading } from 'features/newsSlice';

const URLS = ['https://newsapi.org/v2/top-headlines?country=us'];
const TITLE = 'Trending'
function Trending() {
    const loading = useSelector(selectLoading);
    const sources = useSource(URLS);
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

export default withErrorHandler(Trending)

