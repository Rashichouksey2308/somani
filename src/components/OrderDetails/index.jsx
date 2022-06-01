import React from 'react'
import styles from './index.module.scss'
import { Form } from 'react-bootstrap'

const index = ({ saveOrderData }) => {
  return (
    <div className={styles.main}>
      <div className={styles.heading}>Order Details</div>
      <form id="OrderDetailsForm">
        <div className={`${styles.input_container} row`}>
          <div className={`${styles.each_input} col-md-4 col-sm-6`}>
            <input
              type="text"
              id="textInput"
              name='commodity'
              // defaultValue='Iron'
              onChange={(e) => { saveOrderData(e.target.name, e.target.value) }}
              className={`${styles.input_field} form-control`}
              required
            />
            <label className={styles.label_heading} id="textInput">
              Commodity<strong className='text-danger'>*</strong>
            </label>
          </div>
          <div className={`${styles.each_input} col-md-2 col-sm-3`}>
            <input
              type="number"
              id="textInput"
              name='quantity'
              onChange={(e) => { saveOrderData(e.target.name, e.target.value) }}
              className={`${styles.input_field} form-control`}
              required
            />
            <label className={styles.label_heading} id="textInput">
              Quantity (in MT)<strong className='text-danger'>*</strong>
            </label>
          </div>

          <div className={`${styles.each_input} ${styles.phone} col-md-2 col-sm-3`}>
            <div className={styles.phone_card}>
              <select className={`${styles.code_phone} w-50`}>
                <option>Select order values</option>
                <option selected>$</option>
                <option>INR</option>
              </select>
              <input
                type="number"
                name='orderValue'
                onChange={(e) => { saveOrderData(e.target.name, e.target.value) }}
                id="textInput"
                className={`${styles.input_field} form-control`}
                required
              />
              <label className={styles.label_heading} id="textInput">
                Order values<strong className='text-danger'>*</strong>
              </label>
            </div>
          </div>

          <div className={`${styles.each_input} col-md-4 col-sm-6`}>
            <input
              type="text"
              name='supplierName'
              onChange={(e) => { saveOrderData(e.target.name, e.target.value) }}
              id="textInput"
              className={`${styles.input_field} form-control`}
              required
            />
            <label className={styles.label_heading} id="textInput">
              Supplier Name<strong className='text-danger'>*</strong>
            </label>
          </div>
          <div className={`${styles.each_input} col-md-4 col-sm-6`}>
            <select
              id="dropCountry"
              name='countryOfOrigin'
              onChange={(e) => { saveOrderData(e.target.name, e.target.value) }}
              className={`${styles.input_field} form-control`}
              required
            >
              <option value="India" selected>India</option>
              <option value="America">America</option>
            </select>
            <label className={styles.label_heading} id="dropCountry">
              Country Of Origin<strong className='text-danger'>*</strong>
            </label>
          </div>

          <div className={`${styles.each_input} col-md-4 col-sm-6`}>
            <select
              id="dropPort"
              name='portOfDischarge'
              onChange={(e) => { saveOrderData(e.target.name, e.target.value) }}
              className={`${styles.input_field} form-control`}
              required
            >
              <option value="VishakaPatnam" selected>Visakhapatnam</option>
              <option value="Mumbai">Mumbai</option>
            </select>
            <label className={styles.label_heading} id="dropPort">
              Port Of Discharge<strong className='text-danger'>*</strong>
            </label>
            <label className={styles.label_heading}>Port Of Discharge<strong className="text-danger">*</strong></label>

          </div>
          <div className={`${styles.each_input} col-md-4 col-sm-6`}>
            <input
              type="date"
              name='expectedDateOfShipment'
              id="textDate"
              onChange={(e) => { saveOrderData(e.target.name, e.target.value) }}
              className={`${styles.input_field} form-control`}
              required
            />
            <div>
              <label className={styles.label_heading} id="textDate">
                Expected Date Of Shipment<strong className='text-danger'>*</strong>
              </label>
            </div>
          </div>

          <div className={`${styles.radio_form} col-md-12`}>
            <div className={styles.sub_heading}>INCO Terms<strong className='text-danger'>*</strong></div>
            <Form>
              {['radio'].map((type) => (
                <div key={`inline-${type}`} className={styles.radio_group}>
                  <Form.Check
                    className={styles.radio}
                    inline
                    label="FOB"
                    onChange={() => saveOrderData("IncoTerms", "FOB")}
                    name="group1"
                    type={type}
                    id={`inline-${type}-1`}
                  />
                  <Form.Check
                    className={styles.radio}
                    inline
                    label="CFR"
                    onChange={() => saveOrderData("IncoTerms", "CFR")}
                    name="group1"
                    type={type}
                    id={`inline-${type}-2`}
                  />

                  <Form.Check
                    className={styles.radio}
                    inline
                    label="CIF"
                    onChange={() => saveOrderData("IncoTerms", "CIF")}
                    name="group1"
                    type={type}
                    id={`inline-${type}-2`}
                  />
                </div>
              ))}
            </Form>
          </div>
        </div>
      </form>
    </div>
  )
}

export default index
