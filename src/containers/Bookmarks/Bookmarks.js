import React from 'react'
import NewsSource from 'components/NewsSources/NewsSource/NewsSource';
import useBookmarks from 'hooks/useBookmarks';
import { selectIsLoading } from 'features/bookmarkSlice';
import Spinner from 'components/ui/Spinner/Spinner';
import { useSelector } from 'react-redux';
import useTitle from 'hooks/useTitle';

function Bookmarks() {
    const bookmarks = useBookmarks();
    const isLoading = useSelector(selectIsLoading);

    let render = <Spinner />;

    useTitle('Bookmarks');

    if (!isLoading) {
        render = bookmarks.length === 0
            ? <h3 style={{textAlign: 'center'}}>You have 0 bookmark</h3>
            : <NewsSource name="Bookmarks" articles={bookmarks} />
    }

    return render;
}

export default Bookmarks
