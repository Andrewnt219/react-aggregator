import {createSlice} from '@reduxjs/toolkit'

import axios from 'axios'

const newsSlice = createSlice({
    name: 'news',
    initialState: {
        sources: {}
    },
    reducers: {
        // organize sources
        updateNews: (state, {type, payload}) => {
            state.sources[payload.articles[0].source.name] = [];
            payload.articles.map(article => state.sources[article.source.name].push(article));            
        }
        
    }
})

export const {updateNews} = newsSlice.actions;


// fetch articles from a given array of domain(s)
export const fetchSource = (payload) => async dispatch => {
    try {
        const fetchSourceApi = 'https://newsapi.org/v2/everything?domains=';
        const appendedApiQuery = '&apiKey=' + process.env.REACT_APP_NEWS_API;

        const res =  await axios.get(fetchSourceApi + payload.domain + appendedApiQuery);
        dispatch(updateNews({articles: res.data.articles}));
    } catch (error) {
        console.log(error);
    }
}

export const selectSources = state => state.news.sources

export default newsSlice.reducer