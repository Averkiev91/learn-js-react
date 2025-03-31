import { useParams } from 'react-router';
import ReviewItemsContainer from '../components/Review/ReviewsContainer';

export const ReviewsPage = () => {
  const { restaurantId } = useParams();
  const reviewIds = location.state?.reviewIds;

  return (
    <>
      {restaurantId && reviewIds ? (
        <ReviewItemsContainer restaurantId={restaurantId} reviewIds={reviewIds} />
      ) : (
        <ReviewItemsContainer />
      )}
    </>
  );
};
