type TextElement =
  | 'p'
  | 'span'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'strong';

type TextType = 'title' | 'semi-title' | 'text';

type TypographyProps = {
  tag: TextElement;
  textType: TextType;
  size: number;
  children: string;
  isDashed?: boolean;
};
