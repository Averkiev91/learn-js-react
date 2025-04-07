import { useParams } from 'react-router';
import { useUser } from '../redux/hooks/useUser';
import Reviews from '../components/Reviews/Reviews';
import AddReview from '../components/Review/AddReview';

import { useGetReviewsByRestaurantIdQuery } from '../redux/services/api';

export const ReviewsPage = () => {
  const { restaurantId } = useParams();
  const { user } = useUser();
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
    <Reviews reviews={reviews} restaurantId={restaurantId} user={user} />
  ) : (
    <div>
      <p>Отзывов пока нет</p>
      {user && <AddReview userId={user.id} restaurantId={restaurantId} />}
    </div>
  );
};
