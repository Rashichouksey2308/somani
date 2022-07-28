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
                        labelName="Date of Issue"
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
                      Documentary Credit Number
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
                      LC Value
                      <strong className="text-danger">*</strong>
                    </label>
                  </div>
                  <div
                    className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6 `}
                  >
                    <div className="d-flex">
                      <DateCalender
                        name="dateOfExpiry"
                        labelName="LC Credit Date"
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
                  Bank Details
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
                        <option value="Irrevocable">Abc Bank</option>
                        <option value="Revocable">SBI</option>
                      </select>

                      <label
                        className={`${styles.label_heading} label_heading`}
                      >
                        LC Issuing Bank
                        <strong className="text-danger">*</strong>
                      </label>
                      <img
                        className={`${styles.arrow} img-fluid`}
                        src="/static/inputDropDown.svg"
                        alt="Search"
                      />
                    </div>
                  </div>
                  <div
                    className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6 `}
                  >
                    <div className="d-flex">
                      <select
                        name="formOfDocumentaryCredit"
                        className={`${styles.input_field}  ${styles.customSelect} input form-control`}
                      >
                        <option selected></option>
                        <option value="Irrevocable">New Delhi</option>
                        <option value="Revocable">Mumbai</option>
                      </select>

                      <label
                        className={`${styles.label_heading} label_heading`}
                      >
                        Branch Name
                        <strong className="text-danger">*</strong>
                      </label>
                      <img
                        className={`${styles.arrow} img-fluid`}
                        src="/static/inputDropDown.svg"
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
                      IFSC Code
                      <strong className="text-danger">*</strong>
                    </label>
                  </div>
                </div>
              </div>

              <div className={`${styles.table_container} mt-4`}>
                <div className={styles.table_scroll_outer}>
                  <div className={styles.table_scroll_inner}>
                    <table
                      className={`${styles.table} table`}
                      cellPadding="0"
                      cellSpacing="0"
                      border="0"
                    >
                      <thead>
                        <tr>
                          <th>
                            DOCUMENT NAME{' '}
                            <img
                              className={`${styles.sort_image} mb-1`}
                              src="/static/icons8-sort-24.svg"
                              alt="Sort icon"
                            />
                          </th>
                          <th>
                            FORMAT{' '}
                            <img
                              className={`${styles.sort_image} mb-1`}
                              src="/static/icons8-sort-24.svg"
                              alt="Sort icon"
                            />
                          </th>
                          <th>
                            DOCUMENT DATE{' '}
                            <img
                              className={`${styles.sort_image} mb-1`}
                              src="/static/icons8-sort-24.svg"
                              alt="Sort icon"
                            />{' '}
                          </th>
                          <th width="30%">ACTION</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="table_row">
                          <td className={styles.doc_name}>
                            LC AMENDMENT DRAFT{' '}
                            <strong className="text-danger ml-0">*</strong>{' '}
                          </td>
                          <td>
                            <img
                              src="/static/pdf.svg"
                              className="img-fluid"
                              alt="Pdf"
                            />
                          </td>
                          <td className={styles.doc_row}>28-02-2022,5:30 PM</td>
                          <td colSpan={2}>
                            <div className={styles.uploadBtnWrapper}>
                              <input type="file" name="myfile" />
                              <button className={`${styles.upload_button} btn`}>
                                Upload
                              </button>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
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
