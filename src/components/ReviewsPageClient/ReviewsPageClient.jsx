'use client';

import React from 'react';
import { useUser } from '../../redux/hooks/useUser';
import Reviews from '../Reviews/Reviews';
import AddReview from '../Review/AddReview';

const ReviewsPageClient = ({ reviews, restaurantId }) => {
  const { user } = useUser();

  return (
    <>
      {reviews?.length > 0 ? (
        <Reviews reviews={reviews} restaurantId={restaurantId} user={user} />
      ) : (
        <div>
          <p>Отзывов пока нет</p>
          {user && <AddReview userId={user.id} restaurantId={restaurantId} />}
        </div>
      )}
    </>
  );
};

export default ReviewsPageClient;
