import NavigationTab from '../NavigationTab/NavigationTab';

const Restaurant = ({ restaurant }) => {
  if (!restaurant) {
    return;
  }
  const { id, name } = restaurant;

  return (
    <>
      <h2>{name}</h2>
      <div style={{ display: 'flex', gap: '10px' }}>
        <NavigationTab path={`/restaurants/${id}/menu`} title='Menu' />
        <NavigationTab path={`/restaurants/${id}/reviews`} title='Reviews' />
      </div>
    </>
  );
};

export default Restaurant;
