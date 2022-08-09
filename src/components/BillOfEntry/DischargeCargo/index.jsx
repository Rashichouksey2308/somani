import React, { useState } from 'react'
import styles from './index.module.scss'
import { Form, Row, Col, Modal } from 'react-bootstrap'
import SaveBar from '../../SaveBar'
import UploadOther from '../../UploadOther'
import DateCalender from '../../DateCalender'
import _get from 'lodash/get'
import { UpdateCustomClearance } from '../../../redux/CustomClearance&Warehousing/action'
import { useDispatch } from 'react-redux'

export default function Index({ OrderId, customData }) {
  console.log(customData, 'customData')
  const dispatch = useDispatch()
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const [dischargeOfCargo, setDischargeOfCargo] = useState({
    dischargeOfCargo: {
      vesselName: _get(customData, 'dischargeOfCargo.dischargeOfCargo.vesselName', ''),
      portOfDischarge: _get(customData, 'order.portOfDischarge', ''),
      dischargeQuantity: _get(customData, 'dischargeOfCargo.dischargeOfCargo.dischargeQuantity', ''),
      dischargeQuantityUnit: '',
      vesselArrivaldate: null,
      dischargeStartDate: null,
      dischargeEndDate: null
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

  const onSaveDocument = (e) => {
    let name = e.target.id
    let doc = e.target.files[0]
    let tempData = { ...dischargeOfCargo }
    tempData[name] = doc
    setDischargeOfCargo(tempData)
  }

  const onSaveDischarge = () => {
    let fd = new FormData()
    fd.append('dischargeOfCargo', JSON.stringify(dischargeOfCargo))
    fd.append('customClearanceId', customData._id)
    fd.append('document1', dischargeOfCargo.document1)
    fd.append('document2', dischargeOfCargo.document2)
    dispatch(UpdateCustomClearance(fd))
  }
  console.log(dischargeOfCargo, 'dischargeOfCargo')

  return (
    <>
      <div className={`${styles.backgroundMain} container-fluid`}>
        <div className={`${styles.vessel_card} border_color`}>
          <div className={`${styles.main} mt-4 card border_color`}>
            <div
              className={`${styles.head_container} card-header border_color head_container align-items-center justify-content-between d-flex bg-transparent`}
            >
              <h3 className={`${styles.heading}`}>Discharge of Cargo</h3>

              <div className="d-flex">
                <button className={styles.add_btn} onClick={handleShow}>
                  Show BL Details
                </button>
                <span className="ml-3">+</span>
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
                      <option value="">please Select A vessel</option>
                      <option value=""></option>
                    </select>
                    <label className={`${styles.label_heading} label_heading`}>
                      Vessel Name<strong className="text-danger">*</strong>
                    </label>
                    <img
                      className={`${styles.arrow} img-fluid`}
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
                    onChange={(e) => onChangeDischargeOfCargo(e.target.id, e.target.value)}
                    id='dischargeQuantity'
                    className={`${styles.input_field} input form-control`}
                    type="number"
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
                    <DateCalender name='vesselArrivaldate' saveDate={saveDate} labelName="Vessel Arrival Date" />
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
                    <DateCalender name='dischargeStartDate' saveDate={saveDate} labelName="Discharge Start Date" />
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
                    <DateCalender name='dischargeEndDate' saveDate={saveDate} labelName="Discharge End Date" />
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
                          {' '}
                          <div className={styles.uploadBtnWrapper}>
                            <button className={`${styles.uploadDoc} btn`}>
                              Upload
                            </button>
                            <input
                              id="document1"
                              type="file"
                              onChange={(e) => onSaveDocument(e)}
                              name="myfile"
                            />
                          </div>
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
                          {' '}
                          <div className={styles.uploadBtnWrapper}>
                            <button className={`${styles.uploadDoc} btn`}>
                              Upload
                            </button>
                            <input
                              id="document2"
                              type="file"
                              onChange={(e) => onSaveDocument(e)}
                              name="myfile"
                            />
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-4 mb-5">
            <UploadOther
              orderid={OrderId}
              module="customClearanceAndWarehousing"
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
        className={styles.wrapper}
        backdropClassName={styles.backdrop}
      >
        <Modal.Header className={styles.head}>
          <Modal.Title
            id="contained-modal-title-vcenter"
            className={`${styles.title}  d-flex justify-content-between align-items-center`}
          >
            <div className={`${styles.blue}`}>BL Details </div>
            <div>
              <span>Commodity: </span>Iron{' '}
            </div>
            <img
              src="/static/close-2.svg"
              alt="close"
              onClick={handleClose}
              className="img-fluid"
            ></img>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className={`${styles.body} container-fluid`}>
          <table
            className={`${styles.table} table `}
            cellPadding="0"
            cellSpacing="0"
            border="0"
          >
            <tr className={`border_color`}>
              <th>BL NUMBER</th>
              <th>BL DATE</th>
              <th>BL QUANTITY</th>
            </tr>
            <tr className={`border_color`}>
              <td>2345678</td>
              <td>22-02-2022</td>
              <td>5,000 MT</td>
            </tr>
            <tr className={`border_color`}>
              <td>2345678</td>
              <td>22-02-2022</td>
              <td>5,000 MT</td>
            </tr>
            <tr className={`border_color`}>
              <td>2345678</td>
              <td>22-02-2022</td>
              <td>5,000 MT</td>
            </tr>
            <tr className={`border_color`}>
              <td>2345678</td>
              <td>22-02-2022</td>
              <td>5,000 MT</td>
            </tr>
            <tr className={`border_color`}>
              <td>2345678</td>
              <td>22-02-2022</td>
              <td>5,000 MT</td>
            </tr>
          </table>
          <div>
            <span>Total Quantity: </span>8,000 MT{' '}
          </div>
        </Modal.Body>
      </Modal>
    </>
  )
}
