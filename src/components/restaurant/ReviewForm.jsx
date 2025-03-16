import React, { useReducer } from 'react';
import Counter from './Counter';

const initialState = {
  name: '',
  rating: 0,
  comment: '',
};

const ACTION_TYPES = {
  SET_NAME: 'SET_NAME',
  SET_RATING: 'SET_RATING',
  SET_COMMENT: 'SET_COMMENT',
  RESET: 'RESET',
};

const reviewReducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPES.SET_NAME:
      return { ...state, name: action.payload };
    case ACTION_TYPES.SET_RATING:
      return { ...state, rating: action.payload };
    case ACTION_TYPES.SET_COMMENT:
      return { ...state, comment: action.payload };
    case ACTION_TYPES.RESET:
      return initialState;
    default:
      return state;
  }
};

const ReviewForm = ({ addReview }) => {
  const [state, dispatch] = useReducer(reviewReducer, initialState);

  const handleChange = (e) => {
    dispatch({
      type: ACTION_TYPES.SET_NAME,
      payload: e.target.value,
    });
  };

  const handleTextChange = (e) => {
    dispatch({
      type: ACTION_TYPES.SET_COMMENT,
      payload: e.target.value,
    });
  };

  const handleRatingChange = (newValue) => {
    dispatch({
      type: ACTION_TYPES.SET_RATING,
      payload: Number(newValue),
    });
  };

  const handleClear = () => {
    dispatch({
      type: ACTION_TYPES.RESET,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!state.name.trim()) {
      alert('Пожалуйста, введите ваше имя');
      return;
    }

    if (addReview) {
      addReview(state);
      dispatch({
        type: ACTION_TYPES.RESET,
      });
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
