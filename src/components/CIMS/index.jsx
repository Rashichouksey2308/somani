import React from 'react'
import styles from './index.module.scss'
import { Form, Row, Col } from 'react-bootstrap'
import SaveBar from '../SaveBar'
import { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import _get from 'lodash/get'
import { useDispatch, useSelector } from 'react-redux'
import {
  UpdateTransitDetails,
  GetTransitDetails,
} from '../../redux/TransitDetails/action'
import UploadOther from '../UploadOther'

export default function Index({
  isShipmentTypeBULK,
  TransitDetails,
  vesselData,
  orderid,
}) {
  let transId = _get(TransitDetails, `data[0]`, '')
  let shipmentTypeBulk =
    _get(TransitDetails, `data[0].order.vessel.vessels[0].shipmentType`, '') ===
    'Bulk'
  const [editInput, setEditInput] = useState(true)
  const [startBlDate, setBlDate] = useState(null)
  const [lastDate, setlastDate] = useState(new Date())
  const [cimsDetails, setCimsDetails] = useState([
    {
      vesselName: '',
      quantity: '',
      circNumber: '',
      circDate: '',
      cimsCharges: '',
      paymentBy: '',
      document1: null,
      document2: null,
    },
  ])
  const dispatch = useDispatch()
  const onChangeVessel = (e, index) => {
    let VesselName = e.target.value
    let filteredVessel = {}

    // let vesselData = _get(TransitDetails, `data[0].order.vessel.vessels[0]`, {})
    if (
      _get(
        TransitDetails,
        `data[0].order.vessel.vessels[0].shipmentType`,
        '',
      ) === 'Bulk'
    ) {
      _get(TransitDetails, `data[0].order.vessel.vessels`, []).forEach(
        (vessel, index) => {
          if (vessel.vesselInformation[0].name === VesselName) {
            filteredVessel = vessel
          }
        },
      )
    } else {
      filteredVessel = _get(
        TransitDetails,
        `data[0].order.vessel.vessels[0]`,
        {},
      )
      let tempArray = _get(
        TransitDetails,
        `data[0].order.vessel.vessels[0].vesselInformation`,
        [],
      )
      tempArray.forEach((vessel, index) => {
        if (vessel.name === VesselName) {
          filteredVessel.vesselInformation = [vessel]
        }
      })
    }
    console.log(filteredVessel, 'filteredVessel')
    const newArray = [...bolList]
    newArray[index].vesselName = filteredVessel.vesselInformation[0].name
    newArray[index].quantity = filteredVessel.vesselInformation[0].IMONumber

    setBolList(newArray)
  }

  const onChangeCims = (e, index) => {
    const name = e.target.id
    const value = e.target.value
    setCimsDetails((prevState) => {
      const newState = prevState.map((obj, i) => {
        if (i == index) {
          return {
            ...obj,
            [name]: value,
          }
        }
        return obj
      })
      return newState
    })
  }

  const saveDate = (startDate, name, index) => {
    console.log(startDate, name, 'Event1')
    setCimsDetails((prevState) => {
      const newState = prevState.map((obj, i) => {
        if (i == index) {
          return {
            ...obj,
            [name]: startDate,
          }
        }
        return obj
      })
      return newState
    })
  }

  const handleDropdown = (e) => {
    if (e.target.value == 'Others') {
      setEditInput(false)
    } else {
      setEditInput(true)
    }
  }
  const onAddHandler = () => {
    setCimsDetails([
      ...cimsDetails,
      {
        vesselName: '',
        quantity: '',
        circNumber: '',
        circDate: '',
        cimsCharges: '',
        paymentBy: '',
        document1: null,
        document2: null,
      },
    ])
  }

  const handleSave = () => {
    // const billOfLanding = [...bolList]
    const cims = { cimsDetails: cimsDetails }

    let fd = new FormData()
    fd.append('cims', JSON.stringify(cims))
    fd.append('transitId', transId._id)
    dispatch(UpdateTransitDetails(fd))
  }
  return (
    <>
      <div className={`${styles.backgroundMain} vessel_card container-fluid`}>
        {cimsDetails.map((list, index) => (
          <div
            key={index}
            className={`${styles.vessel_card} mt-3 border_color`}
          >
            <div className={`${styles.main} border_color mt-4 card `}>
              <div
                className={`${styles.head_container} card-header border_color head_container justify-content-between d-flex bg-transparent`}
              >
                <h3 className={`${styles.heading}`}>CIMS Details</h3>
                <button
                  onClick={() => onAddHandler()}
                  className={styles.add_btn}
                >
                  <span className={styles.add_sign}>+</span>Add
                </button>
              </div>
              <div className={`${styles.dashboard_form} mt-2 card-body`}>
                <div className="row">
                  <div
                    className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6`}
                  >
                    <div className="d-flex">
                      <select
                        onChange={(e) => onChangeVessel(e, index)}
                        className={`${styles.input_field} ${styles.customSelect}  input form-control`}
                      >
                        <option>Select an option</option>
                        {shipmentTypeBulk
                          ? _get(
                              TransitDetails,
                              'data[0].order.vessel.vessels',
                              [],
                            ).map((vessel, index) => (
                              <option
                                value={vessel?.vesselInformation?.name}
                                key={index}
                              >
                                {vessel?.vesselInformation?.name}
                              </option>
                            ))
                          : _get(
                              TransitDetails,
                              'data[0].order.vessel.vessels[0].vesselInformation',
                              [],
                            ).map((vessel, index) => (
                              <option value={vessel?.name} key={index}>
                                {vessel?.name}
                              </option>
                            ))}
                      </select>
                      <label
                        className={`${styles.label_heading} label_heading`}
                      >
                        Vessel Name<strong className="text-danger">*</strong>
                      </label>
                      <img
                        className={`${styles.arrow} image_arrow img-fluid`}
                        src="/static/inputDropDown.svg"
                        alt="Search"
                      />
                    </div>
                  </div>
                  <div
                    className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6`}
                  >
                    <input
                      id="quantity"
                      defaultValue={_get(
                        TransitDetails,
                        'data[0].order.quantity',
                        '',
                      )}
                      onChange={(e, index) => onChangeCims(e, index)}
                      className={`${styles.input_field} input form-control`}
                      type="number"
                      onKeyDown={(evt) =>
                        evt.key === 'e' && evt.preventDefault()
                      }
                    />
                    <label className={`${styles.label_heading} label_heading`}>
                      Quantity<strong className="text-danger">*</strong>
                    </label>
                  </div>
                  <div
                    className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6`}
                  >
                    <input
                      id="circNumber"
                      onChange={(e, index) => onChangeCims(e, index)}
                      defaultValue={list.circNumber}
                      className={`${styles.input_field} input form-control`}
                      required
                      type="text"
                    />
                    <label className={`${styles.label_heading} label_heading`}>
                      CIRC Number<strong className="text-danger">*</strong>
                    </label>
                  </div>
                  <div
                    className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6`}
                  >
                    <div className="d-flex">
                      {/* <DateCalender labelName="From" dateFormat={"dd-MM-yyyy"} saveDate={saveData} /> */}
                      <DatePicker
                        defaultDate=""
                        selected={startBlDate}
                        dateFormat="dd-MM-yyyy"
                        className={`${styles.input_field} ${styles.cursor} input form-control`}
                        onChange={(startBlDate) => {
                          setBlDate(startBlDate)
                          saveDate(startBlDate, 'blDate', index)
                        }}
                        minDate={lastDate}
                      />

                      <img
                        className={`${styles.calanderIcon} image_arrow img-fluid`}
                        src="/static/caldericon.svg"
                        alt="Search"
                      />
                      <label
                        className={`${styles.label_heading} label_heading`}
                      >
                        Circ Date
                      </label>
                    </div>
                  </div>
                  <div
                    className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6`}
                  >
                    <input
                      id="cimsCharges"
                      onChange={(e, index) => onChangeCims(e, index)}
                      defaultValue={list.cimsCharges}
                      className={`${styles.input_field} input form-control`}
                      type="number"
                      onKeyDown={(evt) =>
                        evt.key === 'e' && evt.preventDefault()
                      }
                    />
                    <label className={`${styles.label_heading} label_heading`}>
                      CIMS Charges<strong className="text-danger">*</strong>
                    </label>
                  </div>
                  <div
                    className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6`}
                  >
                    <div className="d-flex">
                      <select
                        className={`${styles.input_field} ${styles.customSelect} input form-control`}
                      >
                        <option>Select an option</option>
                        <option value={list.paymentBy}>{list.paymentBy}</option>
                        <option>N/A</option>
                      </select>
                      <label
                        className={`${styles.label_heading} label_heading`}
                      >
                        Payment by<strong className="text-danger">*</strong>
                      </label>
                      <img
                        className={`${styles.arrow}  image_arrow img-fluid`}
                        src="/static/inputDropDown.svg"
                        alt="Search"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.table_scroll_outer}>
                <div className={styles.table_scroll_inner}>
                  <table
                    className={`${styles.table} table mt-5`}
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
                        <th>ACTION</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="table_row">
                        <td className={styles.doc_name}>
                          Coal Import Registration Certificate
                          <strong className="text-danger ml-0">*</strong>
                        </td>
                        <td>
                          <img
                            src="/static/pdf.svg"
                            className="img-fluid"
                            alt="Pdf"
                          />
                        </td>
                        <td className={styles.doc_row}>28-02-2022,5:30 PM</td>
                        <td>
                          <div className={styles.uploadBtnWrapper}>
                            <input
                              onChange={(e) => uploadDoc1(e, index)}
                              type="file"
                              name="myfile"
                            />
                            <button className={`${styles.upload_btn} btn`}>
                              Upload
                            </button>
                          </div>
                        </td>
                      </tr>
                      <tr className="table_row">
                        <td className={styles.doc_name}>
                          CIMS Payment Receipt
                        </td>
                        <td>
                          <img
                            src="/static/pdf.svg"
                            className="img-fluid"
                            alt="Pdf"
                          />
                        </td>
                        <td className={styles.doc_row}>28-02-2022,5:30 PM</td>
                        <td>
                          <div className={styles.uploadBtnWrapper}>
                            <input
                              onChange={(e) => docUploadFunction(e)}
                              type="file"
                              name="myfile"
                            />
                            <button className={`${styles.upload_btn} btn`}>
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
            <div className="mt-4">
              <UploadOther
                orderid={orderid}
                module="Loading-Transit-Unloading"
              />
            </div>
          </div>
        ))}
        <SaveBar handleSave={handleSave} rightBtn="Submit" />
      </div>
    </>
  )
}
