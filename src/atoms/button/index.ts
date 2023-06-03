import styled from 'styled-components';
import { theme } from '../utils/color';
type TypeButton = 'primary' | 'secondary' | 'danger' | 'success';

type SizeButton = 'lg' | 'md' | 'sm';

export interface PropsButton {
  sizeButton: SizeButton;
  typeButton: TypeButton;
}
export function getBackgroundColor(typeButton: TypeButton) {
  const backgroundColor = {
    primary: theme.colors.purple[600],
    secondary: theme.colors.gray[300],
    success: theme.colors.green[500],
    danger: theme.colors.red[500]
  };
  return backgroundColor[typeButton];
}

export function getFontColor(typeButton: TypeButton) {
  const backgroundColor = {
    primary: theme.colors.indigo[100],
    secondary: theme.colors.purple[600],
    success: theme.colors.indigo[100],
    danger: theme.colors.indigo[100]
  };
  return backgroundColor[typeButton];
}

export function getSizeWidth(size: SizeButton) {
  const sizePx = {
    lg: '115px',
    md: '86px',
    sm: '70px'
  };
  return sizePx[size];
}

export function getSizeHeight(size: SizeButton) {
  const sizePx = {
    lg: '30px',
    md: '24px',
    sm: '18px'
  };
  return sizePx[size];
}

export function getBorderRadius(size: SizeButton) {
  const sizePx = {
    lg: '4px',
    md: '2.99px',
    sm: '2.29px'
  };
  return sizePx[size];
}

export const Button = styled.button<PropsButton>`
  background-color: ${({ typeButton }) => getBackgroundColor(typeButton)};
  width: ${({ sizeButton }) => getSizeWidth(sizeButton)};
  heigth: ${({ sizeButton }) => getSizeHeight(sizeButton)};
  border-radius: ${({ sizeButton }) => getBorderRadius(sizeButton)};
`;
