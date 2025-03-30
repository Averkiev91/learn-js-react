import React from 'react';
import { useSelector } from 'react-redux';
import { selectReviewById } from '../../store/slices/reviewsSlice';
import { selectUserById } from '../../store/slices/usersSlice';
import Reviews from './Reviews';

const ReviewItemsContainer = ({ reviewId }) => {
  const review = useSelector((state) => selectReviewById(state, reviewId));
  const user = useSelector((state) => selectUserById(state, review.userId));

  if (!review || !user) {
    return null;
  }

  const reviewWithUser = {
    ...review,
    user: user.name,
  };

  return <Reviews review={reviewWithUser} />;
};

export default ReviewItemsContainer;
