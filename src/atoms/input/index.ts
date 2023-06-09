import styled from 'styled-components';

type SizeInput = 'lg' | 'md' | 'sm';

type Props = {
  sizeInput: SizeInput;
  width?: string;
};

function getSizeInput(size: SizeInput) {
  const sizeInput = {
    lg: {
      padding: '0.75rem 1.5rem',
      fontSize: ' 1.2rem'
    },
    md: {
      padding: ' 0.5rem 1rem',
      fontSize: ' 1rem'
    },
    sm: {
      padding: '0.25rem 0.5rem',
      fontSize: ' 0.8rem'
    }
  };
  return sizeInput[size];
}

export const Input = styled.input<Props>`
  padding: ${({ sizeInput }) => getSizeInput(sizeInput).padding};
  border: 1px solid #e2e8f0;
  width: ${({ width }) => (width ? `${width}px` : '100%')};
  border-radius: 0.25rem;
  outline: none;
  transition: border-color 0.2s ease-in-out;
  font-size: ${({ sizeInput }) => getSizeInput(sizeInput).fontSize};
  &:focus {
    border-color: #4f46e5;
  }
  ::placeholder {
    color: #6f6f6f;
  }
`;

export const Label = styled.label<Props>`
  font-size: ${({ sizeInput }) => getSizeInput(sizeInput).fontSize};
  margin-bottom: 0.5rem;
  font-weight: bold;
  color: #333;
`;

export const InputContainer = styled.div<{ width?: string }>`
  display: inline-block;
  width: ${({ width }) => (width ? `${width}px` : '100%')};
  margin-bottom: 20px;
`;
