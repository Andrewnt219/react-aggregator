import { createSlice } from "@reduxjs/toolkit";
import axios from "../Axios";

const bookmarkSlice = createSlice({
    name: 'bookmark',
    initialState: {
        bookmarks: null
    },
    reducers: {
        setBookmarks: (state, { payload }) => {

        }
    }
})

export const { setBookmarks } = bookmarkSlice.actions;
export default bookmarkSlice.reducer;


export const createBookmark = payload => async dispatch => {
    // const query = '?auth=' + token.id + '&orderBy="userId"&equalTo="' + token.userId + '"';
    // const url = 'https://react-aggregator.firebaseio.com?orderBy="userId"&equalTo="' + payload.userId + '"';


    try {
        const res = await axios.post('/bookmarks.json', { ...payload });
    } catch (error) {
        console.log(error);
        // dispatch(setError({ hasError: error.response.data.error.message }));
    }

}