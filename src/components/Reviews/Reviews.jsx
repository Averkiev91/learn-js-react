import Review from '../Review/Review';
import ReviewItemsContainer from '../Review/ReviewsContainer';

const Reviews = ({ reviews }) => {
  return (
    <div>
      <h3>Отзывы</h3>
      {reviews.map((review) => (
        <ReviewItemsContainer key={review} reviewId={review} />
      ))}
    </div>
  );
};

export default Reviews;
