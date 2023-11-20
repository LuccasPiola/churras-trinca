type ContributionAPI = {
  id: number;
  barbecueId: number;
  personName: string;
  value: number;
  alreadyPaid: boolean;
};

type BarbecueAPI = {
  id: number;
  name: string;
  date: number;
  info: string;
  contributions: ContributionAPI[];
};

type BarbecuesResponseAPI = {
  count: number;
  barbecues: BarbecueAPI[];
};
