import { createSelector } from '@reduxjs/toolkit';

const selectApiQueries = (state) => state.api?.queries || {};

export const selectDishesFromRTQ = createSelector([selectApiQueries], (queries) => {
  const dishes = {};

  Object.values(queries)
    .filter((query) => query.status === 'fulfilled' && query.data)
    .forEach((query) => {
      const { endpointName, data } = query;

      if (endpointName === 'getDishByDishId' && data) {
        dishes[data.id] = data;
      }

      if (endpointName === 'getDishesByRestaurantId' && Array.isArray(data)) {
        data.forEach((dish) => (dishes[dish.id] = dish));
      }
    });

  return dishes;
});
