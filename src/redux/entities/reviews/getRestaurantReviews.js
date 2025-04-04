import { createAsyncThunk } from '@reduxjs/toolkit';
import { selectRestaurantReviews } from '../restaurants/restaurantsSlice';
import { selectReviewsIds } from '../reviews/reviewsSlice';

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
      const state = getState();
      const restaurantReviewsIds = selectRestaurantReviews(state, id);
      const allReviewsIds = selectReviewsIds(state);

      if (!restaurantReviewsIds) {
        return true;
      }
      if (restaurantReviewsIds.length === 0) {
        return false;
      }

      return restaurantReviewsIds.some((reviewId) => !allReviewsIds.includes(reviewId));
    },
  }
);
