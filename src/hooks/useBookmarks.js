import { useEffect, useState } from 'react'
import { selectUserId } from 'features/authSlice';
import { getBookmarks, selectBookmarks } from 'features/bookmarkSlice';
import { useDispatch, useSelector } from 'react-redux';

function useBookmarks() {
    const userId = useSelector(selectUserId);
    const dispatch = useDispatch();
    const bookmarks = useSelector(selectBookmarks);

    const [isLoading, setIsLoading] = useState(false);
    
    useEffect(() => {
        userId && dispatch(getBookmarks({ userId, setIsLoading }));
    }, [dispatch, userId]);

    return [bookmarks, isLoading, setIsLoading];
}

export default useBookmarks
