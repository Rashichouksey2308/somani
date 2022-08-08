import React from 'react'
import styles from './index.module.scss'
import { Form, Row, Col } from 'react-bootstrap'
import SaveBar from '../../SaveBar'
import { useState } from 'react'
import DateCalender from '../../DateCalender'
import UploadOther from '../../UploadOther'

export default function Index() {
  const [editInput, setEditInput] = useState(true)

  const handleDropdown = (e) => {
    if ((e.target.value = 'Others')) {
      setEditInput(!editInput)
    } else {
      setEditInput(editInput)
    }
  }

  return (
    <>
      <div className={`${styles.backgroundMain} container-fluid`}>
        <div className={`${styles.vessel_card} mt-3 border_color`}>
          <div className={`${styles.main} mt-4 card border_color`}>
            <div
              className={`${styles.head_container} card-header border_color head_container align-items-center justify-content-between d-flex bg-transparent`}
              data-toggle="collapse"
              data-target="#lcApplication"
              aria-expanded="true"
              aria-controls="lcApplication"
            >
              <h3 className={`${styles.heading}`}>Warehouse Details</h3>
              <span className="ml-3">+</span>
            </div>
            <div
              id="lcApplication"
              className="collapse"
              aria-labelledby="lcApplication"
              data-parent="#lcApplication"
            >
              <div className={`${styles.dashboard_form} mt-3 card-body`}>
                <div className="row">
                  <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className={`${styles.label} text`}>Commodity</div>
                    <span className={styles.value}>Iron</span>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className={`${styles.label} text`}>CMA Name</div>
                    <span className={styles.value}>Abcz</span>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className={`${styles.label} text`}>
                      Storage Address
                    </div>
                    <span className={styles.value}>
                      New Dolphin Yard, Visakhapatnam Port
                    </span>
                  </div>
                  <div
                    className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6 mt-5`}
                  >
                    <input
                      className={`${styles.input_field} input form-control`}
                      type="number"
                    />
                    <label className={`${styles.label_heading} label_heading`}>
                      Quantity<strong className="text-danger">*</strong>
                    </label>
                  </div>
                  <div
                    className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6 mt-5`}
                  >
                    <div className="d-flex">
                      <DateCalender labelName="Date of Storage" />
                      <img
                        className={`${styles.calanderIcon} img-fluid`}
                        src="/static/caldericon.svg"
                        alt="Search"
                      />
                    </div>
                  </div>

                  <div
                    className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6 mt-5`}
                  >
                    <div className="d-flex justify-content-start mt-2">
                      <div className={styles.uploadBtnWrapper}>
                        <input type="file" name="myfile" />
                        <button className={`${styles.upload_btn} btn`}>
                          Upload
                        </button>
                      </div>
                      <img
                        src="/static/delete 2.svg"
                        className={`${styles.delete_image} img-fluid ml-3 mr-3`}
                        alt="Bin"
                      />
                      <img
                        src="/static/mode_edit.svg"
                        className={`${styles.edit_image} img-fluid`}
                        alt="edit"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4 mb-5">
            <UploadOther />
          </div>

        </div>
        <SaveBar rightBtn="Submit" />
      </div>
    </>
  )
}
