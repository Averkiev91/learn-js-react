import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { selectAmountByItemId } from '../../store/slices/cartSlice';
import { selectDishById } from '../../store/slices/dishesSlice';
import CartItem from './CartItem';

const CartItemContainer = ({ id }) => {
  const amount = useSelector((state) => selectAmountByItemId(state, id));
  const dish = useSelector((state) => selectDishById(state, id));

  const totalPrice = useMemo(() => amount * dish?.price, [amount, dish?.price]);

  if (!dish) {
    return null;
  }

  const { name, price } = dish;

  const cartItemProps = {
    amount,
    totalPrice,
    name,
    price,
  };

  return <CartItem {...cartItemProps} />;
};

export default CartItemContainer;
