import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import newsReducer from 'features/newsSlice'
import uiReducer from 'features/uiSlice'
import authReducer from 'features/authSlice'

export default configureStore({
  reducer: {
    counter: counterReducer,
    news: newsReducer,
    ui: uiReducer,
    auth: authReducer
  },
});
