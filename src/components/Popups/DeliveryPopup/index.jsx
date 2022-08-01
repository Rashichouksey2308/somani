import React from 'react'
import {
  Modal,
  Row,
  Col,
  InputGroup,
  DropdownButton,
  Dropdown,
  FormControl,
  Form,
} from 'react-bootstrap'
import styles from './index.module.scss'


function index(props) {
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
        <Modal.Title id="contained-modal-title-vcenter">
          Share termsheet with buyer
        </Modal.Title>
        <img src="/static/close-2.svg"></img>
      </Modal.Header>
      <Modal.Body className={`${styles.body} container-fluid`} >
       <Row>
            <Col md={6}className={`${styles.left} `}>
                <img src="/static/icons8-whatsapp.svg" className={`mb-3`}/>
                <InputGroup className="mb-3">
                    <DropdownButton
                    variant="outline-secondary"
                    title="+91"
                    id="input-group-dropdown-1"
                    className={`${styles.dropDown}`}
                    >
                    <Dropdown.Item href="#">+91</Dropdown.Item>
                 
                   
                
                    </DropdownButton>
                    <FormControl className={`${styles.input}`} aria-label="Text input with dropdown button" />
                </InputGroup>
                <div className={`${styles.button} d-flex justify-content-center align-content-center`}>
                  <span> {`Share on WhatsApp`}</span>

                </div>
            </Col>
            <Col md={6} className={`${styles.right}`}>
            <img src="/static/icons8-email-open-48.png" className = "mb-3" />
            <Form.Control
                type="text"
                id="inputPassword5"
                aria-describedby="passwordHelpBlock"
                className="mb-3"
  />
             <div className={`${styles.button} d-flex justify-content-center align-content-center`}>
                  <span> { `Share on Email`}</span>

                </div>
            </Col>
       </Row>
      {/* <div className={`${styles.left} col-md-6` }></div>
       <div className={`${styles.right} col-md-6` }></div>
      </div> */}
      </Modal.Body>
    </Modal>
  )
}

export default index
