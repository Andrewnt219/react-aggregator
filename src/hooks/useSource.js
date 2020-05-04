import {useEffect} from 'react'
import { selectSources, fetchSources, setIsLoading } from 'features/newsSlice'
import { useSelector, useDispatch } from 'react-redux';
import useBookmarks from './useBookmarks';



function useSource(url) {
    const sources = useSelector(selectSources);
    const dispatch = useDispatch();
    const bookmarks = useBookmarks();

    useEffect(() => {
        dispatch(setIsLoading({isLoading: true}));
    }, [dispatch, url]);

    useEffect(() => {
        dispatch(fetchSources({url, bookmarks}));
    }, [dispatch, url, bookmarks]);



    return sources;
}

export default useSource
