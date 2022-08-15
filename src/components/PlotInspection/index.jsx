/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react'
import styles from './index.module.scss'
import { Form } from 'react-bootstrap'
import InspectionDocument from '../InspectionDocument'
import SaveBar from '../SaveBar'
import DateCalender from '../DateCalender'
import { useDispatch } from 'react-redux'
import { UpdateInspection } from 'redux/Inspections/action'

export default function Index({ inspectionData }) {
  let dispatch = useDispatch()

  const [plotInspectionData, setPlotInspectionData] = useState({
    plotInspectionDate: '',
    plotInspectionReport: null,
  })

  // const saveAppointmentData = (name, value) => {
  //   let newInput = {...appointmentData}
  //   newInput[name] = value
  //   setPlotInspectionData(newInput)
  // }

  const saveDate = (value, name) => {
    const d = new Date(value)
    let text = d.toISOString()
    setPlotInspectionData(name, text)
  }

  const uploadDocument1 = (e) => {
    const newUploadDoc1 = { ...plotInspectionData }
    newUploadDoc1.plotInspectionReport = e.target.files[0]

    setPlotInspectionData(newUploadDoc1)
  }

  const handleSave = () => {
    let fd = new FormData()
    fd.append(
      'plotInspectionDate',
      JSON.stringify(plotInspectionData.plotInspectionDate),
    )
    fd.append('plotInspectionReport', plotInspectionData.plotInspectionReport)

    dispatch(UpdateInspection(fd))
  }

  return (
    <>
      <div
        className={`${styles.backgroundMain} container-fluid p-0 background2`}
      >
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
                    <DateCalender
                      name="plotInspectionDate"
                      saveDate={saveDate}
                      labelName="Plot Inspection Date"
                      dateFormat={`dd-MM-yyyy`}
                    />
                    <img
                      className={`${styles.calanderIcon} image_arrow img-fluid`}
                      src="/static/caldericon.svg"
                      alt="Search"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <InspectionDocument
            documentName="Plot Inspection Report"
            uploadDocument1={uploadDocument1}
          />
        </div>
        <SaveBar handleSave={handleSave} rightBtn="Submit" />
      </div>
    </>
  )
}
