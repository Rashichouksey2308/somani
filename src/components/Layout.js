import React, { useState, useEffect } from "react";
import Navbar from "./NavBar/index";
import Sidebar from "./Sidebar/index";
import Breadcrum from "./Breadcrum/index";
import Footer from "./Footer/index";
import styles from "./index.module.scss";
import { Container, Row, Col } from "react-bootstrap";
import TermSheetPreview from "../components/TermSheetPreview";
import Login from "../components/Login";
import { createImmutableStateInvariantMiddleware } from "@reduxjs/toolkit";
import { Router } from "next/router";
function Layout({ children }) {
  const [isLogin, setIsLogin] = useState(false);
  useEffect(() => {
    // setIsLogin(localStorage.getItem("login"));
  }, [isLogin]);
  console.log(isLogin);
  function login() {
    localStorage.setItem("login", true);
    setIsLogin(true);
  }
  return (
    <>
      {isLogin ? (
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
        </div>
      ) : (
        <Login login={login} />
      )}
    </>

    // <div>{children}</div>
  );
}

export default Layout;
