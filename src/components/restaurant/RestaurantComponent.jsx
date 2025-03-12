import React from 'react';
import Menu from './Menu.jsx';
import Name from './Name.jsx';
import ReviewListItem from './Reviews.jsx';

const Restaurant = ({ restaurant }) => {
  if (!restaurant) {
    return <p>Что-то пошло не так...</p>;
  }

  if (restaurant.name && restaurant.menu.length === 0) {
    return <p>Меню для {restaurant.name} отсутствует</p>;
  }

  return (
    <>
      <Name key={restaurant.id} name={restaurant.name} />
      <h3>Меню</h3>
      {restaurant.menu.map((menu) => {
        return <Menu key={menu.id} menu={menu} />;
      })}
      <h3>Отзывы</h3>
      {restaurant.reviews && restaurant.reviews.length > 0 ? (
        <ol>
          {restaurant.reviews.map((review) => {
            return <ReviewListItem key={review.id} review={review} />;
          })}
        </ol>
      ) : (
        <p>Отзывы отсутствуют</p>
      )}
    </>
  );
};

export default Restaurant;
