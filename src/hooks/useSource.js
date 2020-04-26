import {useEffect} from 'react'
import { selectSources, fetchSource, initSources } from 'features/newsSlice'
import { useSelector, useDispatch } from 'react-redux';


function useSource(urls) {
    const sources = useSelector(selectSources);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(initSources());
        urls.forEach(url => dispatch(fetchSource({url})));
    }, [dispatch, urls]);

    return sources;
}

export default useSource
