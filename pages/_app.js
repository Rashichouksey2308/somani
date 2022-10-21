import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { Helmet } from 'react-helmet';
import { Provider } from 'react-redux';
import styledNormalize from 'styled-normalize';
import Layout from '../src/components/Layout';
import { useStore } from 'store';
import '../src/components/styles/globals.scss';
import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import ErrorBoundary from '../src/components/ErrorBoundary';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import router from 'next/router';
import theme from 'theme';
import { useDispatch, useSelector } from 'react-redux';
import { ChangeTheme, setTheme } from '../src/redux/userData/action';
import {
  isMobile,
  settingMobile,
} from '../src/redux/toggleState/Action/action';
import Loader from '../src/components/Loader';
const GlobalStyle = createGlobalStyle`
  ${styledNormalize}
`;

export default function MyApp(props) {
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap.js');
  }, []);

  //  useEffect(() => {
  //  toast.dark("Wow so easy!");
  //  })

  const { Component, pageProps } = props;
  const store = useStore(pageProps.state);
  const title = 'Somani';
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
          {/* <Loader /> */}
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
        </Provider>
      </ThemeProvider>
    </>
  );
}
