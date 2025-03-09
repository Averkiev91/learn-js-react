import React from 'react';
import Menu from './Menu.jsx';
import Name from './Name.jsx';
import Reviews from './Reviews.jsx';

const Restaurant = ({ restaurant }) => {
  return (
    <>
      <Name key={restaurant.id} name={restaurant.name} />
      <h3>Меню</h3>
      {restaurant.menu.map((menu) => {
        return <Menu key={menu.id} menu={menu} />;
      })}
      <h3>Отзывы</h3>
      {restaurant.reviews.map((review) => {
        return <Reviews key={review.id} review={review} />;
      })}
    </>
  );
};

export default Restaurant;
