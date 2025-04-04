import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';

const entityAdapter = createEntityAdapter();

export const reviewsSlice = createSlice({
  name: 'reviews',
  initialState: entityAdapter.getInitialState(),
  reducers: {},
  selectors: {
    selectReviewById: (state, id) => state.entities[id],
    selectReviewsIds: (state) => state.ids,
    selectReviewsEntities: (state) => state.entities,
  },
});

export const { selectReviewById, selectReviewsEntities, selectReviewsIds } = reviewsSlice.selectors;

export default reviewsSlice.reducer;
