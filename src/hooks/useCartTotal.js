import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { selectCartItemsIds, selectCartItems } from '../store/slices/cartSlice';
import { selectDishesEntities } from '../store/slices/dishesSlice';

export const useCartTotal = () => {
  const cartItemIds = useSelector(selectCartItemsIds);
  const dishes = useSelector(selectDishesEntities);
  const cartItems = useSelector(selectCartItems);

  const totalSum = useMemo(() => {
    return cartItemIds.reduce((sum, id) => {
      const amount = cartItems[id] || 0;
      const dish = dishes[id];
      if (dish) {
        return sum + amount * dish.price;
      }
      return sum;
    }, 0);
  }, [cartItemIds, dishes, cartItems]);

  return totalSum;
};
