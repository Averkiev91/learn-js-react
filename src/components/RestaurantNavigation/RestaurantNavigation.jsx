import { selectRestaurantById } from '../../store/slices/restaurantsSlice';
import { useSelector } from 'react-redux';
import NavigationTab from '../NavigationTab/NavigationTab';

const RestaurantNavigation = ({ restaurantId }) => {
  const restaurant = useSelector((state) => selectRestaurantById(state, restaurantId));
  const { name } = restaurant;

  return <NavigationTab path={restaurantId} title={name} />;
};

export default RestaurantNavigation;
