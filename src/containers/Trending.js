import React, { useEffect } from 'react'
import NewsCards from '../components/NewsCards/NewsCards'
import NewsSources from 'components/NewsSources/NewsSources';
import useSource from 'hooks/useSource'
import { selectSources, fetchSource, initSources } from 'features/newsSlice'
import { useSelector, useDispatch } from 'react-redux';

function Trending() {
    // useSource('https://newsapi.org/v2/top-headlines?country=us');
    const sources = useSelector(selectSources);
    const dispatch = useDispatch();

    useEffect(() => {
        document.title = 'Trending News'
    }, [])

    useEffect(() => {
        dispatch(initSources());
        dispatch(fetchSource({url: 'https://newsapi.org/v2/top-headlines?country=us'}));
    }, [dispatch]);

    return (
        <NewsCards title="Trending">
            <NewsSources sources={sources} />
        </NewsCards>
    )
}

export default Trending

