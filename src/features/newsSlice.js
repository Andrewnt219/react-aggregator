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
            payload.articles.forEach((article) => {
                const newArticle = {
                    ...article,
                    isBookmarked: false
                }
                if (!state.sources[article.source.name]) state.sources[article.source.name] = [];
                state.sources[article.source.name].push(newArticle);
            });
            state.loading = false;
        },
        initSources: state => {
            state.loading = true;
            state.sources = {};
        },
        setArticleBookmark: (state, { payload }) => {
            const { url, sourceName, isBookmarked } = payload;
            // Find the index of the article
            const articleIdx = state.sources[sourceName].findIndex(article => {
                return article.url === url
            });
            // change isBookmarked of found article to true
            state.sources[sourceName][articleIdx].isBookmarked = isBookmarked;
        },
        initLogin: state => {
            // Try to merge fetched bookmarks to current state
        }
    }
})

export const { populateSources, initSources, setArticleBookmark } = newsSlice.actions;


// fetch articles from a given array of domain(s)
export const fetchSource = (payload) => async dispatch => {
    try {
        const appendedApiQuery = '&apiKey=' + process.env.REACT_APP_NEWS_API;
        const res = await axios.get(payload.url + appendedApiQuery);
        dispatch(populateSources({ articles: res.data.articles }));
    } catch (error) {
        dispatch(setError({ hasError: error.message }));
    }
}


export const selectSources = state => state.news.sources;
export const selectLoading = state => state.news.loading;

export default newsSlice.reducer