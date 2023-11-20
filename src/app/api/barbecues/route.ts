import { revalidateTag } from 'next/cache';

const API_URL = 'http://localhost:3004';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const page = searchParams.get('page');

  const url = `${API_URL}/barbecues?_page=${page}&_limit=4&_embed=contributions`;

  const apiResponse = await fetch(url, {
    cache: 'no-store',
  });

  if (!apiResponse.ok) {
    throw new Error('Failed to fetch barbecues');
  }

  if (apiResponse.status === 404) {
    throw new Error('No barbecue found');
  }

  const count = apiResponse.headers.get('X-Total-Count');
  const barbecues: BarbecueAPI[] = await apiResponse.json();

  const finalResponse: BarbecuesResponseAPI = {
    count: Number(count),
    barbecues,
  };

  return Response.json(finalResponse);
}

export async function POST(request: Request) {
  const url = `${API_URL}/barbecues`;
  const barbecueToCreate: Barbecue = await request.json();

  const apiResponse = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(barbecueToCreate),
  });

  if (!apiResponse.ok) {
    throw new Error('Failed to create barbecue');
  }

  const finalResponse: BarbecueAPI = await apiResponse.json();
  revalidateTag('barbecues');
  revalidateTag('barbecue');

  return Response.json(finalResponse);
}
