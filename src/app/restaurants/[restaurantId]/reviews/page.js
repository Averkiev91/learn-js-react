import ReviewsPageClient from "../../../../components/ReviewsPageClient/ReviewsPageClient";

const ReviewsPage = ({ params }) => {
  const { restaurantId } = params;

  return <ReviewsPageClient restaurantId={restaurantId} />;
};

export default ReviewsPage;
