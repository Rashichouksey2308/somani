import React, { useState } from 'react'
import styles from './index.module.scss'
import { Form, Row, Col, Modal } from 'react-bootstrap'
import SaveBar from '../../SaveBar'
import UploadOther from '../../UploadOther'
import DateCalender from '../../DateCalender'
import _get from 'lodash/get'
import { UpdateCustomClearance } from '../../../redux/CustomClearance&Warehousing/action'
import { useDispatch } from 'react-redux'
import moment from 'moment'
import { toast } from 'react-toastify'


export default function Index({ OrderId, customData, uploadDoc }) {
  console.log(customData, 'customData')
  const dispatch = useDispatch()
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const [dischargeOfCargo, setDischargeOfCargo] = useState({
    dischargeOfCargo: {
      vesselName: _get(
        customData,
        'dischargeOfCargo.dischargeOfCargo.vesselName',
        '',
      ),
      portOfDischarge: _get(customData, 'order.portOfDischarge', ''),
      dischargeQuantity: _get(
        customData,
        'dischargeOfCargo.dischargeOfCargo.dischargeQuantity',
        '',
      ),
      dischargeQuantity: '',
      vesselArrivaldate: '',
      dischargeStartDate: '',
      dischargeEndDate: '',
    },
    document1: null,
    document2: null,
  })

  const ShipmentType = _get(
    customData,
    'customData?.order?.vessel?.vessels[0]?.shipmentType',
    'Bulk',
  )

  const saveDate = (value, name) => {
    // console.log(value, name, 'save date')
    const d = new Date(value)
    let text = d.toISOString()
    onChangeDischargeOfCargo(name, text)
  }

  const onChangeDischargeOfCargo = (name, text) => {
    let newData = { ...dischargeOfCargo }
    newData.dischargeOfCargo[name] = text
    setDischargeOfCargo(newData)
  }
  // const uploadDoc1 = async (e) => {
  //   let name = e.target.id
  //   let docs = await uploadDoc(e)

  //   let newInput = { ...dischargeOfCargo }
  //   newInput[name] = docs
  //   setBillOfEntryData(newInput)
  // }

  const onSaveDocument = async (e) => {
    let name = e.target.name
    let doc = await uploadDoc(e)
    console.log(doc, 'dischargeOfCargo1')
    let tempData = { ...dischargeOfCargo }
    tempData[name] = doc
    setDischargeOfCargo(tempData)
  }
  console.log(dischargeOfCargo, 'dischargeOfCargo3')
  const onSaveDischarge = () => {
    if (dischargeOfCargo.dischargeOfCargo.dischargeQuantity === '') {

      let toastMessage = 'DISCHRGE QUANTITY CANNOT BE EMPTY  '
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
      }
      return
    }
    // else if (dischargeOfCargo.dischargeOfCargo.vesselName === '') {

    //   let toastMessage = 'PLEASE SELCT A VESSEL  '
    //   if (!toast.isActive(toastMessage.toUpperCase())) {
    //     toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
    //   }
    //   return
    // }
    else if (dischargeOfCargo.dischargeOfCargo.vesselArrivaldate === '') {

      let toastMessage = 'vessel Arrival date CANNOT BE EMPTY  '
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
      }
      return
    }
    else if (dischargeOfCargo.dischargeOfCargo.dischargeStartDate === '') {

      let toastMessage = 'discharge Start Date CANNOT BE EMPTY  '
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
      }
      return
    }
    else if (dischargeOfCargo.dischargeOfCargo.dischargeEndDate === '') {

      let toastMessage = 'discharge End Date CANNOT BE EMPTY  '
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
      }
      return
    } else if (dischargeOfCargo.document1 === null) {

      let toastMessage = 'Statement Of Facts must be uploaded'
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
      }
      return
    } else if (dischargeOfCargo.document2 === null) {

      let toastMessage = 'Draft Survey Report must be uploaded '
      if (!toast.isActive(toastMessage.toUpperCase())) {
        toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
      }
      return
    }
    else {
      let fd = new FormData()
      fd.append('dischargeOfCargo', JSON.stringify(dischargeOfCargo))
      fd.append('customClearanceId', customData._id)
      fd.append('document1', dischargeOfCargo.document1)
      fd.append('document2', dischargeOfCargo.document2)
      dispatch(UpdateCustomClearance(fd))
    }
  }
  console.log(dischargeOfCargo, 'dischargeOfCargo')

  return (
    <>
      <div className={`${styles.backgroundMain} container-fluid`}>
        <div className={`${styles.vessel_card} border_color`}>
          <div className={`${styles.main} vessel_card card border_color`}>
            <div
              className={`${styles.head_container} card-header align-items-center border_color head_container align-items-center justify-content-between d-flex bg-transparent`}
            >
              <h3 className={`${styles.heading}`}>Discharge of Cargo</h3>

              <div className="d-flex">
                <div className="d-flex align-items-center">
                  <label className={`${styles.dropDown_label} text`}>
                    Shipment Type
                  </label>
                  <div className={`${styles.dropDown} ml-2 mr-3`} value="Bulk">
                    Bulk
                  </div>
                </div>
                <div className="d-flex align-items-center">
                  <button className={styles.add_btn} onClick={handleShow}>
                    Show BL Details
                  </button>
                  <span className="ml-3">+</span>
                </div>
              </div>
            </div>
            <div className={`${styles.dashboard_form} mt-3 card-body`}>
              <div className="row">
                <div
                  className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6 `}
                >
                  <div className="d-flex">
                    <select
                      className={`${styles.input_field} ${styles.customSelect} input form-control`}
                    >
                      <option value="">Please select a vessel</option>
                    </select>
                    <label className={`${styles.label_heading} label_heading`}>
                      Vessel Name<strong className="text-danger">*</strong>
                    </label>
                    <img
                      className={`${styles.arrow} image_arrow img-fluid`}
                      src="/static/inputDropDown.svg"
                      alt="Search"
                    />
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6">
                  <div
                    className={`${styles.label_heading} text`}
                    style={{ paddingTop: '30px', paddingBottom: '10px' }}
                  >
                    Port of Discharge
                  </div>
                  <span className={styles.value}>
                    {dischargeOfCargo.dischargeOfCargo.portOfDischarge}
                  </span>
                </div>
                <div
                  className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6 `}
                >
                  <input
                    defaultValue={
                      dischargeOfCargo.dischargeOfCargo.dischargeQuantity
                    }
                    onChange={(e) =>
                      onChangeDischargeOfCargo(e.target.id, e.target.value)
                    }
                    id="dischargeQuantity"
                    className={`${styles.input_field} input form-control`}
                    type="number"
                    onKeyDown={(evt) => evt.key === 'e' && evt.preventDefault()}
                    required
                  />
                  <label className={`${styles.label_heading} label_heading`}>
                    Discharge Quantity<strong className="text-danger">*</strong>
                  </label>
                </div>
                <div
                  className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6 `}
                >
                  <div className="d-flex">
                    <DateCalender
                      name="vesselArrivaldate"
                      saveDate={saveDate}
                      labelName="Vessel Arrival Date"
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
                  <div className="d-flex">
                    <DateCalender
                      name="dischargeStartDate"
                      saveDate={saveDate}
                      labelName="Discharge Start Date"
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
                  <div className="d-flex">
                    <DateCalender
                      name="dischargeEndDate"
                      saveDate={saveDate}
                      labelName="Discharge End Date"
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
                          />
                        </th>
                        <th width="40%">ACTION</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="table_row">
                        <td className={styles.doc_name}>
                          Statement of Facts
                          <strong className="text-danger ml-1">*</strong>
                        </td>
                        <td>
                          <img
                            src="/static/pdf.svg"
                            className={`${styles.pdfImage} img-fluid`}
                            alt="Pdf"
                          />
                        </td>
                        <td className={styles.doc_row}>28-02-2022,5:30 PM</td>
                        <td>
                          {dischargeOfCargo && dischargeOfCargo.document1 === null ? (
                            <>
                              <div className={styles.uploadBtnWrapper}>
                                <input
                                  type="file"
                                  name="document1"
                                  accept="application/msword, application/vnd.ms-excel, application/vnd.ms-powerpoint,text/plain, application/pdf, .docx"
                                  onChange={(e) => onSaveDocument(e)}
                                />
                                <button
                                  className={`${styles.button_upload} btn`}
                                >
                                  Upload
                                </button>
                              </div>

                            </>
                          ) : (
                            <div className={styles.certificate}>
                              {dischargeOfCargo.document1?.originalName}
                              <img
                                className={`${styles.close_image} float-right m-2 img-fluid`}
                                src="/static/close.svg"
                                alt="Close"
                              />{' '}
                            </div>
                          )}
                        </td>
                      </tr>

                      <tr className="table_row">
                        <td className={styles.doc_name}>
                          Draft Survey Report
                          <strong className="text-danger ml-1">*</strong>
                        </td>
                        <td>
                          <img
                            src="/static/pdf.svg"
                            className={`${styles.pdfImage} img-fluid`}
                            alt="Pdf"
                          />
                        </td>
                        <td className={styles.doc_row}>28-02-2022,5:30 PM</td>
                        <td>
                          {dischargeOfCargo && dischargeOfCargo.document2 === null ? (
                            <>
                              <div className={styles.uploadBtnWrapper}>
                                <input
                                  type="file"
                                  name="document2"
                                  accept="application/msword, application/vnd.ms-excel, application/vnd.ms-powerpoint,text/plain, application/pdf, .docx"
                                  onChange={(e) => onSaveDocument(e)}
                                />
                                <button
                                  className={`${styles.button_upload} btn`}
                                >
                                  Upload
                                </button>
                              </div>
                              {/* <div className={styles.uploadBtnWrapper}>
                          <input
                            type="file"
                            accept="application/msword, application/vnd.ms-excel, application/vnd.ms-powerpoint,text/plain, application/pdf, .docx,"
                            onChange={(e) => uploadDocument1(e)}
                            name="myfile"
                          />
                          <button  className={`${styles.uploadDoc} btn`}>
                            Upload
                          </button>
                          </div> */}
                            </>
                          ) : (
                            <div className={styles.certificate}>
                              {dischargeOfCargo.document2?.originalName}
                              <img
                                className={`${styles.close_image} float-right m-2 img-fluid`}
                                src="/static/close.svg"
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
          <div className="">
            <UploadOther
              isDocumentName={true}
              orderid={OrderId}
              module="CustomClearanceAndWarehousing"
            />
          </div>
        </div>
        <SaveBar handleSave={onSaveDischarge} rightBtn="Submit" />
      </div>
      <Modal
        show={show}
        size="lg"
        onHide={handleClose}
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className={`${styles.wrapper}`}
        backdropClassName={styles.backdrop}
      >
        <Modal.Header className={`${styles.head} background1`}>
          <Modal.Title
            id="contained-modal-title-vcenter"
            className={`${styles.title}  d-flex justify-content-between align-items-center`}
          >
            <div className={`${styles.blue} ml-3`}>BL Details </div>
            <div>
              <span className="text">Commodity: </span>Iron{' '}
            </div>
            <img
              src="/static/close.svg"
              alt="close"
              onClick={handleClose}
              className="img-fluid mt-1 mr-2"
            ></img>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className={`${styles.body} background1  container-fluid`}>
          <table
            className={`${styles.table} table `}
            cellPadding="0"
            cellSpacing="0"
            border="0"
          >
            <tr className="table_row">
              <th width="33%">BL NUMBER</th>
              <th width="33%">BL DATE</th>
              <th width="33%">BL QUANTITY</th>
            </tr>
            {_get(customData, 'order.transit.BL.billOfLanding', [{}]).map((bl, indexbl) => (<tr className="table_row">
              <td className="font-weight-bold">{bl?.blNumber}</td>
              <td>{moment((bl?.blDate)?.slice(0, 10), 'YYYY-MM-DD', true).format("DD-MM-YYYY")}</td>
              <td>{bl?.blQuantity} {customData?.order?.unitOfQuantity}</td>
            </tr>))}
          </table>
          <div>
            <span className="text">Total Quantity: </span> &nbsp; 8,000 MT{' '}
          </div>
        </Modal.Body>
      </Modal>
    </>
  )
}
