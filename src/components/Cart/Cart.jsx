import React from 'react';
import { useSelector } from 'react-redux';
import CartItemContainer from './CartItemContainer';
import { selectCartItemsIds } from '../../store/slices/cartSlice';
import { useCartTotal } from '../../hooks/useCartTotal';

const Cart = () => {
  const cartItemIds = useSelector(selectCartItemsIds);
  const totalSum = useCartTotal();

  if (cartItemIds.length === 0) {
    return (
      <div>
        <p>Корзина пуста</p>
      </div>
    );
  }

  return (
    <>
      <h3>Корзина:</h3>
      {cartItemIds.map((id) => (
        <CartItemContainer key={id} id={id} />
      ))}
      <div>
        <span>Итого:</span>
        <span>{totalSum} ₽</span>
      </div>
    </>
  );
};

export default Cart;
