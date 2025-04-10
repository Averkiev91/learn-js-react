"use client";

import { useGetDishByDishIdQuery } from '../../redux/services/api';
import DishCounter from '../../components/DishCounter/DishCounter';
import Dish from '../../components/Dish/Dish';
import LoadErrorDisplay from '../../components/LoadErrorDisplay/LoadErrorDisplay';

const DishLoader = ({ params }) => {
  const { dishId } = params;
  const { data: dish, isLoading, isError } = useGetDishByDishIdQuery(dishId);

  return (
    <LoadErrorDisplay 
      data={dish}
      isLoading={isLoading}
      isError={isError}
    >
      <div>
        <p>{`Количество блюд:`}</p>
        <Dish dish={dish} />
        <DishCounter dishId={dishId} />
      </div>
    </LoadErrorDisplay>
  );
}

export default DishLoader;