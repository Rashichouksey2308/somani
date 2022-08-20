import React from 'react'
import styles from './index.module.scss'
import { Form, Row, Col } from 'react-bootstrap'
import SaveBar from '../SaveBar'
import { useState } from 'react'
import DateCalender from '../DateCalender'
import _get from 'lodash/get'
import { initial } from 'lodash'
import { useDispatch, useSelector } from 'react-redux'
import {
  UpdateTransitDetails,
  GetTransitDetails,
} from '../../redux/TransitDetails/action'
import { useEffect } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import UploadOther from '../UploadOther'
import { CovertvaluefromtoCR ,addPrefixOrSuffix,removePrefixOrSuffix} from '../../utils/helper'
import moment from 'moment'

export default function Index({
  isShipmentTypeBULK,
  TransitDetails,
  orderid,
  docUploadFunction,
}) {
  let transId = _get(TransitDetails, `data[0]`, '')
  const initialStateForLiner = {
    vesselName: '',
    imoNumber: '',
    blDate: '',
    blQuantity: '',
    blQuantityUnit: '',
    etaAtDischargePortFrom: null,
    etaAtDischargePortTo: null,
    blSurrenderDate: null,
    documentName: null,
    blSurrenderDoc: null,
    document1: null,
    document2: null,
    containerDetails: {
      numberOfContainers: '',
      freeDetentionPeriod: '',
      blSurrenderDate: '',
    },
  }
  const initialStateForBulk = {
    vesselName: '',
    imoNumber: '',
    blDate: '',
    blQuantity: '',
    blQuantityUnit: '',
    etaAtDischargePortFrom: '',
    etaAtDischargePortTo: '',
    blSurrenderDate: '',
    documentName: null,
    blSurrenderDoc: null,
    document1: null,
    document2: null,
  }
  const dispatch = useDispatch()
  let shipmentTypeBulk =
    _get(TransitDetails, `data[0].order.vessel.vessels[0].shipmentType`, '') ===
    'Bulk'
  const existingBlData = _get(TransitDetails, `data[0].BL.billOfLanding`, [])
  const initalState =
    shipmentTypeBulk
      ? initialStateForBulk
      : initialStateForLiner
  // console.log(existingBlData,'existingBlData')

  useEffect(() => {
    if (existingBlData.length > 0) {
      setBolList(existingBlData)
    }
  }, [existingBlData])
  

  const [editInput, setEditInput] = useState(true)
  const [shipmentType, setShipmentType] = useState(true)
  const [bolList, setBolList] = useState([initalState])
  const [startBlDate, setBlDate] = useState(null)
  const [startetaAtDischargePortTo, setetaAtDischargePortTo] = useState(null)
  const [startblSurrenderDate, setblSurrenderDate] = useState(null)
  const [startetaAtDischargePortFrom, setetaAtDischargePortFrom] =
    useState(null)

  const [lastDate, setlastDate] = useState(new Date())
  // console.log(bolList, existingBlData, 'existingBlData')
  console.log(bolList, existingBlData, 'existingBlData')

  // useEffect(() => {
  //   setBolList(_get(TransitDetails, `data[0].BL.billOfLanding`, []))
  // }, [TransitDetails])

  const partShipmentAllowed = _get(
    TransitDetails,
    'data[0].order.vessel.partShipmentAllowed',
    false,
  )


  const onBolAdd = () => {
    if (shipmentTypeBulk) {
      setBolList([...bolList, initialStateForBulk])
    } else {
      setBolList([...bolList, initialStateForLiner])
    }
  }

  const uploadDoc1 = async (e) => {
    let name = e.target.id
    let docs = await docUploadFunction(e)

    let newInput = { ...billOfEntryData }
    newInput[name] = docs
    setBillOfEntryData(newInput)
  }

  const handleDropdown = (e) => {
    if (e.target.value == 'Others') {
      setEditInput(false)
    } else {
      setEditInput(true)
    }
  }

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
    newArray[index].imoNumber = filteredVessel.vesselInformation[0].IMONumber
    newArray[index].etaAtDischargePortFrom =
      filteredVessel.transitDetails.EDTatLoadPort
    newArray[index].etaAtDischargePortTo =
      filteredVessel.transitDetails.ETAatDischargePort

    setBolList(newArray)
  }

  const onChangeBol = (e, index) => {
    const name = e.target.id
    const value = e.target.value
    setBolList((prevState) => {
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
    setBolList((prevState) => {
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

  const saveData = () => {
    // const billOfLanding = [...bolList]
    let bol = { billOfLanding: bolList }
    console.log(bol,"bol",bolList.billOfLanding)
    bol.billOfLanding[0].blQuantity=removePrefixOrSuffix(bolList[0].blQuantity)
    let fd = new FormData()
    fd.append('bl', JSON.stringify(bol))
    fd.append('transitId', transId._id)
    dispatch(UpdateTransitDetails(fd))
    console.log(fd, bol, 'filteredVessel')
  }
  console.log(TransitDetails, 'TransitDetails')
  return (
    <>
      <div className={`${styles.backgroundMain} container-fluid`}>
        <div className={`${styles.vessel_card} mt-3 border_color`}>
          <div className={`${styles.wrapper} border_color p-2 card`}>
            <div className="d-lg-flex align-items-center d-inline-block  pl-4">
              <h2 className="mb-0">Shipment Type</h2>
              <div className={`${styles.radio_form} ml-lg-5 ml-n4`}>
                {['radio'].map((type) => (
                  <div key={`inline-${type}`} className={styles.radio_group}>
                    <Form.Check
                      className={styles.radio}
                      inline
                      label="Bulk"
                      name="group1"
                      // disabled={!isShipmentTypeBULK}
                      type={type}
                      checked={_get(TransitDetails,"data[0].order.shipmentDetail.shipmentType","")=="Bulk"?true:false}
                      id={`inline-${type}-1`}
                    />
                    <Form.Check
                      className={styles.radio}
                      inline
                      label="Liner"
                      name="group1"
                      // disabled={isShipmentTypeBULK}
                      checked={_get(TransitDetails,"data[0].order.shipmentDetail.shipmentType","")=="Liner"?true:false}
                      type={type}
                      id={`inline-${type}-2`}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className={`${styles.main} border_color mt-4 card `}>
            <div
              className={`${styles.head_container} border_color card-header head_container justify-content-between d-flex bg-transparent`}
            >
              <h3 className={`${styles.heading}`}>Commodity Details</h3>
              <div className="d-flex align-items-center">
                <div className={`${styles.dropDown_label} text`}>
                  Part Shipment Allowed:
                </div>
                <div className={`${styles.dropDown} input`}>
                  {partShipmentAllowed ? 'Yes' : 'No'}
                </div>
              </div>
            </div>
            <div className={`${styles.dashboard_form} mt-2 mb-4 card-body`}>
              <div className="row">
                <div className="col-lg-3 col-md-6 col-sm-6">
                  <div className={`${styles.label} text`}>
                    Commodity <strong className="text-danger ml-n1">*</strong>
                  </div>
                  <span className={styles.value}>
                    {_get(TransitDetails, 'data[0].order.commodity', '')}
                  </span>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6">
                  <div className={`${styles.label} text`}>
                    Quantity <strong className="text-danger ml-n1">*</strong>
                  </div>
                  <span className={styles.value}>
                    {_get(TransitDetails, 'data[0].order.quantity', '')}{' '}
                    {_get(TransitDetails, 'data[0].order.unitOfQuantity', '').toUpperCase()}{' '}
                  </span>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6">
                  <div className={`${styles.label} text`}>
                    Order Value <strong className="text-danger ml-n1">*</strong>{' '}
                  </div>
                  <span className={styles.value}>
                    {CovertvaluefromtoCR(_get(TransitDetails, 'data[0].order.orderValue', ''))}{' '}
                    {_get(TransitDetails, 'data[0].order.unitOfValue', '')=="Crores"?"Cr":_get(TransitDetails, 'data[0].order.unitOfValue', '')}
                  </span>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6">
                  <div className={`${styles.label} text`}>
                    Shipping Line/Charter
                    <strong className="text-danger">*</strong>{' '}
                  </div>
                  {shipmentTypeBulk ? (
                    <span className={styles.value}>
                      {_get(
                        TransitDetails,
                        'data[0].order.vessel.vessels[0].shippingInformation.shippingLineOrCharter',
                        '',
                      )}
                    </span>
                  ) : (
                    <span className={styles.value}>
                      {_get(
                        TransitDetails,
                        'data[0].order.vessel.vessels[0].vesselInformation[0].shippingLineOrCharter',
                        '',
                      )}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
          {bolList.map((bol, index) => {
            console.log(bol,'existingBlDataindi')
            return (
              <div
                key={index}
                className={`${styles.main} vessel_card mt-4 card border_color`}
              >
                <div
                  className={`${styles.head_container} card-header border_color head_container justify-content-between d-flex bg-transparent`}
                >
                  <h3 className={`${styles.heading}`}>
                    Bill of Lading {index + 1}
                  </h3>
                  {!partShipmentAllowed && (
                    <button
                      onClick={() => console.log('addClicked')}
                      className={styles.add_btn}
                    >
                      <span className={styles.add_sign}>+</span>Add
                    </button>
                  )}
                </div>
                <div className={`${styles.dashboard_form} mt-3 card-body`}>
                  <div className={`${styles.bill_landing} border_color`}>
                    <div className={`${styles.vessel_card}`}>
                      <div className="row">
                        <div
                          className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6`}
                        >
                          <div className="d-flex">
                            <select
                              onChange={(e) => onChangeVessel(e, index)}
                              className={`${styles.input_field} ${styles.customSelect}   input form-control`}
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
                              <option value="option">option</option>
                            </select>
                            <label
                              className={`${styles.label_heading} label_heading`}
                            >
                              Vessel Name
                              <strong className="text-danger">*</strong>
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
                          <p className={` label_heading`}>
                            IMO Number<strong className="text-danger">*</strong>
                          </p>
                          <span>{bol?.imoNumber}</span>
                        </div>
                        <div
                          className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6`}
                        >
                          <input
                          value={bol?.blNumber}
                            onChange={(e) => onChangeBol(e, index)}
                            id="blNumber"
                            className={`${styles.input_field} input form-control`}
                            required
                            type="number"
                            onKeyDown={(evt) =>
                              evt.key === 'e' && evt.preventDefault()
                            }
                          />
                          <label
                            className={`${styles.label_heading} label_heading`}
                          >
                            BL Number<strong className="text-danger">*</strong>
                          </label>
                        </div>
                        <div
                          className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6`}
                        >
                          <div className="d-flex">
                            {/* <DateCalender labelName="From" dateFormat={"dd-MM-yyyy"} saveDate={saveData} /> */}
                            <DatePicker
                              defaultDate={bol?.blDate}
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
                              Bl Date
                            </label>
                          </div>
                        </div>
                        <div
                          className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6`}
                        >
                          <input
                         
                            onChange={(e) => onChangeBol(e, index)}
                            id="blQuantity"
                            className={`${styles.input_field} input form-control`}
                            required
                            type="text"
                            value={addPrefixOrSuffix(bol?.blQuantity,"MT")}
                          />
                          <label
                            className={`${styles.label_heading} label_heading`}
                          >
                            BL Quantity
                            <strong className="text-danger">*</strong>
                          </label>
                        </div>
                        <div className={`${styles.eta_heading} mt-4 col-12`}>
                          ETA at Discharge Port
                          <strong className="text-danger">*</strong>
                        </div>
                        <div
                          className={`${styles.form_group} col-lg-2 col-md-4 col-sm-6`}
                        >
                          <div className="d-flex">
                            <DateCalender labelName="From" dateFormat={"dd-MM-yyyy"} saveDate={saveData} />
                            {/* <DatePicker
                              defaultDate={moment((bol?.etaAtDischargePortFrom)?.slice(0, 10), 'YYYY-MM-DD', true).format("DD-MM-YYYY")}
                              name="ETAatDischargePort"
                              selected={startetaAtDischargePortFrom}
                              dateFormat="dd-MM-yyyy"
                              className={`${styles.input_field} ${styles.cursor} input form-control`}
                              onChange={(startetaAtDischargePortFrom) => {
                                setetaAtDischargePortFrom(
                                  startetaAtDischargePortFrom,
                                )
                                saveDate(
                                  startetaAtDischargePortFrom,
                                  'etaAtDischargePortFrom',
                                  index,
                                )
                              }}
                              minDate={lastDate}
                            /> */}

                            <img
                              className={`${styles.calanderIcon} image_arrow img-fluid`}
                              src="/static/caldericon.svg"
                              alt="Search"
                            />
                            <label
                              className={`${styles.label_heading} label_heading`}
                            >
                              From
                            </label>
                          </div>
                        </div>
                        <div
                          className={`${styles.form_group} col-lg-2 col-md-4 col-sm-6`}
                        >
                          <div className="d-flex">
                            <DatePicker
                              defaultDate=""
                              selected={startetaAtDischargePortTo}
                              dateFormat="dd-MM-yyyy"
                              className={`${styles.input_field} ${styles.cursor} input form-control`}
                              onChange={(startetaAtDischargePortTo) => {
                                setetaAtDischargePortTo(
                                  startetaAtDischargePortTo,
                                )
                                saveDate(
                                  startetaAtDischargePortTo,
                                  'etaAtDischargePortTo',
                                  index,
                                )
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
                              To
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>

                    {!isShipmentTypeBULK ? (
                      <>
                        <hr></hr>
                        <div className={`${styles.vessel_card} mt-5`}>
                          <h5 className={`${styles.eta_heading} `}>
                            Container Details
                            <strong className="text-danger">*</strong>
                          </h5>
                          <div className="row mt-n4">
                            <div
                              className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6`}
                            >
                              <input
                                className={`${styles.input_field} input form-control`}
                                required
                                type="number"
                                onKeyDown={(evt) =>
                                  evt.key === 'e' && evt.preventDefault()
                                }
                              />
                              <label
                                className={`${styles.label_heading} label_heading`}
                              >
                                Number of Containers
                                <strong className="text-danger">*</strong>
                              </label>
                            </div>
                            <div
                              className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6`}
                            >
                              <input
                                className={`${styles.input_field} input form-control`}
                                required
                                type="number"
                                onKeyDown={(evt) =>
                                  evt.key === 'e' && evt.preventDefault()
                                }
                              />
                              <label
                                className={`${styles.label_heading} label_heading`}
                              >
                                Free Detention Period at Discharge Port (Days)
                                <strong className="text-danger">*</strong>
                              </label>
                            </div>
                            <div
                              className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6`}
                            >
                              <div className="d-flex justify-content-start">
                                <div className={styles.uploadBtnWrapper}>
                                  <input type="file" name="myfile" />
                                  <button
                                    className={`${styles.upload_btn} btn`}
                                  >
                                    Upload Excel
                                  </button>
                                </div>
                                <div className={`${styles.upload_text}`}>
                                  ONLY .XLS FILES ARE ALLOWED
                                  <br /> &amp; MAX FILE SIZE UP TO 50MB
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </>
                    ) : (
                      ''
                    )}
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
                                  className={`${styles.sort_img} mb-1`}
                                  src="/static/icons8-sort-24.svg"
                                  alt="Sort icon"
                                />
                              </th>
                              <th>
                                FORMAT{' '}
                                <img
                                  className={`${styles.sort_img} mb-1`}
                                  src="/static/icons8-sort-24.svg"
                                  alt="Sort icon"
                                />
                              </th>
                              <th>
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
                                BL
                                <strong className="text-danger ml-0">*</strong>
                              </td>
                              <td>
                                <img
                                  src="/static/pdf.svg"
                                  className="img-fluid"
                                  alt="Pdf"
                                />
                              </td>
                              <td className={styles.doc_row}>
                                28-02-2022,5:30 PM
                              </td>
                              <td>
                                <div className={styles.uploadBtnWrapper}>
                                  <input type="file" name="myfile" />
                                  <button
                                    className={`${styles.upload_btn} btn`}
                                  >
                                    Upload
                                  </button>
                                </div>
                              </td>
                            </tr>
                            {!isShipmentTypeBULK ? (
                              <>
                                <tr className="table_row">
                                  <td className={styles.doc_name}>
                                    Container No. List
                                    <strong className="text-danger ml-0">
                                      *
                                    </strong>
                                  </td>
                                  <td>
                                    <img
                                      src="/static/pdf.svg"
                                      className="img-fluid"
                                      alt="Pdf"
                                    />
                                  </td>
                                  <td className={styles.doc_row}>
                                    28-02-2022,5:30 PM
                                  </td>
                                  <td>
                                    <div className={styles.uploadBtnWrapper}>
                                      <input type="file" name="myfile" />
                                      <button
                                        className={`${styles.upload_btn} btn`}
                                      >
                                        Upload
                                      </button>
                                    </div>
                                  </td>
                                </tr>
                                <tr className="table_row">
                                  <td className={styles.doc_name}>
                                    Packing List
                                    <strong className="text-danger ml-0">
                                      *
                                    </strong>
                                  </td>
                                  <td>
                                    <img
                                      src="/static/pdf.svg"
                                      className="img-fluid"
                                      alt="Pdf"
                                    />
                                  </td>
                                  <td className={styles.doc_row}>
                                    28-02-2022,5:30 PM
                                  </td>
                                  <td>
                                    <div className={styles.uploadBtnWrapper}>
                                      <input type="file" name="myfile" />
                                      <button
                                        className={`${styles.upload_btn} btn`}
                                      >
                                        Upload
                                      </button>
                                    </div>
                                  </td>
                                </tr>
                              </>
                            ) : (
                              ''
                            )}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>

                  <div className={`${styles.bill_landing}  border_color mt-4`}>
                    <div className={`${styles.vessel_card} mt-3`}>
                      <div className="row">
                        <div
                          className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6`}
                        >
                          <div className="d-flex">
                            <DatePicker
                              defaultDate=""
                              selected={startblSurrenderDate}
                              dateFormat="dd-MM-yyyy"
                              className={`${styles.input_field} ${styles.cursor} input form-control`}
                              onChange={(startblSurrenderDate) => {
                                setblSurrenderDate(startblSurrenderDate)
                                saveDate(
                                  startblSurrenderDate,
                                  'blSurrenderDate',
                                  index,
                                )
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
                              BL Surrendor Date
                            </label>
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
                                  className={`${styles.sort_img} mb-1`}
                                  src="/static/icons8-sort-24.svg"
                                  alt="Sort icon"
                                />
                              </th>
                              <th>
                                FORMAT{' '}
                                <img
                                  className={`${styles.sort_img} mb-1`}
                                  src="/static/icons8-sort-24.svg"
                                  alt="Sort icon"
                                />
                              </th>
                              <th>
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
                                BL Acknowledgment Copy
                                <strong className="text-danger ml-0">*</strong>
                              </td>
                              <td>
                                <img
                                  src="/static/pdf.svg"
                                  className="img-fluid"
                                  alt="Pdf"
                                />
                              </td>
                              <td className={styles.doc_row}>
                                28-02-2022,5:30 PM
                              </td>
                              <td>
                                <div className={styles.uploadBtnWrapper}>
                                  <input type="file" name="myfile" />
                                  <button
                                    className={`${styles.upload_btn} btn`}
                                  >
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
            )
          })}

          <div className="mt-4">
            <UploadOther orderid={orderid} module="Loading-Transit-Unloading" />
          </div>
        </div>
        <SaveBar handleSave={saveData} rightBtn="Submit" />
      </div>
    </>
  )
}
