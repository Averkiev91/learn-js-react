import { createAsyncThunk } from '@reduxjs/toolkit';

export const getRestaurantMenu = createAsyncThunk(
  'restaurants/getRestaurantMenu',
  async (id, { rejectWithValue }) => {
    const response = await fetch(`http://localhost:3001/api/dishes?restaurantId=${id}`);
    const result = await response.json();

    if (!result.length) {
      return rejectWithValue('restaurants/getRestaurantMenu no data');
    }
    return result;
  }
);
