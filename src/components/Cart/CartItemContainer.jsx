import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { selectAmountByItemId } from './../../redux/entities/cart/cartSlice';
import { useGetDishByDishIdQuery } from '../../redux/services/api';
import CartItem from './CartItem';

const CartItemContainer = ({ id }) => {
  const amount = useSelector((state) => selectAmountByItemId(state, id));
  const { data: dish } = useGetDishByDishIdQuery(id);

  const totalPrice = useMemo(() => (dish ? amount * dish.price : 0), [amount, dish]);

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
