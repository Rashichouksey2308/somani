/* eslint-disable @next/next/no-img-element */
import React from 'react'
import styles from './index.module.scss'
import { Form } from 'react-bootstrap'
import DateCalender from '../DateCalender'

const index = ({ saveOrderData, darkMode }) => {
  const saveDate = (value, name) => {
    // console.log(e.target.value, "this is date")
    const d = new Date(value)
    let text = d.toISOString()
    saveOrderData(name, text)
  }
  return (
    <div className={`${styles.main} border_color`}>
      <div className={`${styles.heading} heading_card_switch_blue`}>
        Order Details
      </div>
      <form id="OrderDetailsForm">
        <div className={`${styles.input_container} row`}>
          <div className={`${styles.each_input} col-md-4 col-sm-6`}>
            <div className="d-flex">
              <input
                type="text"
                id="textInput"
                name="commodity"
                // defaultValue='Iron'
                onChange={(e) => {
                  saveOrderData(e.target.name, e.target.value)
                }}
                className={`${styles.input_field} input form-control`}
                required
              />
              <label
                className={`${styles.label_heading}  label_heading`}
                id="textInput"
              >
                Commodity<strong className="text-danger">*</strong>
              </label>
              <img
                className={`${styles.search_image} img-fluid`}
                src="/static/search-grey.svg"
                alt="Search"
              />
            </div>
          </div>
          <div
            className={`${styles.each_input} ${styles.small_box} col-md-4 col-sm-6 col-lg-4 col-xl-2`}
          >
            <input
              type="number"
              id="textInput"
              name="quantity"
              onChange={(e) => {
                saveOrderData(e.target.name, Number(e.target.value))
              }}
              className={`${styles.input_field} input form-control`}
              required
            />
            <label
              className={`${styles.label_heading}  label_heading`}
              id="textInput"
            >
              Quantity<strong className="text-danger">*</strong>
            </label>
          </div>
          <div
            className={`${styles.each_input} ${styles.small_box} col-md-4 col-sm-6 col-lg-4 col-xl-2`}
          >
            <input
              type="number"
              id="textInput"
              name="orderValue"
              onChange={(e) => {
                saveOrderData(e.target.name, Number(e.target.value * 10000000))
              }}
              className={`${styles.input_field} input form-control`}
              required
            />
            <label
              className={`${styles.label_heading}  label_heading`}
              id="textInput"
            >
              Order Value<strong className="text-danger">*</strong>
            </label>
          </div>

          <div className={`${styles.each_input} col-md-4 col-sm-6`}>
            <input
              type="text"
              name="supplierName"
              onChange={(e) => {
                saveOrderData(e.target.name, e.target.value)
              }}
              id="textInput"
              className={`${styles.input_field} input form-control`}
              required
            />
            <label
              className={`${styles.label_heading} label_heading`}
              id="textInput"
            >
              Supplier Name
            </label>
          </div>
          <div className={`${styles.each_input} col-md-4 col-sm-6`}>
            <div className="d-flex">
              <select
                id="dropCountry"
                name="countryOfOrigin"
                onChange={(e) => {
                  saveOrderData(e.target.name, e.target.value)
                }}
                className={`${styles.input_field} ${styles.customSelect} input form-control`}
                required
              >
                <option value="" selected></option>
                <option value="India">India</option>
                <option value="America">America</option>
              </select>
              <label
                className={`${styles.label_heading} label_heading`}
                id="dropCountry"
              >
                Country Of Origin<strong className="text-danger">*</strong>
              </label>
              <img
                className={`${styles.arrow} img-fluid`}
                src="/static/inputDropDown.svg"
                alt="Search"
              />
            </div>
          </div>

          <div className={`${styles.each_input} col-md-4 col-sm-6`}>
            <div className="d-flex">
              <select
                id="dropPort"
                name="portOfDischarge"
                onChange={(e) => {
                  saveOrderData(e.target.name, e.target.value)
                }}
                className={`${styles.input_field} ${styles.customSelect} input form-control`}
                required
              >
                <option value="" selected></option>
                <option value="VishakaPatnam, India">
                  Visakhapatnam, India
                </option>
                <option value="Mumbai, India">Mumbai, India</option>
              </select>
              <label
                className={`${styles.label_heading} label_heading`}
                id="dropPort"
              >
                Port Of Discharge<strong className="text-danger">*</strong>
              </label>
              <img
                className={`${styles.arrow} img-fluid`}
                src="/static/inputDropDown.svg"
                alt="Search"
              />
            </div>
          </div>
          <div className={`${styles.each_input} col-md-4 col-sm-6`}>
             <div className="d-flex">
                    <DateCalender name='ExpectedDateOfShipment' saveDate={saveDate} labelName='Expected Date Of Shipment'
                    />
                     <img
                        className={`${styles.calanderIcon} img-fluid`}
                        src="/static/caldericon.svg"
                        alt="Search"
                    />
                      
                    </div>  
                 
             {/* <div className="d-flex">
              <input
              type="date" 
              name='ExpectedDateOfShipment'
              id="ExpectedDateOfShipment"
              onChange={(e) => { saveDate(e, e.target.value)}}
              className={`${styles.calender} ${styles.customSelect}  input form-control`}
              required
            />
            
              <label className={`${styles.label_heading} label_heading`} id="textDate">
                Expected Date Of Shipment<strong className='text-danger'>*</strong>
              </label>
             <img
                   className={`${styles.calanderIcon} img-fluid`}
                   src="/static/caldericon.svg"
                   alt="Search"
               />
             </div> */}

          </div>

          <div className={`${styles.radio_form} col-md-12`}>
            <div className={`${styles.label_heading} label_heading`}>
              INCO Terms<strong className="text-danger">*</strong>
            </div>
            <Form>
              {['radio'].map((type) => (
                <div key={`inline-${type}`} className={styles.radio_group}>
                  <Form.Check
                    className={`${styles.radio} radio`}
                    inline
                    label="FOB"
                    onChange={() => saveOrderData('incoTerm', 'FOB')}
                    name="group1"
                    type={type}
                    id={`inline-${type}-1`}
                  />
                  <Form.Check
                    className={`${styles.radio} radio`}
                    inline
                    label="CFR"
                    onChange={() => saveOrderData('incoTerm', 'CFR')}
                    name="group1"
                    type={type}
                    id={`inline-${type}-2`}
                  />

                  <Form.Check
                    className={`${styles.radio} radio`}
                    inline
                    label="CIF"
                    onChange={() => saveOrderData('incoTerm', 'CIF')}
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
