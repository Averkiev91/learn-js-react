import React from 'react';

const CartItem = ({ amount, totalPrice, name, price }) => {
  return (
    <>
      <p>{name}:</p>
      <span>
        {amount} шт. × {price} = {totalPrice} ₽
      </span>
    </>
  );
};

export default CartItem;
