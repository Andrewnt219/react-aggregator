import { useEffect, useState } from 'react'
import { selectSources, fetchSources } from 'features/newsSlice'
import { useSelector, useDispatch } from 'react-redux';
import useBookmarks from './useBookmarks';



function useSource(url) {

    const sources = useSelector(selectSources);
    const dispatch = useDispatch();
    const [bookmarks, isLoading, setIsLoading] = useBookmarks();


    // prevent re-loading when setting bookmark
    useEffect(() => {
        setIsLoading(true);
    },[setIsLoading, url])

    useEffect(() => {
        dispatch(fetchSources({ url, bookmarks, setIsLoading }));
    }, [dispatch, url, bookmarks, setIsLoading]);



    return [sources, isLoading];
}

export default useSource
