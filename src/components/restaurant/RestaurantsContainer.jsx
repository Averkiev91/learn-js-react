import React, { useState } from 'react';
import { restaurants } from '../../../materials/mock';
import Restaurant from './RestaurantComponent';
import RestaurantsPage from './RestaurantsPage';

const RestaurantsContainer = () => {
  const [restaurant, setRestaurant] = useState(restaurants[0]);

  return (
    <>
      <RestaurantsPage restaurants={restaurants} setRestaurant={setRestaurant} />
      <Restaurant key={restaurant.id} restaurant={restaurant} />
    </>
  );
};

export default RestaurantsContainer;
