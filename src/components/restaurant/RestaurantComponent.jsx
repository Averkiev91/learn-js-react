import React from 'react';
import { useSelector } from 'react-redux';
import Name from '../Name/Name';
import ReviewItemsContainer from '../Review/ReviewsContainer';
import MenuItemContainer from '../Menu/MenuItemContainer';
import { selectRestaurantById } from '../../store/slices/restaurantsSlice';

const RestaurantComponent = ({ restaurantId }) => {
  const restaurant = useSelector((state) => selectRestaurantById(state, restaurantId));

  if (!restaurant) return null;

  return (
    <>
      <Name name={restaurant.name} />

      {
        <ul>
          {restaurant.menu.map((dishId) => (
            <MenuItemContainer key={dishId} dishId={dishId} />
          ))}
        </ul>
      }

      {
        <ul>
          {restaurant.reviews.map((reviewId) => (
            <ReviewItemsContainer key={reviewId} reviewId={reviewId} />
          ))}
        </ul>
      }
    </>
  );
};

export default RestaurantComponent;
