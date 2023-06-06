import { TopMenuBar } from '@/molecules/topbar';
import {
  faArrowUp,
  faArrowDown,
  faWallet,
  faCartShopping,
  faChartLine
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Home() {
  const itens = [
    {
      label: 'Home Broker',
      url: '/broker',
      icon: (
        <FontAwesomeIcon icon={faChartLine} style={{ marginRight: '10px' }} />
      )
    },
    {
      label: 'Markets',
      url: '/markets',
      icon: (
        <FontAwesomeIcon
          icon={faCartShopping}
          style={{ marginRight: '10px' }}
        />
      )
    },
    {
      label: 'Deposits',
      url: '/deposits',
      icon: (
        <FontAwesomeIcon icon={faArrowDown} style={{ marginRight: '10px' }} />
      )
    },
    {
      label: 'Withdraws',
      url: '/withdraws',
      icon: <FontAwesomeIcon icon={faArrowUp} style={{ marginRight: '10px' }} />
    },

    {
      label: 'Wallets',
      url: '/wallets',
      icon: <FontAwesomeIcon icon={faWallet} style={{ marginRight: '10px' }} />
    }
  ];
  return <TopMenuBar itens={itens} />;
}
