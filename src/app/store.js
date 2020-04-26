import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import newsReducer from 'features/newsSlice'
import uiReducer from 'features/uiSlice'

export default configureStore({
  reducer: {
    counter: counterReducer,
    news: newsReducer,
    ui: uiReducer
  },
});
