import { useParams } from 'react-router';
import ReviewItemsContainer from '../components/Review/ReviewItemsContainer';

export const MenuPage = () => {
  const { reviewIds } = useParams();

  return (
    <>{reviewIds ? <ReviewItemsContainer reviewIds={reviewIds} /> : <ReviewItemsContainer />}</>
  );
};
