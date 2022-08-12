/* eslint-disable @next/next/no-img-element */
import React from 'react'
import styles from './index.module.scss'
import { Form, Row, Col } from 'react-bootstrap'
import SaveBar from '../SaveBar'
import { useState, useEffect } from 'react'
import DateCalender from '../DateCalender'
import { useDispatch, useSelector } from 'react-redux'
import {
  GetAllForwardHedging,
  UpdateForwardHedging,
} from 'redux/ForwardHedging/action'
// import { UploadDocument } from 'redux/registerBuyer/action'
import UploadOther from '../UploadOther'
import _get from 'lodash/get'

export default function Index() {
  const dispatch = useDispatch()

  useEffect(() => {
    let ForwardHeading = sessionStorage.getItem('headgingId')
    dispatch(GetAllForwardHedging(`?forwardHedgingId=${ForwardHeading}`))
  }, [dispatch])

  const { allForwardHedging } = useSelector((state) => state.ForwardHedging)

  let hedgingData = _get(allForwardHedging, 'data[0]', '')

  const [list, setList] = useState({
    bankName: ' ',
    currency: ' ',
    bookedRate: ' ',
    bookedRateCurrency: ' ',
    bookedAmount: ' ',
    validityFrom: ' ',
    validityTo: ' ',
    closingDate: ' ',
    closingRate: ' ',
    remarks: ' ',
    balanceAmount: ' ',
    forwardSalesContract: null,
  })

  const saveHedgingData = (name, value) => {
    let newInput = { ...list }
    newInput[name] = value
    setList(newInput)
  }

  const saveDate = (value, name) => {
    // console.log(value, name, 'save date')
    const d = new Date(value)
    let text = d.toISOString()
    saveHedgingData(name, text)
  }

  const uploadDocument1 = (e) => {
    const newUploadDoc1 = { ...list }
    newUploadDoc1.forwardSalesContract = e.target.files[0]

    setList(newUploadDoc1)
  }

  const [cancel, setCancel] = useState(false)

  const handleCancel = () => {
    setCancel(true)
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
    let fd = new FormData()
    fd.append('forwardHedgingId', hedgingData?._id)
    fd.append('detail', JSON.stringify(list))
    fd.append('forwardSalesContract', list?.forwardSalesContract)

    dispatch(UpdateForwardHedging(fd))
  }

  return (
    <>
      <div className={`${styles.backgroundMain} mt-3 container-fluid`}>
        <div className="pl-3 pr-3 mb-5">
          <div className={`${styles.head_header} ml-5`}>
            <img
              className={`${styles.arrow} image_arrow img-fluid`}
              src="/static/keyboard_arrow_right-3.svg"
              alt="ArrowRight"
            />
            <h1 className={`${styles.heading}`}>Ramkrishanan Traders </h1>
          </div>
          <div
            className={`${styles.vessel_card} vessel_card mt-3 border_color`}
          >
            <div className={`${styles.main}  border_color card `}>
              <>
                <div
                  className={`${styles.head_container} card-header border_color head_container justify-content-between d-flex bg-transparent`}
                >
                  <h3 className={`${styles.heading}`}>Forward Hedging</h3>
                  <button
                    className={styles.add_btn}
                    onClick={() => {
                      // onAddClick()
                    }}
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
                          name="bankName"
                          onChange={(e) =>
                            saveHedgingData(e.target.name, e.target.value)
                          }
                          className={`${styles.input_field} ${styles.customSelect} input form-control`}
                        >
                          <option selected></option>
                          <option>Indo German</option>
                          <option>N/A</option>
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
                          name="currency"
                          onChange={(e) =>
                            saveHedgingData(e.target.name, e.target.value)
                          }
                          className={`${styles.input_field} ${styles.customSelect} input form-control`}
                        >
                          <option selected></option>
                          <option value="USD">USD</option>
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
                        name="bookedRateCurrency"
                        onChange={(e) =>
                          saveHedgingData(e.target.name, e.target.value)
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
                        onChange={(e) =>
                          saveHedgingData(e.target.name, e.target.value)
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
                          saveDate={saveDate}
                          labelName="Validity from"
                        />
                        <img
                          className={`${styles.calanderIcon} img-fluid`}
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
                          saveDate={saveDate}
                          labelName="Validity to"
                        />
                        <img
                          className={`${styles.calanderIcon} img-fluid`}
                          src="/static/caldericon.svg"
                          alt="Search"
                        />
                      </div>
                    </div>
                    <div
                      className={`${styles.form_group} col-lg-2 col-md-6 col-sm-6 `}
                    >
                      <button
                        onClick={() => handleCancel()}
                        className={`${styles.cancel_btn}`}
                      >
                        Cancel
                      </button>
                    </div>
                    <div
                      className={`${styles.form_group} col-lg-2 col-md-6 col-sm-6 `}
                    >
                      <div className={`${styles.label} text mt-n1`}>
                        Balance Amount
                      </div>
                      <span className={`${styles.value}`}>
                        {list?.bookedAmount}
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
                          onChange={(e) =>
                            saveHedgingData(e.target.name, e.target.value)
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
                            className={`${styles.calanderIcon} img-fluid`}
                            src="/static/caldericon.svg"
                            alt="Search"
                          />
                        </div>
                      </div>
                    </Row>
                  ) : (
                    ''
                  )}

                  <div className="d-flex mt-5 mb-">
                    <input
                      as="textarea"
                      rows={3}
                      name="remarks"
                      onChange={(e) =>
                        saveHedgingData(e.target.name, e.target.value)
                      }
                      className={`${styles.comment_field} form-control`}
                    />
                    <label className={`${styles.label_comment} label_heading`}>
                      Remarks
                    </label>
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
                            <th width="30%">ACTION</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="table_row">
                            <td className={styles.doc_name}>
                              Forward Sales Contract
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
                            <td>
                              {' '}
                              <div className={styles.uploadBtnWrapper}>
                                <button className={`${styles.uploadDoc} btn`}>
                                  Upload
                                </button>
                                <input
                                  type="file"
                                  onChange={(e) => uploadDocument1(e)}
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
              </>
            </div>

            <div className="mt-4">
              <UploadOther orderid={hedgingData?.order} />
            </div>
          </div>
        </div>

        <SaveBar handleSave={handleSave} rightBtn="Submit" />
      </div>
    </>
  )
}
