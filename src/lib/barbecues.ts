const LOCAL_BARBECUE_API_URL = 'http://localhost:3000/api/barbecues';

export async function getPaginatedBarbecues(
  page: number
): Promise<BarbecuesResponseAPI> {
  const url = `${LOCAL_BARBECUE_API_URL}?page=${page}`;
  const apiResponse = await fetch(url, {
    next: { tags: ['barbecues'], revalidate: 60 },
  });

  const barbecues: BarbecuesResponseAPI = await apiResponse.json();

  return barbecues;
}

export async function getOneBarbecue(barbecueId: string): Promise<BarbecueAPI> {
  const url = `${LOCAL_BARBECUE_API_URL}/${barbecueId}`;
  const apiResponse = await fetch(url, {
    next: { tags: ['barbecue'], revalidate: 60 },
  });

  const barbecue: BarbecueAPI = await apiResponse.json();

  return barbecue;
}

export async function createOneBarbecue(barbecue: Barbecue) {
  const url = LOCAL_BARBECUE_API_URL;

  const apiResponse = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    cache: 'no-store',
    body: JSON.stringify(barbecue),
  });

  const createdBarbecue = await apiResponse.json();

  return createdBarbecue;
}
