import React from 'react';
import ReviewItemsContainer from '../Review/ReviewsContainer';
import AddReview from '../Review/AddReview';

const Reviews = ({ reviews, restaurantId, user }) => {
  return (
    <div>
      <h3>Отзывы</h3>
      {reviews.map((review) => (
        <ReviewItemsContainer key={review.id} review={review} />
      ))}

      {user && <AddReview userId={user.id} restaurantId={restaurantId} />}
    </div>
  );
};

export default Reviews;
