import React from 'react'
import styles from './index.module.scss'
import { Form } from 'react-bootstrap'


const index = () => {

  return (
    <div className={styles.main}>
      <div className={styles.heading}>Order Details</div>

      <div className={`${styles.input_container} row`}>
        <div className={`${styles.each_input} col-md-4 col-sm-6`}>
          <div className='d-flex'>
              <input className={`${styles.input_field} form-control`} required type="text"/> 
              <label className={styles.label_heading}>Commodity<strong className="text-danger">*</strong></label>
              <img className={`${styles.search_image} img-fluid`} src = "/static/search-grey.svg" alt="Search"/>
          </div>
        </div>

        <div className={`${styles.each_input} col-md-2 col-sm-3`}>
          <input
            type="text"
            className={`${styles.input_field} form-control`} required/>
            <label className={styles.label_heading}>Quantity (in MT)<strong className="text-danger">*</strong></label>
        </div>

        <div className={`${styles.each_input} col-md-2 col-sm-3`}>
          <div className={styles.phone_card}>
            <select className={styles.code_phone}>
              <option>Select order values</option>
              <option selected>$</option>
              <option>INR</option>
            </select>
            <input type="text"
              className={`${styles.input_field} form-control`} />
              <label className={styles.label_heading}>Order values<strong className="text-danger">*</strong></label>
          </div>
        </div>

        <div className={`${styles.each_input} col-md-4 col-sm-6`}>
          <input
            type="text"
            className={`${styles.input_field} form-control`} required/>
            <label className={styles.label_heading}>Supplier Name<strong className="text-danger">*</strong></label>
        
        </div>
        <div className={`${styles.each_input} col-md-4 col-sm-6`}>
          <select
            className={`${styles.input_field} form-control`}>
            <option value="I">Select Country</option>
            <option value="India">America</option>
          </select>
          <label className={styles.label_heading}>Country Of Origin<strong className="text-danger">*</strong></label>
        </div>

        <div className={`${styles.each_input} col-md-4 col-sm-6`}>
          <select
            className={`${styles.input_field} form-control`} >
            <option value="port1">Select Port</option>
            <option value="port2">Mumbai</option>
          </select>
          <label className={styles.label_heading}>Port Of Discharge<strong className="text-danger">*</strong></label>

        </div>
        <div className={`${styles.each_input} col-md-4 col-sm-6`}>
          <input
            type="date"
            className={`${styles.input_field} form-control`}/>
            <label className={styles.label_heading}>Expected Date Of Shipment<strong className="text-danger">*</strong></label>
        </div>

        <div className={`${styles.radio_form} col-md-12`}>
          <div className={styles.sub_heading}>INCO Terms<strong className="text-danger">*</strong></div>
          <Form>
            {['radio'].map((type) => (
              <div key={`inline-${type}`} className={styles.radio_group}>
                <Form.Check
                  className={styles.radio}
                  inline
                  label="FOB"
                  name="group1"
                  type={type}
                  id={`inline-${type}-1`}
                />
                <Form.Check
                  className={styles.radio}
                  inline
                  label="CFR"
                  name="group1"
                  type={type}
                  id={`inline-${type}-2`}
                />

                <Form.Check
                  className={styles.radio}
                  inline
                  label="CIF"
                  name="group1"
                  type={type}
                  id={`inline-${type}-2`}
                />
              </div>
            ))}
          </Form>


        </div>


      </div>
    </div>
  );
}



export default index
