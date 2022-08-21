/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { Form } from 'react-bootstrap'
import styles from './index.module.scss'
import DateCalender from '../DateCalender'
import { addPrefixOrSuffix } from 'utils/helper'

const Index = ({ saveOrderData, orderData }) => {
  const saveDate = (value, name) => {
    const d = new Date(value)
    let text = d.toISOString()
    saveOrderData(name, text)
  }

  return (
    <div className={`${styles.main} vessel_card card border-color`}>
      <div
        className={`${styles.head_container} card-header head_container d-flex justify-content-between bg-transparent`}
        data-toggle="collapse"
        data-target="#orderSummary"
        aria-expanded="true"
        aria-controls="orderSummary"
      >
        <h3 className={`${styles.heading} mb-0`}>Order Summary</h3>
        <div className="d-flex">
          <div className={`${styles.unit_container} d-flex align-items-center`}>
            <h5 className={`${styles.unit_label} accordion_Text`}>Quantity:</h5>
            <select
              className={`${styles.options} accordion_DropDown`}
              name="unitOfQuantity"
              onChange={(e) => {
                saveOrderData(e.target.name, e.target.value)
              }}
            >
              <option>Select</option>
              <option selected value='MT'>MT</option>
              <option value='KG'>KG</option>
            </select>
          </div>

          <div
            className={`${styles.unit_container} ${styles.last} d-flex align-items-center`}
          >
            <h5 className={`${styles.unit_label} accordion_Text`}>Unit:</h5>
            <select
              className={`${styles.options} accordion_DropDown `}
              name="unitOfValue"
              onChange={(e) => saveOrderData(e.target.name, e.target.value)}
            >
                <option>Select </option>
              <option value="Crores" selected>
                Crores
              </option>
              <option value="Million">Million</option>
              
            </select>
          </div>
          <span>+</span>
        </div>
      </div>
      <div
        id="orderSummary"
        className="collapse"
        aria-labelledby="orderSummary"
      >
        <div className={`${styles.dashboard_form} card-body`}>
          <div className={styles.radio_form}>
            <div className={`${styles.sub_heading} sub_heading`}>
              Transaction Type
            </div>
            {['radio'].map((type) => (
              <div key={`inline-${type}`} className={styles.radio_group}>
                <Form.Check
                  className={styles.radio}
                  inline
                  label="Import"
                  onChange={(e) => {
                    saveOrderData('transactionType', 'Import')
                  }}
                  name="group1"
                  type={type}
                  id={`inline-${type}-1`}
                />
                <Form.Check
                  className={styles.radio}
                  inline
                  label="Domestic"
                  onChange={(e) => {
                    saveOrderData('transactionType', 'Domestic')
                  }}
                  name="group1"
                  type={type}
                  id={`inline-${type}-2`}
                />
              </div>
            ))}
          </div>
          <Form id="OrderDetailsForm">
            <div className="row">
              <Form.Group className={`${styles.form_group} col-md-4 col-sm-6`}>
                <div className="d-flex">
                  <Form.Control
                    className={`${styles.input_field} input form-control`}
                    required
                    type="text"
                    name="commodity"
                    onChange={(e) => {
                      saveOrderData(e.target.name, e.target.value)
                    }}
                  />
                  <Form.Label
                    className={`${styles.label_heading} label_heading`}
                  >
                    Commodity<strong className="text-danger">*</strong>
                  </Form.Label>
                  <img
                    className={`${styles.search_image} img-fluid`}
                    src="/static/search-grey.svg"
                    alt="Search"
                  />
                </div>
              </Form.Group>

              <Form.Group className={`${styles.form_group} col-md-4 col-sm-6`}>
                <Form.Control
                  className={`${styles.input_field} input form-control`}
                  required
                  type="text"
                  value={addPrefixOrSuffix( orderData.quantity ? orderData.quantity : 0, orderData.unitOfQuantity, '')}
                  name="quantity"
                  onChange={(e) => {
                    saveOrderData(e.target.name, e.target.value)
                  }}
                />
                <Form.Label className={`${styles.label_heading} label_heading`}>
                  Quantity<strong className="text-danger">*</strong>
                </Form.Label>
              </Form.Group>

              <Form.Group className={`${styles.form_group} col-md-4 col-sm-6`}>
                <Form.Control
                  className={`${styles.input_field} input form-control`}
                  required
                  type="text"
                  value={addPrefixOrSuffix(orderData.orderValue ? orderData.orderValue : 0,orderData.unitOfValue=="Crores"?"Cr": orderData.unitOfValue=="Million"?"Mn":orderData.unitOfValue, '')}
                  name="orderValue"
                  onChange={(e) => {
                    saveOrderData(e.target.name, e.target.value)
                  }}
                />
                <Form.Label className={`${styles.label_heading} label_heading`}>
                  Order Value<strong className="text-danger">*</strong>
                </Form.Label>
              </Form.Group>

              <Form.Group className={`${styles.form_group} col-md-4 col-sm-6`}>
                <Form.Control
                  className={`${styles.input_field} input form-control`}
                  required
                  type="text"
                  name="grade"
                  onChange={(e) => {
                    saveOrderData(e.target.name, e.target.value)
                  }}
                />
                <Form.Label className={`${styles.label_heading} label_heading`}>
                  Grade<strong className="text-danger">*</strong>
                </Form.Label>
              </Form.Group>

              <Form.Group className={`${styles.form_group} col-md-4 col-sm-6`}>
                <div className="d-flex">
                  <select
                    className={`${styles.input_field} ${styles.customSelect} input form-control`}
                    name="countryOfOrigin"
                    required
                    onChange={(e) => {
                      saveOrderData(e.target.name, e.target.value)
                    }}
                  >
                    <option selected>Select an option</option>
                    <option value="India">India</option>
                    <option value="Dubai">Dubai</option>
                    <option value="Australia">Australia</option>
                    <option value="Sri Lanka">Sri Lanka</option>
                    
                  </select>
                  <Form.Label
                    className={`${styles.label_heading} label_heading`}
                  >
                    Country Of Origin<strong className="text-danger">*</strong>
                  </Form.Label>
                  <img
                    className={`${styles.arrow} image_arrow img-fluid`}
                    src="/static/inputDropDown.svg"
                    alt="Search"
                  />
                </div>
              </Form.Group>

              <Form.Group className={`${styles.form_group} col-md-4 col-sm-6`}>
                <Form.Control
                  className={`${styles.input_field} input form-control`}
                  required
                  type="text"
                  name="tolerance"
                  value={addPrefixOrSuffix(orderData.tolerance, '%', '')}
                  onChange={(e) => {
                    saveOrderData(e.target.name, e.target.value)
                  }}
                />
                <Form.Label className={`${styles.label_heading} label_heading`}>
                  Tolerance (+/-) Percentage
                  <strong className="text-danger">*</strong>
                </Form.Label>
              </Form.Group>

              <Form.Group className={`${styles.form_group} col-md-4 col-sm-6`}>
                <div className="d-flex">
                <Form.Control
                  className={`${styles.input_field} input form-control`}
                  required
                  type="text"
                  name="supplierName"
                  onChange={(e) => {
                    saveOrderData(e.target.name, e.target.value)
                  }}
                />
                  <Form.Label
                    className={`${styles.label_heading} label_heading`}
                  >
                    Supplier Name<strong className="text-danger">*</strong>
                  </Form.Label>
                  {/* <img
                    className={`${styles.arrow}  image_arrow img-fluid`}
                    src="/static/inputDropDown.svg"
                    alt="Search"
                  /> */}
                </div>
              </Form.Group>

              <Form.Group className={`${styles.form_group} col-md-4 col-sm-6`}>
                <div className="d-flex">
                  <select
                    className={`${styles.input_field} ${styles.customSelect}  input form-control`}
                    name="manufacturerName"
                    required
                    onChange={(e) => {
                      saveOrderData(e.target.name, e.target.value)
                    }}
                  >
                    <option selected>Select an option</option>
                    <option value="CBX">CBX</option>
                    <option value="ABX">ABX</option>
                  </select>
                  <Form.Label
                    className={`${styles.label_heading} label_heading`}
                  >
                    Manufacturer / Mines name
                    <strong className="text-danger">*</strong>
                  </Form.Label>
                  <img
                    className={`${styles.arrow} image_arrow img-fluid`}
                    src="/static/inputDropDown.svg"
                    alt="Search"
                  />
                </div>
              </Form.Group>

              <Form.Group className={`${styles.form_group} col-md-4 col-sm-6`}>
                <div className="d-flex">
                  <select
                    className={`${styles.input_field}  ${styles.customSelect} input form-control`}
                    name="portOfDischarge"
                    required
                    onChange={(e) => {
                      saveOrderData(e.target.name, e.target.value)
                    }}
                  >
                    <option selected>Select an option</option>
                    <option value="Mumbai, India">Mumbai, India</option>
                    <option value="Vizag, India">Vizag, India</option>
                  </select>
                  <Form.Label
                    className={`${styles.label_heading} label_heading`}
                  >
                    Port Of Discharge<strong className="text-danger">*</strong>
                  </Form.Label>
                  <img
                    className={`${styles.arrow} image_arrow img-fluid`}
                    src="/static/inputDropDown.svg"
                    alt="Search"
                  />
                </div>
              </Form.Group>

              <Form.Group className={`${styles.form_group} col-md-4 col-sm-6`}>
                <div className="d-flex">
                  <select
                    className={`${styles.input_field} ${styles.customSelect} input form-control`}
                    name="incoTerm"
                    required
                    onChange={(e) => {
                      saveOrderData(e.target.name, e.target.value)
                    }}
                  >
                    <option selected>Select an option</option>
                    <option value="CFR">CFR</option>
                    <option value="CIF">CIF</option>
                    <option value="FOB">FOB</option>
                  </select>
                  <Form.Label
                    className={`${styles.label_heading} label_heading`}
                  >
                    INCO Terms<strong className="text-danger">*</strong>
                  </Form.Label>
                  <img
                    className={`${styles.arrow} image_arrow img-fluid`}
                    src="/static/inputDropDown.svg"
                    alt="Search"
                  />
                </div>
              </Form.Group>

              <Form.Group className={`${styles.form_group} col-md-4 col-sm-6`}>
                <div className="d-flex">
                  <DateCalender
                    name="ExpectedDateOfShipment"
                    saveDate={saveDate}
                    dateFormat={'dd-MM-yyyy'}
                    labelName="Expected Date Of Shipment"
                  />
                  <img
                    className={`${styles.calanderIcon} image_arrow img-fluid`}
                    src="/static/caldericon.svg"
                    alt="Search"
                  />
                </div>
                {/* <input
                  className={`${styles.input_field} input form-control`}
                  type="date"
                  name="ExpectedDateOfShipment"
                  onChange={(e) => {
                    saveDate(e, e.target.value)
                  }}
                />
                <Form.Label className={`${styles.label_heading} label_heading`}>
                  Expected Date Of Shipment
                  <strong className="text-danger">*</strong>
                </Form.Label> */}
              </Form.Group>

              <Form.Group className={`${styles.form_group} col-md-4 col-sm-6`}>
                <Form.Control
                  className={`${styles.input_field} input form-control`}
                  required
                  type="text"
                  name="transactionPeriodDays"
                  onChange={(e) => {
                    saveOrderData(e.target.name, e.target.value)
                  }}
                />
                <Form.Label className={`${styles.label_heading} label_heading`}>
                  Transaction Period (Days)
                  <strong className="text-danger">*</strong>
                </Form.Label>
              </Form.Group>
              {/* <div className={styles.button}>
                <span>Submit</span>
              </div> */}
            </div>
          </Form>
        </div>
      </div>
    </div>
  )
}

export default Index
