'use client';

import { useRouter } from 'next/navigation';
import { useState, useTransition } from 'react';
import { convertNumberIntoCurrency } from '@/utils/currency';
import {
  deleteOneContribution,
  updateOneContribution,
} from '@/lib/contributions';
import Typography from '@/components/Typography';
import * as S from './styles';

type ContributionProps = {
  contribution: ContributionAPI;
};

export default function Contribution({ contribution }: ContributionProps) {
  const router = useRouter();
  const { personName, value, alreadyPaid, id } = contribution;
  const [isChecked, setIsChecked] = useState(alreadyPaid);
  const [isFetching, setIsFetching] = useState(false);
  const [isPending, startTransition] = useTransition();

  const isMutating = isFetching || isPending;

  const handleChangeIsPaid = async () => {
    setIsFetching(() => true);
    const updatedContribution = await updateOneContribution({
      ...contribution,
      alreadyPaid: !isChecked,
    });

    setIsChecked(updatedContribution.alreadyPaid);
    setIsFetching(() => false);
  };

  const handleDeleteContribution = async () => {
    setIsFetching(() => true);
    await deleteOneContribution(id);
    setIsFetching(() => false);

    startTransition(() => {
      router.replace('?u=' + Math.random());
    });
  };

  return (
    <S.Wrapper>
      <S.Checkbox
        type="checkbox"
        checked={isChecked}
        onChange={handleChangeIsPaid}
        disabled={isMutating}
      />
      <Typography tag="h3" size={1.1} textType="semi-title">
        {personName}
      </Typography>
      <Typography tag="h4" size={1} textType="semi-title" isDashed={isChecked}>
        {convertNumberIntoCurrency(value)}
      </Typography>
      <S.DeleteButton disabled={isMutating} onClick={handleDeleteContribution}>
        x
      </S.DeleteButton>
    </S.Wrapper>
  );
}
