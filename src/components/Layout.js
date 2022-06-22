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
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




function Layout({ children }) {
  const [isLogin, setIsLogin] = useState(false)

  const dispatch = useDispatch();
  const isuserLoggedin = useSelector((state) => state.auth.isuserLoggedin)

  // useEffect(() => {
  //   toast.dark("Wow so easy!");
  // })

  useEffect(() => {
    const isuserlogged = Cookies.get('SOMANI')
    //dispatch(validateToken())
    if (isLogin) {
      dispatch(validateToken())
    }
    setIsLogin(isuserlogged)
  }, [isuserLoggedin]);

  return (
    <>
       {isLogin ? 
        <div className={styles.root_Container}>
          <div className={styles.navContainer}>
            <Navbar />
          </div>
          <div className={styles.wrapper}>
            <div className={styles.sidebarContainer}>
              <Sidebar />
            </div>
            <div className={styles.mainView_Container}>
              <Breadcrum />
              {children}
              <Footer />
              {/* <TermSheetPreview /> */}
              {/* <TermsheetPopUp /> */}
            </div>
          </div>
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

        </div>
        
        
        :
        <Login />
      } 

    </>
  )
}

export default Layout
