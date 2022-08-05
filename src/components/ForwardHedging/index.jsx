import React from 'react'
import styles from './index.module.scss'
import { Form, Row, Col } from 'react-bootstrap'
import SaveBar from '../SaveBar'
import { useState } from 'react'
import DateCalender from '../DateCalender'
import { useDispatch, useSelector } from 'react-redux'
import { GetForwardHedging } from 'redux/ForwardHedging/action'
import { UploadDocument } from 'redux/registerBuyer/action'
import UploadOther from '../UploadOther'

export default function Index() {
  const dispatch = useDispatch()

  let id = sessionStorage.getItem('ObjId')
  let ForwardHeading = sessionStorage.getItem('ForwHeadId')
  dispatch(GetForwardHedging(`?forwardHedgingId=${ForwardHeading}`))
  const [list, setList] = useState([
    {
      headingCard: '',
      isAddBtn: '',
      bankName: '',
      currency: '',
      booked: '',
      bookAmount: '',
      validityTo: '',
      validityFrom: '',
      isCancel: '',
      balanceAmount: '',
      closingRate: '',
      closingDate: '',
      remarks: '',
    },
  ])

  const onAddClick = () => {
    setList([
      ...list,
      {
        headingCard: '',
        isAddBtn: '',
        bankName: '',
        currency: '',
        booked: '',
        bookAmount: '',
        validityTo: '',
        validityFrom: '',
        isCancel: '',
        balanceAmount: '',
        closingRate: '',
        closingDate: '',
        remarks: '',
      },
    ])
  }

  const [editInput, setEditInput] = useState(true)

  const handleDropdown = (e) => {
    if (e.target.value == 'Others') {
      setEditInput(false)
    } else {
      setEditInput(true)
    }
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
          <div className={`${styles.vessel_card} mt-3 border_color`}>
            <div className={`${styles.main} border_color card `}>
              {list &&
                list.map((val, index) => (
                  <>
                    <div
                      className={`${styles.head_container} card-header border_color head_container justify-content-between d-flex bg-transparent`}
                    >
                      <h3 className={`${styles.heading}`}>Forward Hedging</h3>
                      <button
                        className={styles.add_btn}
                        onClick={(e) => {
                          onAddClick()
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
                              className={`${styles.input_field} ${styles.customSelect} input form-control`}
                            >
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
                              className={`${styles.arrow} img-fluid`}
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
                              className={`${styles.input_field} ${styles.customSelect} input form-control`}
                            >
                              <option>USD</option>
                              <option>N/A</option>
                            </select>
                            <label
                              className={`${styles.label_heading} label_heading`}
                            >
                              Currency<strong className="text-danger">*</strong>
                            </label>
                            <img
                              className={`${styles.arrow} img-fluid`}
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
                            type="text"
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
                            type="text"
                            required
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
                            <DateCalender labelName="Validity from" />
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
                            <DateCalender labelName="Validity to" />
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
                          <button className={`${styles.cancel_btn}`}>
                            Cancel
                          </button>
                        </div>
                        <div
                          className={`${styles.form_group} col-lg-2 col-md-6 col-sm-6 `}
                        >
                          <div className={`${styles.label} text mt-n1`}>
                            Balance Amount
                          </div>
                          <span className={`${styles.value}`}>24,000</span>
                        </div>
                      </div>
                      <Row>
                        <div
                          className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6`}
                        >
                          <input
                            className={`${styles.input_field} input form-control`}
                            type="text"
                            required
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
                            <DateCalender labelName="Closing Date" />
                            <img
                              className={`${styles.calanderIcon} img-fluid`}
                              src="/static/caldericon.svg"
                              alt="Search"
                            />
                          </div>
                        </div>
                      </Row>

                      <div className="d-flex mt-5 mb-">
                        <input
                          as="textarea"
                          rows={3}
                          className={`${styles.comment_field} form-control`}
                        />
                        <label
                          className={`${styles.label_comment} label_heading`}
                        >
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
                                <th>ACTION</th>
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
                                  {' '}
                                  <input
                                    className={styles.input_field}
                                    type="text"
                                    placeholder="Nomination_Document.pdf"
                                  />
                                  <img
                                    className={`${styles.close_image} img-fluid `}
                                    src="/static/close.svg"
                                    alt="close"
                                  />
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </>
                ))}
            </div>

            <div className="mt-4">
              <UploadOther />
            </div>
          </div>
        </div>

        <SaveBar rightBtn="Submit" />
      </div>
    </>
  )
}
