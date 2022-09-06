/* eslint-disable @next/next/no-img-element */
import React from 'react'
import styles from './index.module.scss'
import { Form, Row, Col } from 'react-bootstrap'
import SaveBar from '../SaveBar'
import { useState, useEffect } from 'react'
import DateCalender from '../DateCalender'
import Router from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import {
  GetAllForwardHedging,
  UpdateForwardHedging,
} from 'redux/ForwardHedging/action'
// import { UploadDocument } from 'redux/registerBuyer/action'
import UploadOther from '../UploadOther'
import _get from 'lodash/get'
import API from '../../utils/endpoints'
import Cookies from 'js-cookie'
import Axios from 'axios'
import { setPageName,setDynamicName,setDynamicOrder } from '../../redux/userData/action'

export default function Index() {
  const dispatch = useDispatch()

  useEffect(() => {
    let ForwardHeading = sessionStorage.getItem('headgingId')
    dispatch(GetAllForwardHedging(`?forwardHedgingId=${ForwardHeading}`))
  }, [dispatch])

  const { allForwardHedging } = useSelector((state) => state.ForwardHedging)

  let hedgingData = _get(allForwardHedging, 'data[0]', '')
  let hedgingDataDetail = _get(allForwardHedging, 'data[0].detail[0]', {})
  console.log(hedgingDataDetail, 'THIS IS HEDGING DATA')
 useEffect(() => {
    dispatch(setPageName('forward'))
    dispatch(setDynamicName(_get(allForwardHedging, 'data[0].company.companyName')))
    dispatch(setDynamicOrder(_get(allForwardHedging, 'data[0].order.orderId', {})))
  },[allForwardHedging])
  const [list, setList] = useState([
    {
      bankName: '',
      currency: 'INR',
      bookedRate: '',
      bookedRateCurrency: 'INR',
      bookedAmount: '',
      validityFrom: '',
      validityTo: '',
      closingDate: '',
      closingRate: '',
      remarks: '',
      balanceAmount: '',
      forwardSalesContract: null,
    },
  ])

  useEffect(() => {
    setList([
      {
        bankName: hedgingDataDetail?.bankName ?? '',
        currency: hedgingDataDetail?.currency || 'INR',
        bookedRate: hedgingDataDetail?.bookedRate,
        bookedRateCurrency: hedgingDataDetail?.bookedRateCurrency || 'INR',
        bookedAmount: hedgingDataDetail?.bookedAmount,
        validityFrom: hedgingDataDetail?.validityFrom,
        validityTo: hedgingDataDetail?.validityTo,
        closingDate: '',
        closingRate: '',
        remarks: hedgingDataDetail?.remarks,
        balanceAmount: hedgingDataDetail?.balanceAmount,
        forwardSalesContract: hedgingDataDetail?.forwardSalesContract,
      },
    ])
  }, [hedgingData])

  console.log(list, 'list')
  const onAddForwardHedging = () => {
    setList((prevState) => {
      return [
        ...prevState,
        {
          bankName: '',
          currency: 'INR',
          bookedRate: '',
          bookedRateCurrency: 'INR',
          bookedAmount: '',
          validityFrom : '',
          validityTo: '',
          closingDate: '',
          closingRate: '',
          remarks: '',
          balanceAmount: '',
          forwardSalesContract: null,
        },
      ]
    })
  }

  const saveHedgingData = (name, value, index=0) => {
    // const name = name
    // const value = value
    console.log(name,value,"Dsdff")
    setList((prevState) => {
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

  const saveDate = (value, name, index) => {
    // console.log(value, name, 'save date')
    const d = new Date(value)
    let text = d.toISOString()
    saveHedgingData(name, text, index)
  }

  const uploadDocument = async (e) => {
    // console.log(e, "response data")
    let fd = new FormData()
    fd.append('document', e.target.files[0])
    // dispatch(UploadCustomDoc(fd))

    let cookie = Cookies.get('SOMANI')
    const decodedString = Buffer.from(cookie, 'base64').toString('ascii')

    let [userId, refreshToken, jwtAccessToken] = decodedString.split('#')
    let headers = { authorization: jwtAccessToken, Cache: 'no-cache', 'Access-Control-Allow-Origin': '*' }
    try {
      let response = await Axios.post(
        `${API.corebaseUrl}${API.customClearanceDoc}`,
        fd,
        {
          headers: headers,
        },
      )
      // console.log(response.data.data, 'response data123')
      if (response.data.code === 200) {
        // dispatch(getCustomClearanceSuccess(response.data.data))

        return response.data.data
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

  const uploadDocument1 = async (e, index) => {
    // console.log(uploadDocument(e), 'function call')
    const doc = await uploadDocument(e)
    setList((prevState) => {
      const newState = prevState.map((obj, i) => {
        if (i == index) {
          return {
            ...obj,
            forwardSalesContract: doc,
          }
        }
        return obj
      })
      return newState
    })
    // setList(doc1 => {
    //   return { ...doc1, {forwardSalesContract: doc }}
    // })
  }

  const [cancel, setCancel] = useState(false)

  const handleCancel = () => {
    setCancel(true)
  }

  const handleClose = () => {
    setList((doc) => {
      return { ...doc, forwardSalesContract: null }
    })
  }

  // const onAddClick = () => {
  //   setList([
  //     ...list,
  //     {
  //       headingCard: '',
  //       isAddBtn: '',
  //       bankName: '',
  //       currency: '',
  //       booked: '',
  //       bookAmount: '',
  //       validityTo: '',
  //       validityFrom: '',
  //       isCancel: '',
  //       balanceAmount: '',
  //       closingRate: '',
  //       closingDate: '',
  //       remarks: '',
  //     },
  //   ])
  // }

  const [editInput, setEditInput] = useState(true)

  const handleDropdown = (e) => {
    if (e.target.value == 'Others') {
      setEditInput(false)
    } else {
      setEditInput(true)
    }
  }

  const handleSave = () => {
    let hedgingObj = [ ...list ]

    hedgingObj.balanceAmount = list.bookedAmount

    // let fd = new FormData()
    // fd.append('forwardHedgingId', hedgingData?._id)
    // fd.append('detail', JSON.stringify(list))
    // fd.append('forwardSalesContract', list?.forwardSalesContract)
    let obj = {
      forwardHedgingId: hedgingData?._id,
      detail: hedgingObj,
    }
    let task = 'save'
    dispatch(UpdateForwardHedging({ obj, task }))
  }
  const handleSubmit = () => {
    let hedgingObj = [ ...list ]

    // hedgingObj.balanceAmount = list.bookedAmount
    console.log(hedgingObj,"dasd")
   
    let obj = {
      forwardHedgingId: hedgingData?._id,
      detail: hedgingObj,
    }
    let task = 'submit'
    dispatch(UpdateForwardHedging({ obj, task }))
  }
  console.log(list, 'list')

  return (
    <>
      <div className={`${styles.backgroundMain} p-0 container-fluid`}>
        <div className={styles.main_page}>
          <div  className={`${styles.head_header} align-items-center`}>
            <img
              className={`${styles.arrow} image_arrow mr-2 img-fluid`}
              src="/static/keyboard_arrow_right-3.svg"
              alt="ArrowRight"
              onClick={() => Router.push('/forward-table')}
              
            />
            <h1 className={`${styles.heading}`}>
              {hedgingData?.company?.companyName}{' '}
            </h1>
          </div>
          <div className={`${styles.vessel_card} vessel_card border_color`}>
            <div className={`${styles.main}  border_color card `}>
              {list.map((item, index) => {
                return (
                  <>
                    <div
                      key={index}
                      className={`${styles.head_container} card-header align-items-center border_color head_container justify-content-between d-flex bg-transparent`}
                    >
                      <h3 className={`${styles.heading}`}>Forward Hedging</h3>
                      <button
                        className={styles.add_btn}
                        onClick={() => {
                          onAddForwardHedging()
                        }}
                      >
                        <span className={styles.add_sign}>+</span>Add
                      </button>
                    </div>
                    <div className={`${styles.dashboard_form} card-body`}>
                      <div className="row">
                        <div
                          className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6`}
                        >
                          <div className="d-flex">
                            <select
                              name="bankName"
                              onChange={(e) =>
                                saveHedgingData(
                                  e.target.name,
                                  e.target.value,
                                  index,
                                )
                              }
                              value={item.bankName}
                              className={`${styles.input_field} ${styles.customSelect} input form-control`}
                            >
                              <option selected>Select an option</option>
                              <option value="Indo German">Indo German</option>
                              <option value="Emergent Solutions">
                                Emergent Solutions
                              </option>
                            </select>
                            <label
                              className={`${styles.label_heading} label_heading`}
                            >
                              Bank Name
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
                          className={`${styles.form_group} col-lg-2 col-md-4 col-sm-6`}
                        >
                          <div className="d-flex">
                            <select
                              value={item.currency}
                              name="currency"
                              onChange={(e) =>
                                saveHedgingData(
                                  e.target.name,
                                  e.target.value,
                                  index,
                                )
                              }
                              className={`${styles.input_field} ${styles.customSelect} input form-control`}
                            >
                              <option selected>Select an option</option>
                              <option value="INR">INR</option>
                              <option value="USD">USD</option>
                              <option value="EURO">EURO</option>
                              <option value="POUND">POUND</option>
                            </select>
                            <label
                              className={`${styles.label_heading} label_heading`}
                            >
                              Currency<strong className="text-danger">*</strong>
                            </label>
                            <img
                              className={`${styles.arrow} image_arrow img-fluid`}
                              src="/static/inputDropDown.svg"
                              alt="Search"
                            />
                          </div>
                        </div>
                        <div
                          className={`${styles.form_group} col-lg-2 col-md-4 col-sm-6`}
                        >
                          <input
                            className={`${styles.input_field} input form-control`}
                            required
                            type="number"
                            name="bookedRate"
                            value={item.bookedRate}
                            onKeyDown={(evt) =>
                              evt.key === 'e' && evt.preventDefault()
                            }

                            onChange={(e) =>
                              saveHedgingData(
                                e.target.name,
                                e.target.value,
                                index,
                              )
                            }
                          />
                          <label
                            className={`${styles.label_heading} label_heading`}
                          >
                            Booked @<strong className="text-danger">*</strong>
                          </label>
                        </div>
                        <div
                          className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6`}
                        >
                          <input
                            className={`${styles.input_field} input form-control`}
                            type="number"
                            required
                            name="bookedAmount"
                            value={item.bookedAmount}
                          
                            onKeyDown={(evt) =>
                              evt.key === 'e' && evt.preventDefault()
                            }
                            onChange={(e) =>
                              saveHedgingData(
                                e.target.name,
                                e.target.value,
                                index,
                              )
                            }
                          />
                          <label
                            className={`${styles.label_heading} label_heading`}
                          >
                            Booked Amount
                            <strong className="text-danger">*</strong>
                          </label>
                        </div>

                        <div
                          className={`${styles.form_group} col-lg-2 col-md-6 col-sm-6`}
                        >
                          <div className="d-flex">
                            <DateCalender
                              name="validityFrom"
                              defaultDate={item?.validityFrom?.split('T')[0]}
                              saveDate={saveDate}
                              labelName="Validity from"
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
                              name="validityTo"
                               defaultDate={item?.validityTo?.split('T')[0]}
                              // defaultDate={list?.validityTo}
                              saveDate={saveDate}
                              labelName="Validity to"
                            />
                            <img
                              className={`${styles.calanderIcon} image_arrow img-fluid`}
                              src="/static/caldericon.svg"
                              alt="Search"
                            />
                          </div>
                        </div>
                        {/* <div
                          className={`${styles.form_group} col-lg-2 col-md-6 col-sm-6 `}
                        >
                          <button
                            onClick={() => handleCancel()}
                            className={`${styles.cancel_btn}`}
                          >
                            Cancel
                          </button>
                        </div> */}
                        <div
                          className={`${styles.form_group} col-lg-2 col-md-6 col-sm-6 `}
                        >
                          <div className={`${styles.label} text mt-n1`}>
                            Balance Amount
                          </div>
                          <span className={`${styles.value}`}>
                            {item?.bookedAmount}
                          </span>
                        </div>
                      </div>
                      {cancel ? (
                        <Row>
                          <div
                            className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6`}
                          >
                            <input
                              className={`${styles.input_field} input form-control`}
                              type="number"
                              required
                              name="closingRate"
                              value={item?.closingRate}
                              onKeyDown={(evt) =>
                                evt.key === 'e' && evt.preventDefault()
                              }
                              onChange={(e) =>
                                saveHedgingData(
                                  e.target.name,
                                  e.target.value,
                                  index,
                                )
                              }
                            />
                            <label
                              className={`${styles.label_heading} label_heading`}
                            >
                              Closing Rate
                              <strong className="text-danger">*</strong>
                            </label>
                          </div>
                          <div
                            className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6`}
                          >
                            <div className="d-flex">
                              <DateCalender
                                name="closingDate"
                                saveDate={saveDate}
                                labelName="Closing Date"
                              />
                              <img
                                className={`${styles.calanderIcon} image_arrow img-fluid`}
                                src="/static/caldericon.svg"
                                alt="Search"
                              />
                            </div>
                          </div>
                        </Row>
                      ) : (
                        ''
                      )}

                      <div className="mt-5">
                        <div className="position-relative">
                          <input
                            as="textarea"
                            rows={3}
                            name="remarks"
                            defaultValue={list?.remarks}
                            required
                            onChange={(e) =>
                              saveHedgingData(
                                e.target.name,
                                e.target.value,
                                index,
                              )
                            }
                            className={`${styles.comment_field} input form-control`}
                          />
                          <label
                            className={`${styles.label_comment} ${styles.label_heading} label_heading`}
                          >
                            Remarks
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className={`${styles.table_container}`}>
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
                                <th width="30%">ACTION</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr className="table_row">
                                <td className={styles.doc_name}>
                                  Forward Sales Contract
                                  <strong className="text-danger ml-1">
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
                                  28-02-2022,5:30 PM
                                </td>
                                <td>
                                  {/* <div className={styles.uploadBtnWrapper}>
                                <button className={`${styles.uploadDoc} btn`}>
                                  Upload
                                </button>
                                <input
                                  type="file"
                                  onChange={(e) => uploadDocument1(e)}
                                  name="myfile"
                                />
                              </div> */}
                                  {item &&
                                  item?.forwardSalesContract == null ? (
                                    <>
                                      <div className={styles.uploadBtnWrapper}>
                                        <input
                                          type="file"
                                          name="myfile"
                                          accept="application/msword, application/vnd.ms-excel, application/vnd.ms-powerpoint,text/plain, application/pdf, .docx"
                                          onChange={(e) =>
                                            uploadDocument1(e, index)
                                          }
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
                                    <div className={`${styles.certificate} d-flex justify-content-between`}>
                                      <span>
                                        {item?.forwardSalesContract?.originalName}
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
                  </>
                )
              })}
            </div>

            <div className="mt-4">
              <UploadOther
                module="Loading-Transit-Unloading"
                orderid={hedgingData?.order?._id}
              />
            </div>
          </div>
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
