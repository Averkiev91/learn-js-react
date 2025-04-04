import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { selectCartItemsArray } from '../../redux/entities/cart/cartSlice';
import { selectDishes } from '../../redux/entities/dishes/dishesSlice';

export const useCartTotal = () => {
  const cartItems = useSelector(selectCartItemsArray);
  const dishes = useSelector(selectDishes);

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
