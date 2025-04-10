import DishLoader from "../../../components/Dish/DishLoader";

export const DishPage = async ({ params }) => {
  const resolvedParams = await params;
  return <DishLoader params={resolvedParams} />;
};

export default DishPage;
