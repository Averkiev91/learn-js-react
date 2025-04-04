import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { getRestaurants } from './getRestaurants';
import { getRestaurantById } from './getRestaurantById';

const entityAdapter = createEntityAdapter();

export const restaurantsSlice = createSlice({
  name: 'restaurants',
  initialState: entityAdapter.getInitialState(),
  reducers: {},
  selectors: {
    selectRestaurantsEntities: (state) => state.entities,
    selectRestaurantById: (state, id) => state.entities[id],
    selectRestaurantsIds: (state) => state.ids,
    selectRestaurantMenu: (state, id) => state.entities[id].menu,
    selectRestaurantReviews: (state, id) => state.entities[id].reviews,
  },
  extraReducers: (builder) =>
    builder
      .addCase(getRestaurants.fulfilled, (state, { payload }) => {
        entityAdapter.setMany(state, payload);
      })
      .addCase(getRestaurantById.fulfilled, (state, { payload }) => {
        entityAdapter.setOne(state, payload);
      }),
});

export const {
  selectRestaurants,
  selectRestaurantsIds,
  selectRestaurantById,
  selectRestaurantMenu,
  selectRestaurantReviews,
} = restaurantsSlice.selectors;

export default restaurantsSlice.reducer;
