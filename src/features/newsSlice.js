import { createSlice } from '@reduxjs/toolkit'
import axios from '../Axios'
import { dispatchErrorWrapper } from 'helpers/helpers';

const newsSlice = createSlice({
    name: 'news',
    initialState: {
        sources: {},
        loading: true
    },

    reducers: {
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
                    id: found && found.id
                }
                console.log(newArticle);

                // Init sources' property to an array if have not yet
                if (!state.sources[article.source.name]) state.sources[article.source.name] = [];
                // Push article to their matched source
                state.sources[article.source.name].push(newArticle);
            });

            state.loading = false;
        }
    }
})

export const {  populateSources } = newsSlice.actions;


// fetch articles from a given array of domain(s)
export const fetchSources = ({bookmarks, url}) => async dispatch => {
    const fetchDataFromAPI = async function() {
        const appendedApiQuery = '&apiKey=' + process.env.REACT_APP_NEWS_API;
        const res = await axios.get(url + appendedApiQuery);

        dispatch(populateSources({ articles: res.data.articles, bookmarks }));
    }

    dispatchErrorWrapper(fetchDataFromAPI, dispatch);
}


export const selectSources = state => state.news.sources;
export const selectLoading = state => state.news.loading;

export default newsSlice.reducer