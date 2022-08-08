/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react'
import styles from './index.module.scss'
import { Form, Row, Col } from 'react-bootstrap'
import SaveBar from '../SaveBar'
import InspectionDocument from '../InspectionDocument'
import DateCalender from '../DateCalender'
import _get from 'lodash/get'
import { useDispatch, useSelector } from 'react-redux'
import {
  UpdateTransitDetails,
  GetTransitDetails,
} from '../../redux/TransitDetails/action'
import { number } from 'prop-types'
import { useEffect } from 'react'
import 'react-datepicker/dist/react-datepicker.css'
import DatePicker from 'react-datepicker'

export default function Index({ isShipmentTypeBULK, TransitDetails, orderId }) {
  const Dispatch = useDispatch()
  let shipmentTypeBulk =
    _get(TransitDetails, `data[0].order.vessel.vessels[0].shipmentType`, '') ===
    'Bulk'
  const [editInput, setEditInput] = useState(true)
  const [shipmentType, setShipmentType] = useState(true)
  const [startBlDate, setBlDate] = useState(null)
  const [lastDate, setlastDate] = useState(new Date())
  const [consigneeInfo, setConsigneeInfo] = useState({
    branch: '',
    address: '',
  })
  const [igmList, setIgmList] = useState({
    shipmentType: {
      type: _get(
        TransitDetails,
        `data[0].order.vessel.vessels[0].shipmentType`,
        '',
      ),
      enum: '',
    },
    shipmentDetails: {
      countryOfOrigin: '',
      portOfLoading: '',
      portOfDischarge: '',
      consigneeName: '',
      consigneeBranch: '',
      consigneeAddress: '',
    },
    igmDetails: [
      {
        vesselName: '',
        igmNumber: '',
        igmFiling: null,
        blNumber: number,
        document: null,
      },
    ],
    document: null,
  })
  const [orderData, setOrderData] = useState()
  useEffect(() => {
    let NewArr = []
    TransitDetails?.data?.forEach((element) => {
      NewArr.push(element)
    })
    setOrderData(NewArr)
  }, [TransitDetails])

  const partShipmentAllowed = _get(
    TransitDetails,
    'data[0].order.vessel.partShipmentAllowed',
    false,
  )

  // const onigmAdd = () => {
  //   if (shipmentTypeBulk) {
  //     setIgmList([...igmList, initialStateForBulk])
  //   } else {
  //     setIgmList([...igmList, initialStateForLiner])
  //   }
  // }

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
    const newArray = [...igmList]
    newArray[index].vesselName = filteredVessel.vesselInformation[0].name
    newArray[index].imoNumber = filteredVessel.vesselInformation[0].IMONumber
    newArray[index].etaAtDischargePortFrom =
      filteredVessel.transitDetails.EDTatLoadPort
    newArray[index].etaAtDischargePortTo =
      filteredVessel.transitDetails.ETAatDischargePort

    setIgmList(newArray)
  }
  const saveDate = (startDate, name, index) => {
    console.log(startDate, name, 'Event1')
    setIgmList((prevState) => {
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

  const onChangeConsignee = (e) => {
    if (e.target.value === 'indoGerman') {
      setConsigneeInfo({
        branch: 'DELHI',
        address: '7A , SAGAR APARTMENTS, 6 TILAK MARG, NEW DELHI-110001',
      })
    } else if (e.target.value === 'EMERGENT') {
      setConsigneeInfo({
        branch: 'VIZAG',
        address:
          '49-18-6/1, GROUND FLOOR, LALITHA NAGAR, SAKSHI OFFICE ROAD AKKAYYAPALEM, VISAKHAPATNAM, ANDHRA PRADESH - 530016',
      })
    } else {
      setConsigneeInfo({ branch: '', address: '' })
    }
  }

  const handleSave = () => {}

  return (
    <>
      <div className={`${styles.backgroundMain} container-fluid`}>
        <div className={`${styles.vessel_card} mt-3 border_color`}>
          <div className={`${styles.wrapper} border_color card`}>
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
                      disabled={!isShipmentTypeBULK}
                      type={type}
                      checked={isShipmentTypeBULK}
                      id={`inline-${type}-1`}
                    />
                    <Form.Check
                      className={styles.radio}
                      inline
                      label="Liner"
                      name="group1"
                      disabled={isShipmentTypeBULK}
                      type={type}
                      checked={!isShipmentTypeBULK}
                      id={`inline-${type}-2`}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className={`${styles.main} border_color mt-4 card `}>
            <div
              className={`${styles.head_container} border_color card-header head_container d-flex bg-transparent`}
            >
              <h3 className={`${styles.heading}`}>Commodity Details</h3>
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
                    {_get(TransitDetails, 'data[0].order.unitOfQuantity', '')}{' '}
                  </span>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6">
                  <div className={`${styles.label} text`}>
                    Order Value <strong className="text-danger ml-n1">*</strong>{' '}
                  </div>
                  <span className={styles.value}>
                    {_get(TransitDetails, 'data[0].order.orderValue', '')}{' '}
                    {_get(TransitDetails, 'data[0].order.unitOfValue', '')}
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
          <div className={`${styles.main} mt-4 card border_color`}>
            <div
              className={`${styles.head_container} card-header border_color head_container d-flex bg-transparent`}
            >
              <h3 className={`${styles.heading}`}>Shipment Details</h3>
            </div>
            <div className={`${styles.dashboard_form} mt-3 card-body`}>
              <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-6">
                  <div className={`${styles.label} text`}>
                    Country Of Origin{' '}
                    <strong className="text-danger ml-n1">*</strong>
                  </div>
                  <span className={styles.value}>
                    {_get(TransitDetails, 'data[0].order.countryOfOrigin', '')}
                  </span>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6">
                  <div className={`${styles.label} text`}>
                    Port Of Landing{' '}
                    <strong className="text-danger ml-n1">*</strong>
                  </div>
                  <span className={styles.value}>
                    {_get(
                      TransitDetails,
                      'data[0].order.vessel.vessels[0].transitDetails.portOfLoading',
                      '',
                    )}
                  </span>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 mb-5">
                  <div className={`${styles.label} text`}>
                    Port of Discharge{' '}
                    <strong className="text-danger ml-n1">*</strong>{' '}
                  </div>
                  <span className={styles.value}>
                    {_get(
                      TransitDetails,
                      'data[0].order.vessel.vessels[0].transitDetails.portOfDischarge',
                      '',
                    )}
                  </span>
                </div>
                <div
                  className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6 `}
                >
                  <div className="d-flex">
                    <select
                      onChange={(e) => onChangeConsignee(e)}
                      className={`${styles.input_field} ${styles.customSelect} input form-control`}
                    >
                      <option></option>
                      <option value="indoGerman">
                        INDO GERMAN INTERNATIONAL PRIVATE LIMITED
                      </option>
                      <option value="EMERGENT">
                        EMERGENT INDUSTRIAL SOLUTIONS LIMITED
                      </option>
                    </select>
                    <label className={`${styles.label_heading} label_heading`}>
                      Consignee Name<strong className="text-danger">*</strong>
                    </label>
                    <img
                      className={`${styles.arrow} img-fluid`}
                      src="/static/inputDropDown.svg"
                      alt="Search"
                    />
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 col-sm-6 mt-4">
                  <div className={`${styles.label} text`}>
                    Consignee Branch<strong className="text-danger">*</strong>{' '}
                  </div>
                  <span className={styles.value}>{consigneeInfo.branch}</span>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 mt-4">
                  <div className={`${styles.label} text`}>
                    Consignee Address<strong className="text-danger">*</strong>{' '}
                  </div>
                  <span className={styles.value}>{consigneeInfo.address}</span>
                </div>
              </div>
            </div>
          </div>
          <div className={`${styles.main} mt-4 card border_color`}>
            <div
              className={`${styles.head_container} card-header border_color head_container justify-content-between d-flex bg-transparent`}
            >
              <h3 className={`${styles.heading}`}>IGM</h3>
              <div className="d-flex align-items-center">
                <div className={`${styles.label} text`}>Balance Quantity:</div>
                <div className={`${styles.value} ml-2 mr-4`}>4,500</div>
                <button className={styles.add_btn}>
                  <span className={styles.add_sign}>+</span>Add
                </button>
              </div>
            </div>
            <div className={`${styles.dashboard_form} mt-3 card-body`}>
              <div className="row">
                <div
                  className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6`}
                >
                  <div className="d-flex">
                    <select
                      className={`${styles.input_field} ${styles.customSelect}  input form-control`}
                    >
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
                <div
                  className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6 `}
                >
                  <input
                    className={`${styles.input_field} input form-control`}
                    type="number"
                  />
                  <label className={`${styles.label_heading} label_heading`}>
                    IGM No./Rotation No.
                    <strong className="text-danger">*</strong>
                  </label>
                </div>
                <div
                  className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6 `}
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
                        saveDate(startBlDate, 'blDate')
                      }}
                      minDate={lastDate}
                    />

                    <img
                      className={`${styles.calanderIcon} img-fluid`}
                      src="/static/caldericon.svg"
                      alt="Search"
                    />
                    <label className={`${styles.label_heading} label_heading`}>
                      Circ Date
                    </label>
                  </div>
                </div>
                <hr></hr>
                <div
                  className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6 `}
                >
                  <input
                    className={`${styles.input_field} input form-control`}
                    type="number"
                  />
                  <label className={`${styles.label_heading} label_heading`}>
                    BL Number<strong className="text-danger">*</strong>
                  </label>
                </div>

                {shipmentType ? (
                  <>
                    <div
                      className="col-lg-4 col-md-6 col-sm-6"
                      style={{ top: '35px' }}
                    >
                      <div className={`${styles.label} text`}>
                        BL Date <strong className="text-danger ml-n1">*</strong>
                      </div>
                      <span className={styles.value}>22-02-2022</span>
                    </div>
                    <div
                      className="col-lg-2 col-md-4 col-sm-6"
                      style={{ top: '35px' }}
                    >
                      <div className={`${styles.label} text`}>
                        BL Quantity{' '}
                        <strong className="text-danger ml-n1">*</strong>
                      </div>
                      <span className={styles.value}>4,000 MT</span>
                    </div>
                    <div
                      className="col-lg-2 col-md-4 col-sm-6"
                      style={{ top: '35px' }}
                    >
                      <img
                        src="/static/preview.svg"
                        className={`${styles.previewImg} img-fluid ml-n4`}
                        alt="Preview"
                      />
                      <img
                        src="/static/add-btn.svg"
                        className="img-fluid ml-5"
                        alt="Add"
                      />
                    </div>
                  </>
                ) : (
                  <>
                    <div
                      className="col-lg-4 col-md-6 col-sm-6"
                      style={{ top: '35px' }}
                    >
                      <div className="row">
                        <div className="col-md-6">
                          <div className={`${styles.label} text`}>
                            BL Date{' '}
                            <strong className="text-danger ml-n1">*</strong>
                          </div>
                          <span className={styles.value}>22-02-2022</span>
                        </div>
                        <div className="col-md-6">
                          <div className={`${styles.label} text`}>
                            No. of Containers{' '}
                            <strong className="text-danger ml-n1">*</strong>
                          </div>
                          <span className={styles.value}>4,000 MT</span>
                        </div>
                      </div>
                    </div>
                    <div
                      className="col-lg-4 col-md-4 col-sm-6"
                      style={{ top: '35px' }}
                    >
                      <div className="row align-items-center">
                        <div className="col-md-6">
                          <div className={`${styles.label} text`}>
                            BL Quantity{' '}
                            <strong className="text-danger ml-n1">*</strong>
                          </div>
                          <span className={styles.value}>4,000 MT</span>
                        </div>
                        <div className="col-md-6">
                          <div className="d-flex align-items-center">
                            <img
                              src="/static/preview.svg"
                              className={`${styles.previewImg} img-fluid ml-n4`}
                              alt="Preview"
                            />
                            <img
                              src="/static/add-btn.svg"
                              className="img-fluid ml-5"
                              alt="Add"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                )}
                <div
                  className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6 `}
                >
                  <input
                    className={`${styles.input_field} input form-control`}
                    type="number"
                  />
                  <label className={`${styles.label_heading} label_heading`}>
                    BL Number<strong className="text-danger">*</strong>
                  </label>
                </div>

                {shipmentType ? (
                  <>
                    <div
                      className="col-lg-4 col-md-6 col-sm-6"
                      style={{ top: '35px' }}
                    >
                      <div className={`${styles.label} text`}>
                        BL Date <strong className="text-danger ml-n1">*</strong>
                      </div>
                      <span className={styles.value}>22-02-2022</span>
                    </div>
                    <div
                      className="col-lg-2 col-md-4 col-sm-6"
                      style={{ top: '35px' }}
                    >
                      <div className={`${styles.label} text`}>
                        BL Quantity{' '}
                        <strong className="text-danger ml-n1">*</strong>
                      </div>
                      <span className={styles.value}>4,000 MT</span>
                    </div>
                    <div
                      className="col-lg-2 col-md-4 col-sm-6"
                      style={{ top: '35px' }}
                    >
                      <div className="d-flex align-items-center">
                        <img
                          src="/static/preview.svg"
                          className={`${styles.previewImg} img-fluid ml-n4`}
                          alt="Preview"
                        />
                        <img
                          src="/static/add-btn.svg"
                          className="img-fluid ml-5"
                          alt="Add"
                        />
                        <img
                          src="/static/delete 2.svg"
                          className="img-fluid ml-5"
                          alt="delete"
                        />
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div
                      className="col-lg-4 col-md-6 col-sm-6"
                      style={{ top: '35px' }}
                    >
                      <div className="row">
                        <div className="col-md-6">
                          <div className={`${styles.label} text`}>
                            BL Date{' '}
                            <strong className="text-danger ml-n1">*</strong>
                          </div>
                          <span className={styles.value}>22-02-2022</span>
                        </div>
                        <div className="col-md-6">
                          <div className={`${styles.label} text`}>
                            No. of Containers{' '}
                            <strong className="text-danger ml-n1">*</strong>
                          </div>
                          <span className={styles.value}>4,000 MT</span>
                        </div>
                      </div>
                    </div>
                    <div
                      className="col-lg-4 col-md-4 col-sm-6"
                      style={{ top: '35px' }}
                    >
                      <div className="row align-items-center">
                        <div className="col-md-6">
                          <div className={`${styles.label} text`}>
                            BL Quantity{' '}
                            <strong className="text-danger ml-n1">*</strong>
                          </div>
                          <span className={styles.value}>4,000 MT</span>
                        </div>
                        <div className="col-md-6">
                          <img
                            src="/static/preview.svg"
                            className={`${styles.previewImg} img-fluid ml-n4`}
                            alt="Preview"
                          />
                          <img
                            src="/static/add-btn.svg"
                            className="img-fluid ml-5"
                            alt="Add"
                          />
                          <img
                            src="/static/delete 2.svg"
                            className="img-fluid ml-5"
                            alt="delete"
                          />
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
            <div className={styles.table_scroll_outer}>
              <div className={styles.table_scroll_inner}>
                <table
                  className={`${styles.table} table mt-3`}
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
                        DOCUMENT DATE
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
                        IGM Copy
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
                          <input type="file" name="myfile" />
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
          <div className="mt-4 mb-5">
            <InspectionDocument
              module="Loading-Transit-Unloading"
              orderId={orderId}
              documentName="IGM Copy"
            />
          </div>
        </div>
        <SaveBar handleSave={handleSave} rightBtn="Submit" />
      </div>
    </>
  )
}
