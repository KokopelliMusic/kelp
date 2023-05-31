import Head from 'next/head';

export function Title({ children }: { children: string }) {
  return <Head><title>Kokopelli :: {children}</title></Head>
}