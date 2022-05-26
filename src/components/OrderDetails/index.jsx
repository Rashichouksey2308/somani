import React from 'react'
import styles from './index.module.scss'
import { Form } from 'react-bootstrap'


const index = () => {

  return (
    <div className={styles.main}>
      <div className={styles.heading}>Order Details</div>


      <div className={`${styles.input_container} row`}>
        <div className={`${styles.each_input} col-md-4 col-sm-6`}>
          <label className={styles.label_heading} id="textInput">Commodity</label>
          <input
            type="text"
            id="textInput"
            value="Iron"
            className={`${styles.input_field} form-control`} />

        </div>
        <div className={`${styles.each_input} col-md-2 col-sm-3`}>
          <label className={styles.label_heading} id="textInput">Quantity (in MT)</label>
          <input
            type="number"
            id="textInput"
            value="500"
            className={`${styles.input_field} form-control`} />
        </div>
        <div className={`${styles.each_input} col-md-2 col-sm-3`}>
          <label className={styles.label_heading} id="textInput">Order values</label>
          <div className={styles.phone_card}>
            <select id="Code" className={styles.code_phone}>
              <option>INR</option>
              <option>$</option>

            </select>
            <input type="number"
              value="9876543210"
              id="textInput"
              className={`${styles.input_field} form-control`} />

          </div>

        </div>

        <div className={`${styles.each_input} col-md-4 col-sm-6`}>
          <label className={styles.label_heading} id="textInput">Supplier Name</label>
          <input
            type="text"
            value="Camilog International"
            id="textInput"
            className={`${styles.input_field} form-control`} />

        </div>
        <div className={`${styles.each_input} col-md-4 col-sm-6`}>
          <label className={styles.label_heading} id="dropCountry">Country Of Origin</label>
          <select
            id="dropCountry"
            className={`${styles.input_field} form-control`} >
            <option value="country">India</option>
            <option value="countryt1">America</option>

          </select>

        </div>
        <div className={`${styles.each_input} col-md-4 col-sm-6`}>
          <label className={styles.label_heading} id="dropPort">Port Of Discharge</label>
          <select
            id="dropPort"
            className={`${styles.input_field} form-control`} >
            <option value="port1">Vishakapatnam</option>
            <option value="port2">Mumbai</option>

          </select>
        </div>
        <div className={`${styles.each_input} col-md-4 col-sm-6`}>
          <label className={styles.label_heading} id="textDate">Expected Date Of Shipment</label>
          <input
            type="date"
            value="22-02-2022"
            id="textDate"
            onChange={(e)=>{
              
            }}
            className={`${styles.input_field} form-control`} />

        </div>
        <div className={`${styles.radio_form} col-md-12`}>
          <div className={styles.sub_heading}
          >INCO Terms</div>
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
