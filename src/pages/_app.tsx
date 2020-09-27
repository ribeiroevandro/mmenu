import React from 'react'
import Head from 'next/head'
import { NextSeo } from 'next-seo'
import { AppProps } from 'next/app'

import GlobalStyle from '../styles/global.styles'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <meta name="theme-color" content="#121421" />
      </Head>
      <NextSeo
        title="DevSpace - Uma nova experiência ao buscar novas oportunidades..."
        description="Profissionais de Front-End, Back-End, Mobile e demais áreas, com o DevSpace você terá a melhor experiência ao buscar uma nova oportunidade."
        canonical="https://devspace.app/"
        openGraph={{
          url: 'https://devspace.app/',
          title:
            'DevSpace - Uma nova experiência ao buscar novas oportunidades...',
          description:
            'Profissionais de Front-End, Back-End, Mobile e demais áreas, com o DevSpace você terá a melhor experiência ao buscar uma nova oportunidade.',
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
      <Component {...pageProps} />
    </>
  )
}

export default App