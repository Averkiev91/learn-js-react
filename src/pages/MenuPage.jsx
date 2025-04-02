import { useParams } from 'react-router';
import { useSelector } from 'react-redux';
import { selectRestaurantById } from '../store/slices/restaurantsSlice';
import Menu from '../components/Menu/Menu';

export const MenuPage = () => {
  const { restaurantId } = useParams();
  const { menu } = useSelector((state) => selectRestaurantById(state, restaurantId));

  return <Menu menu={menu} />;
};
