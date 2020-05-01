import { createSlice } from "@reduxjs/toolkit";
import axios from "../Axios";
import { objectToArrayObject, asyncDispatchWrapper } from "helpers/helpers";

/* Bad planning leaded to this slice */
const bookmarkSlice = createSlice({
    name: 'bookmark',
    initialState: {
        bookmarks: [],
        isLoading: false
    },
    reducers: {
        saveBookmark: (state, { payload }) => {
            state.bookmarks.push(payload.bookmark);
        },
        populateBookmarks: (state, { payload }) => {
            state.bookmarks = payload;
        },
        removeBookmark: (state, { payload }) => {
            const idx = state.bookmarks.findIndex(bookmark => bookmark.id === payload);
            state.bookmarks.splice(idx, 1);
        },
        setIsLoading: (state, {payload}) => {state.isLoading = payload.isLoading; }
    }
})

export const { saveBookmark, populateBookmarks, removeBookmark, setIsLoading } = bookmarkSlice.actions;
export const selectBookmarks = state => state.bookmarks.bookmarks;
export const selectIsLoading = state => state.bookmarks.isLoading;
export default bookmarkSlice.reducer;


export const createBookmark = payload => async dispatch => {
    const addBookmarkToDB = async function () {
        const res = await axios.post('/bookmarks.json', { ...payload });

        dispatch(saveBookmark({ bookmark: {...payload, id: res.data.name} }));
    }

    asyncDispatchWrapper(addBookmarkToDB, dispatch);
}

export const getBookmarks = payload => async dispatch => {
    const fetchBookmarksFromDB = async function () {
        dispatch(setIsLoading({isLoading: true}));
        const query = '?orderBy="userId"&equalTo="' + payload.userId + '"';
        const res = await axios.get('/bookmarks.json' + query);
        const bookmarks = objectToArrayObject(res.data);

        dispatch(populateBookmarks(bookmarks));
    }

    asyncDispatchWrapper(fetchBookmarksFromDB, dispatch, setIsLoading);
}

export const deleteBookmark = ({ id }) => async dispatch => {
    const deleteBookmarkFromDB = async function () {
        await axios.delete(`/bookmarks/${id}.json`);
        dispatch(removeBookmark(id));
    }

    asyncDispatchWrapper(deleteBookmarkFromDB, dispatch);
}

