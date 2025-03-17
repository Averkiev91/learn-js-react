import React from 'react';
import Counter from './Counter';
import { useReviewForm } from '../../hooks/useReviewForm';

const ReviewForm = ({ addReview }) => {
  const { state, handleChange, handleTextChange, handleRatingChange, handleClear } =
    useReviewForm();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!state.name.trim()) {
      alert('Пожалуйста, введите ваше имя');
      return;
    }

    if (addReview) {
      addReview(state);
      handleClear();
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor='name'>Имя:</label>
        <input type='text' id='name' value={state.name} onChange={handleChange} required />
      </div>
      <div>
        <label htmlFor='text'>Текст отзыва:</label>
        <textarea id='text' value={state.comment} onChange={handleTextChange} />
      </div>
      <div>
        <label htmlFor='rating'>Рейтинг:</label>
        <Counter value={state.rating} onChange={handleRatingChange} />
      </div>
      <button type='button' onClick={handleClear}>
        Очистить
      </button>
      <button type='submit'>Отправить</button>
    </form>
  );
};

export default ReviewForm;
