/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from 'react'
import styles from './index.module.scss'
import { Form, Row, Col, Modal } from 'react-bootstrap'
import SaveBar from '../SaveBar'
import UploadOther from '../UploadOther'
import DateCalender from '../DateCalender'
import moment from 'moment'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import Image from 'next/image'

export default function Index({
  customData,
  OrderId,
  uploadDoc,
  setComponentId,
  componentId,
}) {
  return (
    <>
      <div className={`${styles.backgroundMain} container-fluid`}>
        <div className={`${styles.vessel_card} border_color`}>
          <div className={`${styles.main} vessel_card card border_color`}>
            {/* <div className='order_card'>
           <div className="row mb-5">
           <div
              className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6`}
              style={{ marginTop: '37px' }}>
              <p className={` label_heading`}>
              Branch  
              </p>
              <span>Abc</span>
            </div>
           </div>
           </div> */}

            <div className={`${styles.dashboard_form} card-body`}>
              <div className="d-flex align-items-center justify-content-between">
                <h3 className={styles.form_heading}>Purchase Details</h3>
                <div className="d-flex align-items-center">
                  <div className="d-flex align-items-center">
                    <label className={`${styles.dropDown_label} text`}>
                      Cost Center:
                    </label>
                    <div className="position-relative">
                      <select
                        className={`${styles.dropDown} ${styles.customSelect} input`}
                      >
                        <option>abc</option>
                        <option value={true}>Yes</option>
                        <option value={false}>No</option>
                      </select>
                      <div className={`${styles.arrow} image_arrow`}>
                      <Image
                        width="13px"
                        height="8px"
                        src="/static/inputDropDown.svg"
                        alt="Search"
                      />
                    </div>
                    </div>
                  </div>

                  <div className="d-flex justify-content-between align-items-center">
                    <div className={`${styles.radio_form} `}>
                      {['radio'].map((type) => (
                        <div
                          key={`inline-${type}`}
                          className={styles.radio_group}
                        >
                          <Form.Check
                            className={styles.radio}
                            inline
                            label="Domestic"
                            type={type}
                            id={`inline-${type}-1`}
                          />

                          <Form.Check
                            className={styles.radio}
                            inline
                            label="Import"
                            type={type}
                            id={`inline-${type}-2`}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="row mb-5">
                <div
                  className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6 `}
                >
                  <div className="d-flex">
                    <select
                      className={`${styles.input_field} ${styles.customSelect} input form-control`}
                    >
                      <option value="">CHA</option>
                    </select>
                    <label className={`${styles.label_heading} label_heading`}>
                      Party Type<strong className="text-danger">*</strong>
                    </label>
                    <div className={`${styles.img_arrow} image_arrow`}>
                      <Image
                        width="13px"
                        height="8px"
                        src="/static/inputDropDown.svg"
                        alt="Search"
                      />
                    </div>
                  </div>
                </div>

                <div
                  className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6 `}
                >
                  <input
                    className={`${styles.input_field} input form-control`}
                    type="text"
                    required
                  />

                  <label className={`${styles.label_heading} label_heading`}>
                    Party Name <strong className="text-danger">*</strong>
                  </label>
                </div>
                <div
                  className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6 `}
                >
                  <div className="d-flex">
                    <select
                      className={`${styles.input_field} ${styles.customSelect} input form-control`}
                    >
                      <option value="">G3F3487R348</option>
                    </select>
                    <label className={`${styles.label_heading} label_heading`}>
                      GSTIN<strong className="text-danger">*</strong>
                    </label>
                    <div className={`${styles.img_arrow} image_arrow`}>
                      <Image
                        width="13px"
                        height="8px"
                        src="/static/inputDropDown.svg"
                        alt="Search"
                      />
                    </div>
                  </div>
                </div>
                <div
                  className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6`}
                >
                  <div className="d-flex">
                    <DateCalender
                      name="dateOfStorage"
                      labelName="Invoice Date"
                    />
                    <div className={`${styles.calanderIcon} image_arrow`}>
                      <Image
                        width="22px"
                        height="24px"
                        src="/static/caldericon.svg"
                        alt="Calender"
                      />
                    </div>
                  </div>
                </div>
                <div
                  className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6 `}
                >
                  <input
                    className={`${styles.input_field} input form-control`}
                    type="text"
                    name="boeDetails.accessibleValue"
                    required
                    onKeyDown={(evt) =>
                      ['e', 'E', '+', '-'].includes(evt.key) &&
                      evt.preventDefault()
                    }
                  />
                  <label className={`${styles.label_heading} label_heading`}>
                    Invoice No. <strong className="text-danger">*</strong>
                  </label>
                </div>
                <div
                  className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6 `}
                >
                  <div className="d-flex">
                    <select
                      className={`${styles.input_field} ${styles.customSelect} input form-control`}
                    >
                      <option value="">Goods</option>
                      <option value="">Services</option>
                    </select>
                    <label className={`${styles.label_heading} label_heading`}>
                      Services/Goods<strong className="text-danger">*</strong>
                    </label>
                    <div className={`${styles.img_arrow} image_arrow`}>
                      <Image
                        width="13px"
                        height="8px"
                        src="/static/inputDropDown.svg"
                        alt="Search"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className={`${styles.bill_landing} card border_color mt-4`}>
                <div
                  className={`${styles.vessel_card} align-items-center border_color head_container justify-content-between d-flex bg-transparent`}
                >
                  <div className={`${styles.card_sub_heading}`}>
                    Transactional Details
                  </div>
                  <div className="d-flex">
                    <button className={styles.add_btn}>
                      <span className={styles.add_sign}>+</span>Add
                    </button>
                    <div className={`${styles.img_arrow} mt-n2 image_arrow`}>
                      <Image
                        width="13px"
                        height="8px"
                        src="/static/inputDropDown.svg"
                        alt="Search"
                      />
                    </div>
                  </div>
                </div>

                <div className="row m-3">
                  <div
                    className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6 `}
                  >
                    <div className="d-flex">
                      <select
                        className={`${styles.input_field} ${styles.customSelect} input form-control`}
                      >
                        <option value="">CHA</option>
                      </select>
                      <label
                        className={`${styles.label_heading} label_heading`}
                      >
                        Transactional Type
                        <strong className="text-danger">*</strong>
                      </label>
                      <div className={`${styles.img_arrow} image_arrow`}>
                        <Image
                          width="13px"
                          height="8px"
                          src="/static/inputDropDown.svg"
                          alt="Search"
                        />
                      </div>
                    </div>
                  </div>
                  <div
                    className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6 `}
                  >
                    <div className="d-flex">
                      <select
                        className={`${styles.input_field} ${styles.customSelect} input form-control`}
                      >
                        <option value="">2345588</option>
                      </select>
                      <label
                        className={`${styles.label_heading} label_heading`}
                      >
                        HSN/Services Code
                        <strong className="text-danger">*</strong>
                      </label>
                      <div className={`${styles.img_arrow} image_arrow`}>
                        <Image
                          width="13px"
                          height="8px"
                          src="/static/inputDropDown.svg"
                          alt="Search"
                        />
                      </div>
                    </div>
                  </div>
                  <div
                    className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6 `}
                  >
                    <input
                      className={`${styles.input_field} input form-control`}
                      type="text"
                      required
                    />

                    <label className={`${styles.label_heading} label_heading`}>
                      Quantity <strong className="text-danger">*</strong>
                    </label>
                  </div>

                  <div
                    className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6 `}
                  >
                    <input
                      className={`${styles.input_field} input form-control`}
                      type="text"
                      name="boeDetails.accessibleValue"
                      required
                      onKeyDown={(evt) =>
                        ['e', 'E', '+', '-'].includes(evt.key) &&
                        evt.preventDefault()
                      }
                    />
                    <label className={`${styles.label_heading} label_heading`}>
                      Price <strong className="text-danger">*</strong>
                    </label>
                  </div>
                  <div
                    className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6 `}
                  >
                    <input
                      className={`${styles.input_field} input form-control`}
                      type="text"
                      name="boeDetails.accessibleValue"
                      required
                      onKeyDown={(evt) =>
                        ['e', 'E', '+', '-'].includes(evt.key) &&
                        evt.preventDefault()
                      }
                    />
                    <label className={`${styles.label_heading} label_heading`}>
                      Basic Amount <strong className="text-danger">*</strong>
                    </label>
                  </div>
                  <div
                    className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6 `}
                  >
                    <input
                      className={`${styles.input_field} input form-control`}
                      type="text"
                      name="boeDetails.accessibleValue"
                      required
                      onKeyDown={(evt) =>
                        ['e', 'E', '+', '-'].includes(evt.key) &&
                        evt.preventDefault()
                      }
                    />
                    <label className={`${styles.label_heading} label_heading`}>
                      IGST <strong className="text-danger">*</strong>
                    </label>
                  </div>
                  <div
                    className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6 `}
                  >
                    <input
                      className={`${styles.input_field} input form-control`}
                      type="text"
                      name="boeDetails.accessibleValue"
                      required
                      onKeyDown={(evt) =>
                        ['e', 'E', '+', '-'].includes(evt.key) &&
                        evt.preventDefault()
                      }
                    />
                    <label className={`${styles.label_heading} label_heading`}>
                      CGST <strong className="text-danger">*</strong>
                    </label>
                  </div>
                  <div
                    className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6 `}
                  >
                    <input
                      className={`${styles.input_field} input form-control`}
                      type="text"
                      name="boeDetails.accessibleValue"
                      required
                      onKeyDown={(evt) =>
                        ['e', 'E', '+', '-'].includes(evt.key) &&
                        evt.preventDefault()
                      }
                    />
                    <label className={`${styles.label_heading} label_heading`}>
                      SGST <strong className="text-danger">*</strong>
                    </label>
                  </div>
                  <div
                    className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6 `}
                  >
                    <input
                      className={`${styles.input_field} input form-control`}
                      type="text"
                      name="boeDetails.accessibleValue"
                      required
                      onKeyDown={(evt) =>
                        ['e', 'E', '+', '-'].includes(evt.key) &&
                        evt.preventDefault()
                      }
                    />
                    <label className={`${styles.label_heading} label_heading`}>
                      TDS <strong className="text-danger">*</strong>
                    </label>
                  </div>
                  <div
                    className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6 `}
                  >
                    <input
                      className={`${styles.input_field} input form-control`}
                      type="text"
                      name="boeDetails.accessibleValue"
                      required
                      onKeyDown={(evt) =>
                        ['e', 'E', '+', '-'].includes(evt.key) &&
                        evt.preventDefault()
                      }
                    />
                    <label className={`${styles.label_heading} label_heading`}>
                      TCS
                    </label>
                  </div>
                  <div
                    className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6 `}
                  >
                    <input
                      className={`${styles.input_field} input form-control`}
                      type="text"
                      name="boeDetails.accessibleValue"
                      required
                      onKeyDown={(evt) =>
                        ['e', 'E', '+', '-'].includes(evt.key) &&
                        evt.preventDefault()
                      }
                    />
                    <label className={`${styles.label_heading} label_heading`}>
                      Total <strong className="text-danger">*</strong>
                    </label>
                  </div>
                </div>
              </div>
              <div className={`${styles.bill_landing} card border_color mt-4`}>
                <div
                  className={`${styles.vessel_card} align-items-center border_color head_container justify-content-between d-flex bg-transparent`}
                >
                  <div className={`${styles.card_sub_heading}`}>
                    Bank Details Details
                  </div>
                  <div className={`${styles.img_arrow} image_arrow`}>
                    <Image
                      width="13px"
                      height="8px"
                      src="/static/inputDropDown.svg"
                      alt="Search"
                    />
                  </div>
                </div>

                <div className="row m-3">
                  <div
                    className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6 `}
                  >
                    <div className="d-flex">
                      <select
                        className={`${styles.input_field} ${styles.customSelect} input form-control`}
                      >
                        <option value="">Abc Bank</option>
                        <option value="">AU Bank</option>
                      </select>
                      <label
                        className={`${styles.label_heading} label_heading`}
                      >
                        Bank Name<strong className="text-danger">*</strong>
                      </label>
                      <div className={`${styles.img_arrow} image_arrow`}>
                        <Image
                          width="13px"
                          height="8px"
                          src="/static/inputDropDown.svg"
                          alt="Search"
                        />
                      </div>
                    </div>
                  </div>
                  <div
                    className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6`}
                    style={{ marginTop: '37px' }}
                  >
                    <p className={` label_heading`}>Branch</p>
                    <span>Abc</span>
                  </div>
                  <div
                    className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6 `}
                  >
                    <input
                      className={`${styles.input_field} input form-control`}
                      type="number"
                      required
                      onKeyDown={(evt) =>
                        ['e', 'E', '+', '-'].includes(evt.key) &&
                        evt.preventDefault()
                      }
                    />

                    <label className={`${styles.label_heading} label_heading`}>
                      Account No. <strong className="text-danger">*</strong>
                    </label>
                  </div>
                  <div
                    className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6 `}
                  >
                    <input
                      className={`${styles.input_field} input form-control`}
                      type="text"
                      required
                      // onKeyDown={(evt) =>
                      //   ['e', 'E', '+', '-'].includes(evt.key) &&
                      //   evt.preventDefault()
                      // }
                    />

                    <label className={`${styles.label_heading} label_heading`}>
                      IFSC No. <strong className="text-danger">*</strong>
                    </label>
                  </div>
                  <div className={`${styles.form_group} col-lg-8 col-md-12`}>
                    <input
                      className={`${styles.input_field} input form-control`}
                      type="text"
                      required
                    />

                    <label className={`${styles.label_heading} label_heading`}>
                      Address <strong className="text-danger">*</strong>
                    </label>
                  </div>
                </div>
              </div>

              <Row className="mt-4">
                <Col lg={12}>
                  <div className="mt-4">
                    <input
                      as="textarea"
                      rows={3}
                      required
                      className={`${styles.comment_field} ${styles.input_field} input form-control`}
                      // style={{ backgroundColor: 'none' }}
                    />
                    <label
                      className={`${styles.comment_heading} ${styles.label_heading} label_heading`}
                    >
                      Narration Remarks
                    </label>
                  </div>
                </Col>
              </Row>

              <div className={`${styles.bill_landing} card border_color mt-4`}>
                <div
                  className={`${styles.vessel_card} align-items-center border_color head_container justify-content-between d-flex bg-transparent`}
                >
                  <div className={`${styles.card_sub_heading}`}>Documents</div>
                  <div className={`${styles.img_arrow} image_arrow`}>
                    <Image
                      width="13px"
                      height="8px"
                      src="/static/inputDropDown.svg"
                      alt="Search"
                    />
                  </div>
                </div>
                <div className={`${styles.table_form}`}>
                  <div className={styles.table_container}>
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
                                <Image
                                  width="14px"
                                  height="14px"
                                  className={`${styles.sort_img}`}
                                  src="/static/icons8-sort-24.svg"
                                  alt="Sort icon"
                                />
                              </th>
                              <th>
                                FORMAT{' '}
                                <Image
                                  width="14px"
                                  height="14px"
                                  className={`${styles.sort_img}`}
                                  src="/static/icons8-sort-24.svg"
                                  alt="Sort icon"
                                />
                              </th>
                              <th>
                                DOCUMENT DATE{' '}
                                <Image
                                  width="14px"
                                  height="14px"
                                  className={`${styles.sort_img}`}
                                  src="/static/icons8-sort-24.svg"
                                  alt="Sort icon"
                                />
                              </th>
                              <th>ACTION</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="table_row">
                              <td>
                                Purchase Invoice
                                <strong className="text-danger">*</strong>
                              </td>
                              <td>
                                <Image
                                  width="57px"
                                  height="25px"
                                  src="/static/pdf.svg"
                                  className={`${styles.pdfImage} img-fluid`}
                                  alt="Pdf"
                                />
                              </td>
                              <td>28-02-2022,5:30 PM</td>
                              <td>
                                {' '}
                                <div className={`${styles.delete_image}`}>
                                  <Image
                                    src="/static/delete.svg"
                                    width="40px"
                                    height="40px"
                                    alt="Bin"
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

                <div
                  className={`${styles.vessel_card} mt-5 mb-5 align-items-center border_color head_container  bg-transparent`}
                >
                  <div className={`${styles.card_sub_heading}`}>
                    Other Documents
                  </div>

                  <div className="row">
                    <div
                      className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6 `}
                    >
                      <div className="d-flex">
                        <select
                          className={`${styles.input_field} ${styles.customSelect} input form-control`}
                        >
                          <option value="">Others</option>
                          <option value="">Certificate</option>
                        </select>
                        <label
                          className={`${styles.label_heading} label_heading`}
                        >
                          Document Type
                          <strong className="text-danger">*</strong>
                        </label>
                        <div className={`${styles.img_arrow} image_arrow`}>
                          <Image
                            width="13px"
                            height="8px"
                            src="/static/inputDropDown.svg"
                            alt="Search"
                          />
                        </div>
                      </div>
                    </div>

                    <div
                      className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6 `}
                    >
                      <input
                        className={`${styles.input_field} input form-control`}
                        type="text"
                        required
                      />
                      <label
                        className={`${styles.label_heading} label_heading`}
                      >
                        Please Specify Document Name
                      </label>
                    </div>
                    <div
                      className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6 `}
                    >
                      <div className={styles.uploadBtnWrapper}>
                        <input
                          id="containerExcel"
                          onChange={(e) => uploadDocHandler1(e)}
                          type="file"
                          name="myfile"
                          accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
                        />
                        <button className={`${styles.upload_button} btn`}>
                          Upload
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <SaveBar rightBtn="Submit" />
      </div>
    </>
  )
}
