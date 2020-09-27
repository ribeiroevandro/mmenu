import React from 'react'
import Head from 'next/head'
import { AppProps } from 'next/app'

import GlobalStyle from '../styles/global.styles'
import AppProvider from '~/hooks'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <meta name="theme-color" content="#121421" />
      </Head>
      <GlobalStyle />
      <AppProvider>
        <Component {...pageProps} />
      </AppProvider>
    </>
  )
}

export default App
