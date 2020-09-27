import React from 'react'
import Head from 'next/head'
import { NextSeo } from 'next-seo'
import { AppProps } from 'next/app'

import GlobalStyle from '../styles/global.styles'
import AppProvider from '~/hooks'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <meta name="theme-color" content="#121421" />
      </Head>
      <NextSeo
        title="Meu Menu"
        description="O jeito mais fácil de pedir delivery de comida. A maior lista de restaurantes online em sua cidade. Faça seu pedido pela internet e receba em casa."
        canonical="https://mmenu-cms.netlify.app/"
        openGraph={{
          url: 'https://mmenu-cms.netlify.app/',
          title:
            'Meu Menu',
          description:
            'O jeito mais fácil de pedir delivery de comida. A maior lista de restaurantes online em sua cidade. Faça seu pedido pela internet e receba em casa.',
          images: [{ url: 'https://devspace.app/img/cover.png' }],
          site_name: 'DevSpace',
          locale: 'pt_BR'
        }}
        twitter={{
          handle: '@ribeiroevandro',
          site: '@site',
          cardType: 'summary_large_image'
        }}
      />
      <GlobalStyle />
      <AppProvider>
        <Component {...pageProps} />
      </AppProvider>
    </>
  )
}

export default App
