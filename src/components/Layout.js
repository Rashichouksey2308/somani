import React from 'react'
import Navbar from './NavBar/index'
import Sidebar from './Sidebar/index'
import Breadcrum from './Breadcrum/index'
import Footer from './Footer/index'
import styles from './index.module.scss'
import { Container, Row, Col } from 'react-bootstrap'
import TermsheetPopUp from '../components/TermsheetPopUp'

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
          <Breadcrum />
          {children}
          <Footer />
          {/* <TermsheetPopUp /> */}
        </div>
      </div>
    </div>
  )
}

export default Layout

// import React, { PureComponent } from 'react'
// import Link from 'next/link'

// class Layout extends PureComponent {
//   render () {
//     return (
//       <div className='layout'>

//         { this.props.children }
//       </div>
//     )
//   }
// }
//  <Container>
//    <Row>
//      <Col>
//        <Navbar />
//      </Col>
//    </Row>
//    <Row></Row>
//  </Container>;
// export default Layout
// <Container>
//   <Row>
//     <Col>
//       <Navbar />
//     </Col>
//   </Row>
//   <Row
//     style={{
//       width: "345px",
//       display: "inline-flex",
//       height: "calc(100vh - 76px);",
//     }}
//   >
//     <Col style={{ height: "100%" }}>
//       <Sidebar />
//     </Col>
//     <Col
//       style={{
//         height: "calc(100vh - 76px);",
//       }}
//     >
//       <Row style={{ height: "100%" }}>
//         <Col
//           style={{
//             width: "calc(100vw - 345px);",
//           }}
//         >
//           <Breadcrum />
//         </Col>
//         <Col>{children}</Col>
//         <Col
//           style={{
//             width: "calc(100vw - 345px);",
//           }}
//         >
//           <Footer />
//         </Col>
//       </Row>
//     </Col>
//   </Row>
// </Container>;
