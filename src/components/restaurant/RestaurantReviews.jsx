import ReviewItemsContainer from '../Review/ReviewsContainer';

const RestaurantReviews = ({ reviewIds }) => (
  <ul>
    {reviewIds.map((reviewId) => (
      <ReviewItemsContainer key={reviewId} reviewId={reviewId} />
    ))}
  </ul>
);

export default RestaurantReviews;
