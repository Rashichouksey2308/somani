/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from 'react'
import styles from './index.module.scss'
import { Form } from 'react-bootstrap'
import InspectionDocument from '../InspectionDocument'
import SaveBar from '../SaveBar'
import DateCalender from '../DateCalender'
import { useDispatch } from 'react-redux'
import { UpdateInspection } from 'redux/Inspections/action'
import _get from 'lodash/get'
import UploadOther from '../UploadOther'
import { toast } from 'react-toastify'
import moment from 'moment'

export default function Index({ inspectionData }) {
  let dispatch = useDispatch()

  let orderid = _get(inspectionData, 'order._id', '')

  let d = new Date()

  const [plotInspectionData, setPlotInspectionData] = useState({
    plotInspectionDate: inspectionData?.plotInspection?.plotInspectionDate,
    plotInspectionReport:
      inspectionData?.plotInspection?.plotInspectionReport || null,
  })

  useEffect(() => {
    setPlotInspectionData({
      plotInspectionDate: inspectionData?.plotInspection?.plotInspectionDate,
      plotInspectionReport:
        inspectionData?.plotInspection?.plotInspectionReport,
    })
  }, [inspectionData])

  // console.log(plotInspectionData, 'THIS IS PLOT')

  const savePlotInspectionData = (name, value) => {
    let newInput = { ...plotInspectionData }
    newInput[name] = value
    setPlotInspectionData(newInput)
  }

  const saveDate = (value, name) => {
    const d = new Date(value)
    let text = d.toISOString()
    savePlotInspectionData(name, text)
  }

  const uploadDocument1 = (e) => {
    const newUploadDoc1 = { ...plotInspectionData }
    newUploadDoc1.plotInspectionReport = e.target.files[0]

    setPlotInspectionData(newUploadDoc1)
  }

  const handleClose = () => {
    setPlotInspectionData((doc) => {
      return { ...doc, plotInspectionReport: null }
    })
  }

  const handleSubmit = () => {
    // console.log('payload Third party1')
    if (plotInspectionData.plotInspectionDate == '') {
      let toastMessage = 'PLOT INSPECTION DATE IS MANDATORY'
      if (!toast.isActive(toastMessage)) {
        toast.error(toastMessage, { toastId: toastMessage })
      }
    } else {
      let obj = {
        plotInspectionDate: plotInspectionData?.plotInspectionDate,
      }
      let fd = new FormData()
      fd.append('plotInspection', JSON.stringify(obj))
      fd.append('plotInspectionReport', plotInspectionData.plotInspectionReport)
      fd.append('inspectionId', inspectionData?._id)
      let task = 'submit'

      // console.log('payload Third party2', 'Payload')

      dispatch(UpdateInspection({ fd, task }))
    }
  }

  const handleSave = () => {
    let obj = {
      plotInspectionDate: plotInspectionData?.plotInspectionDate,
    }
    let fd = new FormData()
    fd.append('plotInspection', JSON.stringify(obj))
    fd.append('plotInspectionReport', plotInspectionData.plotInspectionReport)
    fd.append('inspectionId', inspectionData?._id)

    let task = 'save'

    console.log('payload Third party2', 'Payload')

    dispatch(UpdateInspection({ fd, task }))
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
                      defaultDate={
                        inspectionData?.plotInspection?.plotInspectionDate
                      }
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
          <div className={`${styles.main} vessel_card card border-color`}>
            <div
              className={`${styles.head_container} border_color align-items-center head_container d-flex justify-content-between`}
              data-toggle="collapse"
              data-target="#upload"
              aria-expanded="true"
              aria-controls="upload"
            >
              <h3 className={styles.heading}>Document</h3>
              <span>+</span>
            </div>
            <div
              id="upload"
              className="collapse"
              aria-labelledby="upload"
              data-parent="#upload"
            >
              <div className={styles.table_container}>
                <div className={`${styles.table_form}`}>
                  <div className={styles.table_container}>
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
                              <th width="25%">
                                DOCUMENT NAME{' '}
                                <img
                                  className={`${styles.sort_img} mb-1`}
                                  src="/static/icons8-sort-24.svg"
                                  alt="Sort icon"
                                />
                              </th>
                              <th width="15%">
                                FORMAT{' '}
                                <img
                                  className={`${styles.sort_img} mb-1`}
                                  src="/static/icons8-sort-24.svg"
                                  alt="Sort icon"
                                />
                              </th>
                              <th width="25%">
                                DOCUMENT DATE{' '}
                                <img
                                  className={`${styles.sort_img} mb-1`}
                                  src="/static/icons8-sort-24.svg"
                                  alt="Sort icon"
                                />
                              </th>
                              <th width="35%">ACTION</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="table_row">
                              <td className={styles.doc_name}>
                                Plot Inspection Report
                                <strong className="text-danger ml-1">*</strong>
                              </td>
                              <td>
                                <img
                                  src="/static/pdf.svg"
                                  className={`${styles.pdfImage} img-fluid`}
                                  alt="Pdf"
                                />
                              </td>
                              <td className={styles.doc_row}>
                                {inspectionData?.plotInspection
                                  ?.plotInspectionReport
                                  ? moment(
                                      inspectionData?.plotInspection
                                        ?.plotInspectionReport.date,
                                    ).format('DD-MM-YYYY, h:mm A')
                                  : plotInspectionData?.plotInspectionReport !=
                                    null
                                  ? moment(d).format('DD-MM-YYYY, h:mm A')
                                  : ''}
                              </td>

                              <td>
                                {plotInspectionData?.plotInspectionReport ==
                                null ? (
                                  <>
                                    <div className={styles.uploadBtnWrapper}>
                                      <input
                                        type="file"
                                        name="myfile"
                                        accept="application/msword, application/vnd.ms-excel, application/vnd.ms-powerpoint,text/plain, application/pdf, .docx"
                                        onChange={(e) => uploadDocument1(e)}
                                      />
                                      <button
                                        className={`${styles.updateBtn} btn`}
                                      >
                                        Upload
                                      </button>
                                    </div>
                                  </>
                                ) : (
                                  <div
                                    className={`${styles.certificate} d-flex justify-content-between`}
                                  >
                                    <span>
                                      {
                                        plotInspectionData?.plotInspectionReport
                                          ?.name
                                      }
                                    </span>
                                    <img
                                      className={`${styles.close_image}`}
                                      src="/static/close.svg"
                                      onClick={() => handleClose()}
                                      alt="Close"
                                    />{' '}
                                  </div>
                                )}
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="0">
            <UploadOther orderid={orderid} module="Loading-Transit-Unloading" />
          </div>
          {/* <InspectionDocument
            documentName="Plot Inspection Report"
            uploadDocument1={uploadDocument1}
            orderid={orderid} module="Loading-Transit-Unloading"
          /> */}
        </div>
        <SaveBar
          handleSave={handleSave}
          rightBtn="Submit"
          rightBtnClick={handleSubmit}
        />
      </div>
    </>
  )
}
