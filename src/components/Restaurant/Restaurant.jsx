import { Outlet } from 'react-router';

import NavigationTab from '../NavigationTab/NavigationTab';

const Restaurant = ({ restaurant }) => {
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
