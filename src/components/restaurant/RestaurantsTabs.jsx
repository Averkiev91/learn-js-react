import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import RestaurantComponent from './RestaurantComponent';

const RestaurantsTabs = () => {
  const restaurants = useSelector((state) => state.restaurants);

  const [activeRestaurantId, setActiveRestaurantId] = useState(restaurants.ids[0]);

  return (
    <div>
      <div>
        {restaurants.ids.map((id) => (
          <button key={id} onClick={() => setActiveRestaurantId(id)}>
            {restaurants.entities[id].name}
          </button>
        ))}
      </div>

      <RestaurantComponent restaurantId={activeRestaurantId} />
    </div>
  );
};

export default RestaurantsTabs;
