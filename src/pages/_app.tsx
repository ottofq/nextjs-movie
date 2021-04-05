import React from 'react'

import { AppProps } from 'next/app'
import Router from 'next/router'
import { ThemeProvider } from 'styled-components'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import { FavoritesProvider } from '../context/FavoritesMovies'
import Layout from '../components/Layout'
import GlobalStyle from '../styles/global'
import dark from '../styles/dark'
import light from '../styles/light'

Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={dark}>
      <Layout>
        <FavoritesProvider>
          <Component {...pageProps} />
        </FavoritesProvider>
      </Layout>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default MyApp
