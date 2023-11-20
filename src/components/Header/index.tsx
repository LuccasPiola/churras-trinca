import Typography from '@/components/Typography';
import * as S from './styles';

export default function Header() {
  return (
    <S.Header>
      <Typography tag="h1" textType="title" size={3}>
        Agenda de Churras
      </Typography>
    </S.Header>
  );
}
