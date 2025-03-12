const ReviewListItem = ({ review }) => {
  return (
    <li>
      {review.user}: {review.text} (Рейтинг: {review.rating})
    </li>
  );
};

export default ReviewListItem;
