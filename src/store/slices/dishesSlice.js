import { createSlice } from '@reduxjs/toolkit';
import { normalizedDishes } from '../../../materials/normalized-mock';

const initialState = {
  ids: normalizedDishes.map(({ id }) => id),
  entities: normalizedDishes.reduce((acc, item) => {
    acc[item.id] = item;
    return acc;
  }, {}),
};

export const dishesSlice = createSlice({
  name: 'dishes',
  initialState,
  reducers: {},
  selectors: {
    selectDishIds: (state) => state.ids,
    selectDishById: (state, id) => state.entities[id],
  },
});

export const selectDishesEntities = (state) => state.dishes.entities;

export const { selectDishById, selectDishIds } = dishesSlice.selectors;
export default dishesSlice.reducer;
