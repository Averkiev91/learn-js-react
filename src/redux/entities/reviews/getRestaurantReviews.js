import { createAsyncThunk } from '@reduxjs/toolkit';
import { selectRestaurantReviews } from '../restaurants/restaurantsSlice';

export const getRestaurantReviews = createAsyncThunk(
  'reviews/getRestaurantReviews',
  async (id, { rejectWithValue }) => {
    const response = await fetch(`http://localhost:3001/api/reviews?restaurantId=${id}`);
    const result = await response.json();

    if (!result.length) {
      return rejectWithValue('reviews/getRestaurantReviews no data');
    }
    return result;
  },
  {
    condition: (id, { getState }) => {
      const restaurantReviewsIds = selectRestaurantReviews(getState(), id);
      return !restaurantReviewsIds || restaurantReviewsIds.length === 0;
    },
  }
);
