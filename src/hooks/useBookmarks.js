import { useEffect } from 'react'
import { selectUser } from 'features/authSlice';
import { getBookmarks, selectBookmarks } from 'features/bookmarkSlice';
import { useDispatch, useSelector } from 'react-redux';

function useBookmarks() {
    const {localId} = useSelector(selectUser);
    const dispatch = useDispatch();
    const bookmarks = useSelector(selectBookmarks);

    useEffect(() => {    
        localId && dispatch(getBookmarks({ userId: localId }));
    }, [dispatch, localId]);

    return bookmarks;
}

export default useBookmarks
