import { H6 } from '@/atoms/heading';
import styled from 'styled-components';

export const CardContainer = styled.div<{ width?: string }>`
  background-color: #ffffff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 6px;
  padding: 1rem;
  display: inline-block;
  width: ${({ width }) => width ?? '18rem'};
`;

export const CardTitle = styled(H6)`
  color: #6f6f6f;
  margin-bottom: 0.5rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const CardContent = styled.p`
  font-size: 1rem;
  color: #666666;
`;
