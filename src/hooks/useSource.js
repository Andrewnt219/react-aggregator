import {useEffect} from 'react'
import { selectSources, fetchSources, initSource } from 'features/newsSlice'
import { useSelector, useDispatch } from 'react-redux';
import useBookmarks from './useBookmarks';



function useSource(urls) {
    const sources = useSelector(selectSources);
    const dispatch = useDispatch();
    const bookmarks = useBookmarks();

    useEffect(() => {
        urls.forEach(url => dispatch(fetchSources({url, bookmarks})));
        return () => dispatch(initSource());
    }, [dispatch, urls, bookmarks]);



    return sources;
}

export default useSource
