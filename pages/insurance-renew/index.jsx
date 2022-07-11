import React from 'react'
import styles from './index.module.scss'
import { Form, Row, Col} from 'react-bootstrap'
import UploadDocument from '../../src/components/UploadDocument'


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
        <div className={`${styles.wrapper} border_color mt-4 card`}>
        <div
          className={`${styles.cardHeader}  card-header d-flex align-items-center justify-content-between bg-transparent`}
          data-toggle="collapse"
          data-target="#marineInsurance"
          aria-expanded="true"
          aria-controls="marineInsurance"
        >
          <h2 className="mb-0">Marine Insurance</h2>
          <span>+</span>
        </div>
        <div
          id="marineInsurance"
          className="collapse"
          aria-labelledby="marineInsurance"
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

      <div className={`${styles.wrapper} border_color mt-4 card`}>
        <div
          className={`${styles.cardHeader}  card-header d-flex align-items-center justify-content-between bg-transparent`}
          data-toggle="collapse"
          data-target="#storageInsurance"
          aria-expanded="true"
          aria-controls="storageInsurance"
        >
          <h2 className="mb-0">Storage Insurance Details</h2>
          <span>+</span>
        </div>
        <div
          id="storageInsurance"
          className="collapse"
          aria-labelledby="storageInsurance"
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
        <UploadDocument/>   
      </div>

      
     
    </div>
  )
}
export default Index
