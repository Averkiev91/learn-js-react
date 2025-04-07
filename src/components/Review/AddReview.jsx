import React, { useState } from 'react';
import { useAddReviewMutation } from '../../redux/services/api';
import Counter from '../Counter/Counter';

const AddReview = ({ userId, restaurantId }) => {
  const [addReview, { isLoading }] = useAddReviewMutation();

  const [text, setText] = useState('');
  const [rating, setRating] = useState(5);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!text.trim()) return;

    await addReview({
      restaurantId,
      review: {
        userId,
        text,
        rating: Number(rating),
      },
    });
    setText('');
    setRating(5);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder='Напишите отзыв'
          required
        />
      </div>

      <div>
        <label>
          Рейтинг:
          <Counter value={rating} onChange={setRating} />
        </label>
      </div>

      <button type='submit' disabled={isLoading}>
        {isLoading ? 'Загрузка...' : 'Добавить отзыв'}
      </button>
    </form>
  );
};

export default AddReview;
