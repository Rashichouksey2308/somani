/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'
import Navbar from './NavBar'
import Sidebar from './Sidebar'
import Breadcrum from './Breadcrum'
import Footer from './Footer'
import styles from './index.module.scss'
import TermSheetPreview from '../components/TermSheetPreview'
import Login from '../components/Login'
import { useSelector, useDispatch } from 'react-redux'
import Cookies from 'js-cookie'
import { validateToken } from '../redux/authentication/actions'
// import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
// import 'react-pro-sidebar/dist/css/styles.css';

function Layout({ children }) {
  const [isLogin, setIsLogin] = useState(false)
  const sidebar = useSelector((state) => state.sidebar.show_sidebar)

  const dispatch = useDispatch()
  const isuserLoggedin = useSelector((state) => state.auth.isuserLoggedin)

  console.log('test build')

  useEffect(() => {
    const isuserlogged = Cookies.get('SOMANI')
    //dispatch(validateToken())

    setIsLogin(isuserlogged)

    if (isLogin) {
      console.log('login is true verifying token')
      dispatch(validateToken())
    }
  }, [isuserLoggedin, isLogin])

  return (
    <>
      {isLogin ? (
        <div className={styles.root_Container}>
          <div className={styles.navContainer}>
            <Navbar />
          </div>
          <div className={styles.wrapper}>
            <div className={styles.sidebarContainer}>
              {/* <Sidebar />  */}
              {sidebar ? <Sidebar /> : null}
            </div>

            <div
              className={`${styles.mainView_Container} card ${
                !sidebar ? styles.no_sidebar : null
              }`}
            >
              <Breadcrum />
              {children}
              <Footer />
              {/* <TermSheetPreview /> */}
              {/* <TermsheetPopUp /> */}
            </div>
          </div>
        </div>
      ) : (
        <Login />
      )}
    </>
  )
}

export default Layout
