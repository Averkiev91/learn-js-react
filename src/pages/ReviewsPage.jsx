import { useParams } from 'react-router';

import Reviews from '../components/Reviews/Reviews';

import { useGetReviewsByRestaurantIdQuery } from '../redux/services/api';

export const ReviewsPage = () => {
  const { restaurantId } = useParams();
  const {
    data: reviews,
    isLoading: isReviewsLoading,
    isError: isReviewsError,
  } = useGetReviewsByRestaurantIdQuery(restaurantId);

  if (isReviewsLoading) {
    return (
      <div>
        <p>Загрузка</p>
      </div>
    );
  }

  if (isReviewsError) {
    return (
      <div>
        <p>Ошибка</p>
      </div>
    );
  }

  return reviews?.length > 0 ? (
    <Reviews reviews={reviews} restaurantId={restaurantId} />
  ) : (
    <div>
      <p>Отзывов пока нет</p>
    </div>
  );
};
