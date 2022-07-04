import React from 'react'
import styles from './index.module.scss'
import { Form } from 'react-bootstrap'

const index = ({ saveOrderData, darkMode }) => {

  const saveDate = (e) => {
    // console.log(e.target.value, "this is date")
    const d = new Date(e.target.value);
    let text = d.toISOString()
    saveOrderData( e.target.name, text)
  }
  return (
    <div className={`${styles.main} border_color`}>
      <div className={`${styles.heading} heading_card_switch_blue`}>Order Details</div>
      <form id="OrderDetailsForm">
        <div className={`${styles.input_container} row`}>
          <div className={`${styles.each_input} col-md-4 col-sm-6`}>
            <input
              type="text"
              id="textInput"
              name='commodity'
              // defaultValue='Iron'
              onChange={(e) => { saveOrderData(e.target.name, e.target.value) }}
              className={`${styles.input_field} input form-control`}
              required
            />
            <label className={`${styles.label_heading}  label_heading`} id="textInput">
              Commodity<strong className='text-danger'>*</strong>
            </label>
          </div>
          <div className={`${styles.each_input} col-md-4 col-sm-3 col-lg-4 col-xl-2`}>
            <input
              type="number"
              id="textInput"
              name='quantity'
              onChange={(e) => { saveOrderData(e.target.name, Number(e.target.value)) }}
              className={`${styles.input_field} input form-control`}
              required
            />
            <label className={`${styles.label_heading}  label_heading`} id="textInput">
              Quantity (in MT)<strong className='text-danger'>*</strong>
            </label>
          </div>

          <div className={`${styles.each_input} ${styles.phone} col-md-4 col-sm-3 col-lg-4 col-xl-2`}>
            <div className={styles.phone_card}>
              <select className={`${styles.code_phone} input border-right-0`}
              style={{width:"40%"}}>
                <option>Select order values</option>
                <option selected>$</option>
                <option>INR</option>
              </select>
              <input
                type="number"
                name='orderValue'
                onChange={(e) => { saveOrderData(e.target.name, e.target.value) }}
                id="textInput"
                className={`${styles.input_field} border-left-0 input form-control`}
                required
              />
              <label className={`${styles.label_heading} label_heading`} id="textInput">
                Order value<strong className='text-danger'>*</strong>
              </label>
            </div>
          </div>

          <div className={`${styles.each_input} col-md-4 col-sm-6`}>
            <input
              type="text"
              name='supplierName'
              onChange={(e) => { saveOrderData(e.target.name, e.target.value) }}
              id="textInput"
              className={`${styles.input_field} input form-control`}
              required
            />
            <label className={`${styles.label_heading} label_heading`} id="textInput">
              Supplier Name<strong className='text-danger'>*</strong>
            </label>
          </div>
          <div className={`${styles.each_input} col-md-4 col-sm-6`}>
            <select
              id="dropCountry"
              name='countryOfOrigin'
              onChange={(e) => { saveOrderData(e.target.name, e.target.value) }}
              className={`${styles.input_field} input form-control`}
              required
            >
              <option value="India" selected>India</option>
              <option value="America">America</option>
            </select>
            <label className={`${styles.label_heading} label_heading`} id="dropCountry">
              Country Of Origin<strong className='text-danger'>*</strong>
            </label>
          </div>

          <div className={`${styles.each_input} col-md-4 col-sm-6`}>
            <select
              id="dropPort"
              name='portOfDischarge'
              onChange={(e) => { saveOrderData(e.target.name, e.target.value) }}
              className={`${styles.input_field} input form-control`}
              required
            >
              <option value="VishakaPatnam" selected>Visakhapatnam</option>
              <option value="Mumbai">Mumbai</option>
            </select>
            <label className={`${styles.label_heading} label_heading`} id="dropPort">
              Port Of Discharge<strong className='text-danger'>*</strong>
            </label>
            <label className={`${styles.label_heading} label_heading`}>Port Of Discharge<strong className="text-danger">*</strong></label>

          </div>
          <div className={`${styles.each_input} col-md-4 col-sm-6`}>
            <input
              type="date"
              name='ExpectedDateOfShipment'
              id="textDate"
              // onChange={(e) => { saveOrderData(e.target.name, e.target.value) }}
              onChange={(e) => { saveDate(e, e.target.value)}}
              className={`${styles.input_field} input form-control`}
              required
            />
            <div>
              <label className={`${styles.label_heading} label_heading`} id="textDate">
                Expected Date Of Shipment<strong className='text-danger'>*</strong>
              </label>
            </div>
          </div>

          <div className={`${styles.radio_form} col-md-12`}>
            <div className={`${styles.label_heading} label_heading`}>INCO Terms<strong className='text-danger'>*</strong></div>
            <Form>
              {['radio'].map((type) => (
                <div key={`inline-${type}`} className={styles.radio_group}>
                  <Form.Check
                    className={`${styles.radio} radio`}
                    inline
                    label="FOB"
                    onChange={() => saveOrderData("incoTerm", "FOB")}
                    name="group1"
                    type={type}
                    id={`inline-${type}-1`}
                  />
                  <Form.Check
                    className={`${styles.radio} radio`}
                    inline
                    label="CFR"
                    onChange={() => saveOrderData("incoTerm", "CFR")}
                    name="group1"
                    type={type}
                    id={`inline-${type}-2`}
                  />

                  <Form.Check
                    className={`${styles.radio} radio`}
                    inline
                    label="CIF"
                    onChange={() => saveOrderData("incoTerm", "CIF")}
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
