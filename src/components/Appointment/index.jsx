import React from 'react'
import styles from './index.module.scss'
import { Form, Row, Col } from 'react-bootstrap'
import SaveBar from '../SaveBar'
import { useState } from 'react'
import DateCalender from '../DateCalender'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

export default function Index() {
  const [editInput, setEditInput] = useState(true)
  const [startDate, setStartDate] = useState(new Date())

  const handleDropdown = (e) => {
    if (e.target.value == 'Others') {
      setEditInput(false)
    } else {
      setEditInput(true)
    }
  }

  return (
    <>
      <div
        className={`${styles.backgroundMain} container-fluid p-0 background2`}
      >
        <div className={`${styles.vessel_card}`}>
          <div className={`${styles.main} card border-color`}>
            <div
              className={`${styles.head_container} border_color card-header head_container justify-content-between d-flex bg-transparent`}
            >
              <h3 className={`${styles.heading}`}>
                Appointment of Third Party
              </h3>
              <span>+</span>
            </div>

            <div className={`${styles.dashboard_form} mt-2 mb-4 card-body`}>
              <div className="row">
                <div
                  className={`${styles.form_group} col-lg-6 col-md-6 col-sm-6`}
                >
                  <div className="d-flex">
                    <input
                      className={`${styles.input_field} input form-control`}
                      type="text"
                      required
                    />
                    <label className={`${styles.label_heading} label_heading`}>
                      Name<strong className="text-danger">*</strong>
                    </label>
                    <img
                      className={`${styles.search_image} img-fluid`}
                      src="/static/search-grey.svg"
                      alt="Search"
                    />
                  </div>
                </div>
                <div
                  className={`${styles.form_group} col-lg-6 col-md-6 col-md-6`}
                >
                  <div className="d-flex">
                    {/* <DateCalender labelName='ETA at Discharge Port'/>
                      <img
                          className={`${styles.calanderIcon} img-fluid`}
                          src="/static/caldericon.svg"
                          alt="Search"
                      /> */}
                    <DatePicker
                      name="ETAatDischargePort"
                      selected={startDate}
                      dateFormat="dd/MM/yyyy"
                      className={`${styles.input_field} input form-control`}
                      onChange={(startDate) => {
                        setStartDate(startDate)
                        saveDate(startDate, 'ETAatDischargePort', index)
                      }}
                    />
                    <img
                      className={`${styles.calanderIcon} img-fluid`}
                      src="/static/caldericon.svg"
                      alt="Search"
                    />
                    <label className={`${styles.label_heading} label_heading`}>
                      Date of Appointment
                    </label>
                  </div>
                </div>
                <div
                  className={`${styles.form_group} col-lg-6 col-md-6 col-sm-6`}
                >
                  <label className={`${styles.comment_heading}`}>Address</label>

                  <div
                    className={`${styles.comment_field} d-flex justify-content-between mt-2 form-control`}
                  >
                    <div className="m-3">
                      <div className={`${styles.address_type}`}>
                        Registered Address
                      </div>
                      <div className={`${styles.address_detail} mt-3`}>
                        10 Boulevard De Grenelle Cs 63205 - 75015
                      </div>
                    </div>
                    <img
                      className={`${styles.edit_image} img-fluid mr-3`}
                      src="/static/mode_edit.svg"
                      alt="edit"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <SaveBar rightBtn="Submit" />
      </div>
    </>
  )
}
