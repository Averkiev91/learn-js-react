import RestaurantLayoutClient from '../../components/RestaurantLayoutClient/RestaurantLayoutClient';
import { getRestaurants } from '../../services/getRestaurants';

const RestaurantsLayout = async ({ children }) => {
  const restaurants = await getRestaurants();
  return (
    <RestaurantLayoutClient restaurants={restaurants}>{children}</RestaurantLayoutClient>
  );
};

export default RestaurantsLayout;
