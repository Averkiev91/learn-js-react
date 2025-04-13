'use client';

import React from 'react';
import { useGetRestaurantsQuery } from '../../redux/services/api';
import LoadErrorDisplay from '../LoadErrorDisplay/LoadErrorDisplay';
import RestaurantNavigation from '../RestaurantNavigation/RestaurantNavigation';

const RestaurantLayoutClient = ({ children }) => {
  const { data: restaurants, isLoading, isError } = useGetRestaurantsQuery();

  return (
    <LoadErrorDisplay data={restaurants} isLoading={isLoading} isError={isError}>
      {restaurants && (
        <>
          <nav style={{ display: 'flex', gap: '10px' }}>
            {restaurants.map((restaurant) => (
              <RestaurantNavigation key={restaurant.id} restaurant={restaurant} />
            ))}
            {restaurants.length === 0 && <p>Ресторанов нет</p>}
          </nav>
          <main>{children}</main>
        </>
      )}
    </LoadErrorDisplay>
  );
};

export default RestaurantLayoutClient;
