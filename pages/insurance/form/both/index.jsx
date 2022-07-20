import React from 'react'
import styles from './index.module.scss'
import { Form, Row, Col} from 'react-bootstrap'
import UploadDocument from '../../../../src/components/UploadDocument'
import DateCalender from '../../../../src/components/DateCalender'

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

        <div className='d-lg-flex align-items-center d-inline-block mt-4 mb-4 pl-4'>
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
          <h2 className="mb-0">Marine Insurance Policy Details</h2>
          <div className='d-flex justify-content-between align-items-center'>
          <h5  className={`${styles.radio_label} mr-3`}>Insurance From:</h5>
          <div className={`${styles.radio_form} `}>
          {['radio'].map((type) => (
            <div key={`inline-${type}`} className={styles.radio_group}>
              <Form.Check
                className={styles.radio}
                inline
                label="Domestic"
                name="group1"
                type={type}
                id={`inline-${type}-1`}
              />
              
              <Form.Check
                className={styles.radio}
                inline
                label="International"
                name="group1"
                type={type}
                id={`inline-${type}-2`}
              />

            </div>
          ))}
        </div>
       
          <span>+</span>
          </div>
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
                     <div className='d-flex'>
                    <select
                      className={`${styles.input_field} ${styles.customSelect}   input form-control`}
                    >
                      <option>Ramakrishna Traders</option>
                      <option>Balaji Traders</option>
                    </select>
                    <label className={`${styles.label_heading} label_heading`}>
                      Name of Insurer<strong className="text-danger">*</strong>
                    </label>
                    <img
                        className={`${styles.arrow} img-fluid`}
                        src="/static/inputDropDown.svg"
                        alt="Search"
                    />
                        </div>
                  </Col>
                  <Col className="mb-4 mt-4" lg={4} md={6} sm={6}>
                  <div className="d-flex">
                  <input
                      className={`${styles.input_field} input form-control`}
                      required
                      style={{borderColor: '#43C34D'}}
                      type="text"
                    />
                    <label className={`${styles.label_heading} label_heading`}>
                      GST of Insured
                    </label>
                    <img
                    className={`${styles.checked_image} img-fluid`}
                    src="/static/approved.svg"
                    alt="Approve"
                  />
                  </div>
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
                     <div className="d-flex">
                    <DateCalender labelName='Insurance from'/>
                     <img
                        className={`${styles.calanderIcon} img-fluid`}
                        src="/static/caldericon.svg"
                        alt="Search"
                    />
                      
                    </div>  
                      
                  </Col>
                  <Col className="mb-4 mt-4" lg={2} md={6}>
                  <div className="d-flex">
                    <DateCalender labelName='Insurance to'/>
                     <img
                        className={`${styles.calanderIcon} img-fluid`}
                        src="/static/caldericon.svg"
                        alt="Search"
                    />
                      
                    </div>  
                      
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
                                            <div className='d-flex'>
                    <select
                      className={`${styles.input_field} ${styles.customSelect}  input form-control`}>
                      <option>HDFC Bank</option>
                      <option>SBI</option>
                    </select>
                    <label className={`${styles.label_heading} label_heading`}>
                      Loss Payee Bank<strong className="text-danger">*</strong>
                    </label>
                    <img
                        className={`${styles.arrow} img-fluid`}
                        src="/static/inputDropDown.svg"
                        alt="Search"
                    />
                        </div>
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
          <div className={styles.radio_label}>Insurance From: <span className={styles.insurance_from} style={{color: "#111111"}}>Domestic</span></div>
          <div className='d-flex justify-content-between align-items-center'>
          <div className={`${styles.radio_label} mr-5`} >Is the Insurer same as Marine Insurance?</div>
         <div className={`${styles.theme} d-flex align-items-center`}>
            <div className={`${styles.toggle_label} form-check-label mr-2`}>Yes</div>
              <label className={styles.switch}>
                <input type="checkbox"/>
                <span className={`${styles.slider} ${styles.round}` }></span>
              </label>
                <div className={`${styles.toggle_label} form-check-label ml-2 mr-3`}>No</div>
              </div>
       
          <span>+</span>
          </div>        </div>
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
                <div className="d-flex">
                    <input
                      className={`${styles.input_field} input form-control`}
                      style={{color:"#EA3F3F"}}
                      required
                      type="text"
                    />
                    <label className={`${styles.label_heading} label_heading`}>
                      Policy Number<strong className="text-danger">*</strong>
                    </label>
                    <img
                    className={`${styles.checked_image} img-fluid`}
                    src="/static/approved.svg"
                    alt="Info circle"
                  />
                  </div>

                  </Col>
                  <Col className="mb-4 mt-4" lg={4} md={6} sm={6}>
                   <div className='d-flex'>
                    <select
                      className={`${styles.input_field} ${styles.customSelect}  input form-control`}
                    >
                      <option>Ramakrishna Traders</option>
                      <option>Balaji Traders</option>
                    </select>
                    <label className={`${styles.label_heading} label_heading`}>
                      Name of Insurer<strong className="text-danger">*</strong>
                    </label>
                    <img
                        className={`${styles.arrow} img-fluid`}
                        src="/static/inputDropDown.svg"
                        alt="Search"
                    />
                        </div>
                  </Col>
                  <Col className="mb-4 mt-4" lg={4} md={6} sm={6}>
                  <div className="d-flex">

                  <input
                      className={`${styles.input_field} input form-control`}
                      style={{borderColor: '#43C34D'}}
                      required
                      type="text"
                    />
                    <label className={`${styles.label_heading} label_heading`}>
                      GST of Insured
                    </label>
                    <img
                    className={`${styles.checked_image} img-fluid`}
                    src="/static/approved.svg"
                    alt="Approve"
                  />
                  </div>
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
                     <div className="d-flex">
                    <DateCalender labelName='Insurance from'/>
                     <img
                        className={`${styles.calanderIcon} img-fluid`}
                        src="/static/caldericon.svg"
                        alt="Search"
                    />
                      
                    </div>  
                      
                  </Col>
                  <Col className="mb-4 mt-4" lg={2} md={6}>
                  <div className="d-flex">
                    <DateCalender labelName='Insurance to'/>
                     <img
                        className={`${styles.calanderIcon} img-fluid`}
                        src="/static/caldericon.svg"
                        alt="Search"
                    />
                      
                    </div>  
                      
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
                                            <div className='d-flex'>
                    <select
                      className={`${styles.input_field} ${styles.customSelect} input form-control`}
                    >
                      <option>HDFC Bank</option>
                      <option>SBI</option>
                    </select>
                    <label className={`${styles.label_heading} label_heading`}>
                      Loss Payee Bank<strong className="text-danger">*</strong>
                    </label>
                    <img
                        className={`${styles.arrow} img-fluid`}
                        src="/static/inputDropDown.svg"
                        alt="Search"
                    />
                        </div>
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
