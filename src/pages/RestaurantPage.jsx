import { useParams } from 'react-router';
import RestaurantsTabs from '../components/Restaurant/RestaurantsTabs';

export const RestaurantPage = () => {
  const { restaurantId } = useParams();
  console.log(restaurantId);

  return <RestaurantsTabs id={restaurantId} />;
};
