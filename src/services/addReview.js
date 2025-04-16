export const addReview = async (restaurantId, review) => {
  const response = await fetch(`http://localhost:3001/api/review/${restaurantId}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(review),
    next: { tags: ['addReview'] },
  });

  return response.json();
};
