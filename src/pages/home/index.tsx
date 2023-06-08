/* eslint-disable @next/next/no-title-in-document-head */
import { H1 } from '@/atoms/heading';

import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>

      <H1>Hello World!</H1>
    </>
  );
}
