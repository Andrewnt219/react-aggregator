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
        populateBookmarks: (state, { payload }) => {
            state.bookmarks = payload;
        },
        removeBookmark: (state, { payload }) => {
            const idx = state.bookmarks.findIndex(bookmark => bookmark.id === payload.id);
            state.bookmarks.splice(idx, 1);
        }
    }
})

export const { saveBookmark, populateBookmarks, removeBookmark } = bookmarkSlice.actions;
export const selectBookmarks = state => state.bookmarks.bookmarks;
export default bookmarkSlice.reducer;


export const createBookmark = payload => async dispatch => {
    const addBookmarkToDB = async function () {
        const res = await axios.post('/bookmarks.json', { ...payload });

        dispatch(saveBookmark({ bookmark: {...payload, id: res.data.name} }));
    }

    dispatchErrorWrapper(addBookmarkToDB, dispatch);
}

export const getBookmarks = payload => async dispatch => {
    const fetchBookmarksFromDB = async function () {
        const query = '?orderBy="userId"&equalTo="' + payload.userId + '"';
        const res = await axios.get('/bookmarks.json' + query);
        const bookmarks = objectToArrayObject(res.data);

        dispatch(populateBookmarks(bookmarks));
    }

    dispatchErrorWrapper(fetchBookmarksFromDB, dispatch);
}

export const deleteBookmark = ({ id }) => async dispatch => {
    const deleteBookmarkFromDB = async function () {
        await axios.delete(`/bookmarks/${id}.json`);
        dispatch(removeBookmark(id));
    }

    dispatchErrorWrapper(deleteBookmarkFromDB, dispatch);
}

