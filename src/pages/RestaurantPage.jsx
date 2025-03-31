import { useParams } from 'react-router';
import RestaurantsTabs from '../components/Restaurant/RestaurantsTabs';

export const RestaurantPage = () => {
  const { restaurantId } = useParams();

  return <>{restaurantId ? <RestaurantsTabs id={restaurantId} /> : <RestaurantsTabs />}</>;
};
