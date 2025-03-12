import React from 'react';
import Menu from './Menu.jsx';
import Name from './Name.jsx';
import Reviews from './Reviews.jsx';

const Restaurant = ({ restaurant }) => {
  if (!restaurant) return <p>Что-то пошло не так...</p>;
  if (restaurant.name && restaurant.menu.length === 0)
    return <p>Меню для {restaurant.name} отсутствует</p>;

  return (
    <>
      <Name key={restaurant.id} name={restaurant.name} />
      <h3>Меню</h3>
      {restaurant.menu.map((menu) => {
        return <Menu key={menu.id} menu={menu} />;
      })}
      <h3>Отзывы</h3>
      {restaurant.reviews && restaurant.reviews.length > 0 ? (
        restaurant.reviews.map((review) => {
          return <Reviews key={review.id} review={review} />;
        })
      ) : (
        <p>Отзывы отсутствуют</p>
      )}
    </>
  );
};

export default Restaurant;
