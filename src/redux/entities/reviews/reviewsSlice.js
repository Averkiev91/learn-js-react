import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';
import { getRestaurantReviews } from './getRestaurantReviews';

const entityAdapter = createEntityAdapter();

export const reviewsSlice = createSlice({
  name: 'reviews',
  initialState: entityAdapter.getInitialState(),
  reducers: {},
  selectors: {
    selectReviewsIds: (state) => state.ids,
    selectReviewById: (state, id) => state.entities[id],
    selectAllReviews: (state) => state.entities,
  },
  extraReducers: (builder) => {
    builder.addCase(getRestaurantReviews.fulfilled, (state, { payload }) => {
      entityAdapter.upsertMany(state, payload);
    });
  },
});

export const { selectReviewsIds, selectReviewById, selectAllReviews } = reviewsSlice.selectors;

export default reviewsSlice.reducer;
