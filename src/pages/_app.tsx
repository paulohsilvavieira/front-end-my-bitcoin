import { TopMenuBar } from '@/molecules/topbar';
import {
  faChartLine,
  faCartShopping,
  faArrowDown,
  faArrowUp,
  faWallet
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { AppProps } from 'next/app';
import React from 'react';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Roboto';
  }
  body{
    background-color: #f2f2f2;
  }
`;
export default function App({ Component, pageProps }: AppProps) {
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
  return (
    <React.Fragment>
      <GlobalStyle />
      <TopMenuBar itens={itens} />
      <Component {...pageProps} />
    </React.Fragment>
  );
}
