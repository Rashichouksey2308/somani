import React from 'react'
import styles from './index.module.scss'
import { Form } from 'react-bootstrap'


const index = () => {

  return (
    <div className={styles.main}>
      <div className={styles.heading}>Order Details</div>

      <div className={`${styles.input_container} row`}>
        <div className={`${styles.each_input} col-md-4 col-sm-6`}>
          <input
            type="text"
            className={`${styles.input_field} form-control`} />
            <label className={styles.label_heading}>Commodity</label>
        </div>

        <div className={`${styles.each_input} col-md-2 col-sm-3`}>
          <input
            type="text"
            className={`${styles.input_field} form-control`} />
            <label className={styles.label_heading}>Quantity (in MT)</label>
        </div>

        <div className={`${styles.each_input} col-md-2 col-sm-3`}>
          <div className={styles.phone_card}>
            <select className={styles.code_phone}>
              <option>Select order values</option>
              <option>$</option>
            </select>
            <input type="text"
              className={`${styles.input_field} form-control`} />
              <label className={styles.label_heading}>Order values</label>
          </div>
        </div>

        <div className={`${styles.each_input} col-md-4 col-sm-6`}>
          <input
            type="text"
            className={`${styles.input_field} form-control`} />
            <label className={styles.label_heading}>Supplier Name</label>
        
        </div>
        <div className={`${styles.each_input} col-md-4 col-sm-6`}>
          <label className={styles.label_heading}>Country Of Origin</label>
          <select
            className={`${styles.input_field} form-control`} >
            <option value="Select Country">India</option>
            <option value="India">America</option>
          </select>
        </div>

        <div className={`${styles.each_input} col-md-4 col-sm-6`}>
          <label className={styles.label_heading}>Port Of Discharge</label>
          <select
            className={`${styles.input_field} form-control`} >
            <option value="port1">Select Port</option>
            <option value="port2">Mumbai</option>

          </select>
        </div>
        <div className={`${styles.each_input} col-md-4 col-sm-6`}>
          <input
            type="date"
            className={`${styles.input_field} form-control`} />
            <label className={styles.label_heading}>Expected Date Of Shipment</label>
        </div>

        <div className={`${styles.radio_form} col-md-12`}>
          <div className={styles.sub_heading}>INCO Terms</div>
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
                  disabled
                  label="CFR"
                  name="group1"
                  type={type}
                  id={`inline-${type}-2`}
                />

                <Form.Check
                  className={styles.radio}
                  inline
                  disabled
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
