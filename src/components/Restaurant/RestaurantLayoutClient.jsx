"use client";

import { useParams } from "next/navigation";

import Restaurant from "../../components/Restaurant/Restaurant";
import { useGetRestaurantByIdQuery } from "../../redux/services/api";
import LoadErrorDisplay from '../../components/LoadErrorDisplay/LoadErrorDisplay';

const RestaurantLayoutClient = ({ children }) => {
  const { restaurantId } = useParams();
  const {
    data: restaurant,
    isLoading,
    isError,
  } = useGetRestaurantByIdQuery(restaurantId);

  return (
    <LoadErrorDisplay 
      data={restaurant}
      isLoading={isLoading}
      isError={isError}
    >
      <>
        <Restaurant restaurant={restaurant} />
        {children}
      </>
    </LoadErrorDisplay>
  );
}

export default RestaurantLayoutClient;