import { createSlice } from '@reduxjs/toolkit'
import { setError } from 'features/uiSlice'


import axios from '../Axios'

const newsSlice = createSlice({
    name: 'news',
    initialState: {
        sources: {},
        loading: true
    },

    reducers: {
        // organize sources
        populateSources: (state, { payload }) => {
            // initSources here to guarantee they always go together
            state.sources = {};

            // Categorize articles by their source
            payload.articles.forEach((article) => {
                // check if this article is bookmarked, undefined if not found
                const found = payload.bookmarks.find(bookmark => {
                    console.log(bookmark.url, article.url, bookmark.url === article.url )
                    return bookmark.url === article.url;
                });
                const newArticle = {
                    ...article,
                    // Eval found bookmark to boolean
                    isBookmarked: Boolean(found)
                }

                found && console.log(newArticle);

                // Init sources' property to an array if have not yet
                if (!state.sources[article.source.name]) state.sources[article.source.name] = [];
                // Push article to their matched source
                state.sources[article.source.name].push(newArticle);
            });

            state.loading = false;
        },
        updateBookmarkedAritcleInSources: (state, { payload }) => {
            const { url, sourceName, isBookmarked } = payload;
            // Find the index of the article
            const articleIdx = state.sources[sourceName].findIndex(article => {
                return article.url === url
            });
            // change isBookmarked of found article to true
            state.sources[sourceName][articleIdx].isBookmarked = isBookmarked;
        }
    }
})

export const { populateSources, updateBookmarkedAritcleInSources } = newsSlice.actions;


// fetch articles from a given array of domain(s)
export const fetchSources = ({bookmarks, url}) => async dispatch => {
    try {
        const appendedApiQuery = '&apiKey=' + process.env.REACT_APP_NEWS_API;
        const res = await axios.get(url + appendedApiQuery);

        dispatch(populateSources({ articles: res.data.articles, bookmarks }));
    } catch (error) {
        dispatch(setError({ hasError: error.message }));
    }
}


export const selectSources = state => state.news.sources;
export const selectLoading = state => state.news.loading;

export default newsSlice.reducer