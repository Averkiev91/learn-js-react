import { createSlice } from '@reduxjs/toolkit';
import { normalizedRestaurants } from '../../../materials/normalized-mock';

const restaurantsSlice = createSlice({
  name: 'restaurants',
  initialState: {
    entities: normalizedRestaurants,
    selectedId: normalizedRestaurants[0].id,
  },
  reducers: {
    selectRestaurant: (state, action) => {
      state.selectedId = action.payload;
    },
  },
});

export const { selectRestaurant } = restaurantsSlice.actions;
export default restaurantsSlice.reducer;
