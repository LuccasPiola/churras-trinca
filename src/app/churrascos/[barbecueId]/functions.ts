type BarbecueComputedInformation = {
  totalValue: number;
  totalPeople: number;
};

export const computeBarbecueInformation = (
  computedInformation: BarbecueComputedInformation,
  contribution: ContributionAPI
) => {
  const { value } = contribution;
  const { totalPeople: oldTotalPeople, totalValue: oldTotalValue } =
    computedInformation;

  return {
    totalValue: oldTotalValue + value,
    totalPeople: oldTotalPeople + 1,
  };
};
