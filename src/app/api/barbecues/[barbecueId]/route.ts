const API_URL = 'http://localhost:3004';

type GET_ONE_BARBECUE_PARAMS = {
  params: {
    barbecueId: string;
  };
};

export async function GET(_: Request, { params }: GET_ONE_BARBECUE_PARAMS) {
  const { barbecueId } = params;

  const url = `${API_URL}/barbecues/${barbecueId}?_embed=contributions`;

  const apiResponse = await fetch(url, {
    cache: 'no-store',
  });

  if (!apiResponse.ok) {
    throw new Error('Failed to fetch barbecue ' + barbecueId);
  }

  const barbecue: BarbecueAPI = await apiResponse.json();

  return Response.json(barbecue);
}
