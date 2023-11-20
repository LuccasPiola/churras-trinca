import { revalidateTag } from 'next/cache';

const API_URL = 'http://localhost:3004';

type DELETE_ONE_CONTRIBUTION_PARAMS = {
  params: {
    contributionId: string;
  };
};

export async function PUT(request: Request) {
  const requestBody: ContributionAPI = await request.json();
  const updatedContribution = requestBody;

  const url = `${API_URL}/contributions/${updatedContribution.id}`;

  const apiResponse = await fetch(url, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(updatedContribution),
  });

  if (!apiResponse.ok) {
    throw new Error('Failed to update contribution');
  }

  const finalResponse: ContributionAPI = await apiResponse.json();
  revalidateTag('barbecue');

  return Response.json(finalResponse);
}

export async function DELETE(
  _: Request,
  { params }: DELETE_ONE_CONTRIBUTION_PARAMS
) {
  const { contributionId } = params;

  const url = `${API_URL}/contributions/${contributionId}`;

  const apiResponse = await fetch(url, {
    method: 'DELETE',
  });

  if (!apiResponse.ok) {
    throw new Error('Failed to delete contribution');
  }
  revalidateTag('barbecue');
  revalidateTag('barbecues');

  return Response.json({});
}
