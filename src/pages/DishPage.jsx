import { useParams } from 'react-router';
import MenuItemContainer from '../components/Menu/MenuItemContainer';

export const DishPage = () => {
  const { dishId } = useParams();

  return <>{dishId ? <MenuItemContainer dishId={dishId} /> : <MenuItemContainer />}</>;
};
