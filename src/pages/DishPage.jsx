import { useParams } from 'react-router';
import DishCounter from '../components/DishCounter/DishCounter';
import Dish from '../components/Dish/Dish';
import { useRequest } from '../redux/hooks/useRequest';
import { getDishById } from '../redux/entities/dishes/getDishById';

export const DishPage = () => {
  const { dishId } = useParams();
  const requestStatus = useRequest(getDishById, dishId);

  switch (requestStatus) {
    case 'pending':
      return (
        <div>
          <p>Загрузка</p>
        </div>
      );
    case 'rejected':
      return (
        <div>
          <p>Ошибка</p>
        </div>
      );
    default:
      return (
        <div>
          <p>{`Количество блюд:`}</p>
          <Dish dishId={dishId} />
          <DishCounter dishId={dishId} />
        </div>
      );
  }
};
