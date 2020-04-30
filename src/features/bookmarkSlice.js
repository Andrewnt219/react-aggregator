import { createSlice } from "@reduxjs/toolkit";
import axios from "../Axios";

const bookmarkSlice = createSlice({
    name: 'bookmark',
    initialState: {
        bookmarks: []
    },
    reducers: {
        saveBookmark: (state, { payload }) => {
            state.bookmarks.push(payload);
        }
    }
})

export const { saveBookmark } = bookmarkSlice.actions;
export default bookmarkSlice.reducer;


export const createBookmark = payload => async dispatch => {
    // const query = '?auth=' + token.id + '&orderBy="userId"&equalTo="' + token.userId + '"';
    // const url = 'https://react-aggregator.firebaseio.com?orderBy="userId"&equalTo="' + payload.userId + '"';


    try {
        const res = await axios.post('/bookmarks.json', { ...payload });
        dispatch(saveBookmark({bookmark: res.data}));
    } catch (error) {
        console.log(error);
        // dispatch(setError({ hasError: error.response.data.error.message }));
    }
}

export const getBookmarks = payload => async dispatch => {
    const query = '?orderBy="userId"&equalTo="' + payload.userId + '"';
    try {
        const res = await axios.get('/bookmarks.json' + query);
        console.log(res);
    } catch (error) {
        console.log(error);
    }
}