import React from 'react';
import RestaurantContainer from './RestaurantContainer';
import RestaurantTabButton from '../RestaurantTabButton/RestaurantTabButton';
import useRestaurantTabs from '../../hooks/useRestaurantTabs';

const RestaurantsTabs = ({ id }) => {
  const { ids, entities, activeRestaurantId, handleRestaurantClick } = useRestaurantTabs(id);

  return (
    <>
      {ids.map((restaurantId) => {
        const restaurant = entities[restaurantId];
        return (
          <RestaurantTabButton
            key={restaurantId}
            restaurantId={restaurantId}
            activeRestaurantId={activeRestaurantId}
            name={restaurant.name}
            onClick={handleRestaurantClick}
          />
        );
      })}
      <RestaurantContainer restaurantId={activeRestaurantId} />
    </>
  );
};

export default RestaurantsTabs;
