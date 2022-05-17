import React from "react";
import Navbar from "./NavBar/index";
import Sidebar from "./Sidebar/index";
import Breadcrum from "./Breadcrum/index";
import Footer from "./Footer/index";
import { Container, Row, Col } from "react-bootstrap";

function Layout({ children }) {
  return (
    <Container>
      <Row>
        <Col>
          <Navbar />
        </Col>
      </Row>
      <Row style={{ width: "345px", display: "inline-flex" }}>
        <Col>
          <Sidebar />
        </Col>
        <Col>
          <Row>
            <Col>
              <Breadcrum />
            </Col>
            <Col> {children}</Col>
            <Col>
              <Footer />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default Layout;

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

// export default Layout
