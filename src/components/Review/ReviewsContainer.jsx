import React from 'react';
import Review from './Review';
import { useGetUsersQuery } from '../../redux/services/api';

const ReviewItemsContainer = ({ review }) => {
  const { data: author } = useGetUsersQuery(undefined, {
    selectFromResult: (result) => ({
      ...result,
      data: result.data?.find((user) => user.id === review.userId),
    }),
    skip: !review.userId,
  });

  if (!review || !author) {
    return null;
  }

  const reviewWithUser = {
    ...review,
    user: author.name,
  };

  return <Review review={reviewWithUser} />;
};

export default ReviewItemsContainer;
