import { useReducer, useCallback } from 'react';

const initialState = {
  text: '',
  rating: 5,
};

const actionTypes = {
  SET_TEXT: 'SET_TEXT',
  SET_RATING: 'SET_RATING',
  RESET: 'RESET',
};

const formReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.SET_TEXT:
      return {
        ...state,
        text: action.payload,
      };
    case actionTypes.SET_RATING:
      return {
        ...state,
        rating: action.payload,
      };
    case actionTypes.RESET:
      return {
        text: action.payload.text || initialState.text,
        rating: action.payload.rating || initialState.rating,
      };
    default:
      return state;
  }
};

export const useForm = (initialData = {}) => {
  const { initialText = '', initialRating = 5 } = initialData;

  const [form, dispatch] = useReducer(formReducer, {
    text: initialText,
    rating: initialRating,
  });

  const setText = useCallback((text) => {
    dispatch({ type: actionTypes.SET_TEXT, payload: text });
  }, []);

  const setRating = useCallback((rating) => {
    dispatch({ type: actionTypes.SET_RATING, payload: rating });
  }, []);

  const reset = useCallback(
    (newText = initialText, newRating = initialRating) => {
      dispatch({
        type: actionTypes.RESET,
        payload: { text: newText, rating: newRating },
      });
    },
    [initialText, initialRating]
  );

  return {
    form,
    setText,
    setRating,
    reset,
  };
};
