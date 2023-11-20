'use client';

import { type SubmitHandler, useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { useState, useTransition } from 'react';
import { createOneContribution } from '@/lib/contributions';
import * as S from './styles';

type Inputs = {
  personName: string;
  value: number;
};

type AddContributionProps = {
  barbecueId: string;
};

export default function AddContribution({ barbecueId }: AddContributionProps) {
  const router = useRouter();
  const [mode, setMode] = useState<'add' | 'adding'>('add');
  const [isPending, startTransition] = useTransition();
  const { register, handleSubmit, reset } = useForm<Inputs>();

  const setModeToAdding = () => setMode('adding');
  const submitHandler: SubmitHandler<Inputs> = async ({
    personName,
    value,
  }) => {
    const requestBody: Contribution = {
      personName,
      value,
      alreadyPaid: false,
      barbecueId: Number(barbecueId),
    };

    await createOneContribution(requestBody);
    setMode('add');
    reset();
    startTransition(() => {
      router.refresh();
    });
  };

  return (
    <div style={{ position: 'relative' }}>
      {mode === 'adding' && (
        <S.AddContributionForm onSubmit={handleSubmit(submitHandler)}>
          <div />
          <input
            placeholder="Nome do contribuinte"
            {...register('personName', { required: true })}
            required
            autoFocus
          />
          <input
            placeholder="R$"
            required
            type="number"
            {...register('value', { required: true, valueAsNumber: true })}
          />
          <input type="submit" disabled={isPending} />
        </S.AddContributionForm>
      )}

      <S.AddContributionButton
        disabled={mode === 'adding'}
        onClick={setModeToAdding}
      >
        +
      </S.AddContributionButton>
    </div>
  );
}
