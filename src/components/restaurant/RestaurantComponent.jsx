import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import Name from '../Name/Name';
import Menu from '../Menu/Menu';
import Reviews from '../Review/Reviews';
import { selectRestaurantById } from '../../store/slices/restaurantsSlice';
import { selectDishesEntities } from '../../store/slices/dishesSlice';
import { selectReviewsEntities } from '../../store/slices/reviewsSlice';
import { selectUsersEntities } from '../../store/slices/usersSlice';

const RestaurantComponent = ({ restaurantId }) => {
  const restaurant = useSelector((state) => selectRestaurantById(state, restaurantId));
  const dishesEntities = useSelector(selectDishesEntities);
  const reviewsEntities = useSelector(selectReviewsEntities);
  const usersEntities = useSelector(selectUsersEntities);

  const menuItems = useMemo(() => {
    if (!restaurant) return [];
    return restaurant.menu.map((dishId) => dishesEntities[dishId]);
  }, [restaurant, dishesEntities]);

  const reviews = useMemo(() => {
    if (!restaurant) return [];
    return restaurant.reviews.map((reviewId) => {
      const review = reviewsEntities[reviewId];
      const user = usersEntities[review.userId];
      return { ...review, user: user.name };
    });
  }, [restaurant, reviewsEntities, usersEntities]);

  if (!restaurant) return null;

  return (
    <div>
      <Name name={restaurant.name} />

      <h3>Меню:</h3>
      {menuItems.map((dish) => (
        <Menu key={dish.id} menu={dish} />
      ))}

      <h3>Отзывы:</h3>
      <ul>
        {reviews.map((review) => (
          <Reviews key={review.id} review={review} />
        ))}
      </ul>
    </div>
  );
};

export default RestaurantComponent;
