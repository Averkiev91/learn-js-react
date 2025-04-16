import Menu from '../../../../components/Menu/Menu';
import { getDishesByRestaurantId } from '../../../../services/getDishesByRestaurantId';

const MenuPage = async ({ params }) => {
  const { restaurantId } = await params;
  const dishes = await getDishesByRestaurantId(restaurantId);

  return <Menu menu={dishes} />;
};

export default MenuPage;
