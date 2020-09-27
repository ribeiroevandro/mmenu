import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import { NextSeo } from 'next-seo'

import * as S from './styles'

interface MetaProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
}

interface LayoutProps {
  children: React.ReactNode;
  metas: MetaProps;
}

const Layout = ({ children, metas }: LayoutProps) => (
  <>
    <Head>
      <meta name="theme-color" content="#121421" />
      <link rel="shortcut icon" href="/static/img/icon-512.png" />
      <link rel="apple-touch-icon" href="/static/img/icon-512.png" />
      <link rel="manifest" href="/static/manifest.json" />
    </Head>
    <NextSeo
      title={`Meu Menu - ${metas.title}`}
      description={metas.description}
      canonical={`https://mmenu-cms.netlify.app/${metas.url}`}
      openGraph={{
        url: `https://mmenu-cms.netlify.app/${metas.url}`,
        title: `Meu Menu - ${metas.title}`,
        description: metas.description,
        images: [{ url: `https://mmenu-cms.netlify.app${metas.image}` }],
        site_name: 'Meu Menu',
        locale: 'pt_BR',
        type: 'website'
      }}
      twitter={{
        handle: '@ribeiroevandro',
        site: '@site',
        cardType: 'summary_large_image',
      }}
    />
    <S.Nav>
      <ul>
        <li>
          <Link href="/">
            <a>home</a>
          </Link>
        </li>
        <li>
          <Link href="/products">
            <a>Cardápio</a>
          </Link>
        </li>
      </ul>
    </S.Nav>
    <S.Container>{children}</S.Container>
  </>
)

export default Layout
