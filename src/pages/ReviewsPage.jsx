import { useParams } from 'react-router';
import ReviewItemsContainer from '../components/Review/ReviewsContainer';

export const ReviewsPage = () => {
  const { restaurantId } = useParams();

  return (
    <>
      {restaurantId ? (
        <ReviewItemsContainer restaurantId={restaurantId} />
      ) : (
        <ReviewItemsContainer />
      )}
    </>
  );
};
