import ReviewsPageClient from '../../../../components/ReviewsPageClient/ReviewsPageClient';
import { getReviewsByRestaurantId } from '../../../../services/getReviewsByRestaurantId';

const ReviewsPage = async ({ params }) => {
  const { restaurantId } = await params;
  const reviews = await getReviewsByRestaurantId(restaurantId);

  return <ReviewsPageClient reviews={reviews} restaurantId={restaurantId} />;
};

export default ReviewsPage;
