import MenuPageClient from '../../../../components/MenuPageClient/MenuPageClient';

const MenuPage = ({ params }) => {
  const { restaurantId } = params;

  return <MenuPageClient restaurantId={restaurantId} />;
};

export default MenuPage;
