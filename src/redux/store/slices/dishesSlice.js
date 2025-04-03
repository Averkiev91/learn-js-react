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
    selectDishesIds: (state) => state.ids,
    selectDishById: (state, id) => state.entities[id],
    selectDishes: (state) => state.entities,
  },
});

export const { selectDishes, selectDishesIds, selectDishById } = dishesSlice.selectors;

export const selectMenu = (state, menu) => menu;

export const selectRestaurantDishes = createSelector([selectDishes, selectMenu], (dishes, menu) => {
  if (!menu || !dishes) return [];
  return menu.map((dishId) => dishes[dishId]).filter((dish) => dish !== undefined);
});

export default dishesSlice.reducer;
