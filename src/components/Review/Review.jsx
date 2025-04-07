import React, { useState } from 'react';
import { useUpdateReviewMutation } from '../../redux/services/api';
import { useUser } from '../../redux/hooks/useUser';
import ReviewForm from './ReviewForm';

const Review = ({ review }) => {
  const { user } = useUser();
  const [updateReview, { isLoading }] = useUpdateReviewMutation();
  const [isEditing, setIsEditing] = useState(false);

  const isCurrentUserReview = user && user.id === review.userId;

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  const handleSave = async ({ text, rating }) => {
    await updateReview({
      reviewId: review.id,
      review: {
        text,
        rating,
        userId: review.userId,
        restaurantId: review.restaurantId,
      },
    }).unwrap();
    setIsEditing(false);
  };

  if (isEditing) {
    return (
      <li>
        <ReviewForm
          initialText={review.text}
          initialRating={review.rating}
          onSubmit={handleSave}
          submitButtonText='Сохранить'
          onCancel={handleCancel}
          isLoading={isLoading}
        />
      </li>
    );
  }

  return (
    <li>
      <div>
        <strong>{review.user || 'Аноним'}:</strong> {review.text} (Рейтинг: {review.rating})
      </div>
      {isCurrentUserReview && <button onClick={handleEdit}>*</button>}
    </li>
  );
};

export default Review;
