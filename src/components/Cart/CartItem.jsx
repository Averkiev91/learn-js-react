import React from 'react';

const CartItem = ({ amount, dishName, price, totalPrice }) => {
  return (
    <>
      <p>{dishName}:</p>
      <span>
        {amount} шт. × {price} = {totalPrice} ₽
      </span>
    </>
  );
};

export default CartItem;
