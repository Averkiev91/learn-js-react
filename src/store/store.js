import { configureStore } from '@reduxjs/toolkit';
import restaurantsReducer from './slices/restaurantsSlice';

export const store = configureStore({
  reducer: {
    restaurants: restaurantsReducer,
  },
});
