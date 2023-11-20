import Typography from '@/components/Typography';
import { BarbecueInformationWithIcon } from '@/components/Barbecue';
import Contribution from '@/components/Contribution';
import { convertNumberIntoCurrency } from '@/utils/currency';
import { computeBarbecueInformation } from './functions';
import AddContribution from './AddContribution';
import * as S from './styles';

type BarbecueProps = {
  barbecue: BarbecueAPI;
};

const INITIAL_COMPUTED_STATE = {
  totalValue: 0,
  totalPeople: 0,
};

export default function Barbecue({ barbecue }: BarbecueProps) {
  const { date, contributions, name, info, id } = barbecue;

  const formattedDate = new Date(date).toLocaleDateString('pt-br');

  const barbecueComputedInformation = contributions.reduce(
    computeBarbecueInformation,
    INITIAL_COMPUTED_STATE
  );
  const { totalPeople, totalValue } = barbecueComputedInformation;

  return (
    <S.Wrapper>
      <S.BarbecueDetails>
        <S.BarbecueMainInformation>
          <div>
            <Typography tag="h2" size={1.5} textType="title">
              {formattedDate}
            </Typography>
            <Typography tag="h3" size={2} textType="semi-title">
              {name}
            </Typography>
            {info && (
              <Typography tag="h4" size={1} textType="text">
                {info}
              </Typography>
            )}
          </div>
          <div>
            <BarbecueInformationWithIcon
              icon="people"
              text={totalPeople.toString()}
            />
            <BarbecueInformationWithIcon
              icon="money"
              text={convertNumberIntoCurrency(totalValue)}
            />
          </div>
        </S.BarbecueMainInformation>
        <S.Contributions $hasInfo={Boolean(info)}>
          {contributions.map((contribution, index) => (
            <Contribution
              key={contribution.personName + index}
              contribution={contribution}
            />
          ))}

          <AddContribution barbecueId={id.toString()} />
        </S.Contributions>
      </S.BarbecueDetails>
    </S.Wrapper>
  );
}
