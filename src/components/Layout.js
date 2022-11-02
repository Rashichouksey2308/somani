/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import Navbar from './NavBar';
import Sidebar from './Sidebar';
import Breadcrum from './Breadcrum';
import Footer from './Footer';
import styles from './index.module.scss';
import Login from '../components/Login';
import { useDispatch, useSelector } from 'react-redux';
import Cookies from 'js-cookie';
import Loader from '../components/Loader';
import { validateToken } from '../redux/authentication/actions';
import { ErrorBoundary } from '../components/ErrorBoundary';
// import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
// import 'react-pro-sidebar/dist/css/styles.css';
import router from 'next/router';

function Layout({ children }) {
  const [isQuery, setQuery] = useState(null);
  const [isLogin, setIsLogin] = useState(false);
  const sidebar = useSelector((state) => state.sidebar.show_sidebar);
  const isMobile = useSelector((state) => state.sidebar.isMobile);

  const dispatch = useDispatch();
  const isuserLoggedin = useSelector((state) => state.auth.isuserLoggedin);

  useEffect(() => {
    const isuserlogged = Cookies.get('SOMANI');
    //dispatch(validateToken())

    setIsLogin(isuserlogged);

    if (isLogin) {
      dispatch(validateToken());
    }
  }, [isuserLoggedin, isLogin]);

  useEffect(() => {
    const doMagic = () => {};

    router.events.on('routeChangeStart', doMagic); // add listener
    router.events.on('routeChangeComplete', (url, { shallow }) => {
      setQuery(router.asPath);
    });
    return () => {
      router.events.off('routeChangeStart', doMagic); // remove listener
    };
  }, []);

  return (
    <>
      {isLogin ? (
        <div className={styles.root_Container}>
          <div className={styles.navContainer}>
            <Navbar />
          </div>
          <div className={styles.wrapper}>
            {isMobile ? (
              <div
                className={`${styles.sidebarContainer_mobile} ${
                  !sidebar ? styles.collapse_sidebar_mobile : null
                }  `}
              >
                {/* <Sidebar />  */}
                <Sidebar />
              </div>
            ) : (
              <div
                className={`${styles.sidebarContainer} ${
                  !sidebar ? styles.collapse_sidebar : null
                }  `}
              >
                {/* <Sidebar />  */}
                <Sidebar />
              </div>
            )}

            <div
              className={`${styles.mainView_Container} card_main ${
                !sidebar ? styles.no_sidebar : null
              }
              ${isMobile ? styles.no_sidebar_mobile : null}
              `}
            >
              <Loader />
              <ErrorBoundary>
                <Breadcrum isQuery={isQuery} />
                {children}
                <Footer />
              </ErrorBoundary>

              {/* <TermSheetPreview /> */}
              {/* <TermsheetPopUp /> */}
            </div>
          </div>
        </div>
      ) : (
        // <Loader />
        <Login />
      )}
    </>
  );
}

export default Layout;
