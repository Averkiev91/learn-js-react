import { createSlice } from '@reduxjs/toolkit';
import { normalizedReviews } from '../../../materials/normalized-mock';

const initialState = {
  ids: normalizedReviews.map(({ id }) => id),
  entities: normalizedReviews.reduce((acc, item) => {
    acc[item.id] = item;
    return acc;
  }, {}),
};

export const reviewsSlice = createSlice({
  name: 'reviews',
  initialState,
  reducers: {},
  selectors: {
    selectReviewById: (state, id) => state.entities[id],
  },
});

export const { selectReviewById } = reviewsSlice.selectors;
export default reviewsSlice.reducer;

export const selectReviewsEntities = (state) => state.reviews.entities;
