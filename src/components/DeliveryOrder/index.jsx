/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react'
import styles from './index.module.scss'
import { Form, Row, Col } from 'react-bootstrap'
import SaveBar from '../SaveBar'
import DateCalender from '../DateCalender'
import _get from 'lodash/get'
import Router from 'next/router'
import Modal from 'react-bootstrap/Modal'

export default function Index(props) {
  const handleRoute = () => {
    Router.push('/delivery-preview')
  }
  console.log(props, 'props')

  return (
    <>
      <div className={`${styles.backgroundMain} container-fluid`}>
        <div className={`${styles.vessel_card} border_color`}>
          <div className={`${styles.main} vessel_card card border_color`}>
            <div
              className={`${styles.head_container} card-header align-items-center border_color head_container justify-content-between d-flex bg-transparent`}
              data-toggle="collapse"
              data-target="#lcApplication"
              aria-expanded="true"
              aria-controls="lcApplication"
            >
              <h3 className={`${styles.heading}`}>Delivery Order</h3>
              <div className="d-flex">
                {/* <div className="d-flex mr-5">
                  <div className={`${styles.label_heading} mr-3 label_heading`}>
                    Shipment Type
                  </div>
                  <div className={`${styles.shipment_type} heading mr-4`}>
                    Bulk
                  </div>
                </div> */}
                <span>+</span>
              </div>
            </div>
            <div
              id="lcApplication"
              // className="collapse"
              aria-labelledby="lcApplication"
              data-parent="#lcApplication"
            >
              <div className={`${styles.dashboard_form} card-body`}>
                <div className="row">
                  <div
                    className={`${styles.form_group} col-lg-2 col-md-6 col-sm-6 `}
                  >
                    <div className={`${styles.label} text`}>Commodity</div>
                    <span className={styles.value}>
                      {_get(props, 'ReleaseOrder.data[0].order.commodity', '')}
                    </span>
                  </div>
                  <div
                    className={`${styles.form_group} col-lg-2 col-md-6 col-sm-6 `}
                  >
                    <div className={`${styles.label} text`}>
                      Invoice Quantity{' '}
                    </div>
                    <span className={styles.value}>
                      {Number(
                        _get(
                          props,
                          'ReleaseOrder.data[0].order.customClearance.billOfEntry.billOfEntry[0].boeDetails.invoiceQuantity',
                          '',
                        ),
                      ).toLocaleString()}{' '}
                      {_get(
                        props,
                        'ReleaseOrder.data[0].order.unitOfQuantity',
                        '',
                      ).toUpperCase()}
                    </span>
                  </div>

                  <div
                    className={`${styles.form_group} col-lg-2 col-md-6 col-sm-6 `}
                  >
                    <div className={`${styles.label} text`}>
                      Balance Quantity
                    </div>
                    <span className={styles.value}>
                      {props.BalanceQuantity().toLocaleString()}{' '}
                      {_get(
                        props,
                        'ReleaseOrder.data[0].order.unitOfQuantity',
                        '',
                      ).toUpperCase()}
                    </span>
                  </div>
                </div>
              </div>
              <div
                className={`${styles.dashboard_form} border_color card-body`}
                style={{ borderTop: '2px solid #CAD6E6' }}
              >
                {' '}
                <div className={styles.table_scroll_outer}>
                  <div className={styles.table_scroll_inner}>
                    <div className="row mb-3">
                      {props.releaseOrderData.map((val, index) => {
                        return (
                          <>
                            <div
                              className={`${styles.form_group} col-lg-2 col-md-6 col-sm-6 `}
                              style={{ top: '5px' }}
                            >
                              <div className="d-flex">
                                <select
                                  name="orderNumber"
                                  onChange={(e) =>
                                    props.deliverChange(
                                      e.target.name,
                                      e.target.value,
                                      index,
                                    )
                                  }
                                  className={`${styles.input_field} ${styles.customSelect} input form-control`}
                                >
                                  {_get(
                                    props,
                                    'ReleaseOrder.data[0].releaseDetail',
                                    [],
                                  ).map((option, index) => (
                                    <option
                                      value={option.orderNumber}
                                      key={index}
                                    >
                                      {option.orderNumber}
                                    </option>
                                  ))}
                                  <option value="Not Available">
                                    Not Available
                                  </option>
                                </select>
                                <label
                                  className={`${styles.label_heading} label_heading`}
                                >
                                  Release Order Number
                                </label>
                                <img
                                  className={`${styles.arrow} image_arrow img-fluid`}
                                  src="/static/inputDropDown.svg"
                                  alt="Search"
                                />
                              </div>
                            </div>
                            <div
                              className={`${styles.form_group} col-lg-2 col-md-6 col-sm-6 `}
                            >
                              {val.isDelete ? (
                                <div className="d-flex">
                                  <input
                                    type="text"
                                    value={val.Quantity}
                                    name="Quantity"
                                    onChange={(e) => {
                                      props.deliverChange(
                                        e.target.name,
                                        e.target.value,
                                        index,
                                      )
                                    }}
                                    className={`${styles.input_field} ${styles.customSelect} input form-control`}
                                  />

                                  <label
                                    className={`${styles.label_heading} label_heading`}
                                  >
                                    Quantity Released
                                  </label>
                                </div>
                              ) : (
                                <>
                                  <div className={`${styles.label} text`}>
                                    Quantity Released
                                  </div>
                                  <span className={styles.value}>
                                    {val.Quantity}
                                  </span>
                                </>
                              )}
                            </div>
                            <div
                              className={`${styles.form_group} col-lg-2 col-md-6 col-sm-6 `}
                            >
                              <div className={`${styles.label} text`}>
                                Delivery Order No.
                              </div>
                              <span className={styles.value}>
                                {val.deliveryOrderNo}
                              </span>
                            </div>
                            <div
                              className={`${styles.form_group} col-lg-2 col-md-6 col-sm-6 `}
                            >
                              <div className={`${styles.label} text`}>
                                Delivery Order Date
                              </div>
                              <span className={styles.value}>
                                {val.deliveryOrderDate}
                              </span>
                            </div>
                            <div
                              className={`${styles.form_group} col-lg-4 col-md-6 col-sm-6 `}
                            >
                              <div
                                className="row"
                                style={{ marginTop: '-40px' }}
                              >
                                <div
                                  className={`${styles.form_group} ml-n2 col-lg-6 col-md-6`}
                                >
                                  <div className={`${styles.label} text`}>
                                    Status
                                  </div>
                                  <span className={styles.value}></span>
                                </div>

                                {val.isDelete ? (
                                  <div
                                    className={`${styles.form_group} col-lg-6`}
                                  >
                                    <img
                                      src="/static/share.svg"
                                      className={`${styles.shareImg} img-fluid`}
                                      alt="Share"
                                      onClick={(e) => handleRoute()}
                                    />
                                    <img
                                      src="/static/cancel-3.svg"
                                      className={`${styles.shareImg} img-fluid ml-3`}
                                      alt="Cancel"
                                      onClick={(e) => {
                                        props.onEdit(index, false)
                                      }}
                                    />
                                    <img
                                      className={`${styles.shareImg} ml-3 img-fluid`}
                                      src="/static/delete.svg"
                                      alt="Search"
                                      onClick={(e) => {
                                        props.deleteNewDelivery(index)
                                      }}
                                    />
                                  </div>
                                ) : (
                                  <div
                                    className={`${styles.form_group} col-lg-6`}
                                  >
                                    <img
                                      src="/static/mode_edit.svg"
                                      className={`${styles.shareImg} img-fluid`}
                                      alt="Edit"
                                      onClick={(e) => {
                                        props.onEdit(index, true)
                                      }}
                                    />
                                    <img
                                      onClick={(e) => {
                                        props.addNewDelivery()
                                      }}
                                      src="/static/add.svg"
                                      className={`${styles.shareImg} img-fluid ml-3`}
                                      alt="add"
                                    />
                                    {props.releaseOrderData.length ===
                                    1 ? null : (
                                      <img
                                        className={`${styles.shareImg} ml-3 img-fluid`}
                                        src="/static/delete.svg"
                                        alt="Search"
                                        onClick={(e) => {
                                          props.deleteNewDelivery(index)
                                        }}
                                      />
                                    )}
                                  </div>
                                )}
                              </div>
                            </div>
                          </>
                        )
                      })}
                    </div>
                  </div>
                </div>
              </div>

              <div
                className={`${styles.dashboard_form} border_color card-body`}
                style={{ borderTop: '2px solid #CAD6E6' }}
              >
                <div className="row">
                  <div
                    className={`${styles.form_group} col-lg-3 col-md-6 col-sm-6 `}
                    style={{ top: '5px' }}
                  >
                    <div className="d-flex">
                      <select
                        onChange={(e) =>
                          props.setLastMileDelivery(e.target.value)
                        }
                        className={`${styles.input_field} ${styles.customSelect}  input form-control`}
                      >
                        <option>Select an option</option>
                        <option value={true}>Yes</option>
                        <option value={false}>No</option>
                      </select>
                      <label
                        className={`${styles.label_heading} label_heading`}
                      >
                        Last Mile Delivery
                      </label>
                      <img
                        className={`${styles.arrow} image_arrow img-fluid`}
                        src="/static/inputDropDown.svg"
                        alt="Search"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <SaveBar
          handleSave={props.onSaveHAndler}
          rightBtn="Generate Delivery Order"
          rightBtnClick={props.onSaveHAndler}
          handleRoute={handleRoute}
        />
      </div>

      {/* <Modal
        show={show}
        onHide={handleClose}
        className={`${styles.root}`}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header className="modal-header p-0 bg-transparent border-0 d-flex justify-content-between">
          <div className={`${styles.head}`}>
            <p className={`${styles.heading}`}>
              INDO GERMAN INTERNATIONAL PVT. LTD.
            </p>
            <div className={`${styles.heading_addresses}`}>
              <p>7A, SAGAR APARTMENTS, 6-TILAK MARG, NEW DELHI-110001 </p>
              <p>
                TEL: +91 – 11 – 23782022, 23387413, 23382592, 23384968, FAX: +91
                – 11 – 23782806{' '}
              </p>
              <p>CIN NO-U74899DL1994PTC063676</p>
            </div>
            <div className={`${styles.type}`}>
              <p>DELIVERY ORDER </p>
              <p>(ORIGINAL) </p>
            </div>
          </div>
        </Modal.Header>
        <Modal.Body className="p-0">
          <div className={`${styles.body}`}>
            <div
              className={`${styles.body_header} d-flex justify-content-between align-item-center`}
            >
              <div className={`${styles.date} `}>
                <p>
                  DO.NO:{' '}
                  <span className={`${styles.bold}`}>RamaI001-000001/01</span>
                </p>
                <p>
                  DATE: <span className={`${styles.bold}`}>01.07.2021</span>
                </p>
              </div>
              <div className={`${styles.validity}`}>
                <p>
                  VALIDITY: <span className={`${styles.bold}`}>10 Days</span>
                </p>
              </div>
            </div>
            <div className={`${styles.content}`}>
              <p>To:</p>
              <p className={`${styles.bold} ${styles.width} w-50`}>
                M/S BOTHRA SHIPPING SERVICES PVT. LTD. 28-2-47,Ist Floor,
                Daspalla Centre, Suryabagh, Visakhapatnam 530020, (Andhra
                Pradesh)
              </p>

              <div>
                CC:{' '}
                <span className={`${styles.bold} ${styles.width2} `}>
                  Dr. Shivadeo Upadhyay, M/S Jayaswal Neco Industries Limited,
                  Raipur, Chhatisgarh.
                </span>
              </div>
              <div>
                CC:{' '}
                <span className={`${styles.bold} ${styles.width2} `}>
                  Dr. Amin Controllersr, Yizag.
                </span>
              </div>
              <p>
                Kind Attn.{' '}
                <span className={`${styles.bold} w-50`}>
                  Mr. N.A. Khan / Mr. Nabin Chand Boyed.
                </span>
              </p>
              <div className={`${styles.letter_content}`}>
                <p>Dear Sir,</p>
                <p>
                  We hereby authorize you to deliver the quantity to{' '}
                  <span className={`${styles.bold}`}>
                    MS Jayaswal Neco Industries Limited,
                  </span>{' '}
                  Vide <span className={`${styles.bold}`}>BL No. 1</span> dated{' '}
                  <span className={`${styles.bold}`}>18/03/2021</span> as per
                  the detail given below:
                </p>
                <div className={`${styles.material}`}>
                  <div
                    className={`d-flex justify-content-start align-items-start`}
                  >
                    <span className={styles.head}>l) Material :</span>{' '}
                    <span className={`${styles.bold} `}>
                      Lake Vermont Premium Hard Coking Coal (MV CRIMSON ARK)
                      Bothra, S-4 & L-6 Yard, Port Area, Visakhapatnam Port
                      Trust, Visakhapatnam.
                    </span>
                  </div>
                  <div
                    className={`d-flex justify-content-start align-items-start`}
                  >
                    <span className={styles.head}>2) Quantity : </span>{' '}
                    <span className={`${styles.bold} `}>
                      6350.000 MTs. Vermont Premium Hard Coking Coal
                    </span>
                  </div>
                  <div
                    className={`d-flex justify-content-start align-items-start`}
                  >
                    <span className={styles.head}>3) Balance Qty :</span>{' '}
                    <span className={`${styles.bold} `}>
                      After delivery of material against this DO the balance
                      Qty. will be as under :
                      <p>a) Vermont Premium PH C Coal NIL MTs</p>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className={`${styles.footer}`}>
              <p>
                For{' '}
                <span className={`${styles.bold}`}>
                  Indo German International Private Limited
                </span>
              </p>
              <div>
                <p className={`${styles.bold}`}>Authorised Signatory</p>
                <select>
                  <option>Vipin Rajput</option>
                </select>
              </div>
            </div>
          </div>
          <div className={`${styles.cc}`}>
            <p>
              CC : Indo German International Private Limited, VIZAG : Delivery
              order file
            </p>
            <p className={`${styles.bold} ${styles.extra_margin}`}>
              : Delivery order file
            </p>
          </div>
        </Modal.Body>
      </Modal> */}
    </>
  )
}

{
  /* <div
                    className={`${styles.form_group} col-lg-3 col-md-6 col-sm-6 `}
                    style={{ top: '5px' }}
                  >
                    <div className="d-flex">
                      <select
                        className={`${styles.input_field} ${styles.customSelect} input form-control`}
                      >
                        <option>01</option>
                        <option>02</option>
                        <option>03</option>
                        <option>N/A</option>
                      </select>
                      <label
                        className={`${styles.label_heading} label_heading`}
                      >
                        Released Order Number
                      </label>
                      <img
                        className={`${styles.arrow} img-fluid`}
                        src="/static/inputDropDown.svg"
                        alt="Search"
                      />
                    </div>
                  </div>
                  <div
                    className={`${styles.form_group} col-lg-3 col-md-6 col-sm-6 `}
                  >
                    <div className={`${styles.label} text`}>
                      Quantity Released
                    </div>
                    <span className={styles.value}>5,000 MT</span>
                  </div>
                  <div
                    className={`${styles.form_group} col-lg-3 col-md-6 col-sm-6 `}
                  >
                    <div className={`${styles.label} text`}>
                      Delivery Order No.
                    </div>
                    <span className={styles.value}>Ramal001-00002/01</span>
                  </div>
                  <div
                    className={`${styles.form_group} col-lg-3 col-md-6 col-sm-6 `}
                  >
                    <div className="row" style={{ marginTop: '-42px' }}>
                      <div className={`${styles.form_group} col-lg-8`}>
                        <div className={`${styles.label} text`}>
                          Delivery Order Date
                        </div>
                        <span>-</span>
                      </div>
                      <div className={`${styles.form_group} col-lg-4`}>
                        <img
                          src="/static/share.svg"
                          className={`${styles.shareImg} img-fluid`}
                          alt="Share"
                        />
                      </div>
                    </div>
                  </div> */
}

{
  /* <div
                    className={`${styles.form_group} col-lg-3 col-md-6 col-sm-6 `}
                    style={{ top: '5px' }}
                  >
                    <div className="d-flex">
                      <select
                        className={`${styles.input_field} ${styles.customSelect} input form-control`}
                      >
                        <option>01</option>
                        <option>02</option>
                        <option>03</option>
                      </select>
                      <label
                        className={`${styles.label_heading} label_heading`}
                      >
                        Released Order Number
                      </label>
                      <img
                        className={`${styles.arrow} img-fluid`}
                        src="/static/inputDropDown.svg"
                        alt="Search"
                      />
                    </div>
                  </div>
                  <div
                    className={`${styles.form_group} col-lg-3 col-md-6 col-sm-6 `}
                  >
                    <div className={`${styles.label} text`}>
                      Quantity Released
                    </div>
                    <span className={styles.value}>5,000 MT</span>
                  </div>
                  <div
                    className={`${styles.form_group} col-lg-3 col-md-6 col-sm-6 `}
                  >
                    <div className={`${styles.label} text`}>
                      Delivery Order No.
                    </div>
                    <span className={styles.value}>Ramal001-00002/01</span>
                  </div>
                  <div
                    className={`${styles.form_group} col-lg-3 col-md-6 col-sm-6 `}
                  >
                    <div className="row" style={{ marginTop: '-42px' }}>
                      <div className={`${styles.form_group} col-lg-8`}>
                        <div className={`${styles.label} text`}>
                          Delivery Order Date
                        </div>
                        <span>-</span>
                      </div>
                      <div className={`${styles.form_group} col-lg-4`}>
                        <img
                          src="/static/mode_edit.svg"
                          className={`${styles.shareImg} img-fluid`}
                          alt="Edit"
                        />
                      </div>
                    </div>
                  </div> */
}
