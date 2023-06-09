import styled from 'styled-components';
import { H6 } from '@/atoms/heading';
import { theme } from '@/atoms/utils/color';

export const CardTitleWallet = styled(H6)`
  color: #6f6f6f;
  margin-bottom: 0.5rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const CardBodyWallet = styled.div`
  background-color: #ffffff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 6px;
  padding: 1rem;
  display: inline-block;
  width: 18rem;
`;

export const CardContentWallet = styled.p`
  font-size: 1rem;
  color: #666666;
`;

export const CardMoneyAmount = styled.span`
  font-weight: 'bold';
  color: #333;
`;

export const CardCryptoAmount = styled.span``;

export const CardSecondText = styled.span`
  color: #6f6f6f;
  margin-left: 5px;
`;

export const CardValueUp = styled.span`
  color: ${() => theme.colors.green[500]};
  font-weight: 'bold';
`;

export const CardValueDown = styled.span`
  color: ${() => theme.colors.red[500]};
  font-weight: 'bold';
`;
