import React, { useEffect } from 'react'
import NewsCards from '../components/NewsCards/NewsCards'
import NewsSources from 'components/NewsSources/NewsSources';
import useSource from 'hooks/useSource'
import withErrorHander from 'hoc/withErrorHander';
import useTitle from 'hooks/useTitle';

const URLS = ['https://newsapi.org/v2/top-headlines?country=us'];
const TITLE = 'Trending'
function Trending() {
    const sources = useSource(URLS);
    useTitle(TITLE)


    return (
        <NewsCards title={TITLE}>
            <NewsSources sources={sources} />
        </NewsCards>
    )
}

export default withErrorHander(Trending)

