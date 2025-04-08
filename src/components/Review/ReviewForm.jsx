import React, { useEffect } from 'react';
import { useForm } from '../../redux/hooks/useForm';
import Counter from '../Counter/Counter';

const ReviewForm = ({
  initialText = '',
  initialRating = 5,
  onSubmit,
  submitButtonText = 'Отправить',
  onCancel,
  isLoading = false,
  shouldReset = false,
}) => {
  const { form, setText, setRating, reset } = useForm({ initialText, initialRating });

  const { text, rating } = form;

  useEffect(() => {
    if (shouldReset) {
      reset();
    }
  }, [shouldReset, reset]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    onSubmit({ text, rating: Number(rating) });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder='Оставьте свой отзыв'
          required
          rows={3}
        />
      </div>

      <div>
        <label>
          Рейтинг:
          <Counter value={rating} onChange={setRating} />
        </label>
      </div>

      <div>
        <button type='submit' disabled={isLoading}>
          {isLoading ? 'Загрузка...' : submitButtonText}
        </button>
        {onCancel && (
          <button type='button' onClick={onCancel}>
            Отмена
          </button>
        )}
      </div>
    </form>
  );
};

export default ReviewForm;
