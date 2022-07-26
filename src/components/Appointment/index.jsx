import React from 'react'
import styles from './index.module.scss'
import { Form, Row, Col } from 'react-bootstrap'
import SaveBar from '../SaveBar'
import { useState } from 'react'
import DateCalender from '../DateCalender'

export default function Index() {
  const [editInput, setEditInput] = useState(true)

  const handleDropdown = (e) => {
    if (e.target.value == 'Others') {
      setEditInput(false)
    } else {
      setEditInput(true)
    }
  }

  return (
    <>
      <div className={`${styles.backgroundMain} container-fluid background2`}>
        <div className={`${styles.vessel_card}`}>
          <div className={`${styles.main} mt-4 card border-color`}>
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
                  className={`${styles.form_group} col-lg-12 col-md-12 col-sm-12`}
                >
                  <label className={`${styles.comment_heading}`}>Address</label>
                  <div className="d-flex">
                    <input
                      as="textarea"
                      rows={3}
                      className={`${styles.comment_field} mt-2 form-control`}
                      onChange={(e) => setCompanyComments(e.target.value)}
                    />
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
        <SaveBar />
      </div>
    </>
  )
}
