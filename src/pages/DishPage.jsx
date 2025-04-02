import { useParams } from 'react-router';
import DishCounter from '../components/DishCounter/DishCounter';

export const DishPage = () => {
  const { dishId } = useParams();

  return (
    <div>
      <p>{`Количество блюд:`}</p>
      <DishCounter dishId={dishId} />
    </div>
  );
};
