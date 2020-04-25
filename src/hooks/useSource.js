import {useEffect} from 'react'
import { fetchSource } from 'features/newsSlice'
import { useDispatch } from 'react-redux';

function useSource(dispatch, ...urls) {

    useEffect(() => {
        urls.forEach(url => dispatch(fetchSource({url})) );
    }, [urls, dispatch]);
}

export default useSource
