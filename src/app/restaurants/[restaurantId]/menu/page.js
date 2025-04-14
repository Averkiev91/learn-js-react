import MenuPageClient from '../../../../components/MenuPageClient/MenuPageClient';
import { getDishesByRestaurantId } from '../../../../services/getDishesByRestaurantId';

const MenuPage = async ({ params }) => {
  const { restaurantId } = await params;
  const dishes = await getDishesByRestaurantId(restaurantId);

  return <MenuPageClient menu={dishes} />;
};

export default MenuPage;
