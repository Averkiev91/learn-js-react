import { createSlice, createSelector } from '@reduxjs/toolkit';
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

const selectDishesState = (state) => state.dishes;

export const selectDishIds = createSelector([selectDishesState], (dishes) => dishes.ids);

export const { selectDishById } = dishesSlice.selectors;
export default dishesSlice.reducer;
