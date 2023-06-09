import { H3 } from '@/atoms/heading';
import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { CardContainer, CardTitle, CardContent } from '../card';
import {
  CardCryptoAmount,
  CardMoneyAmount,
  CardSecondText,
  CardValueDown,
  CardValueUp
} from './style';
import { Text } from '@/atoms/text';

interface Props {
  walletName: string;
  amountFiat: string;
  amountCrypto: string;
  changePercent: string;
  typeChange: 'up' | 'down';
}
export const CardWallet: React.FC<Props> = ({
  walletName,
  amountCrypto,
  amountFiat,
  changePercent,
  typeChange
}: Props) => {
  const cardChangePercent = (typeChange: 'up' | 'down') => {
    const change = {
      up: (
        <CardValueUp>
          <FontAwesomeIcon icon={faCaretUp} width={12} /> {changePercent}
          <CardSecondText>{''}on 24 Hours</CardSecondText>
        </CardValueUp>
      ),
      down: (
        <CardValueDown>
          <FontAwesomeIcon icon={faCaretDown} width={12} /> {changePercent}{' '}
          <CardSecondText> on 24 Hours</CardSecondText>
        </CardValueDown>
      )
    };

    return change[typeChange];
  };

  return (
    <CardContainer>
      <CardTitle>{walletName}</CardTitle>
      <CardContent>
        <CardMoneyAmount>
          <H3>{amountFiat}</H3>
        </CardMoneyAmount>
        <Text
          style={{
            color: '#828181',
            fontSize: '0.769rem',
            marginTop: '10px'
          }}
        >
          <CardCryptoAmount>{amountCrypto}</CardCryptoAmount>
        </Text>

        <Text>{cardChangePercent(typeChange)}</Text>
      </CardContent>
    </CardContainer>
  );
};
