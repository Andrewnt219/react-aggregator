import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import newsReducer from 'features/newsSlice'
import uiReducer from 'features/uiSlice'
import authReducer from 'features/authSlice'
import bookmarkReducer from 'features/bookmarkSlice'
import contactUsReducer from 'features/contactUsSlice'

export default configureStore({
  reducer: {
    counter: counterReducer,
    news: newsReducer,
    ui: uiReducer,
    auth: authReducer,
    bookmarks: bookmarkReducer,
    contactUs: contactUsReducer
  },
});
