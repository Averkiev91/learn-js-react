import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import RestaurantComponent from './RestaurantComponent';

const RestaurantsTabs = () => {
  const restaurants = useSelector((state) => state.restaurants);

  const [activeRestaurantId, setActiveRestaurantId] = useState(restaurants.ids[0]);

  const handleTabClick = (id) => {
    setActiveRestaurantId(id);
  };

  return (
    <div>
      <div>
        {restaurants.ids.map((id) => (
          <button key={id} onClick={() => handleTabClick(id)}>
            {restaurants.entities[id].name}
          </button>
        ))}
      </div>

      <RestaurantComponent restaurantId={activeRestaurantId} />
    </div>
  );
};

export default RestaurantsTabs;
