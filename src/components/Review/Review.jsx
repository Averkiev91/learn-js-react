import React, { useState } from 'react';
import { useUpdateReviewMutation } from '../../redux/services/api';
import { useUser } from '../../redux/hooks/useUser';
import Counter from '../Counter/Counter';

const Review = ({ review }) => {
  const { user } = useUser();
  const [updateReview, { isLoading }] = useUpdateReviewMutation();
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(review.text);
  const [editedRating, setEditedRating] = useState(review.rating);

  const isCurrentUserReview = user && user.id === review.userId;

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditedText(review.text);
    setEditedRating(review.rating);
  };

  const handleSave = async () => {
    try {
      await updateReview({
        reviewId: review.id,
        review: {
          text: editedText,
          rating: Number(editedRating),
        },
      });
      setIsEditing(false);
    } catch (error) {
      console.error('Ошибка при обновлении отзыва:', error);
    }
  };

  if (isEditing) {
    return (
      <li>
        <div>
          <textarea value={editedText} onChange={(e) => setEditedText(e.target.value)} required />
        </div>
        <div>
          <label>
            Рейтинг:
            <Counter value={editedRating} onChange={setEditedRating} />
          </label>
        </div>
        <button onClick={handleSave} disabled={isLoading}>
          {isLoading ? 'Сохранение...' : 'Сохранить'}
        </button>
        <button onClick={handleCancel}>Отмена</button>
      </li>
    );
  }

  return (
    <li>
      {review.user}: {review.text} (Рейтинг: {review.rating})
      {isCurrentUserReview && <button onClick={handleEdit}>*</button>}
    </li>
  );
};

export default Review;
