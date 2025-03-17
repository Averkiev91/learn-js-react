import { useReducer } from 'react';

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

export const useReviewForm = () => {
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

  return {
    state,
    handleChange,
    handleTextChange,
    handleRatingChange,
    handleClear,
  };
};
