import RestaurantLayoutPage from '../../../components/Restaurant/RestaurantLayoutPage';
import { getRestaurantById } from '../../../services/getRestaurantById';

export const generateMetadata = async ({ params }) => {
  const { restaurantId } = await params;
  const restaurant = await getRestaurantById(restaurantId);
  const { name } = restaurant;

  return {
    title: name || 'Restaurant',
  };
};

const RestaurantLayout = async ({ children, params }) => {
  const { restaurantId } = await params;

  const restaurant = await getRestaurantById(restaurantId);

  return <RestaurantLayoutPage restaurant={restaurant}>{children}</RestaurantLayoutPage>;
};

export default RestaurantLayout;
