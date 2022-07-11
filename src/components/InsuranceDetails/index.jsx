import React from 'react'
import styles from './index.module.scss'
import { Form, Row, Col } from 'react-bootstrap'


const Index = ({headerName}) => {
  return (
    <div className={`${styles.wrapper} border_color mt-4 card`}>
        <div
          className={`${styles.cardHeader}  card-header d-flex align-items-center justify-content-between bg-transparent`}
          data-toggle="collapse"
          data-target="#marineInsurance"
          aria-expanded="true"
          aria-controls="marineInsurance"
        >
          <h2 className="mb-0">{headerName}</h2>
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
                <Col className="mb-4 mt-4" lg={4} md={6} sm={6}>
                    <input
                      className={`${styles.input_field} input form-control`}
                      required
                      type="text"
                    />
                    <label className={`${styles.label_heading} label_heading`}>
                      Policy Number<strong className="text-danger">*</strong>
                    </label>
                  </Col>
                  <Col className="mb-4 mt-4" lg={4} md={6} sm={6}>
                    <select
                      className={`${styles.input_field} input form-control`}
                    >
                      <option>Ramakrishna Traders</option>
                      <option>Balaji Traders</option>
                    </select>
                    <label className={`${styles.label_heading} label_heading`}>
                      Name of Insurer<strong className="text-danger">*</strong>
                    </label>
                  </Col>
                  <Col className="mb-4 mt-4" lg={4} md={6} sm={6}>
                    <select
                      className={`${styles.input_field} input form-control`}
                    >
                      <option>COA202138329477</option>
                      <option>DSDA202138329477</option>
                    </select>
                    <label className={`${styles.label_heading} label_heading`}>
                      GST of Insured
                    </label>
                  </Col>

                  <Col className="mb-4 mt-4" lg={4} md={6} sm={6}>
                    <input
                      className={`${styles.input_field} input form-control`}
                      required
                      type="text"
                    />
                    <label className={`${styles.label_heading} label_heading`}>
                      Name of Insured<strong className="text-danger">*</strong>
                    </label>
                  </Col>
                  <Col className="mb-4 mt-4" lg={4} md={6} sm={6}>
                    <input
                      className={`${styles.input_field} input form-control`}
                      required
                      type="text"
                    />
                    <label className={`${styles.label_heading} label_heading`}>
                      GST of Insured
                      <strong className="text-danger">*</strong>
                    </label>
                  </Col>
                  <Col className="mb-4 mt-4" lg={2} md={6}>
                    <input
                      className={`${styles.input_field} input form-control`}
                      type="date"
                    />
                    <label className={`${styles.label_heading} label_heading`}>
                      Insurance from<strong className="text-danger">*</strong>
                    </label>
                  </Col>
                  <Col className="mb-4 mt-4" lg={2} md={6}>
                    <input
                      className={`${styles.input_field} input form-control`}
                      type="date"
                    />
                    <label className={`${styles.label_heading} label_heading`}>
                      Insurance to<strong className="text-danger">*</strong>
                    </label>
                  </Col>
                  <Col className="mb-4 mt-4" lg={4} md={6} sm={6}>
                    <input
                      className={`${styles.input_field} input form-control`}
                      required
                      type="number"
                    />
                    <label className={`${styles.label_heading} label_heading`}>
                      Period of Insurance (In days)
                      
                    </label>
                  </Col>
                  <Col className="mb-4 mt-4" lg={4} md={6} sm={6}>
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
                  <Col className="mb-4 mt-4" lg={4} md={6} sm={6}>
                    <input
                      className={`${styles.input_field} input form-control`}
                      required
                      type="text"
                    />
                    <label className={`${styles.label_heading} label_heading`}>
                      Premium Amount<strong className="text-danger">*</strong>
                    </label>
                  </Col>
           
          
                </Row>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Index
