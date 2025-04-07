import { useState, useCallback } from 'react';

export const useForm = (initialData = {}) => {
  const { initialText = '', initialRating = 5 } = initialData;

  const [text, setText] = useState(initialText);
  const [rating, setRating] = useState(initialRating);

  const reset = useCallback(
    (newText = initialText, newRating = initialRating) => {
      setText(newText);
      setRating(newRating);
    },
    [initialText, initialRating]
  );

  return {
    form: {
      text,
      rating,
    },
    setText,
    setRating,
    reset,
  };
};
