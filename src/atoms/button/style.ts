import styled from 'styled-components';
type Color = 'primary' | 'secondary';

type Size = 'lg' | 'md' | 'sm';

export interface PropsButton {
  size: Size;
  color: Color;
}
export function getColor(color: Color) {
  const colorRGB = {
    primary: '',
    secondary: '',
    success: '',
    error: '',
    warning: '',
    info: '',
    default: ''
  };
  return colorRGB[color];
}

export function getSize(size: Size) {
  const sizePx = {
    lg: '',
    md: '',
    sm: ''
  };
  return sizePx[size];
}

export const ButtonStyled = styled.button<PropsButton>`
  background-color: ${({ color }) => getColor(color)};
  width: ${({ size }) => getSize(size)};
`;
