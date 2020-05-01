import React from 'react'
import NewsSource from 'components/NewsSources/NewsSource/NewsSource';
import useBookmarks from 'hooks/useBookmarks';
import Spinner from 'components/ui/Spinner/Spinner';

function Bookmarks() {
    const [bookmarks, isLoading] = useBookmarks();

    let render = <Spinner />;

    if (!isLoading) {
        render = bookmarks.length === 0
            ? <p>You have 0 bookmark</p>
            : <NewsSource name="Bookmarks" articles={bookmarks} />
    }

    return render;
}

export default Bookmarks
