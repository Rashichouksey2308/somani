import React from 'react'
import { Form } from 'react-bootstrap'
import styles from './index.module.scss'
import DateCalender from '../DateCalender'

const index = ({ orderDetail, saveShipmentData }) => {
  // const {shipmentDetail}= orderDetail;

  const saveDate = (e) => {
    const d = new Date(e.target.value)
    let text = d.toISOString()
    saveShipmentData(e.target.name, text)
  }

  return (
    <div className={`${styles.main} border-color  card`}>
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
          <Form>
            <div className="row">
              <Form.Group className={`${styles.form_group} col-md-4 col-sm-6`}>
               <div className='d-flex'>
                <select
                  className={`${styles.input_field} ${styles.customSelect}  input form-control`}
                  name="shipmentType"
                  onChange={(e) => {
                    saveShipmentData(e.target.name, e.target.value)
                  }}
                >
                  <option value="Liner">Liner</option>
                  <option value="Bulk">Bulk</option>
                </select>
                <Form.Label className={`${styles.label_heading} label_heading`}>
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
                    <DateCalender labelName='Laycan at Load Port from'/>
                     <img
                        className={`${styles.calanderIcon} img-fluid`}
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
                    <DateCalender labelName='Laycan at Load Port to'/>
                     <img
                        className={`${styles.calanderIcon} img-fluid`}
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
                    <DateCalender labelName='Last date of shipment'/>
                     <img
                        className={`${styles.calanderIcon} img-fluid`}
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

              <Form.Group className={`${styles.form_group} col-md-3 col-sm-6`}>
                 <div className="d-flex">
                    <DateCalender labelName='ETA at Discharge Port from'/>
                     <img
                        className={`${styles.calanderIcon} img-fluid`}
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
              <Form.Group className={`${styles.form_group}  col-md-3 col-sm-6`}>
                 <div className="d-flex">
                    <DateCalender labelName='ETA at Discharge Port to'/>
                     <img
                        className={`${styles.calanderIcon} img-fluid`}
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
            </div>
            {/* <div className={styles.button}><span>Submit</span></div> */}
          </Form>
        </div>
      </div>
    </div>
  )
}

export default index
