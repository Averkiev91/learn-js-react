import { useSelector } from 'react-redux';
import { selectRestaurantById } from '../../redux/entities/restaurants/restaurantsSlice';
import { Outlet } from 'react-router';

import NavigationTab from '../NavigationTab/NavigationTab';

const Restaurant = ({ restaurantId }) => {
  const restaurant = useSelector((state) => selectRestaurantById(state, restaurantId));

  if (!restaurant) {
    return;
  }

  return (
    <>
      <h2>{restaurant.name}</h2>
      <div style={{ display: 'flex', gap: '10px' }}>
        <NavigationTab path='menu' title='Menu' />
        <NavigationTab path='reviews' title='Reviews' />
      </div>
      <Outlet />
    </>
  );
};

export default Restaurant;
