import { getPaginatedBarbecues } from '@/lib/barbecues';
import Barbecues from './client';

export default async function Churrascos({ searchParams }: PageArguments) {
  const page = Number(searchParams?.page) || 1;

  const { barbecues, count } = await getPaginatedBarbecues(page);

  return <Barbecues barbecues={barbecues} count={count} />;
}
