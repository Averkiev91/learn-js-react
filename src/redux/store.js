import { configureStore } from '@reduxjs/toolkit';
import restaurantsReducer from './entities/restaurants/restaurantsSlice';
import dishesReducer from './entities/dishes/dishesSlice';
import reviewsReducer from './entities/reviews/reviewsSlice';
import usersReducer from './entities/users/usersSlice';
import cartReducer from './entities/cart/cartSlice';
import requestReducer from './entities/request/slice';
import loggerMiddleware from './middleware/loggerMiddleware';

export const store = configureStore({
  reducer: {
    restaurants: restaurantsReducer,
    dishes: dishesReducer,
    reviews: reviewsReducer,
    users: usersReducer,
    cart: cartReducer,
    request: requestReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(loggerMiddleware),
});
