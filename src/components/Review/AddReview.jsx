import React, { useState } from 'react';
import { useAddReviewMutation } from '../../redux/services/api';
import ReviewForm from './ReviewForm';

const AddReview = ({ userId, restaurantId }) => {
  const [addReview, { isLoading }] = useAddReviewMutation();
  const [shouldReset, setShouldReset] = useState(false);

  const handleSubmit = async ({ text, rating }) => {
    await addReview({
      restaurantId,
      review: {
        userId,
        text,
        rating,
      },
    }).unwrap();

    setShouldReset(true);

    setTimeout(() => {
      setShouldReset(false);
    }, 100);
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
