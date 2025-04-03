import React from 'react';
import { NavLink } from 'react-router';
import DishCounter from '../DishCounter/DishCounter';
import { useSelector } from 'react-redux';
import { selectRestaurantDishes } from '../../store/slices/dishesSlice';
import NavigationTab from '../NavigationTab/NavigationTab';

const Menu = ({ menu }) => {
  const restaurantDishes = useSelector((state) => selectRestaurantDishes(state, menu));
  return (
    <div>
      <h3>Меню</h3>
      <div style={{ display: 'flex', gap: '10px' }}>
        {restaurantDishes.map(({ id, name }) => (
          <NavigationTab key={id} path={`/dish/${id}`} title={name} />
        ))}
      </div>
    </div>
  );
};

export default Menu;
