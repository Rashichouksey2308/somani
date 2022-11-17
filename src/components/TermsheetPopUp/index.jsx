import React, { useState } from 'react';
import { Col, Form, FormControl, Modal, Row } from 'react-bootstrap';
import styles from './index.module.scss';

function Index(props) {
  return (
    <Modal
      show={props.open}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className={styles.wrapper}
      backdropClassName={styles.backdrop}
    >
      <Modal.Header className={styles.head}>
        {props.isMargin ? (
          <Modal.Title id="contained-modal-title-vcenter">Share {props.popupHeading} with buyer</Modal.Title>
        ) : (
          <Modal.Title id="contained-modal-title-vcenter">
            Share {props.istermsheet ? '' : 'transaction summary'} with buyer
          </Modal.Title>
        )}
        <img onClick={() => props.close()} src="/static/close-2.svg" />
      </Modal.Header>
      <Modal.Body className={`${styles.body} container-fluid`}>
        <Row>
          <Col md={6} className={`${styles.left} `}>
            <img src="/static/icons8-whatsapp.svg" className={`mb-3`} />

            <div className="d-flex justify-content-center mb-3">
              <select className={`${styles.dropDown} bor`}>
                <option>+91</option>
                <option>+92</option>
                <option>+95</option>
                <option>+24</option>
              </select>
              <FormControl className={`${styles.input}`} aria-label="Text input with dropdown button" />
            </div>
            <div className={`${styles.button} d-flex justify-content-center align-content-center`}>
              <span> {`Share on WhatsApp`}</span>
            </div>
          </Col>
          <Col md={6} className={`${styles.right}`}>
            <img src="/static/icons8-email-open-48.png" className="mb-3" />
            <Form.Control
              type="text"
              id="inputPassword5"
              aria-describedby="passwordHelpBlock"
              className="mb-3"
              onChange={(e) => {
                props.setEmail(e.target.value);
              }}
            />
            <div
              onClick={(e) => {
                props.shareEmail();
              }}
              className={`${styles.button} d-flex justify-content-center align-content-center`}
            >
              <span> {`Share on Email`}</span>
            </div>
          </Col>
        </Row>
      </Modal.Body>
    </Modal>
  );
}

export default Index;
