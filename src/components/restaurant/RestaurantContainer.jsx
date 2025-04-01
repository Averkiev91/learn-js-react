import React from 'react';
import { useSelector } from 'react-redux';
import Name from '../Name/Name';
import { selectRestaurantById } from '../../store/slices/restaurantsSlice';
import RestaurantMenu from './RestaurantMenu';
import RestaurantReviews from './RestaurantReviews';
import MenuReviewsTabs from '../Menu/MenuTabButton';

const RestaurantContainer = ({ restaurantId }) => {
  const restaurant = useSelector((state) => selectRestaurantById(state, restaurantId));

  if (!restaurant) return null;

  return (
    <>
      <Name name={restaurant.name} />

      <MenuReviewsTabs />

      <RestaurantMenu menuItems={restaurant.menu} />
      <RestaurantReviews reviewIds={restaurant.reviews} />
    </>
  );
};

export default RestaurantContainer;
