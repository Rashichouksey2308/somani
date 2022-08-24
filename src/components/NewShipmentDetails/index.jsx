/* eslint-disable @next/next/no-img-element */
import React,{useState} from 'react'
import { Form } from 'react-bootstrap'
import styles from './index.module.scss'
import DateCalender from '../DateCalender'
import moment from 'moment'
const index = ({ saveShipmentData, shipment }) => {
  // const {shipmentDetail}= orderDetail;

  const saveDate = (value, name) => {
    const d = new Date(value)
    let text = d.toISOString()
    saveShipmentData(name, text)
  }
 const [dateStartFrom,setDateStartFrom]=useState({
    laycan:"",
    eta:""
 
  })
   const setStartDate=(val,name)=>{
      var new_date = moment(new Date(val).toISOString()).add(1, 'days').format("DD-MM-YYYY");
      if(name=="loadPort.fromDate"){
    
      setDateStartFrom({...dateStartFrom,laycan:new_date})
    }else{
      setDateStartFrom({...dateStartFrom,eta:new_date})
    }
   
  }
  return (
    <div className={`${styles.main} vessel_card border-color card`}>
      <div
        className={`${styles.head_container} d-flex justify-content-between`}
        data-toggle="collapse"
        data-target="#shipmentDetails"
        aria-expanded="true"
        aria-controls="shipmentDetails"
      >
        <h3 className={`${styles.heading} mb-0`}>Shipment Details</h3>
        <span>+</span>
      </div>
      <div
        id="shipmentDetails"
        className="collapse"
        aria-labelledby="shipmentDetails"
      >
        <div className={`${styles.dashboard_form} card-body`}>
          <Form id="ShipmentDetailsForm">
            <div className="row">
              <Form.Group className={`${styles.form_group} col-md-4 col-sm-6`}>
                <div className="d-flex">
                  <select
                    className={`${styles.input_field} ${styles.customSelect}  input form-control`}
                    name="shipmentType"
                    required
                    onChange={(e) => {
                      saveShipmentData(e.target.name, e.target.value)
                    }}
                  >
                    <option >Select an option</option>
                    <option value="Liner">Liner</option>
                    <option value="Bulk">Bulk</option>
                  </select>
                  <Form.Label
                    className={`${styles.label_heading} label_heading`}
                  >
                    Shipment Type<strong className="text-danger">*</strong>
                  </Form.Label>
                  <img
                    className={`${styles.arrow} img-fluid`}
                    src="/static/inputDropDown.svg"
                    alt="Search"
                  />
                </div>
              </Form.Group>

              <Form.Group className={`${styles.form_group} col-md-2 col-sm-6`}>
                <div className="d-flex">
                  <DateCalender
                    dateFormat={'dd-MM-yyyy'}
                    value={shipment.ETAofDischarge.fromDate}
                    name="ETAofDischarge.fromDate"
                    saveDate={saveDate}
                    setStartDateFrom={setStartDate}
                    labelName="Laycan at Load Port from"
                  />
                  <img
                    className={`${styles.calanderIcon} image_arrow img-fluid`}
                    src="/static/caldericon.svg"
                    alt="Search"
                  />
                </div>
                {/* <Form.Control
                  className={`${styles.input_field} input form-control`}
                  name="ETAofDischarge.fromDate"
                  type="date"
                  onChange={(e) => {
                    saveDate(e)
                  }}
                />
                <Form.Label className={`${styles.label_heading} label_heading`}>
                  {' '}
                  Laycan at Load Port from
                  <strong className="text-danger">*</strong>
                </Form.Label> */}
              </Form.Group>
              <Form.Group className={`${styles.form_group} col-md-2 col-sm-6`}>
                <div className="d-flex">
                  <DateCalender
                    dateFormat={'dd-MM-yyyy'}
                    value={shipment.ETAofDischarge.toDate}
                    name="ETAofDischarge.toDate"
                    saveDate={saveDate}
                     startFrom={dateStartFrom.eta}
                    labelName="Laycan at Load Port to"
                  />
                  <img
                    className={`${styles.calanderIcon} image_arrow img-fluid`}
                    src="/static/caldericon.svg"
                    alt="Search"
                  />
                </div>
                {/* <Form.Control
                  className={`${styles.input_field} input form-control`}
                  name="ETAofDischarge.toDate"
                  type="date"
                  onChange={(e) => {
                    saveDate(e)
                  }}
                />
                <Form.Label className={`${styles.label_heading} label_heading`}>
                  Laycan at Load Port to
                  <strong className="text-danger">*</strong>
                </Form.Label> */}
              </Form.Group>
              <Form.Group className={`${styles.form_group} col-md-4 col-sm-6`}>
                <div className="d-flex">
                  <DateCalender
                    dateFormat={'dd-MM-yyyy'}
                    name="lastDateOfShipment"
                    saveDate={saveDate}
                    labelName="Last date of shipment"
                     startFrom={dateStartFrom.eta}
                  />
                  <img
                    className={`${styles.calanderIcon} image_arrow img-fluid`}
                    src="/static/caldericon.svg"
                    alt="Search"
                  />
                </div>

                {/* <input
                  className={`${styles.input_field} input form-control`}
                  name="lastDateOfShipment"
                  type="date"
                  onChange={(e) => {
                    saveDate(e)
                  }}
                />
                <Form.Label className={`${styles.label_heading} label_heading`}>
                  Last date of shipment
                  <strong className="text-danger">*</strong>
                </Form.Label> */}
              </Form.Group>

              <Form.Group className={`${styles.form_group} col-md-2 col-sm-6`}>
                <div className="d-flex">
                  <DateCalender
                    name="loadPort.fromDate"
                    dateFormat={'dd-MM-yyyy'}
                    saveDate={saveDate}
                    setStartDateFrom={setStartDate}
                    labelName="ETA at Discharge Port from"
                  />
                  <img
                    className={`${styles.calanderIcon} image_arrow img-fluid`}
                    src="/static/caldericon.svg"
                    alt="Search"
                  />
                </div>
                {/* <div>
                  <Form.Control
                    className={`${styles.input_field} input form-control`}
                    name="loadPort.fromDate"
                    type="date"
                    onChange={(e) => {
                      saveDate(e)
                    }}
                  />
                  <Form.Label
                    className={`${styles.label_heading} label_heading`}
                  >
                    ETA at Discharge Port from
                    <strong className="text-danger">*</strong>
                  </Form.Label>
                </div> */}
              </Form.Group>
              <Form.Group className={`${styles.form_group}  col-md-2 col-sm-6`}>
                <div className="d-flex">
                  <DateCalender
                    name="loadPort.toDate"
                    dateFormat={'dd-MM-yyyy'}
                    saveDate={saveDate}
                    labelName="ETA at Discharge Port to"
                    startFrom={dateStartFrom.laycan}
                  />
                  <img
                    className={`${styles.calanderIcon} image_arrow img-fluid`}
                    src="/static/caldericon.svg"
                    alt="Search"
                  />
                </div>
                {/* <div>
                  <Form.Control
                    className={`${styles.input_field} input form-control`}
                    name="loadPort.toDate"
                    type="date"
                    onChange={(e) => {
                      saveDate(e)
                    }}
                  />
                  <Form.Label
                    className={`${styles.label_heading} label_heading`}
                  >
                    ETA at Discharge Port to
                    <strong className="text-danger">*</strong>
                  </Form.Label>
                </div> */}
              </Form.Group>
              <Form.Group className={`${styles.form_group} col-md-4 col-sm-6`}>
                <div className="d-flex">
                  <select
                    className={`${styles.input_field} ${styles.customSelect}  input form-control`}
                    name="shipmentType"
                    onChange={(e) => {
                      saveShipmentData(e.target.name, e.target.value)
                    }}
                  >
                    <option selected>Select an option</option>
                    <option value="Calcutta Port">
                      Calcutta Port
                    </option>
                    <option value="Mumbai, India">
                    Mumbai, India
                    </option>
                    <option value="Vizag, India">
                    Vizag, India
                    </option>
                    <option value="Vishakapatnam, India">
                  Visakhapatnam, India
                </option>
                  </select>
                  <Form.Label
                    className={`${styles.label_heading} label_heading`}
                  >
                    Port of Loading<strong className="text-danger">*</strong>
                  </Form.Label>
                  <img
                    className={`${styles.arrow} image_arrow img-fluid`}
                    src="/static/inputDropDown.svg"
                    alt="Search"
                  />
                </div>
              </Form.Group>
            </div>
            {/* <div className={styles.button}><span>Submit</span></div> */}
          </Form>
        </div>
      </div>
    </div>
  )
}

export default index
