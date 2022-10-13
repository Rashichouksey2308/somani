/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from 'react'
import styles from './index.module.scss'
import DateCalender from '../../components/DateCalenderVessel'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import UploadDocument from '../UploadDocument'
import UploadOther from '../UploadOther'
import moment from 'moment'
import { useSelector, useDispatch } from 'react-redux'
import { UPDATE_CREDIT_CALCULATE_SUCCESSFULL } from 'redux/buyerProfile/actionType'
import { add } from 'lodash'
import { setPageName, setDynamicName } from '../../redux/userData/action'
//import { set } from 'immer/dist/internal'
import Router from 'next/router'
import _get from 'lodash/get'
import { addPrefixOrSuffix, convertValue } from 'utils/helper'

function Index({
  vesselData,
  vesselUpdatedAt,
  partShipmentAllowed,
  setPartShipmentAllowed,
  shippingInfoChangeHandler,
  companyName,
  uploadDocHandler,
  onVesselInfoChangeHandlerForLiner,
  onVesselInfoChangeHandlerForBulk,
  saveDate,
  OnVesselTransitFieldsChangeHandler,
  OnVesselBasicFieldsChangeHandler,
  shipmentTypeChangeHandler,
  setlastDate,
  lastDate,
  setStartDate,
  startDate,
  OnAddvesselInformation,
  onAddVessel,
  list,
  orderID,
  id1,
  onDeleteVessel,
  OnAddvesselInformationDelete,
  vesselCertificate,
  setVesselCertificate,
  shipmentTypeBulk,
  containerListDocument,
  setContainerListDocument,
  containerExcel,
  currency,
  dateStartFrom,
  handleExcelClose,
  isFieldInFocus,
  setOnFocus,
  setOnBlur,
}) {
  console.log(partShipmentAllowed, 'partShipmentAllowed')
  const [orderValueinFocus, setOrderValueInFocus] = useState(false)

  const dispatch = useDispatch()
  // useEffect(() => {
  //   dispatch(setPageName('vessel'))
  //   dispatch(setDynamicName(companyName))
  // })
  const getSn = (index) => {
    let a = Number(index)
    return a + 1
  }

  const uploadDocHandler1 = (e) => {
    console.log(uploadDocHandler(e), 'vesselDocUpload')
  }

  const handleClose = (e) => {
    setVesselCertificate(null)
  }

  console.log(isFieldInFocus, 'containerExcel', list)

  console.log(vesselData, 'vesselData')
  return (
    <>
      <div className={`${styles.dashboardTab} w-100`}>
        <div className={`${styles.tabHeader} tabHeader `}>
          <div
            className={`${styles.tab_header} d-lg-flex d-inline-block align-items-center justify-content-between`}
          >
            <img
              onClick={() => {
                Router.push('/vessel-nomination')
              }}
              style={{ cursor: 'pointer' }}
              src="/static/keyboard_arrow_right-3.svg"
              alt="arrow right"
              className="img-fluid mr-2 image_arrow"
            />
            <h1 className={`${styles.title} heading`}>{companyName}</h1>
            <div className="ml-auto text-right">
              <div className={`${styles.lastModified} text `}>
                <div className="accordion_Text">Last Modified:</div>{' '}
                {vesselUpdatedAt
                  ? moment(vesselUpdatedAt).format('DD-MM-YYYY,h:mm a')
                  : ''}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="p-0 container-fluid background2">
        <div className={`${styles.backgroundMain}`}>
          <div className={`${styles.vessel_card} vessel_card`}>
            {list &&
              list.map((val, index) => {
                console.log(val, 'vesselMApping')
                return (
                  <div
                    key={index}
                    className={`${styles.main} card border_color`}
                  >
                    <div
                      className={`${styles.head_container} align-items-center border_color card-header head_container justify-content-between d-flex bg-transparent`}
                    >
                      {list[index].shipmentType === 'Bulk' ? (
                        <h3 className={`${styles.heading}`}>
                          {` Vessel Information (${getSn(index)})`}
                        </h3>
                      ) : (
                        <h3 className={`${styles.heading}`}>Basic Details</h3>
                      )}
                      <div className="d-flex align-items-center">
                        <label className={`${styles.dropDown_label} text`}>
                          Part Shipment Allowed
                        </label>
                        <div disabled className="position-relative">
                          <select
                            disabled
                            value={partShipmentAllowed}
                            onChange={(e) =>
                              setPartShipmentAllowed(e.target.value)
                            }
                            className={`${styles.dropDown} ${styles.customSelect} input`}
                          >
                            <option>Select an option</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                          </select>
                          <img
                            className={`${styles.arrow2} image_arrow img-fluid`}
                            src="/static/inputDropDown.svg"
                            alt="Search"
                          />
                        </div>

                        {list[index].shipmentType === 'Bulk' ? (
                          <>
                            {index == 0 ? (
                              <button
                                className={styles.add_btn}
                                onClick={(e) => {
                                  onAddVessel()
                                }}
                              >
                                Add
                              </button>
                            ) : null}
                            {index > 0 ? (
                              <button
                                className={styles.add_btn}
                                onClick={(e) => {
                                  onDeleteVessel(index)
                                }}
                              >
                                Delete
                              </button>
                            ) : null}
                          </>
                        ) : null}
                      </div>
                    </div>
                    <div className={`${styles.dashboard_form} card-body`}>
                      <div className="row ">
                        <div
                          className={`${styles.form_group} col-lg-3 col-md-6 col-sm-6`}
                        >
                          <div className="d-flex">
                            <select
                              disabled
                              className={`${styles.input_field} ${styles.customSelect} input form-control`}
                              onChange={(e) =>
                                shipmentTypeChangeHandler(e, index)
                              }
                              value={val.shipmentType}
                            >
                              <option>Select an option</option>
                              <option value="Bulk">Bulk</option>
                              <option value="Liner">Liner</option>
                            </select>
                            <label
                              className={`${styles.label_heading} label_heading`}
                            >
                              Shipment Type
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
                          className={`${styles.form_group} col-lg-3 col-md-6 col-sm-6`}
                        >
                          <input
                            className={`${styles.input_field} input form-control`}
                            type="text"
                            value={val.commodity}
                            disabled
                            required
                          />
                          <label
                            className={`${styles.label_heading} label_heading`}
                          >
                            Commodity<strong className="text-danger">*</strong>
                          </label>
                        </div>
                        <div
                          className={`${styles.form_group} col-lg-3 col-md-6 col-sm-6`}
                        >
                          <input
                            onFocus={(e) => {
                              setOnFocus(index)
                              e.target.type = 'number'
                            }}
                            onBlur={(e) => {
                              setOnBlur(index)

                              e.target.type = 'text'
                            }}
                            id="quantity"
                            className={`${styles.input_field} input form-control`}
                            required
                            type="text"
                            value={
                              isFieldInFocus[index]?.value
                                ? val.quantity
                                : Number(val.quantity)?.toLocaleString(
                                    'en-IN',
                                    { maximumFractionDigits: 2 },
                                  ) +
                                  ` ${_get(
                                    vesselData,
                                    'data[0].order.unitOfQuantity',
                                    '',
                                  ).toUpperCase()}`
                            }
                            onChange={(e) =>
                              OnVesselBasicFieldsChangeHandler(e, index)
                            }
                          />
                          <label
                            className={`${styles.label_heading} label_heading`}
                          >
                            Quantity<strong className="text-danger">*</strong>
                          </label>
                        </div>
                        <div
                          className={`${styles.form_group} d-flex col-lg-3 col-md-6 col-sm-6`}
                        >
                          <select
                            className={`${styles.input_field} pl-2 pr-3 input w-35 border-right-0`}
                            style={{ color: '#3687E8' }}
                            value={currency}
                            required
                          >
                            <option>Select</option>
                            <option value="USD">USD</option>
                            <option value="INR">INR</option>
                            <option value="EURO">EURO</option>
                          </select>
                          <input
                            onFocus={(e) => {
                              setOrderValueInFocus(true)
                              e.target.type = 'number'
                            }}
                            onBlur={(e) => {
                              setOrderValueInFocus(false)
                              e.target.type = 'text'
                            }}
                            id="orderValue"
                            type="text"
                            onKeyDown={(evt) =>
                              ['e', 'E', '+', '-'].includes(evt.key) &&
                              evt.preventDefault()
                            }
                            className={`${styles.input_field} border-left-0 input form-control`}
                            // value={_get(vesselData,'data[0].order.marginMoney.calculation.orderValue','')}

                            // value={Number(val.orderValue).toLocaleString()}
                            value={
                              orderValueinFocus
                                ? val.orderValue
                                : Number(val.orderValue)?.toLocaleString(
                                    'en-IN',
                                    { maximumFractionDigits: 2 },
                                  )
                            }
                            onChange={(e) =>
                              OnVesselBasicFieldsChangeHandler(e, index)
                            }
                          />
                          <label
                            className={`${styles.label_heading} label_heading`}
                            id="textInput"
                          >
                            Order Value
                            <strong className="text-danger">*</strong>
                          </label>
                        </div>
                      </div>
                    </div>
                    <hr className="m-0 border_color" />
                    <div className={`${styles.dashboard_form} card-body`}>
                      <h3 className={`${styles.sub_heading} mt-3`}>
                        Transit Details
                      </h3>

                      <div className="row">
                        <div
                          className={`${styles.form_group} col-lg-4 col-md-6 col-md-6`}
                        >
                          <div className="d-flex">
                            <select
                              id="countryOfOrigin"
                              className={`${styles.input_field} ${styles.customSelect}  input form-control`}
                              onChange={(e) =>
                                OnVesselTransitFieldsChangeHandler(e, index)
                              }
                              value={val.transitDetails.countryOfOrigin}
                            >
                              <option>Select an option</option>
                              {/* <option value={val.countryOfOrigin}>
                                {val.countryOfOrigin}
                              </option> */}
                              <option value="India">India</option>
                              <option value="Australia">Australia</option>
                              <option value="Sri Lanka">Sri Lanka</option>
                              <option value="Qatar">Qatar</option>
                              <option value="Dubai">Dubai</option>
                            </select>
                            <label
                              className={`${styles.label_heading} label_heading`}
                            >
                              Country of Origin
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
                          className={`${styles.form_group} col-lg-4 col-md-6 col-md-6`}
                        >
                          <div className="d-flex">
                            <select
                              id="portOfLoading"
                              className={`${styles.input_field} ${styles.customSelect} input form-control`}
                              onChange={(e) =>
                                OnVesselTransitFieldsChangeHandler(e, index)
                              }
                              value={val.transitDetails.portOfLoading}
                            >
                              <option>Select an option</option>
                              {/* <option value={val.portOfLoading}>
                                {val.portOfLoading}
                              </option> */}
                              <option value="Westshore Terminals,Canada">
                                Westshore Terminals,Canada
                              </option>
                              <option value="Abbot Point,Australia">
                                Abbot Point,Australia
                              </option>
                            </select>
                            <label
                              className={`${styles.label_heading} label_heading`}
                            >
                              Port of Loading
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
                          className={`${styles.form_group} col-lg-4 col-md-6 col-md-6`}
                        >
                          <div className="d-flex">
                            <select
                              id="portOfDischarge"
                              className={`${styles.input_field} ${styles.customSelect}  input form-control`}
                              onChange={(e) =>
                                OnVesselTransitFieldsChangeHandler(e, index)
                              }
                              value={val.transitDetails.portOfDischarge}
                            >
                              <option>Select an option</option>
                              {/* <option value={val.portOfDischarge}>
                                {val.portOfDischarge}
                              </option> */}
                              <option value="Vishakapatnam, India">
                                Visakhapatnam, India
                              </option>
                              <option value="Mumbai, India">
                                Mumbai, India
                              </option>
                              <option value="Gujrat, India">
                                Gujrat, India
                              </option>
                            </select>
                            <label
                              className={`${styles.label_heading} label_heading`}
                            >
                              Port of Discharge
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
                          className={`${styles.form_group} col-lg-2 col-md-6 col-sm-6`}
                        >
                          <div className="d-flex">
                            <DateCalender
                              dateFormat={`dd-MM-yyyy`}
                              defaultDate={val?.transitDetails?.laycanFrom}
                              name="laycanFrom"
                              index={index}
                              saveDate={saveDate}
                              labelName="Laycan from"
                              required
                            />
                            <img
                              className={`${styles.calanderIcon} image_arrow img-fluid`}
                              src="/static/caldericon.svg"
                              alt="Search"
                            />
                          </div>
                        </div>
                        <div
                          className={`${styles.form_group} col-lg-2 col-md-6 col-sm-6`}
                        >
                          <div className="d-flex">
                            <DateCalender
                              dateFormat={`dd-MM-yyyy`}
                              defaultDate={val?.transitDetails?.laycanTo}
                              name="laycanTo"
                              index={index}
                              saveDate={saveDate}
                              startFrom={dateStartFrom[index]}
                              labelName="Laycan to"
                            />
                            <img
                              className={`${styles.calanderIcon} image_arrow img-fluid`}
                              src="/static/caldericon.svg"
                              alt="Search"
                            />
                          </div>
                        </div>
                        <div
                          className={`${styles.form_group} col-lg-4 col-md-6 col-md-6`}
                        >
                          <div className="d-flex">
                            <DateCalender
                              dateFormat={`dd-MM-yyyy`}
                              defaultDate={val?.transitDetails?.EDTatLoadPort}
                              name="EDTatLoadPort"
                              index={index}
                              saveDate={saveDate}
                              labelName="ETD at Load Port"
                            />
                            <img
                              className={`${styles.calanderIcon} image_arrow img-fluid`}
                              src="/static/caldericon.svg"
                              alt="Search"
                            />
                          </div>
                        </div>
                        <div
                          className={`${styles.form_group} col-lg-4 col-md-6 col-md-6`}
                        >
                          <div className="d-flex">
                            <DateCalender
                              dateFormat={`dd-MM-yyyy`}
                              defaultDate={
                                val?.transitDetails?.ETAatDischargePort
                              }
                              name="ETAatDischargePort"
                              index={index}
                              saveDate={saveDate}
                              labelName="ETA at Discharge Port"
                            />
                            <img
                              className={`${styles.calanderIcon} image_arrow img-fluid`}
                              src="/static/caldericon.svg"
                              alt="Search"
                            />
                          </div>
                          {/* <div className="d-flex">
                             <DateCalender labelName='ETA at Discharge Port'/>
                      <img
                          className={`${styles.calanderIcon} img-fluid`}
                          src="/static/caldericon.svg"
                          alt="Search"
                      /> 
                            <DatePicker
                              selected={moment(val?.transitDetails?.ETAatDischargePort).toDate()}
                              name="ETAatDischargePort"
                            
                              dateFormat="dd/MM/yyyy"
                              className={`${styles.input_field} ${styles.cursor} input form-control`}
                              onChange={(startDate) => {
                                setStartDate(startDate)
                                saveDate(startDate, 'ETAatDischargePort', index)
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
                              ETD at Discharge Port
                            </label>
                          </div> */}
                        </div>
                      </div>
                    </div>
                    <hr className="m-0 border_color" />

                    {list[index].shipmentType === 'Bulk' ? (
                      <>
                        {list &&
                          list[index].vesselInformation.map(
                            (vesselInfo, index1) => (
                              <div
                                key={index}
                                className={`${styles.dashboard_form} card-body`}
                              >
                                <h3 className={`${styles.sub_heading} mt-3`}>
                                  Vessel Information
                                </h3>

                                <div className="row">
                                  <div
                                    className={`${styles.form_group} col-lg-4 col-md-6 col-md-6`}
                                  >
                                    <input
                                      id="name"
                                      value={vesselInfo.name}
                                      className={`${styles.input_field} input form-control`}
                                      required
                                      type="text"
                                      onChange={(e) =>
                                        onVesselInfoChangeHandlerForBulk(
                                          e,
                                          index,
                                        )
                                      }
                                    />
                                    <label
                                      className={`${styles.label_heading} label_heading`}
                                    >
                                      Vessel Name
                                      <strong className="text-danger">*</strong>
                                    </label>
                                  </div>
                                  <div
                                    className={`${styles.form_group} col-lg-4 col-md-6 col-md-6`}
                                  >
                                    <input
                                      id="IMONumber"
                                      value={vesselInfo.IMONumber}
                                      className={`${styles.input_field} input form-control`}
                                      required
                                      type="text"
                                      onChange={(e) =>
                                        onVesselInfoChangeHandlerForBulk(
                                          e,
                                          index,
                                        )
                                      }
                                    />
                                    <label
                                      className={`${styles.label_heading} label_heading`}
                                    >
                                      IMO Number
                                      <strong className="text-danger">*</strong>
                                    </label>
                                  </div>
                                  <div
                                    className={`${styles.form_group} col-lg-4 col-md-6 col-md-6`}
                                  >
                                    <input
                                      id="flag"
                                      value={vesselInfo.flag}
                                      className={`${styles.input_field} input form-control`}
                                      required
                                      type="text"
                                      onChange={(e) =>
                                        onVesselInfoChangeHandlerForBulk(
                                          e,
                                          index,
                                        )
                                      }
                                    />
                                    <label
                                      className={`${styles.label_heading} label_heading`}
                                    >
                                      Flag
                                      <strong className="text-danger">*</strong>
                                    </label>
                                  </div>
                                  <div
                                    className={`${styles.form_group} col-lg-4 col-md-6 col-md-6`}
                                  >
                                    <div className="d-flex">
                                      <input
                                        id="yearOfBuilt"
                                        // value={vesselInfo.yearOfBuilt}
                                        value={
                                          vesselInfo.yearOfBuilt
                                            ? vesselInfo?.yearOfBuilt?.slice(
                                                0,
                                                4,
                                              )
                                            : // moment(vesselInfo.yearOfBuilt).format("YYYY")
                                              ''
                                        }
                                        className={`${styles.input_field} input form-control`}
                                        type="number"
                                        onKeyDown={(evt) =>
                                          ['e', 'E', '+', '-', '.'].includes(
                                            evt.key,
                                          ) && evt.preventDefault()
                                        }
                                        onChange={(e) => {
                                          e.target.value = Math.max(
                                            0,
                                            Math.min(
                                              2022,
                                              Number(e.target.value),
                                            ),
                                          )
                                          onVesselInfoChangeHandlerForBulk(
                                            e,
                                            index,
                                          )
                                        }}
                                        required
                                      />
                                      {/* <select
                                        id="yearOfBuilt"
                                        className={`${styles.input_field} ${styles.customSelect} input form-control`}
                                        required
                                        value={moment(
                                          vesselInfo.yearOfBuilt,
                                        ).format('YYYY')}
                                        onChange={(e) =>
                                          onVesselInfoChangeHandlerForBulk(
                                            e,
                                            index,
                                          )
                                        }
                                      > 
                                        <option
                                          value={moment(
                                            vesselInfo.yearOfBuilt,
                                          ).format('YYYY')}
                                        >
                                          {moment(
                                            vesselInfo.yearOfBuilt,
                                          ).format('YYYY')}
                                        </option>
                                      </select>*/}
                                      <label
                                        className={`${styles.label_heading} label_heading`}
                                      >
                                        Year of Built
                                        <strong className="text-danger">
                                          *
                                        </strong>
                                      </label>
                                      {/* <img
                                        className={`${styles.arrow} image_arrow img-fluid`}
                                        src="/static/inputDropDown.svg"
                                        alt="Search"
                                      /> */}
                                    </div>
                                  </div>

                                  <div
                                    className={`${styles.form_group} col-lg-4 col-md-6 col-md-6`}
                                  >
                                    <input
                                      id="shippingLineOrCharter"
                                      value={vesselInfo.shippingLineOrCharter}
                                      className={`${styles.input_field} input form-control`}
                                      required
                                      type="text"
                                      onChange={(e) => {
                                        onVesselInfoChangeHandlerForBulk(
                                          e,
                                          index,
                                        )
                                      }}
                                    />
                                    <label
                                      className={`${styles.label_heading} label_heading`}
                                    >
                                      Shipping Line/Charter
                                      <strong className="text-danger">*</strong>
                                    </label>
                                  </div>
                                </div>
                              </div>
                            ),
                          )}
                      </>
                    ) : (
                      <>
                        <div className={`${styles.dashboard_form} card-body`}>
                          <h3 className={`${styles.sub_heading} mt-3`}>
                            Shipping Information
                          </h3>

                          <div className="row">
                            <div
                              className={`${styles.form_group} col-md-4 col-sm-6`}
                            >
                              <input
                                id="shippingLineOrCharter"
                                value={
                                  val?.shippingInformation
                                    ?.shippingLineOrCharter
                                }
                                className={`${styles.input_field} input form-control`}
                                type="text"
                                onChange={(e) =>
                                  shippingInfoChangeHandler(e, index)
                                }
                                required
                              />
                              <label
                                className={`${styles.label_heading} label_heading`}
                              >
                                Shipping Line/Charter
                                <strong className="text-danger">*</strong>
                              </label>
                            </div>
                            <div
                              className={`${styles.form_group} col-md-4 col-sm-6`}
                            >
                              <input
                                id="numberOfContainers"
                                value={
                                  val?.shippingInformation?.numberOfContainers
                                }
                                className={`${styles.input_field} input form-control`}
                                type="number"
                                onKeyDown={(evt) =>
                                  ['e', 'E', '+', '-'].includes(evt.key) &&
                                  evt.preventDefault()
                                }
                                onChange={(e) =>
                                  shippingInfoChangeHandler(e, index)
                                }
                                required
                              />
                              <label
                                className={`${styles.label_heading} label_heading`}
                              >
                                No. of Containers
                                <strong className="text-danger">*</strong>
                              </label>
                            </div>
                            <div
                              className={`${styles.form_group} col-md-4 col-sm-6`}
                            >
                              <input
                                id="freeDetentionPeriod"
                                value={
                                  val?.shippingInformation?.freeDetentionPeriod
                                }
                                className={`${styles.input_field} input form-control`}
                                type="number"
                                onKeyDown={(evt) =>
                                  ['e', 'E', '+', '-'].includes(evt.key) &&
                                  evt.preventDefault()
                                }
                                onChange={(e) =>
                                  shippingInfoChangeHandler(e, index)
                                }
                                required
                              />
                              <label
                                className={`${styles.label_heading} label_heading`}
                              >
                                Free Detention Period At Discharge Port (Days)
                                <strong className="text-danger">*</strong>
                              </label>
                            </div>
                          </div>
                        </div>
                        {list[0].vesselInformation.map((newVessel, index) => (
                          <div
                            key={index}
                            className={`${styles.dashboard_form} card-body`}
                          >
                            <div
                              className={`${styles.vessel_card} vessel_card`}
                            >
                              <div className="d-flex justify-content-between align-items-center">
                                <h3 className={`${styles.sub_heading} mt-3`}>
                                  Vessel Information
                                </h3>
                                {index == 0 ? (
                                  <button
                                    onClick={() => OnAddvesselInformation()}
                                    className={styles.add_btn}
                                  >
                                    Add
                                  </button>
                                ) : null}
                                {index > 0 ? (
                                  <button
                                    onClick={() =>
                                      OnAddvesselInformationDelete(index)
                                    }
                                    className={styles.add_btn}
                                  >
                                    Delete
                                  </button>
                                ) : null}
                              </div>
                              <div className="row">
                                <div
                                  className={`${styles.form_group} col-md-4 col-sm-6`}
                                >
                                  <input
                                    id="name"
                                    defaultValue={newVessel.name}
                                    className={`${styles.input_field} input form-control`}
                                    required
                                    type="text"
                                    onChange={(e) =>
                                      onVesselInfoChangeHandlerForLiner(
                                        e,
                                        index,
                                      )
                                    }
                                  />
                                  <label
                                    className={`${styles.label_heading} label_heading`}
                                  >
                                    Vessel Name
                                  </label>
                                </div>
                                <div
                                  className={`${styles.form_group} col-md-4 col-sm-6`}
                                >
                                  <input
                                    id="IMONumber"
                                    defaultValue={newVessel.IMONumber}
                                    className={`${styles.input_field} input form-control`}
                                    required
                                    type="text"
                                    onChange={(e) =>
                                      onVesselInfoChangeHandlerForLiner(
                                        e,
                                        index,
                                      )
                                    }
                                  />
                                  <label
                                    className={`${styles.label_heading} label_heading`}
                                  >
                                    IMO Number
                                  </label>
                                </div>
                                <div
                                  className={`${styles.form_group} col-md-4 col-sm-6`}
                                >
                                  <input
                                    id="flag"
                                    defaultValue={newVessel.flag}
                                    className={`${styles.input_field} input form-control`}
                                    required
                                    type="text"
                                    onChange={(e) =>
                                      onVesselInfoChangeHandlerForLiner(
                                        e,
                                        index,
                                      )
                                    }
                                  />
                                  <label
                                    className={`${styles.label_heading} label_heading`}
                                  >
                                    Flag
                                  </label>
                                </div>
                                <div
                                  className={`${styles.form_group} col-md-4 col-sm-6`}
                                >
                                  <input
                                    id="yearOfBuilt"
                                    //  value={newVessel.yearOfBuilt ? moment(newVessel.yearOfBuilt).format("YYYY") : ''}
                                    value={
                                      newVessel.yearOfBuilt
                                        ? newVessel.yearOfBuilt?.slice(0, 4)
                                        : // moment(vesselInfo.yearOfBuilt).format("YYYY")
                                          ''
                                    }
                                    // defaultValue={newVessel.yearOfBuilt}
                                    className={`${styles.input_field} input form-control`}
                                    type="number"
                                    onKeyDown={(evt) =>
                                      ['e', 'E', '+', '-', '.'].includes(
                                        evt.key,
                                      ) && evt.preventDefault()
                                    }
                                    onChange={(e) => {
                                      e.target.value = Math.max(
                                        0,
                                        Math.min(2022, Number(e.target.value)),
                                      )
                                      onVesselInfoChangeHandlerForLiner(
                                        e,
                                        index,
                                      )
                                    }}
                                    required
                                  />
                                  <label
                                    className={`${styles.label_heading} label_heading`}
                                  >
                                    Year of Built
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                        <hr className="m-0 border_color" />
                        <div className={`${styles.dashboard_form} card-body`}>
                          <h3 className={`${styles.sub_heading} mt-3`}>
                            Container Number(s)
                          </h3>

                          <div
                            className={`${styles.form_group} d-flex justify-content-start`}
                          >
                            {' '}
                            {containerExcel === null ? (
                              <div className={styles.uploadBtnWrapper}>
                                <input
                                  id="containerExcel"
                                  onChange={(e) => uploadDocHandler1(e)}
                                  type="file"
                                  name="myfile"
                                  accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
                                />
                                <button className={`${styles.upload_btn}`}>
                                  Upload Excel
                                </button>
                              </div>
                            ) : (
                              <div
                                className={`${styles.certificate} text1 d-flex justify-content-between`}
                              >
                                <span>{containerExcel?.originalName}</span>
                                <img
                                  className={`${styles.close_image} image_arrow mx-2`}
                                  src="/static/close.svg"
                                  onClick={() => handleExcelClose()}
                                  alt="Close"
                                />{' '}
                              </div>
                            )}
                            <div className={`${styles.upload_text}`}>
                              <strong className="text-danger ml-n2 mr-1">
                                *
                              </strong>
                              ONLY .XLS FILES ARE ALLOWED
                              <br /> &amp; MAX FILE SIZE UP TO 50MB
                            </div>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                )
              })}

            <UploadDocument
              docName="Vessel Certificate"
              docName2={shipmentTypeBulk === 'Bulk' ? false : 'Container List'}
              vesselCertificate={vesselCertificate}
              containerList={containerListDocument}
              handleClose={handleClose}
              uploadDocument1={uploadDocHandler}
              setVesselCertificate={setVesselCertificate}
              setContainerListDocument={setContainerListDocument}
            />

            <UploadOther
              module="Agreements&Insurance&LC&Opening"
              orderid={id1}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default Index
