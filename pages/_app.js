import { ThemeProvider, createGlobalStyle } from 'styled-components'
import { Helmet } from 'react-helmet'
import { Provider } from 'react-redux'
import styledNormalize from 'styled-normalize'
import Layout from '../src/components/Layout'
import { useStore } from 'store'
import '../src/components/styles/globals.scss'
import React, { useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.css'

import theme from 'theme'

const GlobalStyle = createGlobalStyle`
  ${styledNormalize}
`

export default function MyApp(props) {
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap.js')
  }, [])

  const { Component, pageProps } = props
  const store = useStore(pageProps.state)
  const title = 'Somani'
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content={title} />
      </Helmet>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Provider store={store}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </Provider>
      </ThemeProvider>
    </>
  )
}
