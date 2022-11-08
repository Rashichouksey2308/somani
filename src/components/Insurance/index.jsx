<<<<<<< Updated upstream
import React from 'react';
import styles from './index.module.scss';
import { Col, Form, Row } from 'react-bootstrap';
import DateCalender from '../DateCalender';
=======
import React from 'react'
import styles from './index.module.scss'
import { Col, Form, Row } from 'react-bootstrap'
import DateCalender from '../DateCalender'
>>>>>>> Stashed changes

const index = () => {
  return (
    <div className={`${styles.card} accordion_body container-fluid`}>
      <div className={styles.head_container}>
        <div className={styles.head_header}>
<<<<<<< Updated upstream
          <img className={`${styles.arrow} img-fluid`} src="/static/keyboard_arrow_right-3.svg" alt="ArrowRight" />
=======
          <img className={`${styles.arrow} img-fluid`} src='/static/keyboard_arrow_right-3.svg' alt='ArrowRight' />
>>>>>>> Stashed changes
          <h1 className={styles.heading}>Insurance</h1>
        </div>
        <div>
          <button className={`${styles.clear_btn} clear_btn`}>Clear All</button>
        </div>
      </div>

      <div className={`${styles.vessel_card} mt-3 border_color`}>
        <div className={`${styles.heading} heading_card`} />
        <div className={styles.radio_form}>
          {['checkbox'].map((type) => (
            <div key={`inline-${type}`} className={styles.radio_group}>
              <Form.Check
                className={styles.radio}
                inline
<<<<<<< Updated upstream
                label="Marine Insurance"
                name="group1"
=======
                label='Marine Insurance'
                name='group1'
>>>>>>> Stashed changes
                type={type}
                id={`inline-${type}-1`}
              />
              <Form.Check
                className={styles.radio}
                inline
<<<<<<< Updated upstream
                label="Storage Insurance"
                name="group1"
=======
                label='Storage Insurance'
                name='group1'
>>>>>>> Stashed changes
                type={type}
                id={`inline-${type}-2`}
              />
            </div>
          ))}
        </div>
      </div>

      <div className={`${styles.wrapper} mt-4 card`}>
        <div
          className={`${styles.cardHeader}  card-header d-flex align-items-center justify-content-between bg-transparent`}
<<<<<<< Updated upstream
          data-toggle="collapse"
          data-target="#marineInsurance"
          aria-expanded="true"
          aria-controls="marineInsurance"
        >
          <h2 className="mb-0">Marine Insurance</h2>
          <span>+</span>
        </div>
        <div id="marineInsurance" className="collapse" aria-labelledby="marineInsurance" data-parent="#marineInsurance">
=======
          data-toggle='collapse'
          data-target='#marineInsurance'
          aria-expanded='true'
          aria-controls='marineInsurance'
        >
          <h2 className='mb-0'>Marine Insurance</h2>
          <span>+</span>
        </div>
        <div id='marineInsurance' className='collapse' aria-labelledby='marineInsurance' data-parent='#marineInsurance'>
>>>>>>> Stashed changes
          <div className={` ${styles.cardBody} card-body  border_color`}>
            <div className={` ${styles.content}`}>
              <div className={` ${styles.header}  card_sub_header`}>
                <h5>Marine Insurance Details</h5>
              </div>
              <div className={` ${styles.body}`}>
                <Row>
                  <Col md={4}>
                    <div className={`${styles.col_header} label_heading`}>Vessel Name</div>
                    <div className={styles.col_body}>Abcz</div>
                  </Col>
                  <Col md={4}>
                    <div className={`${styles.col_header} label_heading`}>Commodity</div>
                    <div className={styles.col_body}>Iron</div>
                  </Col>
                  <Col md={4}>
                    <div className={`${styles.col_header} label_heading`}>Country of Origin</div>
                    <div className={styles.col_body}>India</div>
                  </Col>
                  <Col md={4}>
                    <div className={`${styles.col_header} label_heading`}>Quantity</div>
                    <div className={styles.col_body}>5,000.00 MT</div>
                  </Col>
                  <Col md={4}>
                    <div className={`${styles.col_header} label_heading`}>Port of Loading</div>
                    <div className={styles.col_body}>Navasheva</div>
                  </Col>
                  <Col md={4}>
                    <div className={`${styles.col_header} label_heading`}>Port of Discharge</div>
                    <div className={styles.col_body}>Gangavaram Port, Andhra Pradesh</div>
                  </Col>
                  <Col md={4}>
                    <div className={`${styles.col_header} label_heading`}>Loss Payee Bank</div>
                    <div className={styles.col_body}>HDFC Bank</div>
                  </Col>
<<<<<<< Updated upstream
                  <Col className="mt-4" md={4}>
                    <div className="d-flex">
                      <DateCalender labelName="Expected time of Dispatch" />
                      <img
                        className={`${styles.calanderIcon} image_arrow img-fluid`}
                        src="/static/caldericon.svg"
                        alt="Search"
=======
                  <Col className='mt-4' md={4}>
                    <div className='d-flex'>
                      <DateCalender labelName='Expected time of Dispatch' />
                      <img
                        className={`${styles.calanderIcon} image_arrow img-fluid`}
                        src='/static/caldericon.svg'
                        alt='Search'
>>>>>>> Stashed changes
                      />
                    </div>
                  </Col>
                </Row>
              </div>
            </div>

            <div className={` ${styles.content}`}>
              <div className={` ${styles.header}  card_sub_header`}>
                <h5>Marine Insurance Policy Details</h5>
              </div>
              <div className={` ${styles.body}`}>
                <Row>
<<<<<<< Updated upstream
                  <Col className="mb-4 mt-4" md={4}>
                    <input className={`${styles.input_field} input form-control`} required type="text" />
                    <label className={`${styles.label_heading} label_heading`}>
                      Policy Number<strong className="text-danger">*</strong>
                    </label>
                  </Col>
                  <Col className="mb-4 mt-4" md={4}>
=======
                  <Col className='mb-4 mt-4' md={4}>
                    <input className={`${styles.input_field} input form-control`} required type='text' />
                    <label className={`${styles.label_heading} label_heading`}>
                      Policy Number<strong className='text-danger'>*</strong>
                    </label>
                  </Col>
                  <Col className='mb-4 mt-4' md={4}>
>>>>>>> Stashed changes
                    <select className={`${styles.input_field} input form-control`}>
                      <option>Ramakrishna Traders</option>
                      <option>Balaji Traders</option>
                    </select>
                    <label className={`${styles.label_heading} label_heading`}>
<<<<<<< Updated upstream
                      Name of Insurer<strong className="text-danger">*</strong>
                    </label>
                  </Col>
                  <Col className="mb-4 mt-4" md={4}>
=======
                      Name of Insurer<strong className='text-danger'>*</strong>
                    </label>
                  </Col>
                  <Col className='mb-4 mt-4' md={4}>
>>>>>>> Stashed changes
                    <select className={`${styles.input_field} input form-control`}>
                      <option>COA202138329477</option>
                      <option>DSDA202138329477</option>
                    </select>
                    <label className={`${styles.label_heading} label_heading`}>
<<<<<<< Updated upstream
                      GST of Insured<strong className="text-danger">*</strong>
                    </label>
                  </Col>

                  <Col className="mb-4 mt-4" md={4}>
                    <input className={`${styles.input_field} input form-control`} required type="text" />
                    <label className={`${styles.label_heading} label_heading`}>
                      Name of Insured<strong className="text-danger">*</strong>
                    </label>
                  </Col>
                  <Col className="mb-4 mt-4" md={4}>
                    <input className={`${styles.input_field} input form-control`} required type="text" />
                    <label className={`${styles.label_heading} label_heading`}>
                      Address of Insured
                      <strong className="text-danger">*</strong>
                    </label>
                  </Col>
                  <Col className="mb-4 mt-4" md={2}>
                    <div className="d-flex">
                      <DateCalender labelName="Insurance from" />
                      <img
                        className={`${styles.calanderIcon} image_arrow img-fluid`}
                        src="/static/caldericon.svg"
                        alt="Search"
=======
                      GST of Insured<strong className='text-danger'>*</strong>
                    </label>
                  </Col>

                  <Col className='mb-4 mt-4' md={4}>
                    <input className={`${styles.input_field} input form-control`} required type='text' />
                    <label className={`${styles.label_heading} label_heading`}>
                      Name of Insured<strong className='text-danger'>*</strong>
                    </label>
                  </Col>
                  <Col className='mb-4 mt-4' md={4}>
                    <input className={`${styles.input_field} input form-control`} required type='text' />
                    <label className={`${styles.label_heading} label_heading`}>
                      Address of Insured
                      <strong className='text-danger'>*</strong>
                    </label>
                  </Col>
                  <Col className='mb-4 mt-4' md={2}>
                    <div className='d-flex'>
                      <DateCalender labelName='Insurance from' />
                      <img
                        className={`${styles.calanderIcon} image_arrow img-fluid`}
                        src='/static/caldericon.svg'
                        alt='Search'
>>>>>>> Stashed changes
                      />
                    </div>
                  </Col>

<<<<<<< Updated upstream
                  <Col className="mb-4 mt-4" md={2}>
                    <div className="d-flex">
                      <DateCalender labelName="Insurance to" />
                      <img
                        className={`${styles.calanderIcon} image_arrow img-fluid`}
                        src="/static/caldericon.svg"
                        alt="Search"
                      />
                    </div>
                  </Col>
                  <Col className="mb-4 mt-4" md={4}>
                    <input
                      className={`${styles.input_field} input form-control`}
                      required
                      type="number"
=======
                  <Col className='mb-4 mt-4' md={2}>
                    <div className='d-flex'>
                      <DateCalender labelName='Insurance to' />
                      <img
                        className={`${styles.calanderIcon} image_arrow img-fluid`}
                        src='/static/caldericon.svg'
                        alt='Search'
                      />
                    </div>
                  </Col>
                  <Col className='mb-4 mt-4' md={4}>
                    <input
                      className={`${styles.input_field} input form-control`}
                      required
                      type='number'
>>>>>>> Stashed changes
                      onWheel={(event) => event.currentTarget.blur()}
                      onKeyDown={(evt) => ['e', 'E', '+', '-'].includes(evt.key) && evt.preventDefault()}
                    />
                    <label className={`${styles.label_heading} label_heading`}>
                      Period of Insurance (In days)
<<<<<<< Updated upstream
                      <strong className="text-danger">*</strong>
                    </label>
                  </Col>
                  <Col className="mb-4 mt-4" md={4}>
=======
                      <strong className='text-danger'>*</strong>
                    </label>
                  </Col>
                  <Col className='mb-4 mt-4' md={4}>
>>>>>>> Stashed changes
                    <select className={`${styles.input_field} input form-control`}>
                      <option>HDFC Bank</option>
                      <option>SBI</option>
                    </select>
                    <label className={`${styles.label_heading} label_heading`}>
<<<<<<< Updated upstream
                      Loss Payee Bank<strong className="text-danger">*</strong>
=======
                      Loss Payee Bank<strong className='text-danger'>*</strong>
>>>>>>> Stashed changes
                    </label>
                  </Col>
                </Row>
              </div>
            </div>

            <div className={` ${styles.content}`}>
              <div className={` ${styles.header}  card_sub_header`}>
                <h5>Coverage & Premium</h5>
              </div>
              <div className={` ${styles.body}`}>
                <Row>
<<<<<<< Updated upstream
                  <Col className="mb-4 mt-4" md={4}>
                    <input className={`${styles.input_field} input form-control`} required type="text" />
                    <label className={`${styles.label_heading} label_heading`}>
                      Sum Insured<strong className="text-danger">*</strong>
                    </label>
                  </Col>
                  <Col className="mb-4 mt-4" md={4}>
                    <input className={`${styles.input_field} input form-control`} required type="text" />
                    <label className={`${styles.label_heading} label_heading`}>
                      Premium Amount<strong className="text-danger">*</strong>
                    </label>
                  </Col>
                  <Col className="mb-4 mt-4" md={4}>
                    <input className={`${styles.input_field} input form-control`} required type="text" />
                    <label className={`${styles.label_heading} label_heading`}>
                      IGST<strong className="text-danger">*</strong>
                    </label>
                  </Col>

                  <Col className="mb-4 mt-4" md={4}>
                    <input className={`${styles.input_field} input form-control`} required type="text" />
                    <label className={`${styles.label_heading} label_heading`}>
                      CGST<strong className="text-danger">*</strong>
                    </label>
                  </Col>
                  <Col className="mb-4 mt-4" md={4}>
                    <input className={`${styles.input_field} input form-control`} required type="text" />
                    <label className={`${styles.label_heading} label_heading`}>
                      SGST<strong className="text-danger">*</strong>
                    </label>
                  </Col>
                  <Col className="mb-4 mt-4" md={4}>
                    <input className={`${styles.input_field} input form-control`} required type="text" />
                    <label className={`${styles.label_heading} label_heading`}>
                      Recoverable Stamp duty
                      <strong className="text-danger">*</strong>
                    </label>
                  </Col>

                  <Col className="mb-4 mt-4" md={4}>
                    <input className={`${styles.input_field} input form-control`} required type="text" />
                    <label className={`${styles.label_heading} label_heading`}>
                      Total Amount<strong className="text-danger">*</strong>
=======
                  <Col className='mb-4 mt-4' md={4}>
                    <input className={`${styles.input_field} input form-control`} required type='text' />
                    <label className={`${styles.label_heading} label_heading`}>
                      Sum Insured<strong className='text-danger'>*</strong>
                    </label>
                  </Col>
                  <Col className='mb-4 mt-4' md={4}>
                    <input className={`${styles.input_field} input form-control`} required type='text' />
                    <label className={`${styles.label_heading} label_heading`}>
                      Premium Amount<strong className='text-danger'>*</strong>
                    </label>
                  </Col>
                  <Col className='mb-4 mt-4' md={4}>
                    <input className={`${styles.input_field} input form-control`} required type='text' />
                    <label className={`${styles.label_heading} label_heading`}>
                      IGST<strong className='text-danger'>*</strong>
                    </label>
                  </Col>

                  <Col className='mb-4 mt-4' md={4}>
                    <input className={`${styles.input_field} input form-control`} required type='text' />
                    <label className={`${styles.label_heading} label_heading`}>
                      CGST<strong className='text-danger'>*</strong>
                    </label>
                  </Col>
                  <Col className='mb-4 mt-4' md={4}>
                    <input className={`${styles.input_field} input form-control`} required type='text' />
                    <label className={`${styles.label_heading} label_heading`}>
                      SGST<strong className='text-danger'>*</strong>
                    </label>
                  </Col>
                  <Col className='mb-4 mt-4' md={4}>
                    <input className={`${styles.input_field} input form-control`} required type='text' />
                    <label className={`${styles.label_heading} label_heading`}>
                      Recoverable Stamp duty
                      <strong className='text-danger'>*</strong>
                    </label>
                  </Col>

                  <Col className='mb-4 mt-4' md={4}>
                    <input className={`${styles.input_field} input form-control`} required type='text' />
                    <label className={`${styles.label_heading} label_heading`}>
                      Total Amount<strong className='text-danger'>*</strong>
>>>>>>> Stashed changes
                    </label>
                  </Col>
                </Row>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={`${styles.wrapper} mt-4 card`}>
        <div
          className={`${styles.cardHeader}  card-header d-flex align-items-center justify-content-between bg-transparent`}
<<<<<<< Updated upstream
          data-toggle="collapse"
          data-target="#storageInsurance"
          aria-expanded="true"
          aria-controls="storageInsurance"
        >
          <h2 className="mb-0">Storage Insurance</h2>
          <span>+</span>
        </div>
        <div
          id="storageInsurance"
          className="collapse"
          aria-labelledby="storageInsurance"
          data-parent="#storageInsurance"
=======
          data-toggle='collapse'
          data-target='#storageInsurance'
          aria-expanded='true'
          aria-controls='storageInsurance'
        >
          <h2 className='mb-0'>Storage Insurance</h2>
          <span>+</span>
        </div>
        <div
          id='storageInsurance'
          className='collapse'
          aria-labelledby='storageInsurance'
          data-parent='#storageInsurance'
>>>>>>> Stashed changes
        >
          <div className={` ${styles.cardBody} card-body  border_color`}>
            <div className={` ${styles.content}`}>
              <div className={` ${styles.header}  card_sub_header`}>
                <h5>Storage Insurance Details</h5>
              </div>
              <div className={` ${styles.body}`}>
                <Row>
                  <Col md={4}>
                    <div className={`${styles.col_header} label_heading`}>Vessel Name</div>
                    <div className={styles.col_body}>Abcz</div>
                  </Col>
                  <Col md={4}>
                    <div className={`${styles.col_header} label_heading`}>Commodity</div>
                    <div className={styles.col_body}>Iron</div>
                  </Col>
                  <Col md={4}>
                    <div className={`${styles.col_header} label_heading`}>Country of Origin</div>
                    <div className={styles.col_body}>India</div>
                  </Col>
                  <Col md={4}>
                    <div className={`${styles.col_header} label_heading`}>Quantity</div>
                    <div className={styles.col_body}>5,000.00 MT</div>
                  </Col>
                  <Col md={4}>
                    <div className={`${styles.col_header} label_heading`}>Port of Loading</div>
                    <div className={styles.col_body}>Navasheva</div>
                  </Col>
                  <Col md={4}>
                    <div className={`${styles.col_header} label_heading`}>Port of Discharge</div>
                    <div className={styles.col_body}>Gangavaram Port, Andhra Pradesh</div>
                  </Col>
                  <Col md={4}>
                    <div className={`${styles.col_header} label_heading`}>Loss Payee Bank</div>
                    <div className={styles.col_body}>HDFC Bank</div>
                  </Col>
<<<<<<< Updated upstream
                  <Col className="mt-4" md={4}>
                    <div className="d-flex">
                      <DateCalender labelName="Expected time of Dispatch" />
                      <img
                        className={`${styles.calanderIcon} image_arrow img-fluid`}
                        src="/static/caldericon.svg"
                        alt="Search"
=======
                  <Col className='mt-4' md={4}>
                    <div className='d-flex'>
                      <DateCalender labelName='Expected time of Dispatch' />
                      <img
                        className={`${styles.calanderIcon} image_arrow img-fluid`}
                        src='/static/caldericon.svg'
                        alt='Search'
>>>>>>> Stashed changes
                      />
                    </div>
                  </Col>
                </Row>
              </div>
            </div>

            <div className={` ${styles.content}`}>
              <div className={` ${styles.header}  card_sub_header`}>
                <h5>Storage Insurance Policy</h5>
              </div>
              <div className={` ${styles.body}`}>
                <Row>
<<<<<<< Updated upstream
                  <Col className="mb-4 mt-4" md={4}>
                    <input className={`${styles.input_field} input form-control`} required type="text" />
                    <label className={`${styles.label_heading} label_heading`}>
                      Policy Number<strong className="text-danger">*</strong>
                    </label>
                  </Col>
                  <Col className="mb-4 mt-4" md={4}>
=======
                  <Col className='mb-4 mt-4' md={4}>
                    <input className={`${styles.input_field} input form-control`} required type='text' />
                    <label className={`${styles.label_heading} label_heading`}>
                      Policy Number<strong className='text-danger'>*</strong>
                    </label>
                  </Col>
                  <Col className='mb-4 mt-4' md={4}>
>>>>>>> Stashed changes
                    <select className={`${styles.input_field} input form-control`}>
                      <option>Ramakrishna Traders</option>
                      <option>Balaji Traders</option>
                    </select>
                    <label className={`${styles.label_heading} label_heading`}>
<<<<<<< Updated upstream
                      Name of Insurer<strong className="text-danger">*</strong>
                    </label>
                  </Col>
                  <Col className="mb-4 mt-4" md={4}>
=======
                      Name of Insurer<strong className='text-danger'>*</strong>
                    </label>
                  </Col>
                  <Col className='mb-4 mt-4' md={4}>
>>>>>>> Stashed changes
                    <select className={`${styles.input_field} input form-control`}>
                      <option>COA202138329477</option>
                      <option>DSDA202138329477</option>
                    </select>
                    <label className={`${styles.label_heading} label_heading`}>
<<<<<<< Updated upstream
                      GST of Insured<strong className="text-danger">*</strong>
                    </label>
                  </Col>

                  <Col className="mb-4 mt-4" md={4}>
                    <input className={`${styles.input_field} input form-control`} required type="text" />
                    <label className={`${styles.label_heading} label_heading`}>
                      Name of Insured<strong className="text-danger">*</strong>
                    </label>
                  </Col>
                  <Col className="mb-4 mt-4" md={4}>
                    <input className={`${styles.input_field} input form-control`} required type="text" />
                    <label className={`${styles.label_heading} label_heading`}>
                      Address of Insured
                      <strong className="text-danger">*</strong>
                    </label>
                  </Col>
                  <Col className="mb-4 mt-4" md={2}>
                    <div className="d-flex">
                      <DateCalender labelName=" Insurance from" />
                      <img
                        className={`${styles.calanderIcon} image_arrow img-fluid`}
                        src="/static/caldericon.svg"
                        alt="Search"
=======
                      GST of Insured<strong className='text-danger'>*</strong>
                    </label>
                  </Col>

                  <Col className='mb-4 mt-4' md={4}>
                    <input className={`${styles.input_field} input form-control`} required type='text' />
                    <label className={`${styles.label_heading} label_heading`}>
                      Name of Insured<strong className='text-danger'>*</strong>
                    </label>
                  </Col>
                  <Col className='mb-4 mt-4' md={4}>
                    <input className={`${styles.input_field} input form-control`} required type='text' />
                    <label className={`${styles.label_heading} label_heading`}>
                      Address of Insured
                      <strong className='text-danger'>*</strong>
                    </label>
                  </Col>
                  <Col className='mb-4 mt-4' md={2}>
                    <div className='d-flex'>
                      <DateCalender labelName=' Insurance from' />
                      <img
                        className={`${styles.calanderIcon} image_arrow img-fluid`}
                        src='/static/caldericon.svg'
                        alt='Search'
>>>>>>> Stashed changes
                      />
                    </div>
                  </Col>

<<<<<<< Updated upstream
                  <Col className="mb-4 mt-4" md={2}>
                    <div className="d-flex">
                      <DateCalender labelName="Insurance to" />
                      <img
                        className={`${styles.calanderIcon} image_arrow img-fluid`}
                        src="/static/caldericon.svg"
                        alt="Search"
                      />
                    </div>
                  </Col>
                  <Col className="mb-4 mt-4" md={4}>
                    <input
                      className={`${styles.input_field} input form-control`}
                      required
                      type="number"
=======
                  <Col className='mb-4 mt-4' md={2}>
                    <div className='d-flex'>
                      <DateCalender labelName='Insurance to' />
                      <img
                        className={`${styles.calanderIcon} image_arrow img-fluid`}
                        src='/static/caldericon.svg'
                        alt='Search'
                      />
                    </div>
                  </Col>
                  <Col className='mb-4 mt-4' md={4}>
                    <input
                      className={`${styles.input_field} input form-control`}
                      required
                      type='number'
>>>>>>> Stashed changes
                      onWheel={(event) => event.currentTarget.blur()}
                      onKeyDown={(evt) => ['e', 'E', '+', '-'].includes(evt.key) && evt.preventDefault()}
                    />
                    <label className={`${styles.label_heading} label_heading`}>
                      Period of Insurance (In days)
<<<<<<< Updated upstream
                      <strong className="text-danger">*</strong>
                    </label>
                  </Col>
                  <Col className="mb-4 mt-4" md={4}>
=======
                      <strong className='text-danger'>*</strong>
                    </label>
                  </Col>
                  <Col className='mb-4 mt-4' md={4}>
>>>>>>> Stashed changes
                    <select className={`${styles.input_field} input form-control`}>
                      <option>HDFC Bank</option>
                      <option>SBI</option>
                    </select>
                    <label className={`${styles.label_heading} label_heading`}>
<<<<<<< Updated upstream
                      Loss Payee Bank<strong className="text-danger">*</strong>
                    </label>
                  </Col>
                  <Col className="mb-4 mt-4" md={4}>
=======
                      Loss Payee Bank<strong className='text-danger'>*</strong>
                    </label>
                  </Col>
                  <Col className='mb-4 mt-4' md={4}>
>>>>>>> Stashed changes
                    <select className={`${styles.input_field} input form-control`}>
                      <option>Warehouse</option>
                      <option>Warehouse</option>
                    </select>
                    <label className={`${styles.label_heading} label_heading`}>
<<<<<<< Updated upstream
                      Place of Storage<strong className="text-danger">*</strong>
                    </label>
                  </Col>
                  <Col className="mb-4 mt-4" md={4}>
                    <div className="d-flex">
                      <input className={`${styles.input_field} input form-control`} required type="text" />
                      <label className={`${styles.label_heading} label_heading`}>
                        Address of storage
                        <strong className="text-danger">*</strong>
                      </label>
                      <img className={`${styles.search_image} img-fluid`} src="/static/search-grey.svg" alt="Search" />
=======
                      Place of Storage<strong className='text-danger'>*</strong>
                    </label>
                  </Col>
                  <Col className='mb-4 mt-4' md={4}>
                    <div className='d-flex'>
                      <input className={`${styles.input_field} input form-control`} required type='text' />
                      <label className={`${styles.label_heading} label_heading`}>
                        Address of storage
                        <strong className='text-danger'>*</strong>
                      </label>
                      <img className={`${styles.search_image} img-fluid`} src='/static/search-grey.svg' alt='Search' />
>>>>>>> Stashed changes
                    </div>
                  </Col>
                </Row>
              </div>
            </div>

            <div className={` ${styles.content}`}>
              <div className={` ${styles.header}  card_sub_header`}>
                <h5>Coverage & Premium</h5>
              </div>
              <div className={` ${styles.body}`}>
                <Row>
<<<<<<< Updated upstream
                  <Col className="mb-4 mt-4" md={4}>
                    <input className={`${styles.input_field} input form-control`} required type="text" />
                    <label className={`${styles.label_heading} label_heading`}>
                      Sum Insured<strong className="text-danger">*</strong>
                    </label>
                  </Col>
                  <Col className="mb-4 mt-4" md={4}>
                    <input className={`${styles.input_field} input form-control`} required type="text" />
                    <label className={`${styles.label_heading} label_heading`}>
                      Premium Amount<strong className="text-danger">*</strong>
                    </label>
                  </Col>
                  <Col className="mb-4 mt-4" md={4}>
                    <input className={`${styles.input_field} input form-control`} required type="text" />
                    <label className={`${styles.label_heading} label_heading`}>
                      IGST<strong className="text-danger">*</strong>
                    </label>
                  </Col>

                  <Col className="mb-4 mt-4" md={4}>
                    <input className={`${styles.input_field} input form-control`} required type="text" />
                    <label className={`${styles.label_heading} label_heading`}>
                      CGST<strong className="text-danger">*</strong>
                    </label>
                  </Col>
                  <Col className="mb-4 mt-4" md={4}>
                    <input className={`${styles.input_field} input form-control`} required type="text" />
                    <label className={`${styles.label_heading} label_heading`}>
                      SGST<strong className="text-danger">*</strong>
                    </label>
                  </Col>
                  <Col className="mb-4 mt-4" md={4}>
                    <input className={`${styles.input_field} input form-control`} required type="text" />
                    <label className={`${styles.label_heading} label_heading`}>
                      Recoverable Stamp duty
                      <strong className="text-danger">*</strong>
                    </label>
                  </Col>

                  <Col className="mb-4 mt-4" md={4}>
                    <input className={`${styles.input_field} input form-control`} required type="text" />
                    <label className={`${styles.label_heading} label_heading`}>
                      Total Amount<strong className="text-danger">*</strong>
=======
                  <Col className='mb-4 mt-4' md={4}>
                    <input className={`${styles.input_field} input form-control`} required type='text' />
                    <label className={`${styles.label_heading} label_heading`}>
                      Sum Insured<strong className='text-danger'>*</strong>
                    </label>
                  </Col>
                  <Col className='mb-4 mt-4' md={4}>
                    <input className={`${styles.input_field} input form-control`} required type='text' />
                    <label className={`${styles.label_heading} label_heading`}>
                      Premium Amount<strong className='text-danger'>*</strong>
                    </label>
                  </Col>
                  <Col className='mb-4 mt-4' md={4}>
                    <input className={`${styles.input_field} input form-control`} required type='text' />
                    <label className={`${styles.label_heading} label_heading`}>
                      IGST<strong className='text-danger'>*</strong>
                    </label>
                  </Col>

                  <Col className='mb-4 mt-4' md={4}>
                    <input className={`${styles.input_field} input form-control`} required type='text' />
                    <label className={`${styles.label_heading} label_heading`}>
                      CGST<strong className='text-danger'>*</strong>
                    </label>
                  </Col>
                  <Col className='mb-4 mt-4' md={4}>
                    <input className={`${styles.input_field} input form-control`} required type='text' />
                    <label className={`${styles.label_heading} label_heading`}>
                      SGST<strong className='text-danger'>*</strong>
                    </label>
                  </Col>
                  <Col className='mb-4 mt-4' md={4}>
                    <input className={`${styles.input_field} input form-control`} required type='text' />
                    <label className={`${styles.label_heading} label_heading`}>
                      Recoverable Stamp duty
                      <strong className='text-danger'>*</strong>
                    </label>
                  </Col>

                  <Col className='mb-4 mt-4' md={4}>
                    <input className={`${styles.input_field} input form-control`} required type='text' />
                    <label className={`${styles.label_heading} label_heading`}>
                      Total Amount<strong className='text-danger'>*</strong>
>>>>>>> Stashed changes
                    </label>
                  </Col>
                </Row>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={`${styles.wrapper} mt-4 card`}>
        <div
          className={`${styles.cardHeader}  card-header d-flex align-items-center justify-content-between bg-transparent`}
<<<<<<< Updated upstream
          data-toggle="collapse"
          data-target="#remarks"
          aria-expanded="true"
          aria-controls="remarks"
        >
          <h2 className="mb-0">Remarks</h2>
          <span>+</span>
        </div>
        <div id="remarks" className="collapse" aria-labelledby="remarks" data-parent="#remarks">
=======
          data-toggle='collapse'
          data-target='#remarks'
          aria-expanded='true'
          aria-controls='remarks'
        >
          <h2 className='mb-0'>Remarks</h2>
          <span>+</span>
        </div>
        <div id='remarks' className='collapse' aria-labelledby='remarks' data-parent='#remarks'>
>>>>>>> Stashed changes
          <div className={` ${styles.cardBody} card-body  border_color`}>
            <div className={styles.remark_field}>
              <p>
                {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum. */}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className={`${styles.wrapper} mt-4 card`}>
        <div
          className={`${styles.cardHeader}  card-header d-flex align-items-center justify-content-between bg-transparent`}
<<<<<<< Updated upstream
          data-toggle="collapse"
          data-target="#uploadDoc"
          aria-expanded="true"
          aria-controls="uploadDoc"
        >
          <h2 className="mb-0">Upload Documents</h2>
          <span>+</span>
        </div>
        <div id="uploadDoc" className="collapse" aria-labelledby="uploadDoc" data-parent="#uploadDoc">
          <div className={styles.table_container}>
            <table className={`${styles.table} table`} cellPadding="0" cellSpacing="0" border="0">
=======
          data-toggle='collapse'
          data-target='#uploadDoc'
          aria-expanded='true'
          aria-controls='uploadDoc'
        >
          <h2 className='mb-0'>Upload Documents</h2>
          <span>+</span>
        </div>
        <div id='uploadDoc' className='collapse' aria-labelledby='uploadDoc' data-parent='#uploadDoc'>
          <div className={styles.table_container}>
            <table className={`${styles.table} table`} cellPadding='0' cellSpacing='0' border='0'>
>>>>>>> Stashed changes
              <thead>
                <tr>
                  <th>DOCUMENT NAME</th>
                  <th>FORMAT</th>
                  <th>DOCUMENT DATE</th>
                  <th>ACTION</th>
                </tr>
              </thead>
              <tbody>
<<<<<<< Updated upstream
                <tr className="table_row">
                  <td className={`${styles.doc_name}`}>Policy Document - Marine</td>
                  <td>
                    <img src="/static/pdf.svg" className="img-fluid" alt="Pdf" />
                  </td>
                  <td className={styles.doc_row}>28-02-2022,5:30 PM</td>
                  <td>
                    <div className="d-flex">
                      <input className={`${styles.file_field}`} type="file" />
                      <img
                        className={`${styles.close_image} image_arrow img-fluid`}
                        src="/static/close.svg"
                        alt="close"
=======
                <tr className='table_row'>
                  <td className={`${styles.doc_name}`}>Policy Document - Marine</td>
                  <td>
                    <img src='/static/pdf.svg' className='img-fluid' alt='Pdf' />
                  </td>
                  <td className={styles.doc_row}>28-02-2022,5:30 PM</td>
                  <td>
                    <div className='d-flex'>
                      <input className={`${styles.file_field}`} type='file' />
                      <img
                        className={`${styles.close_image} image_arrow img-fluid`}
                        src='/static/close.svg'
                        alt='close'
>>>>>>> Stashed changes
                      />
                    </div>
                  </td>
                </tr>
<<<<<<< Updated upstream
                <tr className="table_row">
                  <td className={`${styles.doc_name}`}>Policy Document - Marine</td>
                  <td>
                    <img src="/static/pdf.svg" className="img-fluid" alt="Pdf" />
=======
                <tr className='table_row'>
                  <td className={`${styles.doc_name}`}>Policy Document - Marine</td>
                  <td>
                    <img src='/static/pdf.svg' className='img-fluid' alt='Pdf' />
>>>>>>> Stashed changes
                  </td>
                  <td className={styles.doc_row}>28-02-2022,5:30 PM</td>
                  <td>
                    {' '}
                    <button className={`${styles.button_upload} btn`}>Upload</button>
                  </td>
                </tr>

<<<<<<< Updated upstream
                <tr className="table_row">
                  <td className={`${styles.doc_name}`}>Invoice</td>
                  <td>
                    <img src="/static/pdf.svg" className="img-fluid" alt="Pdf" />
=======
                <tr className='table_row'>
                  <td className={`${styles.doc_name}`}>Invoice</td>
                  <td>
                    <img src='/static/pdf.svg' className='img-fluid' alt='Pdf' />
>>>>>>> Stashed changes
                  </td>
                  <td className={styles.doc_row}>28-02-2022,5:30 PM</td>
                  <td>
                    {' '}
                    <button className={`${styles.button_upload} btn`}>Upload</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
<<<<<<< Updated upstream
  );
};
export default index;
=======
  )
}
export default index
>>>>>>> Stashed changes
