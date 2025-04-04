import { createEntityAdapter, createSlice, createSelector } from '@reduxjs/toolkit';
import { getDishById } from './getDishById';
import { getRestaurantMenu } from '../restaurants/getRestaurantMenu';

const entityAdapter = createEntityAdapter();

export const dishesSlice = createSlice({
  name: 'dishes',
  initialState: entityAdapter.getInitialState(),
  selectors: {
    selectDishes: (state) => state.entities,
    selectDishesIds: (state) => state.ids,
    selectDishById: (state, id) => state.entities[id],
  },
  extraReducers: (builder) =>
    builder
      .addCase(getRestaurantMenu.fulfilled, (state, { payload }) => {
        entityAdapter.addMany(state, payload);
      })
      .addCase(getDishById.fulfilled, (state, { payload }) => {
        entityAdapter.addOne(state, payload);
      }),
});

export const { selectDishes, selectDishesIds, selectDishById } = dishesSlice.selectors;

export const selectMenu = (state, menu) => menu;

export const selectRestaurantDishes = createSelector([selectDishes, selectMenu], (dishes, menu) => {
  if (!menu || !dishes) return [];
  return menu.map((dishId) => dishes[dishId]).filter((dish) => dish !== undefined);
});

export default dishesSlice.reducer;
