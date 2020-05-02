import { createSlice } from '@reduxjs/toolkit'
import axios from '../Axios'
import { asyncDispatchWrapper } from 'helpers/helpers';

const newsSlice = createSlice({
    name: 'news',
    initialState: {
        sources: {},
        isLoading: false
    },

    reducers: {
        setIsLoading: (state, {payload}) => {state.isLoading = payload.isLoading},
        // organize sources
        populateSources: (state, { payload }) => {
            state.sources = {};

            // Categorize articles by their source
            payload.articles.forEach((article) => {
                // check if this article is bookmarked, undefined if not found
                const found = payload.bookmarks.find(bookmark => {
                    return bookmark.url === article.url;
                });

                const newArticle = {
                    ...article,
                    // Eval found bookmark to boolean
                    isBookmarked: Boolean(found),
                    id: found?.id
                }

                // Init sources' property to an array if have not yet
                if (!state.sources[article.source.name]) state.sources[article.source.name] = [];
                // Push article to their matched source
                state.sources[article.source.name].push(newArticle);
            });
        }
    }
})

export const { populateSources, setIsLoading } = newsSlice.actions;


// fetch articles from a given array of domain(s)
export const fetchSources = ({ bookmarks, url }) => async dispatch => {
    const fetchDataFromAPI = async function () {
        const appendedApiQuery = '&apiKey=' + process.env.REACT_APP_NEWS_API;
        let res, articles = [];

        if(url.includes('>>')) {
            const urls = url.split('>>');
            for (const u of urls) {
                res  = await axios.get(u + appendedApiQuery);
                articles.push(...res.data.articles);
            }
        } else {
            res = await axios.get(url + appendedApiQuery)
            articles = res.data.articles;
        }
        
        dispatch(populateSources({ articles, bookmarks }));
    }

    asyncDispatchWrapper(fetchDataFromAPI, dispatch, setIsLoading);
}


export const selectSources = state => state.news.sources;
export const selectLoading = state => state.news.isLoading;

export default newsSlice.reducer