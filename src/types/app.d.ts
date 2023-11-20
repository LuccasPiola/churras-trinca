type Contribution = {
  personName: string;
  value: number;
  alreadyPaid?: boolean;
  barbecueId: number;
};

type Barbecue = Omit<BarbecueAPI, 'contributions' | 'id'>;

type PageArguments = {
  params: {};
  searchParams?: { [key: string]: string | string[] | undefined };
};
