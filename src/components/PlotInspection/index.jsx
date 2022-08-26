/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react'
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

export default function Index({ inspectionData }) {
  let dispatch = useDispatch()

  let orderid = _get(inspectionData, 'order._id', '')

  const [plotInspectionData, setPlotInspectionData] = useState({
    plotInspectionDate: inspectionData?.plotInspection?.plotInspectionDate,
    plotInspectionReport: null,
  })

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

  const handleSave = () => {
    if (plotInspectionData.plotInspectionDate == '') {
      let toastMessage = 'PLOT INSPECTION DATE IS MANDATORY'
      if (!toast.isActive(toastMessage)) {
        toast.error(toastMessage, { toastId: toastMessage })
      }
    } else {
      let fd = new FormData()
      fd.append(
        'plotInspectionDate',
        JSON.stringify(plotInspectionData.plotInspectionDate),
      )
      fd.append('plotInspectionReport', plotInspectionData.plotInspectionReport)
      fd.append('inspectionId', inspectionData?._id)

      dispatch(UpdateInspection(fd))
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
              className={`${styles.head_container} border_color head_container d-flex justify-content-between`}
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
                              <th width="35%">
                                DOCUMENT NAME{' '}
                                <img
                                  className={`${styles.sort_img} mb-1`}
                                  src="/static/icons8-sort-24.svg"
                                  alt="Sort icon"
                                />
                              </th>
                              <th width="20%">
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
                              <th>ACTION</th>
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
                                28-02-2022,5:30 PM
                              </td>
                              {/* <td>
                              {' '}
                              <div className="dropdown">
                                <button
                                  className={`${styles.specify_field} btn btn-secondary dropdown-toggle`}
                                  type="button"
                                  id="dropdownMenuButton"
                                  data-toggle="dropdown"
                                  aria-haspopup="true"
                                  aria-expanded="false"
                                >
                                  Please Specify
                                </button>
                                <div
                                  className={`${styles.dropdown_menu} dropdown-menu`}
                                  aria-labelledby="dropdownMenuButton"
                                >
                                  <a
                                    className={`${styles.hold_field} ${styles.dropdown_item} dropdown-item`}
                                    href="#"
                                  >
                                    <img
                                      src="/static/hold-white.svg"
                                      className="img-fluid mr-2"
                                      alt="On Hold"
                                    />{' '}
                                    On Hold
                                  </a>
                                  <a
                                    className={`${styles.rejected_field} ${styles.dropdown_item} dropdown-item`}
                                    href="#"
                                  >
                                    <img
                                      src="/static/close-white.svg"
                                      className="img-fluid mr-2"
                                      alt="Rejected"
                                    />{' '}
                                    Rejected
                                  </a>
                                  <a
                                    className={`${styles.approved_field} ${styles.dropdown_item} dropdown-item`}
                                    href="#"
                                  >
                                    <img
                                      src="/static/check.svg"
                                      className="img-fluid mr-2"
                                      alt="Approved"
                                    />{' '}
                                    Approved
                                  </a>
                                </div>
                              </div>
                            </td> */}
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
                                  <div className={styles.certificate}>
                                    {
                                      plotInspectionData?.plotInspectionReport
                                        ?.name
                                    }
                                    <img
                                      className={`${styles.close_image} float-right m-2 img-fluid`}
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
        <SaveBar handleSave={handleSave} rightBtn="Submit" />
      </div>
    </>
  )
}
