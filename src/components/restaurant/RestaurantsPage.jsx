import React from 'react';
import { useDispatch } from 'react-redux';
import { selectRestaurant } from '../../store/slices/restaurantsSlice';

const RestaurantsPage = ({ restaurants }) => {
  const dispatch = useDispatch();
  const handleSelect = (id) => () => {
    dispatch(selectRestaurant(id));
  };

  return (
    <div>
      {restaurants.map((restaurant) => (
        <button key={restaurant.id} onClick={handleSelect(restaurant.id)}>
          {restaurant.name}
        </button>
      ))}
    </div>
  );
};

export default RestaurantsPage;
