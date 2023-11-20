const LOCAL_CONTRIBUTIONS_API_URL = 'http://localhost:3000/api/contributions';

export async function createOneContribution(contribution: Contribution) {
  const url = LOCAL_CONTRIBUTIONS_API_URL;

  const apiResponse = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    cache: 'no-store',
    body: JSON.stringify(contribution),
  });

  const createdContribution: Contribution = await apiResponse.json();

  return createdContribution;
}

export async function updateOneContribution(
  updatedContribution: ContributionAPI
) {
  const url = `${LOCAL_CONTRIBUTIONS_API_URL}/${updatedContribution.id}`;

  const apiResponse = await fetch(url, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    cache: 'no-store',
    body: JSON.stringify(updatedContribution),
  });

  const createdContribution: ContributionAPI = await apiResponse.json();

  return createdContribution;
}

export async function deleteOneContribution(contributionId: number) {
  let url = `${LOCAL_CONTRIBUTIONS_API_URL}/${contributionId}`;

  await fetch(url, { method: 'DELETE', cache: 'no-store' });
}
