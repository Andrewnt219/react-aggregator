import React, { useEffect } from 'react'
import NewsCards from '../components/NewsCards/NewsCards'
import useSource from 'hooks/useSource'
import NewsSources from 'components/NewsSources/NewsSources';
import { useSelector, useDispatch } from 'react-redux';
import { selectSources, fetchSource, initSources } from 'features/newsSlice';

function Webdev() {
    const dispatch = useDispatch();

    // useSource(dispatch,
    //     'https://newsapi.org/v2/everything?domains=theverge.com',
    //     'https://newsapi.org/v2/everything?domains=medium.com',
    //     'https://newsapi.org/v2/everything?domains=smashingmagazine.com'
    // );

    useEffect(() => {
        document.title = 'Webdev'
    }, [])

    useEffect(() => {
        dispatch(initSources());
        dispatch(fetchSource({url: 'https://newsapi.org/v2/everything?domains=theverge.com'}));
        dispatch(fetchSource({url: 'https://newsapi.org/v2/everything?domains=medium.com'}));
        dispatch(fetchSource({url: 'https://newsapi.org/v2/everything?domains=smashingmagazine.com'}));
    }, [dispatch]);
    
    const sources = useSelector(selectSources)

    return (
        <NewsCards title="Webdev">
            <NewsSources sources={sources} />
        </NewsCards>
    )
}

export default Webdev
