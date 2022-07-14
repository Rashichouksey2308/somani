/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from 'react'
import styles from './index.module.scss'
import { Form, Row, Col } from 'react-bootstrap'
function Index() {
  return (
    <>
      <div className={styles.container}>
        <Form>
          <div className="row border-bottom border-color ">

            <Form.Group className={`${styles.form_group} col-md-4 col-sm-6`}>
              <Form.Control
                className={`${styles.input_field} input form-control`}
                required
                type="text"
                name="commodity"
              />
              <Form.Label className={`${styles.label_heading} label_heading`}>
                Bank Name<strong className="text-danger">*</strong>
              </Form.Label>
            </Form.Group>
            <Form.Group className={`${styles.form_group} col-md-4 col-sm-6`}>
              <select
                className={`${styles.input_field} input form-control`}
                name="countryOfOrigin"
                onChange={(e) => {
                  saveOrderData(e.target.name, e.target.value)
                }}
              >
                <option value="27AAATW4183C2ZG">27AAATW4183C2ZG</option>
                <option value="India">India</option>
                <option value="America">America</option>
                <option value="Russia">Russia</option>
              </select>
              <Form.Label
                className={`${styles.label_heading} ${styles.select}  label_heading`}
              >
                Branch*<strong className="text-danger">*</strong>
              </Form.Label>
            </Form.Group>
          </div>
        </Form>
        <div className={`${styles.addressContainer}`}>
          <span className={`mb-3`}>Addresses</span>
          <div
            className={`${styles.registeredAddress} d-flex justify-content-between border-color`}
          >
            <div className={`${styles.registeredAddressHeading}`}>
              <span>Registered Address</span>
              <div>
                Plot No-49-48-6/1, Lalitha Nagar, Ground Floor, Sakshi Office
                Road, Akkayyapalem, Visakhapatnam, Andhra Pradesh, 530016 India
              </div>
            </div>
            <div
              className={`${styles.addressEdit} mt-3 d-flex justify-content-center align-items align-items-center`}
            >
              <img src="./static/mode_edit.svg" />
            </div>
          </div>
        </div>
        <div className={`${styles.newAddressContainer}`}>
          <div className={`${styles.newAddress}`}>
            <div className={`${styles.newAddressHead} border-0 border-color`}>
             
            </div>
            <Row className={`${styles.row}`}>

              <Col md={4} sm={12}>
                <Form.Group
                  className={`${styles.form_group} col-md-4 col-sm-6`}
                >
                  <Form.Control
                    className={`${styles.input_field} input form-control`}
                    required
                    type="text"
                    name="commodity"
                  />
                  <Form.Label
                    className={`${styles.label_heading} label_heading`}
                  >
                    State<strong className="text-danger">*</strong>
                  </Form.Label>
                </Form.Group>
              </Col>
                           <Col md={4} sm={12}>
                <Form.Group
                  className={`${styles.form_group} col-md-4 col-sm-6`}
                >
                  <Form.Control
                    className={`${styles.input_field} input form-control`}
                    required
                    type="text"
                    name="commodity"
                  />
                  <Form.Label
                    className={`${styles.label_heading} label_heading`}
                  >
                    City<strong className="text-danger">*</strong>
                  </Form.Label>
                </Form.Group>
              </Col>
              <Col md={4} sm={12}>
                <Form.Group
                  className={`${styles.form_group} col-md-4 col-sm-6`}
                >
                  <Form.Control
                    className={`${styles.input_field} input form-control`}
                    required
                    type="text"
                    name="commodity"
                  />
                  <Form.Label
                    className={`${styles.label_heading} label_heading`}
                  >
                    Country<strong className="text-danger">*</strong>
                  </Form.Label>
                </Form.Group>
              </Col>
              <Col md={4} sm={12} className={`d-flex`}>
                <Form.Group
                  className={`${styles.form_group} col-md-4 col-sm-6`}
                >
                  <Form.Control
                    className={`${styles.input_field} input form-control`}
                    required
                    type="text"
                    name="commodity"
                  />
                  <Form.Label
                    className={`${styles.label_heading} label_heading`}
                  >
                    Email*<strong className="text-danger">*</strong>
                  </Form.Label>
                </Form.Group>
                   <img
                      className="img-fluid ml-4"
                      src="/static/add-btn.svg"
                      alt="add button"
                    />
              </Col>
            </Row>






          </div>
        </div>
      </div>
    </>
  )
}

export default Index
