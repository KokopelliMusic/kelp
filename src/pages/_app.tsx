import Layout from '@/components/layout'
import '@/styles/globals.css'
import { wrapper } from "../store/store";
import { Session } from 'next-auth'
import { SessionProvider } from "next-auth/react"
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux';
import Head from 'next/head';

function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  const { store, props } = wrapper.useWrappedStore(pageProps)


  return <SessionProvider session={session}>
    <Head>
      <title>Kokopelli :: </title>
    </Head>
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  </SessionProvider>
}


export default App