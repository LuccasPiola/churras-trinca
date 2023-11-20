import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { convertNumberIntoCurrency } from '@/utils/currency';
import Typography from '@/components/Typography';
import * as S from './styles';

const ICON_DICTIONARY = {
  people: '/assets/icon_people.svg',
  money: '/assets/icon_money.svg',
};

type BarbecueProps = {
  barbecue: BarbecueAPI;
};

type BarbecueInformationWithIconProps = {
  icon: keyof typeof ICON_DICTIONARY;
  text: string;
};

export function BarbecueInformationWithIcon(
  props: BarbecueInformationWithIconProps
) {
  const { icon, text } = props;

  return (
    <S.InformationWithIcon>
      <Image src={ICON_DICTIONARY[icon]} alt="" width={18} height={18} />
      <Typography tag="span" size={1.3} textType="text">
        {text}
      </Typography>
    </S.InformationWithIcon>
  );
}

export default function Barbecue({ barbecue }: BarbecueProps) {
  const { date, contributions, name, id } = barbecue;
  const router = useRouter();
  const formattedDate = new Date(date).toLocaleDateString('pt-br');
  const totalContributionsValue = contributions.reduce(
    (sum, contribution) => sum + contribution.value,
    0
  );

  const handleClick = () => router.push(`/churrascos/${id}`);

  return (
    <S.Wrapper onClick={handleClick}>
      <Typography tag="h2" size={2} textType="title">
        {formattedDate}
      </Typography>
      <Typography tag="h3" size={1.5} textType="semi-title">
        {name}
      </Typography>

      <S.Details>
        <BarbecueInformationWithIcon
          icon="people"
          text={contributions.length.toString()}
        />
        <BarbecueInformationWithIcon
          icon="money"
          text={convertNumberIntoCurrency(totalContributionsValue)}
        />
      </S.Details>
    </S.Wrapper>
  );
}
