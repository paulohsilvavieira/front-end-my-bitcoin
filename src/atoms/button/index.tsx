import { ButtonStyled } from '@/atoms/button/style';
interface Props {
  text: string;
}
export function Button({ text }: Props) {
  return (
    <ButtonStyled color="primary" size="lg">
      {text}
    </ButtonStyled>
  );
}
