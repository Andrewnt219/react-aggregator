import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getBookmarks, selectBookmarks } from 'features/bookmarkSlice';
import { selectUserId } from 'features/authSlice';
import NewsSource from 'components/NewsSources/NewsSource/NewsSource';

function Bookmarks() {
    const dispatch = useDispatch();
    const userId = useSelector(selectUserId);
    const bookmarks = useSelector(selectBookmarks);

    useEffect(() => {
        dispatch(getBookmarks({ userId }));
    }, [dispatch, userId])
    return <NewsSource name="Bookmarks" articles={bookmarks} />
}

export default Bookmarks
