import React, { useState } from 'react'
import styles from './index.module.scss'
import { Form, Row, Col } from 'react-bootstrap'
import SaveBar from '../SaveBar'
import InspectionDocument from '../InspectionDocument'
import DateCalender from '../DateCalender'

export default function Index() {
  return (
    <>
      <div className={`${styles.backgroundMain} container-fluid`}>
        <div className={`${styles.vessel_card} mt-3 border_color`}>
          <div className={`${styles.main} mt-4 card border_color`}>
            <div
              className={`${styles.head_container} card-header border_color head_container justify-content-between d-flex bg-transparent`}
              data-toggle="collapse"
              data-target="#lcApplication"
              aria-expanded="true"
              aria-controls="lcApplication"
            >
              <h3 className={`${styles.heading}`}>LC Details</h3>

              <span>+</span>
            </div>
            <div
              id="lcApplication"
              className="collapse"
              aria-labelledby="lcApplication"
              data-parent="#lcApplication"
            >
              <div className={`${styles.dashboard_form} card-body`}>
                <div className="row">
                  <div
                    className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6 `}
                  >
                    <div className="d-flex">
                      <DateCalender
                        name="dateOfExpiry"
                        labelName="(31D) Date Of Expiry"
                      />
                      <img
                        className={`${styles.calanderIcon} img-fluid`}
                        src="/static/caldericon.svg"
                        alt="Search"
                      />
                    </div>
                  </div>
                  <div
                    className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6 `}
                  >
                    <input
                      className={`${styles.input_field} input form-control`}
                      type="text"
                    />
                    <label className={`${styles.label_heading} label_heading`}>
                      Net Quantity Released
                      <strong className="text-danger">*</strong>
                    </label>
                  </div>
                  <div
                    className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6 `}
                  >
                    <input
                      className={`${styles.input_field} input form-control`}
                      type="text"
                    />
                    <label className={`${styles.label_heading} label_heading`}>
                      Net Quantity Released
                      <strong className="text-danger">*</strong>
                    </label>
                  </div>
                  <div
                    className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6 `}
                  >
                    <div className="d-flex">
                      <DateCalender
                        name="dateOfExpiry"
                        labelName="(31D) Date Of Expiry"
                      />
                      <img
                        className={`${styles.calanderIcon} img-fluid`}
                        src="/static/caldericon.svg"
                        alt="Search"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div
                className={`${styles.dashboard_form} card-body`}
                style={{ borderTop: '2px solid #CAD6E6' }}
              >
                <div className={`${styles.form_heading} mt-2`}>
                  Release Order Details
                </div>
                <div className="row ml-auto">
                  <div
                    className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6 `}
                  >
                    <div className="d-flex">
                      <select
                        name="formOfDocumentaryCredit"
                        className={`${styles.input_field}  ${styles.customSelect} input form-control`}
                      >
                        <option selected></option>
                        <option value="Irrevocable">Irrevocable</option>
                        <option value="Revocable">Revocable</option>
                      </select>

                      <label
                        className={`${styles.label_heading} label_heading`}
                      >
                        (40A) Form of Documentary Credit
                        <strong className="text-danger">*</strong>
                      </label>
                      <img
                        className={`${styles.arrow} img-fluid`}
                        src="/static/inputDropDown.svg"
                        alt="Search"
                      />
                    </div>
                  </div>
                </div>
                <hr></hr>
                <div className="text-right">
                  <div className={`${styles.total_quantity} text `}>
                    Net Balance Quantity:{' '}
                    <span className="form-check-label ml-2">20,000 MT</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4 mb-5">
            <InspectionDocument />
          </div>
        </div>

        <SaveBar rightBtn="Submit" />
      </div>
    </>
  )
}
