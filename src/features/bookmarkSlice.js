import { createSlice } from "@reduxjs/toolkit";
import axios from "../Axios";
import { objectToArrayObject } from "helpers/helpers";
import { setError } from "./uiSlice";


const bookmarkSlice = createSlice({
    name: 'bookmark',
    initialState: {
        bookmarks: []
    },
    reducers: {
        saveBookmark: (state, { payload }) => {
            state.bookmarks.push(payload.bookmark);
        },
        populateBookmarks: (state, {payload}) => {
            state.bookmarks = payload;
        }
    }
})

export const { saveBookmark, populateBookmarks } = bookmarkSlice.actions;
export const selectBookmarks = state => state.bookmarks.bookmarks;
export default bookmarkSlice.reducer;


export const createBookmark = payload => async dispatch => {
    try {
        await axios.post('/bookmarks.json', { ...payload });
        dispatch(saveBookmark({bookmark: payload}));
    } catch (error) {
        console.log(error);
        dispatch(setError({ hasError: error.message }));
    }
}


export const getBookmarks = payload => async dispatch => {
    const query = '?orderBy="userId"&equalTo="' + payload.userId + '"';
    try {
        const res = await axios.get('/bookmarks.json' + query);
        const bookmarks = objectToArrayObject(res.data);
        dispatch(populateBookmarks(bookmarks));
    } catch (error) {
        console.log(error);
    }
}