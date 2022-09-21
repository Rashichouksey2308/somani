/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react'
import styles from './index.module.scss'
import { Form, Row, Col } from 'react-bootstrap'
import SaveBar from '../SaveBar'
import DateCalender from '../DateCalender'
import API from '../../utils/endpoints'
import toast from 'react-toastify'
import Cookies from 'js-cookie'
import Axios from 'axios'
import UploadOther from '../UploadOther'
import _get from 'lodash/get'
import { checkNan } from 'utils/helper'
import moment from 'moment'

export default function Index(props) {
  console.log(props.liftingData, '97111')
  const [editInput, setEditInput] = useState(true)
  const [darkMode, setDarkMode] = useState(false)
  const [currentOrder, setCurrentOrder] = useState('')
  const [isFieldInFocus, setIsFieldInFocus] = useState(false)

  const handleDropdown = (e) => {
    if (e.target.value == 'Others') {
      setEditInput(false)
    } else {
      setEditInput(true)
    }
  }
  let orderid = _get(props, 'ReleaseOrderData.data[0].order._id', '')
  const saveDate2 = (value, name, index, index2) => {
    const d = new Date(value)
    let text = d.toISOString()
    props.handleChange(name, value, index, index2)
  }
  const uploadDoc = async (e, type, index1, index2) => {
    console.log(e, 'response data')
    let fd = new FormData()
    fd.append('document', e.target.files[0])
    // dispatch(UploadCustomDoc(fd))

    let cookie = Cookies.get('SOMANI')
    const decodedString = Buffer.from(cookie, 'base64').toString('ascii')

    let [userId, refreshToken, jwtAccessToken] = decodedString.split('#')
    var headers = { authorization: jwtAccessToken, Cache: 'no-cache' }
    try {
      let response = await Axios.post(
        `${API.corebaseUrl}${API.customClearanceDoc}`,
        fd,
        {
          headers: headers,
        },
      )
      console.log(response.data.data, 'response data123')
      if (response.data.code === 200) {
        // dispatch(getCustomClearanceSuccess(response.data.data))
        props.handleChange(type, response.data.data, index1, index2)
        return response.data.data

        // let toastMessage = 'DOCUMENT UPDATED'
        // if (!toast.isActive(toastMessage.toUpperCase())) {
        //   toast.error(toastMessage.toUpperCase(), { toastId: toastMessage }) // }
      } else {
        // dispatch(getCustomClearanceFailed(response.data.data))
        // let toastMessage = 'COULD NOT PROCESS YOUR REQUEST'
        // if (!toast.isActive(toastMessage.toUpperCase())) {
        //   toast.error(toastMessage.toUpperCase(), { toastId: toastMessage }) // }
      }
    } catch (error) {
      // dispatch(getCustomClearanceFailed())
      // let toastMessage = 'COULD NOT PROCESS YOUR REQUEST AT THIS TIME'
      // if (!toast.isActive(toastMessage.toUpperCase())) {
      //   toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
      // }
    }
  }

  console.log(props.liftingData, 'props.liftingData')
  const checkAvail = (value) => {
    let returned = false
    const filtered = props.liftingData.filter((item) => {
      return item.deliveryOrder === value
    })
    if (filtered.length > 0) {
      returned = true
    }
    return returned
  }

  return (
    <>
      {/* <div className={`${styles.dashboardTab} w-100`}> */}
      {/* <div className={`${styles.tabHeader} tabHeader `}>
          <div className="d-flex align-items-center">
            <h1 className={`${styles.title} heading`}>
              <img
                src={`${
                  darkMode
                    ? `/static/white-arrow.svg`
                    : `/static/arrow-right.svg`
                }`}
                alt="arrow right"
                className="img-fluid image_arrow"
              />
              <span>Ramakrishna Traders - Ramal001-00001</span>
            </h1>
          </div>
        </div> */}

      <div className={`${styles.backgroundMain} vessel_card container-fluid`}>
        <div className={`${styles.vessel_card} m-2 border_color`}>
          <div className={`${styles.main} border_color mt-4 card `}>
            <div
              className={`${styles.head_container} border_color card-header head_container d-flex bg-transparent`}
            >
              <h3 className={`${styles.heading}`}>Basic Info</h3>
            </div>
            <div className={`${styles.dashboard_form} mt-2 mb-4 card-body`}>
              <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-6">
                  <div className={`${styles.label} text`}>Commodity</div>
                  <span className={styles.value}>{_get(props.ReleaseOrderData, 'data[0].order.commodity', '')}</span>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6">
                  <div className={`${styles.label} text`}>Consignor Name</div>
                  <span className={styles.value}>
                    {_get(props.ReleaseOrderData, 'data[0].company.companyName', '')}
                  </span>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6">
                  <div className={`${styles.label} text`}>Consignee Name</div>
                  <span className={styles.value}>{_get(props.ReleaseOrderData, 'data[0].company.companyName', '')}</span>
                </div>
              </div>
            </div>
          </div>
          <div className={`${styles.wrapper} border_color mt-4 card`}>
            <div className="d-lg-flex align-items-center justify-content-between d-inline-block  pl-3">
              <div className="row w-75">
                <div className="col-lg-2">
                  <h2 className="pt-2">Delivery Order</h2>
                </div>
                <div className={`${styles.form_group} col-lg-4`}>
                  <div className="d-flex">
                    <select
                      className={`${styles.input_field} ${styles.customSelect} input form-control`}
                      style={{ height: '46px', width: '277px' }}
                      value={currentOrder}
                      onChange={(e) => {
                        setCurrentOrder(e.target.value)
                      }}
                    >
                      <option disabled value='' >Select an option</option>
                      {_get(props.data, "data[0].deliveryDetail", []).map((val, index) => {
                        return (
                          <option disabled={checkAvail(val?.deliveryOrderNumber)} key={index} value={val?.deliveryOrderNumber}>{val?.deliveryOrderNumber}</option>
                        )
                      })}
                    </select>

                    <img
                      className={`${styles.arrow} image_arrow img-fluid`}
                      src="/static/inputDropDown.svg"
                      alt="Search"
                    />
                  </div>
                </div>
              </div>
              {currentOrder !== '' && <button
                className={styles.add_btn}
                onClick={(e) => {
                  setCurrentOrder('')
                  props.addNewLifting(currentOrder)
                }}
              >
                <span className={styles.add_sign}>+</span>Add
              </button>}
            </div>
          </div>
          {props.liftingData &&
            props.liftingData.map((val, index) => {

              console.log(val, 'Lifting Add ')
              return (
                <div className={`${styles.main} mt-4 card border_color`}>
                  <div
                    className={`${styles.head_container} card-header border_color head_container d-flex justify-content-between bg-transparent`}
                    data-toggle={`collapse`}
                    data-target={`#upload${index}`}
                    aria-expanded="true"
                    aria-controls={`upload${index}`}
                  >
                    <h3 className={`${styles.heading}`}>{val.deliveryOrder}</h3>
                    <div className="d-flex">
                      <div className="d-flex mr-5">
                        <div
                          className={`${styles.label_heading} mr-3 label_heading`}
                        >
                          DO Quantity
                        </div>
                        <div className={`${styles.do_number} mr-4`}>
                          {checkNan(props.returnLiftingData(val.deliveryOrder)?.doQuantity)?.toLocaleString()}   {_get(
                            props,
                            'data.data[0].order.unitOfQuantity',
                            '',
                          )}
                        </div>
                      </div>
                      <div className="d-flex mr-5">
                        <div
                          className={`${styles.label_heading} mr-3 label_heading`}
                        >
                          Balance Quantity
                        </div>
                        <div className={`${styles.do_number} mr-4`}>
                          {checkNan(props.returnLiftingData(val.deliveryOrder)?.balaceQuantity)?.toLocaleString()}  {_get(
                            props,
                            'data.data[0].order.unitOfQuantity',
                            '',
                          )}
                        </div>
                      </div>
                      <span>+</span>
                    </div>
                  </div>
                  <div
                    id={`upload${index}`}
                    className={`collapse}`}
                    aria-labelledby={`upload${index}`}
                    data-parent={`#upload${index}`}
                  >
                    {val.detail.map((val2, index2) => {
                      return (
                        <div
                          className={`${styles.dashboard_form} mt-3 card-body`}
                        >
                          <div
                            className={`${styles.bill_landing} border_color`}
                          >
                            <div className={`${styles.vessel_card}`}>
                              <div className="justify-content-between d-flex mt-4">
                                <div className={`${styles.form_heading}`}>
                                  Listing Details {index2}
                                </div>
                                {checkNan(props.returnLiftingData(val.deliveryOrder)?.balaceQuantity) >= 0 && <button
                                  className={styles.add_btn}
                                  onClick={(e) => {
                                    props.addNewSubLifting(index)
                                  }}
                                >
                                  Add
                                </button>}
                              </div>
                              <div className="row">
                                <div
                                  className={`${styles.form_group} col-lg-3 col-md-6 col-sm-6`}
                                >
                                  <div className="d-flex">
                                    <DateCalender
                                      saveDate={(startDate, name, index) => {
                                        console.log("thisis", startDate, name, index)
                                        saveDate2(startDate, name, index, index2)
                                      }}
                                      index={index}
                                      index2={index2}
                                      defaultDate={val2.dateOfLifting}
                                      name="dateOfLifting"
                                      labelName="Date of Lifting"
                                      dateFormat={'dd-MM-yyyyy'}
                                    />
                                    <img
                                      className={`${styles.calanderIcon} image_arrow img-fluid`}
                                      src="/static/caldericon.svg"
                                      alt="Search"
                                    />
                                  </div>
                                </div>
                                <div
                                  className={`${styles.form_group} col-lg-3 col-md-6 col-sm-6`}
                                >
                                  <input
                                    onWheel={event => event.currentTarget.blur()}
                                    className={`${styles.input_field} input form-control`}
                                    required
                                    type="text"
                                    onKeyDown={(evt) => ["e", "E", "+", "-"].includes(evt.key) && evt.preventDefault()}
                                    onFocus={(e) => {
                                      setIsFieldInFocus(true),
                                        e.target.type = 'number'
                                    }}
                                    onBlur={(e) => {
                                      setIsFieldInFocus(false),
                                        e.target.type = 'text'
                                    }}
                                    value={
                                      isFieldInFocus ?
                                        val2.liftingQuant :
                                        Number(val2.liftingQuant)?.toLocaleString() + ` ${_get(props, 'data.data[0].order.unitOfQuantity', '')}`}

                                    name="liftingQuant"
                                    onChange={(e) => {
                                      props.handleChange(
                                        e.target.name,
                                        e.target.value,
                                        index,
                                        index2,
                                      )
                                    }}
                                  />
                                  <label
                                    className={`${styles.label_heading} label_heading`}
                                  >
                                    Lifting Quantity
                                    <strong className="text-danger">*</strong>
                                  </label>
                                </div>
                                <div
                                  className={`${styles.form_group} col-lg-3 col-md-6 col-sm-6 `}
                                >
                                  <div className={styles.radio_form}>
                                    <div
                                      className={`${styles.sub_heading} sub_heading`}
                                    >
                                      Mode of Transportation
                                      <strong className="text-danger">*</strong>
                                    </div>
                                    {['radio'].map((type, index) => (
                                      <div
                                        key={index}
                                        className={styles.radio_group}
                                      >
                                        <Form.Check
                                          className={styles.radio}
                                          inline
                                          label="RR"
                                          name="modeOfTransportation"
                                          type={type}
                                          id={`inline-${type}-1`}
                                          value={'RR'}
                                          checked={val2.modeOfTransportation == "RR" ? "checked" : ""}
                                          onChange={(e) => {
                                            props.handleChange(
                                              e.target.name,
                                              e.target.value,
                                              index,
                                              index2,
                                            )
                                          }}
                                        />
                                        <Form.Check
                                          className={`${styles.radio} ml-4`}
                                          inline
                                          label="LR"
                                          name="modeOfTransportation"
                                          type={type}
                                          id={`inline-${type}-2`}
                                          value={'LR'}
                                          checked={val2.modeOfTransportation == "LR" ? "checked" : ""}
                                          onChange={(e) => {
                                            props.handleChange(
                                              e.target.name,
                                              e.target.value,
                                              index,
                                              index2,
                                            )
                                          }}
                                        />
                                      </div>
                                    ))}
                                  </div>
                                </div>
                                <div
                                  className={`${styles.form_group} col-lg-3 col-md-6 col-sm-6 `}
                                >
                                  <input
                                    className={`${styles.input_field} input form-control`}
                                    required
                                    type="text"
                                  />
                                  <label
                                    className={`${styles.label_heading} label_heading`}
                                  >
                                    RR/LR No.
                                    <strong className="text-danger">*</strong>
                                  </label>
                                </div>
                                <div
                                  className={`${styles.form_group} col-lg-3 col-md-6 col-sm-6 `}
                                >
                                  <input
                                    className={`${styles.input_field} input form-control`}
                                    required
                                    type="text"
                                  />
                                  <label
                                    className={`${styles.label_heading} label_heading`}
                                  >
                                    Destination
                                    <strong className="text-danger">*</strong>
                                  </label>
                                </div>
                                <div
                                  className={`${styles.form_group} col-lg-3 col-md-6 col-sm-6 `}
                                >
                                  <input
                                    className={`${styles.input_field} input form-control`}
                                    required
                                    type="text"
                                    name="eWayBill"
                                    value={val2.eWayBill}
                                    onChange={(e) => {
                                      props.handleChange(
                                        e.target.name,
                                        e.target.value,
                                        index,
                                        index2,
                                      )
                                    }}
                                  />
                                  <label
                                    className={`${styles.label_heading} label_heading`}
                                  >
                                    E-way Bill No.
                                    <strong className="text-danger">*</strong>
                                  </label>
                                </div>
                              </div>
                            </div>

                            <div className={`${styles.table_container} mt-5`}>
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
                                        <th>ACTION</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      {val2.modeOfTransportation !== '' && < tr className="table_row">
                                        <td className={styles.doc_name}>
                                          {val2.modeOfTransportation}{' '}
                                          <strong className="text-danger">
                                            *
                                          </strong>
                                        </td>
                                        <td>
                                          <img
                                            src="/static/pdf.svg"
                                            className={`${styles.pdfImage} img-fluid`}
                                            alt="Pdf"
                                          />
                                        </td>
                                        <td className={styles.doc_row}>
                                          {val2?.LRorRRDoc?.date ? moment(val2?.LRorRRDoc?.date).format('DD-MM-YYYY, h:mm A') : ''}

                                        </td>

                                        <td colSpan="2">
                                          <div
                                            className={styles.uploadBtnWrapper}
                                          >

                                            {val2?.LRorRRDoc?.originalName ?
                                              <div className={`${styles.certificate} text1 d-flex justify-content-between`}>
                                                <span>
                                                  {val2?.LRorRRDoc?.originalName}
                                                </span>
                                                <img
                                                  className={`${styles.close_image} image_arrow`}
                                                  src="/static/close.svg"
                                                  onClick={() => props.removeLiftinDoc("lr", index, index2)}
                                                  alt="Close"
                                                />{' '}
                                              </div>
                                              :
                                              <div
                                                className={
                                                  styles.uploadBtnWrapper
                                                }
                                              >
                                                <input
                                                  id="document3"
                                                  onChange={(e) =>
                                                    uploadDoc(
                                                      e,
                                                      'LRorRRDoc',
                                                      index,
                                                      index2,
                                                    )
                                                  }
                                                  type="file"
                                                  name="myfile"
                                                />
                                                <button
                                                  className={`${styles.upload_btn} btn`}
                                                >
                                                  Upload
                                                </button>
                                              </div>
                                            }

                                          </div>
                                        </td>
                                      </tr>}
                                      <tr className="table_row">
                                        <td className={styles.doc_name}>
                                          E-Way Bill{' '}
                                          <strong className="text-danger">
                                            *
                                          </strong>
                                        </td>
                                        <td>
                                          <img
                                            src="/static/pdf.svg"
                                            className={`${styles.pdfImage} img-fluid`}
                                            alt="Pdf"
                                          />
                                        </td>
                                        <td className={styles.doc_row}>
                                          {val2?.eWayBillDoc?.date ? moment(val2?.eWayBillDoc?.date).format('DD-MM-YYYY, h:mm A') : ''}
                                        </td>

                                        <td colSpan="2">
                                          {val2?.eWayBillDoc?.originalName ?
                                            <div className={`${styles.certificate} text1 d-flex justify-content-between`}>
                                              <span>
                                                {val2?.eWayBillDoc?.originalName}
                                              </span>
                                              <img
                                                className={`${styles.close_image}  image_arrow`}
                                                src="/static/close.svg"
                                                onClick={() => props.removeLiftinDoc("eway", index, index2)}
                                                alt="Close"
                                              />{' '}
                                            </div>
                                            :
                                            <div
                                              className={styles.uploadBtnWrapper}
                                            >
                                              <input
                                                id="document3"
                                                onChange={(e) =>
                                                  uploadDoc(
                                                    e,
                                                    'eWayBillDoc',
                                                    index,
                                                    index2,
                                                  )
                                                }
                                                type="file"
                                                name="myfile"
                                              />
                                              <button
                                                className={`${styles.upload_btn} btn`}
                                              >
                                                Upload
                                              </button>

                                              {/* <input type="file" name="myfile2" 
                                   onChange={(e)=>{

                                    uploadDoc(e,"eWayBillDoc",index1,index2)
                                  }}
                                  />
                                  <button
                                    className={`${styles.upload_action} btn`}
                                    
                                  >
                                    Upload
                                  </button> */}
                                            </div>
                                          }
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
                              </div>
                            </div>

                            {/* <div className={`${styles.vessel_card} mt-4 mb-4`}>
                    <button className={`${styles.saveBtn}`}>Save</button>
                  </div> */}
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>
              )
            })}


          <div className={`${styles.upload_main} mt-4 mb-5 upload_main`}>

            <UploadOther orderid={orderid} module="PaymentsInvoicing&Delivery" />
          </div>
        </div>
        <SaveBar rightBtn="Submit" handleSave={props.handleLiftingSubmit} rightBtnClick={props.handleLiftingSubmit} />

        {/* </div> */}
      </div>
    </>
  )
}
