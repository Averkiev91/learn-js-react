import React from 'react';
import { useSelector } from 'react-redux';
import { selectReviewById } from '../../store/slices/reviewsSlice';
import { selectUserById } from '../../store/slices/usersSlice';
import Review from './Review';

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

  return <Review review={reviewWithUser} />;
};

export default ReviewItemsContainer;
