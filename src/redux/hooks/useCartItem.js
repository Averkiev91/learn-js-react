import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  addToCart,
  removeFromCart,
  selectAmountByItemId,
} from '../../redux/entities/cart/cartSlice';

export const useCartItem = (dishId) => {
  const dispatch = useDispatch();
  const amount = useSelector((state) => selectAmountByItemId(state, dishId)) || 0;

  const handleDishCountChange = useCallback(
    (newCount) => {
      if (newCount > amount) {
        dispatch(addToCart(dishId));
      } else if (newCount < amount) {
        dispatch(removeFromCart(dishId));
      }
    },
    [dispatch, dishId, amount]
  );

  return { amount, handleDishCountChange };
};
