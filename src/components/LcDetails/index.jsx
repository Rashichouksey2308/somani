import React, { useState } from 'react'
import styles from './index.module.scss'
import { Form, Row, Col } from 'react-bootstrap'
import SaveBar from '../SaveBar'
import InspectionDocument from '../InspectionDocument'
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
      <div className={`${styles.dashboardTab} w-100`}>
        <div className={`${styles.tabHeader} tabHeader `}>
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
        </div>

        <div className={`${styles.backgroundMain} p-4 container-fluid`}>
          <div className={`${styles.vessel_card} mt-3 border_color`}>
            <div className={`${styles.main} mt-4 card border_color`}>
              <div
                className={`${styles.head_container} card-header border_color head_container justify-content-between d-flex bg-transparent`}
                data-toggle="collapse"
                data-target="#lcApplication"
                aria-expanded="true"
                aria-controls="lcApplication"
              >
                <h3 className={`${styles.heading}`}>LC Details</h3>

                <span>+</span>
              </div>
              <div
                id="lcApplication"
                className="collapse"
                aria-labelledby="lcApplication"
                data-parent="#lcApplication"
              >
                <div className={`${styles.dashboard_form} card-body`}>
                  <div className="row">
                    <div
                      className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6 `}
                    >
                      <div className="d-flex">
                        <DateCalender
                          name="dateOfExpiry"
                          labelName="Date of Issue"
                        />
                        <img
                          className={`${styles.calanderIcon} image_arrow img-fluid`}
                          src="/static/caldericon.svg"
                          alt="Search"
                        />
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
                        Documentary Credit Number
                        <strong className="text-danger">*</strong>
                      </label>
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
                        LC Value
                        <strong className="text-danger">*</strong>
                      </label>
                    </div>
                    <div
                      className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6 `}
                    >
                      <div className="d-flex">
                        <DateCalender
                          name="dateOfExpiry"
                          labelName="LC Credit Date"
                        />
                        <img
                          className={`${styles.calanderIcon} image_arrow img-fluid`}
                          src="/static/caldericon.svg"
                          alt="Search"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className={`${styles.dashboard_form} card-body`}
                  style={{ borderTop: '2px solid #CAD6E6' }}
                >
                  <div className={`${styles.form_heading} mt-2`}>
                    Bank Details
                  </div>
                  <div className="row ">
                    <div
                      className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6 `}
                    >
                      <div className="d-flex">
                        <select
                          name="formOfDocumentaryCredit"
                          className={`${styles.input_field}  ${styles.customSelect} input form-control`}
                        >
                          <option selected></option>
                          <option value="Irrevocable">Abc Bank</option>
                          <option value="Revocable">SBI</option>
                        </select>

                        <label
                          className={`${styles.label_heading} label_heading`}
                        >
                          LC Issuing Bank
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
                      className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6 `}
                    >
                      <div className="d-flex">
                        <select
                          name="formOfDocumentaryCredit"
                          className={`${styles.input_field}  ${styles.customSelect} input form-control`}
                        >
                          <option selected></option>
                          <option value="Irrevocable">New Delhi</option>
                          <option value="Revocable">Mumbai</option>
                        </select>

                        <label
                          className={`${styles.label_heading} label_heading`}
                        >
                          Branch Name
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
                        IFSC Code
                        <strong className="text-danger">*</strong>
                      </label>
                    </div>
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
                              />{' '}
                            </th>
                            <th width="30%">ACTION</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="table_row">
                            <td className={styles.doc_name}>
                              LC Copy
                              <strong className="text-danger ml-0">
                                *
                              </strong>{' '}
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
                            <td colSpan={2}>
                              <div className={styles.uploadBtnWrapper}>
                                <input type="file" name="myfile" />
                                <button
                                  className={`${styles.upload_button} btn`}
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
                              <option>Lead Onboarding &amp; Order Approval</option>
                              <option>Agreements, Insurance &amp; LC Opening</option>
                              <option>Loading-Transit-Unloading</option>
                              <option>Custom Clearance And Warehousing</option>
                              <option value="Others">Others</option>
                            </select>
                            <Form.Label
                              className={`${styles.label_heading} label_heading`}
                            >
                              Document Type
                            </Form.Label>
                            <img
                              className={`${styles.arrow} image_arrow img-fluid`}
                              src="/static/inputDropDown.svg"
                              alt="Search"
                            />
                          </div>
                        </Form.Group>
                        <Form.Group className={styles.form_group}>
                          <Form.Label
                            className={`${styles.label_heading} label_heading`}
                          >
                            Please Specify Document Name
                          </Form.Label>
                          <Form.Control
                            className={`${styles.input_field} input form-control`}
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
                        className={`${styles.search_container} p-2 pl-4 d-flex justify-content-between align-items-center`}
                      >
                        <div>
                          <select
                            className={`${styles.dropDown} input form-control`}
                          >
                            <option>
                              Lead Onboarding &amp; Order Approval
                            </option>
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
                            className={`${styles.searchBar} input form-control`}
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
                            <td className={styles.doc_row}>
                              28-02-2022,5:30 PM
                            </td>
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
                            <td className={styles.doc_row}>
                              28-02-2022,5:30 PM
                            </td>
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
                                alt="Edit"
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
        </div>
      </div>
    </>
  )
}
