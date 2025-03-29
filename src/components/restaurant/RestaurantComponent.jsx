import React from 'react';
import { useSelector } from 'react-redux';
import Name from './Name';
import Menu from './Menu';
import Reviews from './Reviews';

const RestaurantComponent = ({ restaurantId }) => {
  const restaurant = useSelector((state) => state.restaurants.entities[restaurantId]);

  const menuItems = useSelector((state) =>
    restaurant.menu.map((dishId) => state.dishes.entities[dishId])
  );

  const reviews = useSelector((state) =>
    restaurant.reviews.map((reviewId) => {
      const review = state.reviews.entities[reviewId];
      const user = state.users.entities[review.userId];
      return { ...review, user: user.name };
    })
  );

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
