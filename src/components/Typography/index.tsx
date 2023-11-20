import { StyledTag } from './styles';

export default function Typography(props: TypographyProps) {
  const { tag, textType, size, children, isDashed } = props;

  return (
    <StyledTag tag={tag} textType={textType} size={size} isDashed={isDashed}>
      {children}
    </StyledTag>
  );
}
