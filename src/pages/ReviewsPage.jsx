import { useParams } from 'react-router';
import { useSelector } from 'react-redux';

import Reviews from '../components/Reviews/Reviews';

import { selectRestaurantReviews } from '../redux/entities/restaurants/restaurantsSlice';
import { getRestaurantReviews } from '../redux/entities/reviews/getRestaurantReviews';

import { useRequest } from '../redux/hooks/useRequest';
import { getUsers } from '../redux/entities/users/getUsers';

export const ReviewsPage = () => {
  const { restaurantId } = useParams();
  const requestStatusReviews = useRequest(getRestaurantReviews, restaurantId);

  useRequest(getUsers);

  const reviews = useSelector((state) => selectRestaurantReviews(state, restaurantId));

  switch (requestStatusReviews) {
    case 'pending':
      return (
        <div>
          <p>Загрузка</p>
        </div>
      );
    case 'rejected':
      return (
        <div>
          <p>Ошибка</p>
        </div>
      );
    default:
      return reviews && reviews.length > 0 ? (
        <Reviews reviews={reviews} />
      ) : (
        <div>
          <p>Отзывов пока нет</p>
        </div>
      );
  }
};
