import { revalidateTag } from 'next/cache';

const API_URL = 'http://localhost:3004';

export async function POST(request: Request) {
  const url = `${API_URL}/contributions`;
  const contributionToCreate: Contribution = await request.json();

  const apiResponse = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(contributionToCreate),
  });

  if (!apiResponse.ok) {
    throw new Error('Failed to create contribution');
  }

  const finalResponse: ContributionAPI = await apiResponse.json();
  revalidateTag('barbecue');
  revalidateTag('barbecues');

  return Response.json(finalResponse);
}
