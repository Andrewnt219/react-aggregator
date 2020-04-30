import { useEffect } from 'react'
import { selectUserId } from 'features/authSlice';
import { getBookmarks, selectBookmarks } from 'features/bookmarkSlice';
import { useDispatch, useSelector } from 'react-redux';

function useBookmarks() {
    const userId = useSelector(selectUserId);
    const dispatch = useDispatch();
    const bookmarks = useSelector(selectBookmarks);

    useEffect(() => {
        userId && dispatch(getBookmarks({ userId }));
    }, [dispatch, userId]);

    return bookmarks;
}

export default useBookmarks
