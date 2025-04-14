import React, { useState } from 'react';
import { addReview } from '../../services/addReview';
import ReviewForm from './ReviewForm';

const AddReview = ({ userId, restaurantId }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [shouldReset, setShouldReset] = useState(false);

  const handleSubmit = async ({ text, rating }) => {
    setIsLoading(true);
    await addReview(restaurantId, {
      userId,
      text,
      rating,
    });

    setShouldReset(true);

    await fetch(`/api/revalidateByTag?tag=getReviewsByRestaurantId`);
    setIsLoading(false);
  };

  return (
    <div>
      <h4>Добавить отзыв</h4>
      <ReviewForm
        onSubmit={handleSubmit}
        submitButtonText='Добавить отзыв'
        isLoading={isLoading}
        shouldReset={shouldReset}
      />
    </div>
  );
};

export default AddReview;
