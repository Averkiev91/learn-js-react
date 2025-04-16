'use server';

import { revalidateTag } from 'next/cache';

export async function addReviewAction({ restaurantId, review }) {
  const response = await fetch(`http://localhost:3001/api/review/${restaurantId}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(review),
  });

  revalidateTag('getReviewsByRestaurantId');

  return response.json();
} 