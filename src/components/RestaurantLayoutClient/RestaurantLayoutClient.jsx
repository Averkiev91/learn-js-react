'use client';

import React from 'react';
import RestaurantNavigation from '../RestaurantNavigation/RestaurantNavigation';

const RestaurantLayoutClient = ({ children, restaurants }) => {
  return (
    <>
      <nav style={{ display: 'flex', gap: '10px' }}>
        {restaurants.map((restaurant) => (
          <RestaurantNavigation key={restaurant.id} restaurant={restaurant} />
        ))}
        {restaurants.length === 0 && <p>Ресторанов нет</p>}
      </nav>
      <main>{children}</main>
    </>
  );
};

export default RestaurantLayoutClient;
