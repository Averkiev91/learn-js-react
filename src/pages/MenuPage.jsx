import { useParams } from 'react-router';
import RestaurantMenu from '../components/Restaurant/RestaurantMenu';

export const MenuPage = () => {
  const { restaurantId } = useParams();

  return <>{restaurantId ? <RestaurantMenu restaurantId={restaurantId} /> : <RestaurantMenu />}</>;
};
