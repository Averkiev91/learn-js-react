const Reviews = ({ review }) => {
  return (
    <li>
      {review.user}: {review.text} (Рейтинг: {review.rating})
    </li>
  );
};

export default Reviews;
