import React, { useState, useEffect } from 'react'
import Navbar from './NavBar/index'
import Sidebar from './Sidebar/index'
import Breadcrum from './Breadcrum/index'
import Footer from './Footer/index'
import styles from './index.module.scss'
import TermSheetPreview from '../components/TermSheetPreview'
import Login from '../components/Login'
import {useSelector} from 'react-redux'
import Cookies from 'js-cookie'



function Layout({ children }) {
  const [isLogin, setIsLogin] = useState(false)

  const isuserLoggedin = useSelector((state) => state.auth.isuserLoggedin)
  
  useEffect(() => {
  const isuserloggedin =  Cookies.get('refreshToken')
    setIsLogin(isuserloggedin)
  }, [isuserLoggedin]);
 
  // function login() {
  //   localStorage.setItem('login', true)
  //   setIsLogin(true)
  // }

  //const sidebar = useSelector((state) => state.sidebar);
  //console.log(sidebar)

  useEffect(async() => {
    const loginStatus = await Cookies.get('jwtAccessToken')
    console.log(loginStatus, "login status")
    setIsLogin(loginStatus)
  }, [])
  
  return (
    <>
      {isLogin ? (
        <div className={styles.root_Container}>
          <div className={styles.navContainer}>
            <Navbar />
          </div>
          <div className={styles.wrapper}>
            <div className={styles.sidebarContainer}>
             <Sidebar/>
            </div>
            <div className={styles.mainView_Container}>
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
