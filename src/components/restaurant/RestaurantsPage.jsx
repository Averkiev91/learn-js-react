import React from 'react';

const RestaurantsPage = ({ restaurants, setRestaurant }) => {
  return (
    <div>
      {restaurants.map((restaurant) => (
        <button key={restaurant.id} onClick={() => setRestaurant(restaurant)}>
          {restaurant.name}
        </button>
      ))}
    </div>
  );
};

export default RestaurantsPage;
