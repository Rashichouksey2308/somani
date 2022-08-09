/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react'
import styles from './index.module.scss'
import { Form, Row, Col } from 'react-bootstrap'
import SaveBar from '../SaveBar'
import DateCalender from '../DateCalender'

export default function Index() {
  const [editInput, setEditInput] = useState(true)
  const [darkMode, setDarkMode] = useState(false)

  const handleDropdown = (e) => {
    if (e.target.value == 'Others') {
      setEditInput(false)
    } else {
      setEditInput(true)
    }
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

      <div className={`${styles.backgroundMain} container-fluid`}>
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
                      <option>Ramal001-00001/05</option>
                      <option>Ramal001-00001/02</option>
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
              data-target="#upload"
              aria-expanded="true"
              aria-controls="upload"
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
              id="upload"
              className="collapse"
              aria-labelledby="upload"
              data-parent="#upload"
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
                        <input
                          className={`${styles.input_field} input form-control`}
                          required
                          type="text"
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
                            <tr className="table_row">
                              <td className={styles.doc_name}>
                                RR <strong className="text-danger">*</strong>
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

                              <td colSpan="2">
                                <div className={styles.uploadBtnWrapper}>
                                  <input type="file" name="myfile" />
                                  <button
                                    className={`${styles.upload_action} btn`}
                                  >
                                    Upload
                                  </button>
                                </div>
                              </td>
                            </tr>
                            <tr className="table_row">
                              <td className={styles.doc_name}>
                                E-Way Bill{' '}
                                <strong className="text-danger">*</strong>
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

                              <td colSpan="2">
                                <div className={styles.uploadBtnWrapper}>
                                  <input type="file" name="myfile" />
                                  <button
                                    className={`${styles.upload_action} btn`}
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
                        <input
                          className={`${styles.input_field} input form-control`}
                          required
                          type="text"
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
                            <tr className="table_row">
                              <td className={styles.doc_name}>
                                RR <strong className="text-danger">*</strong>
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

                              <td colSpan="2">
                                <div className={styles.uploadBtnWrapper}>
                                  <input type="file" name="myfile" />
                                  <button
                                    className={`${styles.upload_action} btn`}
                                  >
                                    Upload
                                  </button>
                                </div>
                              </td>
                            </tr>
                            <tr className="table_row">
                              <td className={styles.doc_name}>
                                E-Way Bill{' '}
                                <strong className="text-danger">*</strong>
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

                              <td colSpan="2">
                                <div className={styles.uploadBtnWrapper}>
                                  <input type="file" name="myfile" />
                                  <button
                                    className={`${styles.upload_action} btn`}
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

                  <hr></hr>
                  <div
                    className={`${styles.vessel_card} d-flex justify-content-between align-items-center mt-4 mb-4`}
                  >
                    <button className={`${styles.saveBtn}`}>Save</button>
                    <div className="d-flex">
                      <div className={`${styles.label} mr-3 mt-1 text`}>
                        Balance Quantity:
                      </div>
                      <div className={`${styles.do_number}`}>0 MT</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={`${styles.upload_main} mt-4 mb-5 upload_main`}>
            <div
              className={`${styles.head_container} border_color d-flex justify-content-between`}
              data-toggle="collapse"
              data-target="#uploadOther"
              aria-expanded="true"
              aria-controls="uploadOther"
            >
              <h3 className={styles.heading}>Document</h3>
              <span>+</span>
            </div>
            <div
              id="uploadOther"
              className="collapse"
              aria-labelledby="uploadOther"
              data-parent="#uploadOther"
            >
              <div className={`${styles.dashboard_form} card-body`}>
                <Form>
                  <div className="row align-items-center pb-4">
                    <div
                      className={`${styles.drop_container} d-flex align-items-center justify-content-around col-sm-6`}
                    >
                      <div className="text-center">
                        <img
                          className={`${styles.upload_image} img-fluid`}
                          src="/static/browse.svg"
                          alt="Browse"
                        />
                        <p className={styles.drop_para}>
                          Drop Files here or
                          <br />
                          <div className={styles.uploadBtnWrapper}>
                            <input type="file" name="myfile" />
                            <a href="#">Browse</a>
                          </div>
                        </p>
                      </div>
                    </div>
                    <div className="col-md-4 offset-md-1 col-sm-6">
                      <Form.Group className={styles.form_group}>
                        <div className="d-flex">
                          <select
                            className={`${styles.value} input ${styles.customSelect}  form-control`}
                            id="docType"
                            onChange={(e) => handleDropdown(e)}
                          >
                            <option>
                              Lead Onboarding &amp; Order Approval
                            </option>
                            <option>
                              Agreements, Insurance &amp; LC Opening
                            </option>
                            <option>Loading-Transit-Unloading</option>
                            <option>Custom Clearance And Warehousing</option>
                            <option value="Others">Others</option>
                          </select>
                          <Form.Label
                            className={`${styles.label} label_heading`}
                          >
                            Document Type
                          </Form.Label>
                          <img
                            className={`${styles.arrow} img-fluid`}
                            src="/static/inputDropDown.svg"
                            alt="Search"
                          />
                        </div>
                      </Form.Group>
                      <Form.Group className={styles.form_group}>
                        <Form.Label className={`${styles.label} label_heading`}>
                          Please Specify Document Name
                        </Form.Label>
                        <Form.Control
                          className={`${styles.value} input form-control`}
                          type="text"
                          disabled={editInput}
                        />
                      </Form.Group>
                      <div className={styles.uploadBtnWrapper}>
                        <input type="file" name="myfile" />
                        <button
                          className={`${styles.upload_button} btn`}
                          disabled={editInput}
                        >
                          Upload
                        </button>
                      </div>
                    </div>
                  </div>
                </Form>
              </div>

              <div className={styles.table_container}>
                <div className={styles.table_scroll_outer}>
                  <div className={styles.table_scroll_inner}>
                    <div
                      className={`${styles.search_container} background2 p-2 pl-4 d-flex justify-content-between align-items-center`}
                    >
                      <div>
                        <select
                          className={`${styles.dropDown} statusBox input form-control`}
                        >
                          <option>Lead Onboarding &amp; Order Approval</option>
                          <option>Agreements, Insurance & LC Opening</option>
                          <option>Loading-Transit-Unloading</option>
                          <option>Custom Clearance And Warehousing</option>
                          <option value="Others">Others</option>
                        </select>
                      </div>
                      <div
                        className={`d-flex align-items-center ${styles.searchBarContainer} `}
                      >
                        <img
                          className={` ${styles.searchImage} img-fluid`}
                          src="/static/search.svg"
                          alt="Search"
                        ></img>
                        <input
                          className={`${styles.searchBar}  statusBox border_color input form-control`}
                          placeholder="Search"
                        ></input>
                      </div>
                    </div>
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
                          <th>
                            UPLOADED BY{' '}
                            <img
                              className={`${styles.sort_image} mb-1`}
                              src="/static/icons8-sort-24.svg"
                              alt="Sort icon"
                            />
                          </th>
                          <th>STATUS </th>
                          <th>ACTION</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="table_row">
                          <td className={styles.doc_name}>
                            Insurance Quotation
                          </td>
                          <td>
                            <img
                              src="/static/pdf.svg"
                              className={`${styles.pdfImage} img-fluid`}
                              alt="Pdf"
                            />
                          </td>
                          <td className={styles.doc_row}>28-02-2022,5:30 PM</td>
                          <td className={styles.doc_row}>John Doe</td>
                          <td>
                            <span
                              className={`${styles.status} ${styles.approved}`}
                            ></span>
                            Verified
                          </td>
                          <td colSpan="2">
                            <img
                              src="/static/delete.svg"
                              className={`${styles.delete_image} img-fluid mr-3`}
                              alt="Bin"
                            />
                            <img
                              src="/static/upload.svg"
                              className="img-fluid mr-3"
                              alt="Share"
                            />
                            <img
                              src="/static/drive_file.svg"
                              className={`${styles.edit_image} img-fluid mr-3`}
                              alt="Share"
                            />
                          </td>
                        </tr>
                        <tr className="table_row">
                          <td className={styles.doc_name}>
                            Container No. List
                          </td>
                          <td>
                            <img
                              src="/static/pdf.svg"
                              className={`${styles.pdfImage} img-fluid`}
                              alt="Pdf"
                            />
                          </td>
                          <td className={styles.doc_row}>28-02-2022,5:30 PM</td>
                          <td className={styles.doc_row}>John Doe</td>
                          <td>
                            <span
                              className={`${styles.status} ${styles.approved}`}
                            ></span>
                            Verified
                          </td>
                          <td colSpan="2">
                            <img
                              src="/static/delete.svg"
                              className={`${styles.delete_image} img-fluid mr-3`}
                              alt="Bin"
                            />
                            <img
                              src="/static/upload.svg"
                              className="img-fluid mr-3"
                              alt="Share"
                            />
                            <img
                              src="/static/drive_file.svg"
                              className={`${styles.edit_image} img-fluid mr-3`}
                              alt="Share"
                            />
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <SaveBar rightBtn="Submit" />

        {/* </div> */}
      </div>
    </>
  )
}
