import React from "react";
import Navbar from "./NavBar/index";
import Sidebar from "./Sidebar/index";
import Breadcrum from "./Breadcrum/index";
import Footer from "./Footer/index";
import styles from "./index.module.scss";
import { Container, Row, Col } from "react-bootstrap";
import TermSheetPreview from "../components/TermSheetPreview";

function Layout({ children }) {
  return (
    <div className={styles.root_Container}>
      <div className={styles.navContainer}>
        <Navbar />
      </div>
      <div className={styles.wrapper}>
        <div className={styles.sidebarContainer}>
          <Sidebar />
        </div>
        <div className={styles.mainView_Container}>
          {/* <Breadcrum />
          {children}
          <Footer /> */}
          <TermSheetPreview />
          {/* <TermsheetPopUp /> */}
        </div>
      </div>
    </div>
  );
}

export default Layout;
