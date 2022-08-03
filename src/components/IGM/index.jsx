import React, { useState } from 'react'
import styles from './index.module.scss'
import { Form, Row, Col } from 'react-bootstrap'
import SaveBar from '../SaveBar'
import InspectionDocument from '../InspectionDocument'
import DateCalender from '../DateCalender'

export default function Index({orderId}) {
  const [shipmentType, setShipmentType] = useState(true)

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
                      type={type}
                      onChange={(e) => setShipmentType(true)}
                      id={`inline-${type}-1`}
                    />
                    <Form.Check
                      className={styles.radio}
                      inline
                      label="Liner"
                      name="group1"
                      type={type}
                      onChange={(e) => setShipmentType(false)}
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
                  <span className={styles.value}>Iron</span>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6">
                  <div className={`${styles.label} text`}>
                    Quantity <strong className="text-danger ml-n1">*</strong>
                  </div>
                  <span className={styles.value}>500 Mt</span>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6">
                  <div className={`${styles.label} text`}>
                    Order Value <strong className="text-danger ml-n1">*</strong>{' '}
                  </div>
                  <span className={styles.value}>500 CR</span>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6">
                  <div className={`${styles.label} text`}>
                    Shipping Line/Charter
                    <strong className="text-danger">*</strong>{' '}
                  </div>
                  <span className={styles.value}>Mersk</span>
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
                  <span className={styles.value}>India</span>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6">
                  <div className={`${styles.label} text`}>
                    Port Of Landing{' '}
                    <strong className="text-danger ml-n1">*</strong>
                  </div>
                  <span className={styles.value}>Text</span>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 mb-5">
                  <div className={`${styles.label} text`}>
                    Port of Discharge{' '}
                    <strong className="text-danger ml-n1">*</strong>{' '}
                  </div>
                  <span className={styles.value}>Text</span>
                </div>
                <div
                  className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6 `}
                >
                  <div className="d-flex">
                    <select
                      className={`${styles.input_field} ${styles.customSelect} input form-control`}
                    >
                      <option>Indo German</option>
                      <option>Balaji Traders</option>
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
                  <span className={styles.value}>Visakhapatnam</span>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 mt-4">
                  <div className={`${styles.label} text`}>
                    Consignee Address<strong className="text-danger">*</strong>{' '}
                  </div>
                  <span className={styles.value}>
                    A-44, Sagar Apartments, Tilak Marg, Agra, Uttar Pradesh
                    110008
                  </span>
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
                      <option>text</option>
                      <option>N/A</option>
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
                    <DateCalender labelName="IGM Filing Date" />
                    <img
                      className={`${styles.calanderIcon} img-fluid`}
                      src="/static/caldericon.svg"
                      alt="Search"
                    />
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
                      <div className='row'>
                        <div className="col-md-6">
                          <div className={`${styles.label} text`}>
                            BL Date <strong className="text-danger ml-n1">*</strong>
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
                      <div className='row align-items-center'>
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
                  </>
                ) : (
                  <>
                    <div
                      className="col-lg-4 col-md-6 col-sm-6"
                      style={{ top: '35px' }}
                    >
                      <div className='row'>
                        <div className="col-md-6">
                          <div className={`${styles.label} text`}>
                            BL Date <strong className="text-danger ml-n1">*</strong>
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
                      <div className='row align-items-center'>
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
            <InspectionDocument orderId={orderId} />
          </div>
        </div>
        <SaveBar rightBtn="Submit" />
      </div>
    </>
  )
}
