import React from 'react'
import styles from './insurance.module.scss'
import { Form, Row, Col } from 'react-bootstrap'


const Index = () => {
  return (
    <div className={`${styles.card} accordion_body container-fluid`}>
      <div className={styles.head_container}>
        <div className={styles.head_header}>
          <img
            className={`${styles.arrow} img-fluid`}
            src="/static/keyboard_arrow_right-3.svg"
            alt="ArrowRight"
          />
          <h1 className={styles.heading}>Ramakrishna Traders - Ramal001-000001</h1>
        </div>
        <div>
          <button className={`${styles.clear_btn} clear_btn`}>Clear All</button>
        </div>
      </div>

      <div className={`${styles.vessel_card} mt-3 border_color`}>
      <div className={`${styles.wrapper} p-2 card`}>

        <div className='d-lg-flex align-items-center d-inline-block  pl-4'>
      <h2 className="mb-0">Insurance Type</h2>
        <div className={`${styles.radio_form} ml-lg-5 ml-n4`}>
          {['radio'].map((type) => (
            <div key={`inline-${type}`} className={styles.radio_group}>
              <Form.Check
                className={styles.radio}
                inline
                label="Marine Insurance"
                name="group1"
                type={type}
                id={`inline-${type}-1`}
              />
              <Form.Check
                className={styles.radio}
                inline
                label="Storage Insurance"
                name="group1"
                type={type}
                id={`inline-${type}-2`}
              />
              <Form.Check
                className={styles.radio}
                inline
                label="Both"
                name="group1"
                type={type}
                id={`inline-${type}-2`}
              />

            </div>
          ))}
        </div>
        </div>
        </div>
      </div>

      <div className={`${styles.wrapper} mt-4 card`}>
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
                    <div className={styles.col_body}>
                      2019
                    </div>
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
                    <label className={`${styles.label_heading} label_heading`}>
                      Loss Payee Bank<strong className="text-danger">*</strong>
                    </label>
                  </Col>
                  <Col className="mt-4" lg={2} md={4}>
                    <input
                      className={`${styles.input_field} input form-control`}
                      type="date"
                    />
                    <label className={`${styles.label_heading} label_heading`}>
                      Laycan from
                      <strong className="text-danger">*</strong>
                    </label>
                  </Col>
                  <Col className="mt-4" lg={2} md={4}>
                    <input
                      className={`${styles.input_field} input form-control`}
                      type="date"
                    />
                    <label className={`${styles.label_heading} label_heading`}>
                     Laycan to
                      <strong className="text-danger">*</strong>
                    </label>
                  </Col>
                  <Col className="mt-4" lg={4} md={6} sm={6}>
                    <input
                      className={`${styles.input_field} input form-control`}
                      type="date"
                    />
                    <label className={`${styles.label_heading} label_heading`}>
                      Expected time of Dispatch
                      <strong className="text-danger">*</strong>
                    </label>
                  </Col>
                  <Col className="mt-4" lg={4} md={6} sm={6}>
                    <input
                      className={`${styles.input_field} input form-control`}
                      type="date"
                    />
                    <label className={`${styles.label_heading} label_heading`}>
                      Expected time of Arrival
                      <strong className="text-danger">*</strong>
                    </label>
                  </Col>
                  <Col className="mt-4" lg={4} md={6} sm={6}>
                    <input
                      className={`${styles.input_field} input form-control`}
                      type="number"
                    />
                    <label className={`${styles.label_heading} label_heading`}>
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
                    <label className={`${styles.label_heading} label_heading`}>
                      Place of Storage<strong className="text-danger">*</strong>
                    </label>
                  </Col>
                  <Col className="mb-4 mt-4" lg={4} md={6} sm={6}>
                    <input
                      className={`${styles.input_field} input form-control`}
                      required
                      type="number"
                    />
                    <label className={`${styles.label_heading} label_heading`}>
                      Period of Insurance (days)<strong className="text-danger">*</strong>
                    </label>
                  </Col>
                  <Col className="mb-4 mt-4" lg={4} md={6} sm={6}>
                    <input
                      className={`${styles.input_field} input form-control`}
                      required
                      type="text"
                    />
                    <label className={`${styles.label_heading} label_heading`}>
                      Storage Plot Address<strong className="text-danger">*</strong>
                    </label>
                  </Col>
                </Row>
              </div>
            </div>
            <hr></hr>
            <div className={` ${styles.content}`}>
             <div className={` ${styles.body}`}>
             <h5>Additional Information (if Any)</h5>
              <textarea className={`${styles.remark_field} form-control`}
              as rows={3}
              />
         
          </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
export default Index
