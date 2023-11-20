import { HTMLProps } from 'react';
import * as S from './styles';

interface InputProps extends HTMLProps<HTMLInputElement> {
  label: string;
}

export default function Input({ label, name, ...rest }: InputProps) {
  return (
    <S.InputLabel htmlFor={name}>
      {label}
      <S.Input name={name} {...rest} />
    </S.InputLabel>
  );
}
