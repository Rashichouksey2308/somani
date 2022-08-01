import React from 'react'
import styles from './insurance.module.scss'
import { Form, Row, Col } from 'react-bootstrap'
import SaveBar from '../../../src/components/SaveBar'
import Router from 'next/router'
import DateCalender from '../../../src/components/DateCalender'

const Index = () => {
  const changeRoute = () => {
    Router.push('/agreement/OrderID/id')
  }
  //   const handleRadioBtn = (e) => {
  //     if (e.target.value == "Both") {
  //       Router.push('/insurance/form/both')
  //     }
  // else {
  //   Router.push('/insurance/form')
  // }
  //console.log(e.target.value, 'This is radio');

  // }
  return (
    <>
      <div className={`${styles.card} p-0 datatable bg-transparent card border-0 container-fluid`}>
        <div className={`${styles.accordion_body} bg-transparent`}>
          <div className={`${styles.head_container} align-items-center`}>
            <div className={`${styles.head_header}`}>
              <img
                className={`${styles.arrow} img-fluid mr-2 image_arrow`}
                src="/static/keyboard_arrow_right-3.svg"
                alt="ArrowRight"
              />
              <h1 className={styles.heading}>
                Ramakrishna Traders - Ramal001-000001
              </h1>
            </div>
            <div>
              <button className={`${styles.clear_btn} clear_btn`}>
                Clear All
              </button>
            </div>
          </div>

          <div className={`${styles.vessel_card}`}>
            <div className={`${styles.wrapper} border_color card datatable`}>
              <div className={`${styles.insurance_type} d-lg-flex align-items-center d-inline-block`}>
                <h2 className="mb-0">Insurance Type</h2>
                <div className={`${styles.radio_form}`}>
                  {['radio'].map((type) => (
                    <div key={`inline-${type}`} className={styles.radio_group}>
                      <Form.Check
                        className={styles.radio}
                        inline
                        label="Marine Insurance"
                        name="group1"
                        type={type}
                        value="Marine Insurance"
                        //onChange={(e) => { handleRadioBtn(e)}}
                        id={`inline-${type}-1`}
                      />
                      <Form.Check
                        className={styles.radio}
                        inline
                        label="Storage Insurance"
                        name="group1"
                        type={type}
                        value="Storage Insurance"
                        // onChange={(e) => { handleRadioBtn(e)}}
                        id={`inline-${type}-2`}
                      />
                      <Form.Check
                        className={styles.radio}
                        inline
                        label="Both"
                        name="group1"
                        type={type}
                        value="Both"
                        // onChange={(e) => { handleRadioBtn(e)}}
                        id={`inline-${type}-2`}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className={`${styles.wrapper} border_color card datatable`}>
            <div
              className={`${styles.cardHeader}  card-header d-flex align-items-center justify-content-between bg-transparent`}
              data-toggle="collapse"
              data-target="#marineInsurance"
              aria-expanded="true"
              aria-controls="marineInsurance"
            >
              <h2 className="mb-0">Basic Details</h2>
              <span>+</span>
            </div>
            <div
              id="marineInsurance"
              className="collapse"
              aria-labelledby="marineInsurance"
              data-parent="#marineInsurance"
            >
              <div className={` ${styles.cardBody} card-body  border_color`}>
                <div className={` ${styles.content}`}>
                  <div className={` ${styles.body}`}>
                    <Row>
                      <Col lg={4} md={6} sm={6}>
                        <div className={`${styles.col_header} label_heading`}>
                          Commodity
                        </div>
                        <div className={styles.col_body}>Iron</div>
                      </Col>
                      <Col lg={4} md={6} sm={6}>
                        <div className={`${styles.col_header} label_heading`}>
                          Quantity
                        </div>
                        <div className={styles.col_body}>5,000.00 MT</div>
                      </Col>
                      <Col lg={4} md={6} sm={6}>
                        <div className={`${styles.col_header} label_heading`}>
                          Country of Origin
                        </div>
                        <div className={styles.col_body}>India</div>
                      </Col>
                      <Col lg={4} md={6} sm={6}>
                        <div className={`${styles.col_header} label_heading`}>
                          Vessel Name
                        </div>
                        <div className={styles.col_body}>Abcz</div>
                      </Col>

                      <Col lg={4} md={6} sm={6}>
                        <div className={`${styles.col_header} label_heading`}>
                          IMO Number
                        </div>
                        <div className={styles.col_body}>5261334</div>
                      </Col>
                      <Col lg={4} md={6} sm={6}>
                        <div className={`${styles.col_header} label_heading`}>
                          Year of Built
                        </div>
                        <div className={styles.col_body}>2019</div>
                      </Col>
                      <Col lg={4} md={6} sm={6}>
                        <div className={`${styles.col_header} label_heading`}>
                          Port of Loading
                        </div>
                        <div className={styles.col_body}>Navasheva</div>
                      </Col>
                      <Col lg={4} md={6} sm={6}>
                        <div className={`${styles.col_header} label_heading`}>
                          Port of Discharge
                        </div>
                        <div className={styles.col_body}>
                          Gangavaram Port, Andhra Pradesh
                        </div>
                      </Col>
                      <Col className="mb-4 mt-4" md={4}>
                        <select
                          className={`${styles.input_field} input form-control`}
                        >
                          <option>HDFC Bank</option>
                          <option>SBI</option>
                        </select>
                        <label
                          className={`${styles.label_heading} label_heading`}
                        >
                          Loss Payee
                          <strong className="text-danger">*</strong>
                        </label>
                      </Col>
                      <Col className="mt-4" lg={2} md={4}>
                        <div className="d-flex">
                          <DateCalender labelName="Laycan from" />
                          <img
                            className={`${styles.calanderIcon} img-fluid`}
                            src="/static/caldericon.svg"
                            alt="Search"
                          />
                        </div>
                      </Col>
                      <Col className="mt-4" lg={2} md={4}>
                        <div className="d-flex">
                          <DateCalender labelName="Laycan to" />
                          <img
                            className={`${styles.calanderIcon} img-fluid`}
                            src="/static/caldericon.svg"
                            alt="Search"
                          />
                        </div>
                      </Col>
                      <Col className="mt-4" lg={4} md={6} sm={6}>
                        <div className="d-flex">
                          <DateCalender labelName="Expected time of Dispatch" />
                          <img
                            className={`${styles.calanderIcon} img-fluid`}
                            src="/static/caldericon.svg"
                            alt="Search"
                          />
                        </div>
                      </Col>
                      <Col className="mt-4" lg={4} md={6} sm={6}>
                        <div className="d-flex">
                          <DateCalender labelName="Expected time of Arrival" />
                          <img
                            className={`${styles.calanderIcon} img-fluid`}
                            src="/static/caldericon.svg"
                            alt="Search"
                          />
                        </div>
                      </Col>
                      <Col className="mt-5" lg={4} md={6} sm={6}>
                        <input
                          className={`${styles.input_field} input form-control`}
                          type="number"
                          required
                        />
                        <label
                          className={`${styles.label_heading} label_heading`}
                        >
                          Sum Insured
                          <strong className="text-danger">*</strong>
                        </label>
                      </Col>
                    </Row>
                  </div>
                </div>
                <hr></hr>

                <div className={` ${styles.content}`}>
                  <div className={` ${styles.body}`}>
                    <h5>Storage Details</h5>
                    <Row>
                      <Col className="mb-4 mt-4" lg={4} md={6} sm={6}>
                        <select
                          className={`${styles.input_field} input form-control`}
                        >
                          <option>Visakhapatnam, AP, India</option>
                          <option>Mumbai</option>
                        </select>
                        <label
                          className={`${styles.label_heading} label_heading`}
                        >
                          Place of Storage
                          <strong className="text-danger">*</strong>
                        </label>
                      </Col>
                      <Col className="mb-4 mt-4" lg={4} md={6} sm={6}>
                        <input
                          className={`${styles.input_field} input form-control`}
                          required
                          type="number"
                        />
                        <label
                          className={`${styles.label_heading} label_heading`}
                        >
                          Period of Insurance (days)
                          <strong className="text-danger">*</strong>
                        </label>
                      </Col>
                      <Col className="mb-4 mt-4" lg={8} md={6} sm={6}>
                        <input
                          className={`${styles.input_field} input form-control`}
                          required
                          type="text"
                        />
                        <label
                          className={`${styles.label_heading} label_heading`}
                        >
                          Storage Plot Address
                          <strong className="text-danger">*</strong>
                        </label>
                      </Col>
                    </Row>
                  </div>
                </div>
                <hr></hr>
                <div className={` ${styles.content}`}>
                  <div className={` ${styles.body}`}>
                    <h5>Additional Information (if Any)</h5>
                    <textarea
                      className={`${styles.remark_field} form-control`}
                      as
                      rows={3}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <SaveBar rightBtn="Generate Request Letter" rightBtnClick={changeRoute} />
    </>
  )
}
export default Index
