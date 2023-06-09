import styled from 'styled-components';

export const FormFieldContainer = styled.div<{ width?: string }>`
  display: inline-block;
  width: ${({ width }) => (width ? `${width}px` : '100%')};
  margin-bottom: 20px;
`;
