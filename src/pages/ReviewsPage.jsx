import { useParams } from 'react-router';
import { useSelector } from 'react-redux';
import { selectRestaurantById } from '../redux/entities/restaurants/restaurantsSlice';
import Reviews from '../components/Reviews/Reviews';

export const ReviewsPage = () => {
  const { restaurantId } = useParams();
  const restaurant = useSelector((state) => selectRestaurantById(state, restaurantId));
  const { reviews } = restaurant;

  return <Reviews reviews={reviews} />;
};
