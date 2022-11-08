<<<<<<< Updated upstream
import React, { useState } from 'react';
import { Col, Form, FormControl, Modal, Row } from 'react-bootstrap';
import styles from './index.module.scss';

function Index(props) {
  const [email, setEmail] = useState('');
  return (
    <Modal
      show={props.open}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
=======
import React, { useState } from 'react'
import { Col, Form, FormControl, Modal, Row } from 'react-bootstrap'
import styles from './index.module.scss'

function Index (props) {
  const [email, setEmail] = useState('')
  return (
    <Modal
      show={props.open}
      size='lg'
      aria-labelledby='contained-modal-title-vcenter'
>>>>>>> Stashed changes
      centered
      className={styles.wrapper}
      backdropClassName={styles.backdrop}
    >
      <Modal.Header className={styles.head}>
<<<<<<< Updated upstream
        <Modal.Title id="contained-modal-title-vcenter">
          Share {props.istermsheet ? '' : 'termsheet'} with buyer
        </Modal.Title>
        <img onClick={() => props.close()} src="/static/close-2.svg" />
=======
        <Modal.Title id='contained-modal-title-vcenter'>
          Share {props.istermsheet ? '' : 'termsheet'} with buyer
        </Modal.Title>
        <img onClick={() => props.close()} src='/static/close-2.svg' />
>>>>>>> Stashed changes
      </Modal.Header>
      <Modal.Body className={`${styles.body} container-fluid`}>
        <Row>
          <Col md={6} className={`${styles.left} `}>
<<<<<<< Updated upstream
            <img src="/static/icons8-whatsapp.svg" className={`mb-3`} />

            <div className="d-flex justify-content-center mb-3">
=======
            <img src='/static/icons8-whatsapp.svg' className={`mb-3`} />

            <div className='d-flex justify-content-center mb-3'>
>>>>>>> Stashed changes
              <select className={`${styles.dropDown} bor`}>
                <option>+91</option>
                <option>+92</option>
                <option>+95</option>
                <option>+24</option>
              </select>
<<<<<<< Updated upstream
              <FormControl className={`${styles.input}`} aria-label="Text input with dropdown button" />
=======
              <FormControl className={`${styles.input}`} aria-label='Text input with dropdown button' />
>>>>>>> Stashed changes
            </div>
            <div className={`${styles.button} d-flex justify-content-center align-content-center`}>
              <span> {`Share on WhatsApp`}</span>
            </div>
          </Col>
          <Col md={6} className={`${styles.right}`}>
<<<<<<< Updated upstream
            <img src="/static/icons8-email-open-48.png" className="mb-3" />
            <Form.Control
              type="text"
              id="inputPassword5"
              aria-describedby="passwordHelpBlock"
              className="mb-3"
              onChange={(e) => {
                props.setEmail(e.target.value);
=======
            <img src='/static/icons8-email-open-48.png' className='mb-3' />
            <Form.Control
              type='text'
              id='inputPassword5'
              aria-describedby='passwordHelpBlock'
              className='mb-3'
              onChange={(e) => {
                props.setEmail(e.target.value)
>>>>>>> Stashed changes
              }}
            />
            <div
              onClick={(e) => {
<<<<<<< Updated upstream
                props.shareEmail();
=======
                props.shareEmail()
>>>>>>> Stashed changes
              }}
              className={`${styles.button} d-flex justify-content-center align-content-center`}
            >
              <span> {`Share on Email`}</span>
            </div>
          </Col>
        </Row>
        {/* <div className={`${styles.left} col-md-6` }></div>
       <div className={`${styles.right} col-md-6` }></div>
      </div> */}
      </Modal.Body>
    </Modal>
<<<<<<< Updated upstream
  );
}

export default Index;
=======
  )
}

export default Index
>>>>>>> Stashed changes
