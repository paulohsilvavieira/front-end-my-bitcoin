/* eslint-disable @next/next/no-title-in-document-head */

import { ButtonLink } from '@/atoms/button';
import FlexBox from '@/atoms/flex';
import { H3 } from '@/atoms/heading';
import { CardContainer } from '@/molecules/card';
import { CardWallet } from '@/molecules/card-wallet';
import { Container } from '@/molecules/container';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Container>
        <FlexBox justify="center" style={{ margin: '20px 0px' }}>
          <H3>Wallets</H3>
        </FlexBox>
        <FlexBox gap="10px" justify="space-between">
          <CardWallet
            walletName="Main Portifolio"
            amountCrypto="BTC 100.00000000"
            amountFiat="R$ 342,00"
            changePercent={'92%'}
            typeChange={'down'}
          />
          <CardWallet
            walletName="Money 2"
            amountCrypto="BTC 0.81271366"
            amountFiat="R$ 30.000,00"
            changePercent={'0%'}
            typeChange={'down'}
          />
          <CardWallet
            walletName="Money"
            amountCrypto="BTC 100"
            amountFiat="R$ 30.000,00"
            changePercent={'12%'}
            typeChange={'up'}
          />
          <CardWallet
            walletName="Money"
            amountCrypto="BTC 100"
            amountFiat="R$ 30.000,00"
            changePercent={'12%'}
            typeChange={'up'}
          />
        </FlexBox>
        <FlexBox justify="center" style={{ margin: '20px 0px' }}>
          <ButtonLink typeButton="primary" sizeButton="md">
            See All Wallets
          </ButtonLink>
        </FlexBox>
        <CardContainer width="100%"></CardContainer>
      </Container>
    </>
  );
}
