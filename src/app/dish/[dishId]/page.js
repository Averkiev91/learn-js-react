import DishLoader from '../../../components/Dish/DishLoader';
import getDishByDishId from '../../../services/getDishByDishId';

export const DishPage = async ({ params }) => {
  const { dishId } = await params;
  const dish = await getDishByDishId(dishId);

  return <DishLoader dish={dish} dishId={dishId} />;
};

export default DishPage;
