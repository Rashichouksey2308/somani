/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { Form } from 'react-bootstrap'
import styles from './index.module.scss'

const Index = ({ orderDetail, saveOrderData }) => {
  const saveDate = (e) => {
    const d = new Date(e.target.value)
    let text = d.toISOString()
    saveOrderData(e.target.name, text)
  }

  return (
    <div className={`${styles.main} card border-color`}>
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
            <h5 className={`${styles.unit_label} accordion_Text`}>
              Quantity :
            </h5>
            <select
              className={`${styles.options} accordion_DropDown`}
              name="unitOfQuantity"
              onChange={() => {
                saveOrderData(e.target.name, e.target.value)
              }}
            >
              <option>L</option>
              <option>MT</option>
            </select>
          </div>

          <div className={`${styles.unit_container} d-flex align-items-center`}>
            <h5 className={`${styles.unit_label} accordion_Text`}>Units :</h5>
            <select
              className={`${styles.options} accordion_DropDown `}
              name="unitOfValue"
              onChange={() => saveOrderData(e.target.name, e.target.value)}
            >
              <option>Crores</option>
              <option>Million</option>
            </select>
            <span>+</span>
          </div>
        </div>
      </div>
      <div
        id="orderSummary"
        className="collapse"
        aria-labelledby="orderSummary"
      >
        <div className={`${styles.dashboard_form} card-body`}>
          <div className={styles.radio_form}>
            <div className={styles.sub_heading}>Transaction Type</div>
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
          <Form>
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
                  name="quantity"
                  onChange={(e) => {
                    saveOrderData(e.target.name, e.target.value)
                  }}
                />
                <Form.Label className={`${styles.label_heading} label_heading`}>
                  Quantity in MT<strong className="text-danger">*</strong>
                </Form.Label>
              </Form.Group>

              <Form.Group className={`${styles.form_group} col-md-4 col-sm-6`}>
                <Form.Control
                  className={`${styles.input_field} input form-control`}
                  required
                  type="text"
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
                <select
                  className={`${styles.input_field} input form-control`}
                  name="countryOfOrigin"
                  onChange={(e) => {
                    saveOrderData(e.target.name, e.target.value)
                  }}
                >
                  <option value="India">India</option>
                  <option value="America">America</option>
                  <option value="Russia">Russia</option>
                </select>
                <Form.Label className={`${styles.label_heading} label_heading`}>
                  Country Of Origin<strong className="text-danger">*</strong>
                </Form.Label>
              </Form.Group>

              <Form.Group className={`${styles.form_group} col-md-4 col-sm-6`}>
                <Form.Control
                  className={`${styles.input_field} input form-control`}
                  required
                  type="text"
                  name="tolerance"
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
                <select
                  className={`${styles.input_field} input form-control`}
                  name="supplierName"
                  onChange={(e) => {
                    saveOrderData(e.target.name, e.target.value)
                  }}
                >
                  <option value="TATA">TATA</option>
                  <option value="Mittal">Mittal</option>
                  <option value="Reliance">Reliance</option>
                </select>
                <Form.Label className={`${styles.label_heading} label_heading`}>
                  Supplier Name<strong className="text-danger">*</strong>
                </Form.Label>
              </Form.Group>

              <Form.Group className={`${styles.form_group} col-md-4 col-sm-6`}>
                <select
                  className={`${styles.input_field} input form-control`}
                  name="manufacturerName"
                  onChange={(e) => {
                    saveOrderData(e.target.name, e.target.value)
                  }}
                >
                  <option value="CBX">CBX</option>
                  <option value="ABX">ABX</option>
                </select>
                <Form.Label className={`${styles.label_heading} label_heading`}>
                  Manufacturer / Mines name
                  <strong className="text-danger">*</strong>
                </Form.Label>
              </Form.Group>

              <Form.Group className={`${styles.form_group} col-md-4 col-sm-6`}>
                <select
                  className={`${styles.input_field} input form-control`}
                  name="portOfDischarge"
                  onChange={(e) => {
                    saveOrderData(e.target.name, e.target.value)
                  }}
                >
                  <option value="Mumbai">Mumbai</option>
                  <option value="Vizag">Vizag</option>
                </select>
                <Form.Label className={`${styles.label_heading} label_heading`}>
                  Port Of Discharge<strong className="text-danger">*</strong>
                </Form.Label>
              </Form.Group>

              <Form.Group className={`${styles.form_group} col-md-4 col-sm-6`}>
                <select
                  className={`${styles.input_field} input form-control`}
                  name="incoTerm"
                  onChange={(e) => {
                    saveOrderData(e.target.name, e.target.value)
                  }}
                >
                  <option value="CFR">CFR</option>
                  <option value="CIF">CIF</option>
                  <option value="FOB">FOB</option>
                </select>
                <Form.Label className={`${styles.label_heading} label_heading`}>
                  INCO Terms<strong className="text-danger">*</strong>
                </Form.Label>
              </Form.Group>

              <Form.Group className={`${styles.form_group} col-md-4 col-sm-6`}>
                <input
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
                </Form.Label>
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