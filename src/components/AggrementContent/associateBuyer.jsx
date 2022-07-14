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
              <select
                className={`${styles.input_field} input form-control`}
                name="countryOfOrigin"
                onChange={(e) => {
                  saveOrderData(e.target.name, e.target.value)
                }}
              >
                <option value="Registered">Registered</option>
              </select>
              <Form.Label
                className={`${styles.label_heading} ${styles.select} label_heading`}
              >
                Address Type
              </Form.Label>
            </Form.Group>
            <Form.Group className={`${styles.form_group} col-md-4 col-sm-6`}>
              <Form.Control
                className={`${styles.input_field} input form-control`}
                required
                type="text"
                name="commodity"
              />
              <Form.Label className={`${styles.label_heading} label_heading`}>
                Name<strong className="text-danger">*</strong>
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
                GSTIN*<strong className="text-danger">*</strong>
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
                511/1, 512/2, Urla Industrial Complex, Raipur, Chhattisgarh,
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
            <div className={`${styles.newAddressHead} border-color`}>
              <span>Add a new address</span>
            </div>
            <Row className={`${styles.row}`}>
              <Col md={4} sm={12}>
                <Form.Group
                  className={`${styles.form_group} col-md-4 col-sm-6`}
                >
                  <select
                    className={`${styles.input_field} input form-control`}
                    name="countryOfOrigin"
                    onChange={(e) => {
                      saveOrderData(e.target.name, e.target.value)
                    }}
                  >
                    <option value="Branch">Branch</option>
                  </select>
                  <Form.Label
                    className={`${styles.label_heading} ${styles.select} label_heading`}
                  >
                    Address Type
                  </Form.Label>
                </Form.Group>
              </Col>
              <Col md={4} sm={12}>
                <Form.Group
                  className={`${styles.form_group} col-md-4 col-sm-6`}
                >
                  <select
                    className={`${styles.input_field} input form-control`}
                    name="countryOfOrigin"
                    onChange={(e) => {
                      saveOrderData(e.target.name, e.target.value)
                    }}
                  >
                    <option value="27AAATW4183C2ZG">27AAATW4183C2ZG</option>
                  </select>
                  <Form.Label
                    className={`${styles.label_heading} ${styles.select} label_heading`}
                  >
                    GSTIN<strong className="text-danger">*</strong>
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
                    Pin Code<strong className="text-danger">*</strong>
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
            </Row>
            <Row className={`${styles.row}`}>
              <Col md={12} sm={12}>
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
                    Address Line 1
                  </Form.Label>
                </Form.Group>
              </Col>
              <Col md={12} sm={12}>
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
                    Address Line 2
                  </Form.Label>
                </Form.Group>
              </Col>
              <Col md={12} sm={12}>
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
                    Address Line 3
                  </Form.Label>
                </Form.Group>
              </Col>
            </Row>
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
                    Email<strong className="text-danger">*</strong>
                  </Form.Label>
                </Form.Group>
              </Col>
              <Col md={4} sm={12}>
                <div
                  className={`${styles.each_input} ${styles.phone} col-md-4 col-sm-6`}
                >
                  <div className={styles.phone_card}>
                    <select
                      id="Code"
                      className={`${styles.code_phone} input border-right-0`}
                    >
                      <option>+91</option>
                      <option>+1</option>
                      <option>+92</option>
                      <option>+95</option>
                      <option>+24</option>
                    </select>
                    <input
                      type="tel"
                      id="textNumber"
                      name="primary"
                      onChange={(e) => {
                        if (phoneValidation(e.target.value)) {
                          // saveCompanyData(e.target.name, e.target.value)
                          mobileFunction(e)

                          //green tick
                        } else {
                          //red mark
                          console.log('phone formaat invalid')
                        }
                      }}
                      className={`${styles.input_field} input form-control border-left-0`}
                      required
                    />
                    <label
                      className={`${styles.label_heading} label_heading`}
                      id="textNumber"
                    >
                      Phone No.<strong className="text-danger">*</strong>
                    </label>
                  </div>
                </div>
              </Col>
              <Col md={4} sm={12}>
                <div
                  className={`${styles.each_input} ${styles.phone} col-md-4 col-sm-6`}
                >
                  <div className={styles.phone_card}>
                    <select
                      id="Code"
                      className={`${styles.code_phone} input border-right-0`}
                    >
                      <option>+91</option>
                      <option>+1</option>
                      <option>+92</option>
                      <option>+95</option>
                      <option>+24</option>
                    </select>
                    <input
                      type="tel"
                      id="textNumber"
                      name="primary"
                      className={`${styles.input_field} input form-control border-left-0`}
                      required
                    />
                    <label
                      className={`${styles.label_heading} label_heading`}
                      id="textNumber"
                    >
                      Other Phone No.<strong className="text-danger">*</strong>
                    </label>
                  </div>
                </div>
              </Col>
            </Row>
           <div className="mt-4c">
              <span>Authorised Signatory Details</span>
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
                    Name<strong className="text-danger">*</strong>
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
                    Designation<strong className="text-danger">*</strong>
                  </Form.Label>
                </Form.Group>
              </Col>
          
            </Row>
            <div className="d-flex">
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
            </div>
            <div className="d-flex">
                              <div
                  className={`${styles.each_input} ${styles.phone} col-md-4 col-sm-6`}
                >
                  <div className={styles.phone_card}>
                    <select
                      id="Code"
                      className={`${styles.code_phone} input border-right-0`}
                    >
                      <option>+91</option>
                      <option>+1</option>
                      <option>+92</option>
                      <option>+95</option>
                      <option>+24</option>
                    </select>
                    <input
                      type="tel"
                      id="textNumber"
                      name="primary"
                      className={`${styles.input_field} input form-control border-left-0`}
                      required
                    />
                    <label
                      className={`${styles.label_heading} label_heading`}
                      id="textNumber"
                    >
                      Other Phone No.<strong className="text-danger">*</strong>
                    </label>
                  </div>
                </div>
                                   <img
                      className="img-fluid ml-4"
                      src="/static/add-btn.svg"
                      alt="add button"
                    />
            </div>

            <div className={`${styles.buttons} d-flex`}>
              <div className={styles.add}>
                <span>Add</span>
              </div>
              <div className={`${styles.cancel} ml-2`}>
                <span >Cancel</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Index
