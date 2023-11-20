'use client';

import { type SubmitHandler, useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import ReactModal from 'react-modal';
import { createOneBarbecue } from '@/lib/barbecues';
import Typography from '@/components/Typography';
import * as S from './styles';
import useModalState from './hooks';

type ModalProps = {
  isOpen?: boolean;
  onRequestClose: () => void;
};

type Inputs = {
  date: Date;
  name: string;
  info: string;
};

ReactModal.setAppElement('#root');

export default function Modal({ isOpen, onRequestClose }: ModalProps) {
  const { actualStyles } = useModalState(!!isOpen);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { isValid },
    reset,
  } = useForm<Inputs>();

  const handleCloseDialog = () => {
    reset();
    onRequestClose();
  };

  const submitHandler: SubmitHandler<Inputs> = async ({ date, info, name }) => {
    const requestBody: Barbecue = {
      date: date.getTime(),
      info,
      name,
    };
    await createOneBarbecue(requestBody);
    router.refresh();
    handleCloseDialog();
  };

  return (
    <ReactModal
      isOpen={!!isOpen}
      onRequestClose={() => handleCloseDialog()}
      style={actualStyles}
      shouldCloseOnOverlayClick
      contentLabel="Adicionar novo churrasco"
    >
      <S.ImageWrapper>
        <S.Form onSubmit={handleSubmit(submitHandler)}>
          <Typography tag="h2" size={2} textType="title">
            Adicionar novo Churras
          </Typography>

          <Typography tag="h3" size={1.2} textType="semi-title">
            Quando será?
          </Typography>
          <S.DatePicker
            type="date"
            {...register('date', { required: true, valueAsDate: true })}
            required
          />

          <Typography tag="h3" size={1.2} textType="semi-title">
            Descreva brevemente o motivo:
          </Typography>
          <S.Input
            placeholder="Motivo"
            {...register('name', { required: true })}
            required
          />

          <Typography tag="h3" size={1.2} textType="semi-title">
            Informações adicionais:
          </Typography>
          <S.TextArea
            {...register('info', { maxLength: 165 })}
            placeholder="hidden"
            maxLength={165}
          />

          <S.AddButtonIcon>
            <S.AddButton type="submit" disabled={!isValid} />
          </S.AddButtonIcon>
        </S.Form>
      </S.ImageWrapper>
    </ReactModal>
  );
}
