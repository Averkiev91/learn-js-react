import { createSlice, createSelector } from '@reduxjs/toolkit';
import { normalizedRestaurants } from '../../../materials/normalized-mock';

const initialState = {
  ids: normalizedRestaurants.map(({ id }) => id),
  entities: normalizedRestaurants.reduce((acc, item) => {
    acc[item.id] = item;
    return acc;
  }, {}),
};

export const restaurantsSlice = createSlice({
  name: 'restaurants',
  initialState,
  reducers: {},
  selectors: {
    selectRestaurantById: (state, id) => state.entities[id],
  },
});

const selectRestaurantsState = (state) => state.restaurants;

export const selectRestaurantIds = createSelector(
  [selectRestaurantsState],
  (restaurants) => restaurants.ids
);

export const { selectRestaurantById } = restaurantsSlice.selectors;
export default restaurantsSlice.reducer;
