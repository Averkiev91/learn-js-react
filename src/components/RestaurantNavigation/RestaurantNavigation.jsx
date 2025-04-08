import NavigationTab from '../NavigationTab/NavigationTab';

const RestaurantNavigation = ({ restaurant }) => {
  const { id, name } = restaurant;

  return <NavigationTab path={id} title={name} />;
};

export default RestaurantNavigation;
