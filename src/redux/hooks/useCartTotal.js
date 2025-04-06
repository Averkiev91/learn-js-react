import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { selectCartItemsArray } from '../../redux/entities/cart/cartSlice';
import { selectDishesFromRTQ } from '../entities/dishes/rtqDishesSelectors';

export const useCartTotal = () => {
  const cartItems = useSelector(selectCartItemsArray);
  const dishes = useSelector(selectDishesFromRTQ);

  const totalSum = useMemo(() => {
    return cartItems.reduce((sum, { itemId, amount }) => {
      const dish = dishes[itemId];
      if (dish) {
        return sum + amount * dish.price;
      }
      return sum;
    }, 0);
  }, [cartItems, dishes]);

  return totalSum;
};
