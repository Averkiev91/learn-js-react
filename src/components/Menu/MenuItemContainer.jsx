import React from 'react';
import { useSelector } from 'react-redux';
import { selectDishById } from '../../store/slices/dishesSlice';
import Menu from './Menu';

const MenuItemContainer = ({ dishId }) => {
  const dish = useSelector((state) => selectDishById(state, dishId));

  if (!dish) {
    return null;
  }

  return <Menu menu={dish} />;
};

export default MenuItemContainer;
