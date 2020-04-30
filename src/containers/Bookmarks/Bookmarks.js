import React from 'react'
import NewsSource from 'components/NewsSources/NewsSource/NewsSource';
import useBookmarks from 'hooks/useBookmarks';

function Bookmarks() {
    const bookmarks = useBookmarks();

    return <NewsSource name="Bookmarks" articles={bookmarks} />
}

export default Bookmarks
