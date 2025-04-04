import { createAsyncThunk } from '@reduxjs/toolkit';
import { selectRestaurantMenu } from './restaurantsSlice';
import { selectDishesIds } from '../dishes/dishesSlice';

export const getRestaurantMenu = createAsyncThunk(
  'restaurants/getRestaurantMenu',
  async (id, { rejectWithValue }) => {
    const response = await fetch(`http://localhost:3001/api/dishes?restaurantId=${id}`);
    const result = await response.json();

    if (!result.length) {
      return rejectWithValue('restaurants/getRestaurantMenu no data');
    }
    return result;
  },
  {
    condition: (id, { getState }) => {
      const state = getState();
      const restaurantDishIds = selectRestaurantMenu(state, id);
      const allDishIds = selectDishesIds(state);

      if (!restaurantDishIds) {
        return true;
      }
      if (restaurantDishIds.length === 0) {
        return false;
      }

      return restaurantDishIds.some((dishId) => !allDishIds.includes(dishId));
    },
  }
);
