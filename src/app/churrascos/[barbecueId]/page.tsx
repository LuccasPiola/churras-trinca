import { getOneBarbecue } from '@/lib/barbecues';
import Barbecue from './client';

type BarbecueProps = {
  params: {
    barbecueId: string;
  };
};

export default async function Churrasco({ params }: BarbecueProps) {
  const { barbecueId } = params;

  const barbecue = await getOneBarbecue(barbecueId);

  return <Barbecue barbecue={barbecue} />;
}
