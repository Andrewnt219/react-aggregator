import React, { useState, useEffect } from 'react'
import NewsCards from '../components/NewsCards/NewsCards'
import { fetchSource, selectSources } from 'features/newsSlice'
import { useDispatch, useSelector } from 'react-redux';
import NewsSources from 'components/NewsSources/NewsSources';

function Trending() {
    // const sources = useSelector(selectSources);
    const dispatch = useDispatch();

    useEffect(() => {
        document.title = 'Trending News'
    }, [])

    // useEffect(() => {
    //     /* the limitation of free-tier forces me to call 3 times */
    //     dispatch(fetchSource({ domain: 'theverge.com' }));
    //     dispatch(fetchSource({ domain: 'medium.com' }));
    //     dispatch(fetchSource({ domain: 'smashingmagazine.com' }));
    // }, [dispatch]);

    return (
        <NewsCards title="Trending">
            <NewsSources />
        </NewsCards>
    )
}

export default Trending

