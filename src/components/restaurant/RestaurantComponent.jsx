import React, { useState, useCallback } from 'react';
import Menu from './Menu.jsx';
import Name from './Name.jsx';
import ReviewListItem from './Reviews.jsx';
import ReviewForm from './ReviewForm.jsx';

const Restaurant = ({ restaurant }) => {
  const [reviews, setReviews] = useState(restaurant.reviews || []);

  const addReview = useCallback((reviewData) => {
    const newReview = {
      id: Date.now().toString(),
      user: reviewData.name,
      text: reviewData.comment,
      rating: reviewData.rating,
    };

    setReviews((reviews) => [...reviews, newReview]);
  }, []);

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
      {reviews.length > 0 ? (
        <ol>
          {reviews.map((review) => {
            return <ReviewListItem key={review.id} review={review} />;
          })}
        </ol>
      ) : (
        <p>Отзывы отсутствуют</p>
      )}
      <h3>Оставить отзыв</h3>
      <ReviewForm addReview={addReview} />
    </>
  );
};

export default Restaurant;
