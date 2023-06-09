import styled from 'styled-components';
import { theme } from '../utils/color';
type TypeButton = 'primary' | 'secondary' | 'danger' | 'success';

type SizeButton = 'lg' | 'md' | 'sm';

interface PropsButton {
  sizeButton: SizeButton;
  typeButton: TypeButton;
  fullButton?: boolean;
}

function getBackgroundColor(typeButton: TypeButton) {
  const backgroundColor = {
    primary: theme.colors.blue[600],
    secondary: theme.colors.gray[300],
    success: theme.colors.green[500],
    danger: theme.colors.red[500]
  };
  return backgroundColor[typeButton];
}

function getBackgroundColorActive(typeButton: TypeButton) {
  const backgroundColor = {
    primary: theme.colors.blue[800],
    secondary: theme.colors.gray[400],
    success: theme.colors.green[600],
    danger: theme.colors.red[600]
  };
  return backgroundColor[typeButton];
}

function getFontColor(typeButton: TypeButton) {
  const fontColor = {
    primary: theme.colors.indigo[100],
    secondary: theme.colors.blue[600],
    success: theme.colors.white,
    danger: theme.colors.white
  };
  return fontColor[typeButton];
}

function getSizePadding(size: SizeButton) {
  const sizePx = {
    lg: '1rem 2rem',
    md: '0.75rem 1.5rem',
    sm: '0.5rem 1rem'
  };
  return sizePx[size];
}

function getFontSize(size: SizeButton) {
  const sizePx = {
    lg: '1.25rem',
    md: '1rem',
    sm: '0.9rem'
  };
  return sizePx[size];
}

export const Button = styled.button<PropsButton>`
  background-color: ${({ typeButton }) => getBackgroundColor(typeButton)};
  width: ${({ fullButton }) => (fullButton ? '100%' : 'auto')};
  font-size: ${({ sizeButton }) => getFontSize(sizeButton)};
  color: ${({ typeButton }) => getFontColor(typeButton)};
  padding: ${({ sizeButton }) => getSizePadding(sizeButton)};
  height: auto;
  border: none;
  border-radius: 0.25rem;
  line-height: 12px;
  text-align: center;
  font-weight: 500;
  &:active {
    background-color: ${({ typeButton }) =>
      getBackgroundColorActive(typeButton)};
  }
  &:hover {
    background-color: ${({ typeButton }) =>
      getBackgroundColorActive(typeButton)};
  }
  cursor: pointer;
`;
export const ButtonLink = styled.a<PropsButton>`
  text-decoration: none;
  background-color: ${({ typeButton }) => getBackgroundColor(typeButton)};
  width: ${({ fullButton }) => (fullButton ? '100%' : 'auto')};
  font-size: ${({ sizeButton }) => getFontSize(sizeButton)};
  color: ${({ typeButton }) => getFontColor(typeButton)};
  padding: ${({ sizeButton }) => getSizePadding(sizeButton)};
  height: auto;
  border: none;
  border-radius: 0.25rem;
  line-height: 12px;
  text-align: center;
  font-weight: 500;
  &:active {
    background-color: ${({ typeButton }) =>
      getBackgroundColorActive(typeButton)};
  }
  &:hover {
    background-color: ${({ typeButton }) =>
      getBackgroundColorActive(typeButton)};
  }
  cursor: pointer;
`;
