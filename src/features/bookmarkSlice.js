import { createSlice } from "@reduxjs/toolkit";
import axios from "../Axios";
import { objectToArrayObject, dispatchErrorWrapper } from "helpers/helpers";


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
    const addBookmarkToDB = async function() {
        await axios.post('/bookmarks.json', { ...payload });
        dispatch(saveBookmark({ bookmark: payload }));
    }

    dispatchErrorWrapper(addBookmarkToDB, dispatch);
}

export const getBookmarks = payload => async dispatch => {
    const fetchBookmarksFromDB = async function() {
        const query = '?orderBy="userId"&equalTo="' + payload.userId + '"';
        const res = await axios.get('/bookmarks.json' + query);
        const bookmarks = objectToArrayObject(res.data);
        dispatch(populateBookmarks(bookmarks));
    }

    dispatchErrorWrapper(fetchBookmarksFromDB.bind(payload, dispatch), dispatch);
}

