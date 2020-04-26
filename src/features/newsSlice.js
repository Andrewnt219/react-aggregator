import {createSlice} from '@reduxjs/toolkit'
import {setError} from 'features/uiSlice'

import axios from 'axios'

const newsSlice = createSlice({
    name: 'news',
    initialState: {
        sources: {},
    },

    reducers: {
        // organize sources
        updateNews: (state, {type, payload}) => {
            payload.articles.forEach((article) => {
                if(!state.sources[article.source.name]) state.sources[article.source.name] = [];
                state.sources[article.source.name].push(article);
            });            
        },
        initSources: state => {state.sources = {}}
        
    }
})

export const {updateNews, initSources} = newsSlice.actions;


// fetch articles from a given array of domain(s)
export const fetchSource = (payload) => async dispatch => {
    try {
        const appendedApiQuery = '&apiKey=' + process.env.REACT_APP_NEWS_API;
        const res =  await axios.get(payload.url + appendedApiQuery);
        dispatch(updateNews({articles: res.data.articles}));
    } catch (error) {
        dispatch(setError({hasError: error.message}));
    }
}


export const selectSources = state => state.news.sources;

export default newsSlice.reducer