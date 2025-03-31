import React from 'react';
import { useSelector } from 'react-redux';
import Name from '../Name/Name';
import { selectRestaurantById } from '../../store/slices/restaurantsSlice';
import useMenuReviewsTabs from '../../hooks/useMenuReviewsTabs';
import RestaurantMenu from './RestaurantMenu';
import RestaurantReviews from './RestaurantReviews';
import MenuReviewsTabs from '../Menu/MenuTabButton';

const RestaurantContainer = ({ restaurantId }) => {
  const restaurant = useSelector((state) => selectRestaurantById(state, restaurantId));
  const { handleTabChange, isMenuActive, isReviewsActive } = useMenuReviewsTabs();

  if (!restaurant) return null;

  return (
    <>
      <Name name={restaurant.name} />

      <MenuReviewsTabs
        isMenuActive={isMenuActive}
        isReviewsActive={isReviewsActive}
        onTabChange={handleTabChange}
      />

      {isMenuActive && <RestaurantMenu menuItems={restaurant.menu} />}
      {isReviewsActive && <RestaurantReviews reviewIds={restaurant.reviews} />}
    </>
  );
};

export default RestaurantContainer;
