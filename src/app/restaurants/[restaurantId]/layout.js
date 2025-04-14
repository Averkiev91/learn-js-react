import RestaurantLayoutPage from '../../../components/Restaurant/RestaurantLayoutPage';
import { getRestaurantById } from '../../../services/getRestaurantById';

const RestaurantLayout = async ({ children, params }) => {
  const { restaurantId } = await params;

  const restaurant = await getRestaurantById(restaurantId);

  return <RestaurantLayoutPage restaurant={restaurant}>{children}</RestaurantLayoutPage>;
};

export default RestaurantLayout;
