import NavigationTab from '../NavigationTab/NavigationTab';

const RestaurantNavigation = ({ restaurant }) => {
  const { id, name } = restaurant;

  return <NavigationTab path={`/restaurants/${id}`} title={name} />;
};

export default RestaurantNavigation;
