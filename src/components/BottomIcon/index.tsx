'use client';

import * as S from './styles';

type BottomIconProps = {
  onClick?: () => void;
};

export default function BottomIcon({ onClick }: BottomIconProps) {
  return (
    <S.BottomIcon onClick={onClick}>
      <span>+</span>
    </S.BottomIcon>
  );
}
