import styled from 'styled-components';

type SizeInput = 'lg' | 'md' | 'sm';

type Props = {
  sizeInput: SizeInput;
};

function getSizeInput(size: SizeInput) {
  const sizeInput = {
    lg: {
      padding: ' 0.75rem 1rem',
      fontSize: ' 1.125rem'
    },
    md: {
      padding: ' 0.5rem 0.75rem',
      fontSize: ' 1rem'
    },
    sm: {
      padding: ' 0.375rem 0.5rem',
      fontSize: ' 0.875rem'
    }
  };
  return sizeInput[size];
}

export const Input = styled.input<Props>`
  padding: ${({ sizeInput }) => getSizeInput(sizeInput)};
  font-size: 0.875rem;
`;

export const Label = styled.label`
  font-size: 1rem;
  font-weight: bold;
`;
