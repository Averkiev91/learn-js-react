import React from 'react';
import { useSelector } from 'react-redux';
import Restaurant from './RestaurantComponent';
import RestaurantsPage from './RestaurantsPage';

const RestaurantsContainer = () => {
  const restaurants = useSelector((state) => state.restaurants.entities);
  const selectedId = useSelector((state) => state.restaurants.selectedId);
  const selectedRestaurant = restaurants.find((r) => r.id === selectedId);

  return (
    <>
      <RestaurantsPage restaurants={restaurants} />
      {selectedRestaurant && (
        <Restaurant key={selectedRestaurant.id} restaurant={selectedRestaurant} />
      )}
    </>
  );
};

export default RestaurantsContainer;
