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
              <h3 className={`${styles.heading}`}>Release Order</h3>

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
                    className={`${styles.form_group} col-lg-3 col-md-6 col-sm-6 `}
                  >
                    <div className={`${styles.label} text`}>Commodity</div>
                    <span className={styles.value}>Iron</span>
                  </div>
                  <div
                    className={`${styles.form_group} col-lg-3 col-md-6 col-sm-6 `}
                  >
                    <div className={`${styles.label} text`}>
                      Invoice Quantity
                    </div>
                    <span className={styles.value}>500 Mt</span>
                  </div>
                  <div
                    className={`${styles.form_group} col-lg-3 col-md-6 col-sm-6 `}
                  >
                    <div className={`${styles.label} text`}>Bank Name</div>
                    <span className={styles.value}>Bank of Spain</span>
                  </div>
                  <div
                    className={`${styles.form_group} col-lg-3 col-md-6 col-sm-6 `}
                  >
                    <div className={`${styles.label} text`}>
                      Documentary Credit No.{' '}
                    </div>
                    <span className={styles.value}>23245</span>
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
                    className={`${styles.form_group} col-lg-3 col-md-6 col-sm-6 `}
                  >
                    <div className={`${styles.label} text`}>
                      Release Order No.{' '}
                      <strong className="text-danger ml-n1">*</strong>
                    </div>
                    <span className={`${styles.value}`}>1</span>
                  </div>
                  <div
                    className={`${styles.form_group} col-lg-3 col-md-6 col-sm-6 `}
                  >
                    <div className="d-flex">
                      <DateCalender labelName="Release Order Date" />
                      <img
                        className={`${styles.calanderIcon} img-fluid`}
                        src="/static/caldericon.svg"
                        alt="Search"
                      />
                    </div>
                  </div>
                  <div
                    className={`${styles.form_group} col-lg-3 col-md-6 col-sm-6 `}
                  >
                    <input
                      className={`${styles.input_field} input form-control`}
                      type="number"
                    />
                    <label className={`${styles.label_heading} label_heading`}>
                      Net Quantity Released
                      <strong className="text-danger">*</strong>
                    </label>
                  </div>
                  <div
                    className="col-lg-3 col-md-4 col-sm-6 text-center"
                    style={{ top: '50px' }}
                  >
                    <div className="d-flex">
                      <input
                        className={styles.doc_field}
                        type="text"
                        placeholder="Nomination.pdf"
                      />
                      <img
                        className={`${styles.close_image} img-fluid `}
                        src="/static/close.svg"
                        alt="close"
                      />

                      <img
                        src="/static/delete 2.svg"
                        className={`${styles.delete_image} ml-4 img-fluid `}
                        alt="delete"
                      />
                    </div>
                  </div>

                  <div
                    className={`${styles.form_group} col-lg-3 col-md-6 col-sm-6 `}
                  >
                    <div className={`${styles.label} text`}>
                      Release Order No.{' '}
                      <strong className="text-danger ml-n1">*</strong>
                    </div>
                    <span className={`${styles.value}`}>2</span>
                  </div>
                  <div
                    className={`${styles.form_group} col-lg-3 col-md-6 col-sm-6 `}
                  >
                    <div className="d-flex">
                      <DateCalender labelName="Release Order Date" />
                      <img
                        className={`${styles.calanderIcon} img-fluid`}
                        src="/static/caldericon.svg"
                        alt="Search"
                      />
                    </div>
                  </div>
                  <div
                    className={`${styles.form_group} col-lg-3 col-md-6 col-sm-6 `}
                  >
                    <input
                      className={`${styles.input_field} input form-control`}
                      type="number"
                    />
                    <label className={`${styles.label_heading} label_heading`}>
                      Net Quantity Released
                      <strong className="text-danger">*</strong>
                    </label>
                  </div>
                  <div
                    className="col-lg-3 col-md-4 col-sm-6 text-center"
                    style={{ top: '50px' }}
                  >
                    <div className={styles.uploadBtnWrapper}>
                      <input type="file" name="myfile" />
                      <button className={`${styles.upload_btn} mr-2 btn`}>
                        Upload
                      </button>
                    </div>
                    <img
                      src="/static/delete 2.svg"
                      className={`${styles.delete_image} mt-n4 img-fluid mr-2`}
                      alt="Preview"
                    />
                    <img
                      src="/static/add-btn.svg"
                      className={`${styles.delete_image} mt-n4 img-fluid`}
                      alt="Preview"
                    />
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

        <SaveBar />
      </div>
    </>
  )
}
