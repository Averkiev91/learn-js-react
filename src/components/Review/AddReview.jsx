import React, { useTransition } from 'react';
import { useActionState } from 'react';
import { addReviewAction } from '../../actions/reviewActions';
import ReviewForm from './ReviewForm';

const AddReview = ({ userId, restaurantId }) => {
  const [_, formAction] = useActionState(async (_, { text, rating }) => {
    return addReviewAction({ restaurantId, review: { userId, text, rating } });
  }, null);
  const [isPending, startTransition] = useTransition();

  const handleSubmit = ({ text, rating }) => {
    startTransition(() => {
      formAction({ text, rating });
    });
  };

  return (
    <div>
      <h4>Добавить отзыв</h4>
      <ReviewForm
        onSubmit={handleSubmit}
        submitButtonText='Добавить отзыв'
        isLoading={isPending}
      />
    </div>
  );
};

export default AddReview;
