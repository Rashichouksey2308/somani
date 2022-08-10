/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react'
import styles from './index.module.scss'
import { Form, Row, Col } from 'react-bootstrap'
import SaveBar from '../SaveBar'
import DateCalender from '../DateCalender'
import _get from 'lodash/get'

export default function Index(props) {
  console.log(props, "props")
  return (
    <>
      <div className={`${styles.backgroundMain} container-fluid`}>
        <div className={`${styles.vessel_card} mt-3 border_color`}>
          <div className={`${styles.main} vessel_card  mt-4 card border_color`}>
            <div
              className={`${styles.head_container} card-header border_color head_container justify-content-between d-flex bg-transparent`}
              data-toggle="collapse"
              data-target="#lcApplication"
              aria-expanded="true"
              aria-controls="lcApplication"
            >
              <h3 className={`${styles.heading}`}>Delivery Order</h3>
              <div className="d-flex">
                <div className="d-flex mr-5">
                  <div className={`${styles.label_heading} mr-3 label_heading`}>
                    Shipment Type
                  </div>
                  <div className={`${styles.shipment_type} mr-4`}>Bulk</div>
                </div>
                <span>+</span>
              </div>
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
                    className={`${styles.form_group} col-lg-3 col-md-6 col-sm-6 `}
                  >
                    <div className={`${styles.label} text`}>Commodity</div>
                    <span className={styles.value}>{_get(props, 'ReleaseOrder.data[0].order.commodity', '')}</span>
                  </div>
                  <div
                    className={`${styles.form_group} col-lg-3 col-md-6 col-sm-6 `}
                  >
                    <div className={`${styles.label} text`}>
                      Invoice Quantity{' '}
                    </div>
                    <span className={styles.value}>{_get(props, 'ReleaseOrder.data[0].order.customClearance.billOfEntry.billOfEntry[0].boeDetails.invoiceQuantity', '')} Mt</span>
                  </div>

                  <div
                    className={`${styles.form_group} col-lg-3 col-md-6 col-sm-6 `}
                  >
                    <div className={`${styles.label} text`}>
                      Balance Quantity
                    </div>
                    <span className={styles.value}>5,000 MT</span>
                  </div>
                </div>
              </div>
              <div
                className={`${styles.dashboard_form} card-body`}
                style={{ borderTop: '2px solid #CAD6E6' }}
              >
                <div className="row">

                  {props.releaseOrderData.map((val, index) => {
                    return (<>
                      <div
                        className={`${styles.form_group} col-lg-3 col-md-6 col-sm-6 `}
                        style={{ top: '5px' }}
                      >
                        <div className="d-flex">
                          <select name='orderNumber' onChange={(e) => props.deliverChange(e.target.name, e.target.value, index)}
                            className={`${styles.input_field} ${styles.customSelect} input form-control`}
                          >
                            {_get(props,'ReleaseOrder.data[0].releaseDetail', []).map((option,index)=>(<option value={option.orderNumber} key={index}>{option.orderNumber}</option>))}
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
                        {val.isDelete ?
                          <div className="d-flex">
                            <input
                              type="text"
                              value={val.Quantity}
                              name="Quantity"
                              onChange={(e) => {
                                props.deliverChange(e.target.name, e.target.value, index)
                              }}
                              className={`${styles.input_field} ${styles.customSelect} input form-control`}
                            />


                            <label
                              className={`${styles.label_heading} label_heading`}
                            >
                              Quantity Released
                            </label>

                          </div>
                          :

                          <>
                            <div className={`${styles.label} text`}>
                              Quantity Released
                            </div>
                            <span className={styles.value}>{val.Quantity}</span>

                          </>

                        }
                      </div>
                      <div
                        className={`${styles.form_group} col-lg-3 col-md-6 col-sm-6 `}
                      >
                        <div className={`${styles.label} text`}>
                          Delivery Order No.
                        </div>
                        <span className={styles.value}>{val.deliveryOrderNo}</span>
                      </div>
                      <div
                        className={`${styles.form_group} col-lg-3 col-md-6 col-sm-6 `}
                      >
                        <div className="row" style={{ marginTop: '-42px' }}>
                          <div className={`${styles.form_group} col-lg-8`}>
                            <div className={`${styles.label} text`}>
                              Delivery Order Date
                            </div>
                            <span className={styles.value}>{val.deliveryOrderDate}</span>
                          </div>
                          {
                            val.isDelete ?
                              <div className={`${styles.form_group} col-lg-4`}>
                                <img
                                  src="/static/share.svg"
                                  className={`${styles.shareImg} img-fluid`}
                                  alt="Share"
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
                                  className={`${styles.shareImg} img-fluid`}
                                  src="/static/delete.svg"
                                  alt="Search"
                                  onClick={(e) => { props.deleteNewDelivery(index) }}
                                />
                              </div>
                              :
                              <div className={`${styles.form_group} col-lg-4`}>
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
                                <img
                                  className={`${styles.shareImg} img-fluid`}
                                  src="/static/delete.svg"
                                  alt="Search"
                                  onClick={(e) => { props.deleteNewDelivery(index) }}
                                />
                              </div>


                          }
                        </div>
                      </div>
                    </>)
                  })}


                </div>
              </div>

              <div
                className={`${styles.dashboard_form} card-body`}
                style={{ borderTop: '2px solid #CAD6E6' }}
              >
                <div className="row">
                  <div
                    className={`${styles.form_group} col-lg-3 col-md-6 col-sm-6 `}
                    style={{ top: '5px' }}
                  >
                    <select
                      className={`${styles.input_field} input form-control`}
                    >
                      <option value="Yes">Yes</option>
                      <option value="No">N0</option>

                    </select>
                    <label className={`${styles.label_heading} label_heading`}>
                      Last Mile Delivery
                    </label>
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


{/* <div
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
                  </div> */}

{/* <div
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
                  </div> */}