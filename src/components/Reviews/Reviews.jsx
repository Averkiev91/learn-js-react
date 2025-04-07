import React from 'react';
import { useUser } from '../../redux/hooks/useUser';
import ReviewItemsContainer from '../Review/ReviewsContainer';
import AddReview from '../Review/AddReview';

const Reviews = ({ reviews }) => {
  const { user } = useUser();

  return (
    <div>
      <h3>Отзывы</h3>
      {reviews.map((review) => (
        <ReviewItemsContainer key={review.id} review={review} />
      ))}

      {user && <AddReview userId={user.id} />}
    </div>
  );
};

export default Reviews;
