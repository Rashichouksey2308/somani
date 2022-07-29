import React from 'react'
import styles from './index.module.scss'
import { Form, Row, Col } from 'react-bootstrap'
// import SaveBar from '../SaveBar'
import InspectionDocument from '../../src/components/InspectionDocument'
import DateCalender from '../../src/components/DateCalender'

export default function Index() {
  return (
    <>
      <div className={`${styles.backgroundMain} container-fluid`}>
        <div className={`${styles.vessel_card} m-3 border_color`}>
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
                  <span className={styles.value}>Coal</span>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6">
                  <div className={`${styles.label} text`}>Consignor Name</div>
                  <span className={styles.value}>
                    Indo German International Pvt Ltd
                  </span>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6">
                  <div className={`${styles.label} text`}>Consignee Name</div>
                  <span className={styles.value}>Bengal Energy Limited</span>
                </div>
              </div>
            </div>
          </div>
          <div className={`${styles.wrapper} border_color mt-4 card`}>
            <div className="d-lg-flex align-items-center justify-content-between d-inline-block  pl-4">
              <div className="row w-75">
                <div className="col-lg-2">
                  <h2 className="pt-2">Delivery Order</h2>
                </div>
                <div className={`${styles.form_group} col-lg-4`}>
                  <div className="d-flex">
                    <select
                      className={`${styles.input_field} ${styles.customSelect} input form-control`}
                      style={{ height: '46px', width: '277px' }}
                    >
                      <option>Indo German</option>
                      <option>Balaji Traders</option>
                    </select>

                    <img
                      className={`${styles.arrow} img-fluid`}
                      src="/static/inputDropDown.svg"
                      alt="Search"
                    />
                  </div>
                </div>
                <div className="col-lg-4 pt-2">
                  <div className="d-flex">
                    <div className={`${styles.label} mr-3 text`}>
                      DO Quantity
                    </div>
                    <div className={`${styles.do_number}`}>20,000 MT</div>
                  </div>
                </div>
              </div>
              <button className={styles.add_btn}>
                <span className={styles.add_sign}>+</span>Add
              </button>
            </div>
          </div>
          <div className={`${styles.main} mt-4 card border_color`}>
            <div
              className={`${styles.head_container} card-header border_color head_container d-flex justify-content-between bg-transparent`}
              data-toggle="collapse"
              data-target="#uploadOther"
              aria-expanded="true"
              aria-controls="uploadOther"
            >
              <h3 className={`${styles.heading}`}>Ramal001-000001/05</h3>
              <div className="d-flex">
                <div className="d-flex mr-5">
                  <div className={`${styles.label_heading} mr-3 label_heading`}>
                    DO Quantity
                  </div>
                  <div className={`${styles.do_number} mr-4`}>20,000 MT</div>
                </div>
                <div className="d-flex mr-5">
                  <div className={`${styles.label_heading} mr-3 label_heading`}>
                    Balance Quantity
                  </div>
                  <div className={`${styles.do_number} mr-4`}>8,000 MT</div>
                </div>
                <span>+</span>
              </div>
            </div>
            <div
              id="uploadOther"
              className="collapse"
              aria-labelledby="uploadOther"
              data-parent="#uploadOther"
            >
              <div className={`${styles.dashboard_form} mt-3 card-body`}>
                <div className={`${styles.bill_landing} border_color`}>
                  <div className={`${styles.vessel_card}`}>
                    <div className="justify-content-between d-flex mt-4">
                      <div className={`${styles.form_heading}`}>
                        Listing Details 1
                      </div>
                      <button className={styles.add_btn}>Add</button>
                    </div>
                    <div className="row">
                      <div
                        className={`${styles.form_group} col-lg-3 col-md-6 col-sm-6`}
                      >
                        <div className="d-flex">
                          <DateCalender labelName="Date of Lifting" />
                          <img
                            className={`${styles.calanderIcon} img-fluid`}
                            src="/static/caldericon.svg"
                            alt="Search"
                          />
                        </div>
                      </div>
                      <div
                        className={`${styles.form_group} col-lg-3 col-md-6 col-sm-6`}
                      >
                        <input
                          className={`${styles.input_field} input form-control`}
                          required
                          type="number"
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
                          <div className={`${styles.sub_heading} sub_heading`}>
                            Mode of Transportation
                            <strong className="text-danger">*</strong>
                          </div>
                          {['radio'].map((type, index) => (
                            <div key={index} className={styles.radio_group}>
                              <Form.Check
                                className={styles.radio}
                                inline
                                label="RR"
                                name="group1"
                                type={type}
                                id={`inline-${type}-1`}
                              />
                              <Form.Check
                                className={`${styles.radio} ml-4`}
                                inline
                                label="e-Way Bill"
                                name="group1"
                                type={type}
                                id={`inline-${type}-2`}
                              />
                            </div>
                          ))}
                        </div>
                      </div>
                      <div
                        className={`${styles.form_group} col-lg-3 col-md-6 col-sm-6 `}
                      >
                        <div className="d-flex">
                          <select
                            className={`${styles.input_field} ${styles.customSelect} input form-control`}
                          >
                            <option value="India">IGIPL</option>
                            <option value="America">UIUI</option>
                          </select>
                          <label
                            className={`${styles.label_heading} label_heading`}
                          >
                            Payment By
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
                        className={`${styles.form_group} col-lg-3 col-md-6 col-sm-6`}
                      >
                        <input
                          className={`${styles.input_field} input form-control`}
                          required
                          type="text"
                        />
                        <label
                          className={`${styles.label_heading} label_heading`}
                        >
                          Receipt No.
                        </label>
                      </div>
                      <div
                        className={`${styles.form_group} col-lg-3 col-md-6 col-sm-6`}
                      >
                        <input
                          className={`${styles.input_field} input form-control`}
                          required
                          type="text"
                        />
                        <label
                          className={`${styles.label_heading} label_heading`}
                        >
                          Transaction Amount
                          <strong className="text-danger">*</strong>
                        </label>
                      </div>

                      <div
                        className={`${styles.form_group} col-lg-3 col-md-6 col-sm-6`}
                      >
                        <input
                          className={`${styles.input_field} input form-control`}
                          required
                          type="number"
                        />
                        <label
                          className={`${styles.label_heading} label_heading`}
                        >
                          IGST
                        </label>
                      </div>
                      <div
                        className={`${styles.form_group} col-lg-3 col-md-6 col-sm-6`}
                      >
                        <input
                          className={`${styles.input_field} input form-control`}
                          required
                          type="number"
                        />
                        <label
                          className={`${styles.label_heading} label_heading`}
                        >
                          CGST
                        </label>
                      </div>

                      <div
                        className={`${styles.form_group} col-lg-3 col-md-6 col-sm-6`}
                      >
                        <input
                          className={`${styles.input_field} input form-control`}
                          required
                          type="number"
                        />
                        <label
                          className={`${styles.label_heading} label_heading`}
                        >
                          SGST
                        </label>
                      </div>
                      <div
                        className={`${styles.form_group} col-lg-9 col-md-6 col-sm-6`}
                      >
                        <div className="d-flex">
                          <div className={styles.uploadBtnWrapper}>
                            <input type="file" name="myfile" />
                            <button className={`${styles.upload_btn} btn`}>
                              Upload
                            </button>
                          </div>
                          <div className="ml-3">
                            <input
                              className={styles.input_doc}
                              type="text"
                              placeholder="Nomination_Document.pdf"
                            />
                            <img
                              className={`${styles.close_image} img-fluid `}
                              src="/static/close.svg"
                              alt="close"
                            />
                          </div>
                          <span className={styles.view_btn}>View</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <hr></hr>
                  <div className={`${styles.vessel_card} mt-4 mb-4`}>
                    <button className={`${styles.saveBtn}`}>Save</button>
                  </div>
                </div>
                <div className={`${styles.bill_landing} mt-4 border_color`}>
                  <div className={`${styles.vessel_card}`}>
                    <div className="justify-content-between d-flex mt-4">
                      <div className={`${styles.form_heading}`}>
                        Listing Details 1
                      </div>
                      <button className={styles.add_btn}>Add</button>
                    </div>
                    <div className="row">
                      <div
                        className={`${styles.form_group} col-lg-3 col-md-6 col-sm-6`}
                      >
                        <div className="d-flex">
                          <DateCalender labelName="Date of Lifting" />
                          <img
                            className={`${styles.calanderIcon} img-fluid`}
                            src="/static/caldericon.svg"
                            alt="Search"
                          />
                        </div>
                      </div>
                      <div
                        className={`${styles.form_group} col-lg-3 col-md-6 col-sm-6`}
                      >
                        <input
                          className={`${styles.input_field} input form-control`}
                          required
                          type="number"
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
                          <div className={`${styles.sub_heading} sub_heading`}>
                            Mode of Transportation
                            <strong className="text-danger">*</strong>
                          </div>
                          {['radio'].map((type, index) => (
                            <div key={index} className={styles.radio_group}>
                              <Form.Check
                                className={styles.radio}
                                inline
                                label="RR"
                                name="group1"
                                type={type}
                                id={`inline-${type}-1`}
                              />
                              <Form.Check
                                className={`${styles.radio} ml-4`}
                                inline
                                label="e-Way Bill"
                                name="group1"
                                type={type}
                                id={`inline-${type}-2`}
                              />
                            </div>
                          ))}
                        </div>
                      </div>
                      <div
                        className={`${styles.form_group} col-lg-3 col-md-6 col-sm-6 `}
                      >
                        <div className="d-flex">
                          <select
                            className={`${styles.input_field} ${styles.customSelect} input form-control`}
                          >
                            <option value="India">IGIPL</option>
                            <option value="America">UIUI</option>
                          </select>
                          <label
                            className={`${styles.label_heading} label_heading`}
                          >
                            Payment By
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
                        className={`${styles.form_group} col-lg-9 col-md-6 col-sm-6`}
                      >
                        <div className="d-flex">
                          <div className={styles.uploadBtnWrapper}>
                            <input type="file" name="myfile" />
                            <button className={`${styles.upload_btn} btn`}>
                              Upload
                            </button>
                          </div>
                          <div className="ml-3">
                            <input
                              className={styles.input_doc}
                              type="text"
                              placeholder="Nomination_Document.pdf"
                            />
                            <img
                              className={`${styles.close_image} img-fluid `}
                              src="/static/close.svg"
                              alt="close"
                            />
                          </div>
                          <span className={styles.view_btn}>View</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <hr></hr>
                  <div className="d-flex justify-content-end m-4">
                    <div className={`${styles.label} mt-1`}>
                      Balance Quantity:
                    </div>
                    <div className={`${styles.do_number} ml-3`}>0 MT</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4 mb-5">
            <InspectionDocument />
          </div>
        </div>
        {/* <SaveBar rightBtn="Submit" /> */}
      </div>
    </>
  )
}
