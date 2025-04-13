"use client";

import React from 'react';
import { useUser } from '../../redux/hooks/useUser';
import { useGetReviewsByRestaurantIdQuery } from '../../redux/services/api';
import Reviews from '../Reviews/Reviews';
import AddReview from '../Review/AddReview';
import LoadErrorDisplay from '../LoadErrorDisplay/LoadErrorDisplay';

const ReviewsPageClient = ({ restaurantId }) => {
  const { user } = useUser();
  const { data: reviews, isLoading, isError } = useGetReviewsByRestaurantIdQuery(restaurantId);

  return (
    <LoadErrorDisplay data={reviews} isLoading={isLoading} isError={isError}>
      {reviews?.length > 0 ? (
        <Reviews reviews={reviews} restaurantId={restaurantId} user={user} />
      ) : (
        <div>
          <p>Отзывов пока нет</p>
          {user && <AddReview userId={user.id} restaurantId={restaurantId} />}
        </div>
      )}
    </LoadErrorDisplay>
  );
};

export default ReviewsPageClient; 