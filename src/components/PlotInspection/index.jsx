import React from 'react'
import styles from './index.module.scss'
import { Form } from 'react-bootstrap'
import InspectionDocument from '../InspectionDocument'
import SaveBar from '../SaveBar'
import DateCalender from '../DateCalender'

export default function Index() {
  return (
    <>
      <div className={`${styles.backgroundMain} container-fluid p-0 background2`}>
        <div className={`${styles.vessel_card}`}>
          <div className={`${styles.main} card border-color`}>
            <div
              className={`${styles.head_container} border_color align-items-center card-header head_container justify-content-between d-flex bg-transparent`}
            >
              <h3 className={`${styles.heading}`}>Plot Inspection</h3>
            </div>

            <div className={`${styles.dashboard_form} mt-2 mb-4 card-body`}>
              <div className="row">
                <div className={`${styles.form_group} col-md-4 col-sm-6`}>
                  <div className="d-flex align-items-center">
                    <DateCalender labelName="Plot Inspection Date" dateFormat={`dd-MM-yyyy`} />
                    <img
                      className={`${styles.calanderIcon} img-fluid`}
                      src="/static/caldericon.svg"
                      alt="Search"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <InspectionDocument />
        </div>
        <SaveBar rightBtn="Submit" />
      </div>
    </>
  )
}
