import DishLoader from '../../../components/Dish/DishLoader';

export const DishPage = async ({ params }) => {
  const { dishId } = params;
  return <DishLoader dishId={dishId} />;
};

export default DishPage;
