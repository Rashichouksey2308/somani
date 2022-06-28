import { ThemeProvider, createGlobalStyle } from 'styled-components'
import { Helmet } from 'react-helmet'
import { Provider } from 'react-redux'
import styledNormalize from 'styled-normalize'
import Layout from '../src/components/Layout'
import { useStore } from 'store'
import '../src/components/styles/globals.scss'
import React, { useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import ErrorBoundary from '../src/components/ErrorBoundary'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import theme from 'theme'

const GlobalStyle = createGlobalStyle`
  ${styledNormalize}
`

export default function MyApp(props) {
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap.js')
  }, [])
  useEffect(() => {
    let isDark = localStorage.getItem('darkMode')
    console.log(
      localStorage.getItem('darkMode') == true,
      'lkk',
      typeof localStorage.getItem('darkMode'),
    )

    if (
      localStorage.getItem('darkMode') == 'true' ||
      localStorage.getItem('darkMode') == true
    ) {
      console.log('here', 'lkk2')
      document.body.classList.remove('light-mode')
      document.body.classList.add('dark-mode')
    } else {
      console.log('here', 'lkk4')
      document.body.classList.remove('dark-mode')
      document.body.classList.add('light-mode')
    }
  })

  //  useEffect(() => {
  //  toast.dark("Wow so easy!");
  //  })

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
          <ErrorBoundary>
            <Layout>
              <Component {...pageProps} />
            </Layout>
            <ToastContainer
              position="bottom-right"
              autoClose={5000}
              hideProgressBar
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
            />
          </ErrorBoundary>
        </Provider>
      </ThemeProvider>
    </>
  )
}
