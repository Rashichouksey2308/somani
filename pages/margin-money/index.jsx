import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import styles from './index.module.scss'
import Order from '../../src/components/Order'
import ShipmentDetails from '../../src/components/ShipmentDetails'
import ComplianceLigitations from '../../src/components/CompilanceLigitation'
import LigitationsTable from '../../src/components/LigitationsTable'
import GST from '../../src/components/GST'
import CAM from '../../src/components/CAM'
import { Form } from 'react-bootstrap'
import useDarkMode from 'use-dark-mode'

import { Row, Col } from 'react-bootstrap'
function index() {
  const darkMode = useDarkMode(false)
  return (
    <div className={`${styles.dashboardTab} tabHeader w-100`}>
      <div className={`${styles.tabHeader} tabHeader `}>
        <div className="d-flex align-items-center">
          <h1 className={`${styles.title} heading`}>
            <img
              src={`${
                darkMode.value
                  ? `/static/white-arrow.svg`
                  : `/static/arrow-right.svg`
              }`}
              alt="arrow right"
              className="img-fluid image_arrow"
            />
            Margin Money
          </h1>
          <div className="ml-auto">
            <button
              type="button"
              className={`${styles.btnPrimary} btn btn-primary`}
            >
              <img
                src="/static/refresh.svg"
                alt="refresh"
                className="img-fluid"
              />
              Update Info
            </button>
            <div className={`${styles.lastModified} text `}>
              <span>Last Modified:</span> 28 Jan,11:34am
            </div>
          </div>
        </div>
        <ul className={`${styles.navTabs} nav nav-tabs`}>
          <li className={`${styles.navItem}  nav-item`}>
            <a
              className={`${styles.navLink} navLink  nav-link active`}
              data-toggle="tab"
              href="#Profile"
              role="tab"
              aria-controls="Profile"
              aria-selected="true"
            >
              Margin Money
            </a>
          </li>
          <li className={`${styles.navItem} nav-item`}>
            <a
              className={`${styles.navLink} navLink nav-link`}
              data-toggle="tab"
              href="#Financials"
              role="tab"
              aria-controls="Financials"
              aria-selected="false"
            >
              Revised Margin Money
            </a>
          </li>
          <li className={`${styles.navItem} nav-item`}>
            <a
              className={`${styles.navLink} navLink nav-link`}
              data-toggle="tab"
              href="#gst"
              role="tab"
              aria-controls="GST"
              aria-selected="false"
            >
              Payment
            </a>
          </li>
          <li className={`${styles.navItem} nav-item`}>
            <a
              className={`${styles.navLink} navLink nav-link`}
              data-toggle="tab"
              href="#Compliance"
              role="tab"
              aria-controls="Compliance"
              aria-selected="false"
            >
              Document
            </a>
          </li>
        </ul>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12  accordion_body">
            <div className={`${styles.tabContent} tab-content`}>
              <div
                className="tab-pane fade show active"
                id="Commodity"
                role="tabpanel"
              >
                <div className="accordion" id="commodityAccordion">
                  <div className={`${styles.card}  accordion card`}>
                    <div
                      className={`${styles.cardHeader} card-header d-flex align-items-center justify-content-between p-3 bg-transparent`}
                      data-toggle="collapse"
                      data-target="#commodityAccordion"
                      aria-expanded="true"
                      aria-controls="commodityAccordion"
                    >
                      <div className={`${styles.commodity}`}>
                        <span
                          className={`${styles.comm_head} label_heading mb-2`}
                        >
                          Commodity
                        </span>
                        <span className={`${styles.comm_val} heading`}>
                          Thermal Coal
                        </span>
                      </div>
                      <div
                        className={`${styles.unit_container} d-flex align-items-center`}
                      >
                        <div className={`${styles.pay} mr-2`}>
                          <strong className={`mr-3`}>Status</strong>
                          <div
                            className={`d-flex align-items-center justify-content-between`}
                          >
                            <div className={`${styles.round} mr-2`}></div>
                            <span className={`heading`}>Payment Initiated</span>
                          </div>
                        </div>
                        <h5 className={`${styles.unit_label} accordion_Text`}>
                          Units :
                        </h5>
                        <select
                          className={`${styles.options} accordion_DropDown`}
                        >
                          <option>Crores</option>
                        </select>
                        <span>+</span>
                      </div>
                    </div>
                    <div
                      id="commodityAccordion"
                      className="collapse"
                      aria-labelledby="commodityAccordion"
                      data-parent="#commodityAccordion"
                    >
                      <div className={`${styles.cardBody} card-body `}>
                        <div className={`${styles.content} border_color`}>
                          <div className={`${styles.input_container} row`}>
                            <div
                              className={`${styles.filed} d-flex justify-content-start align-content-center col-md-4 col-sm-6`}
                            >
                              <div
                                className={`${styles.alphabet} d-flex justify-content-center align-content-center`}
                              >
                                <span>A</span>
                              </div>
                              <div className={`${styles.val_wrapper} ml-3`}>
                                <label
                                  className={`${styles.label_heading} label_heading`}
                                  id="textInput"
                                >
                                  Quantity
                                  <strong className="text-danger">*</strong>
                                </label>
                                <div className={`${styles.val}  heading`}>
                                  55,000 MT
                                </div>
                              </div>
                            </div>
                            <div
                              className={`${styles.filed} d-flex justify-content-start align-content-center col-md-4 col-sm-6`}
                            >
                              <div
                                className={`${styles.alphabet} d-flex justify-content-center align-content-center`}
                              >
                                <span>B</span>
                              </div>
                              <div className={`${styles.val_wrapper} ml-3`}>
                                <label
                                  className={`${styles.label_heading} label_heading`}
                                  id="textInput"
                                >
                                  Unit Price
                                  <strong className="text-danger">*</strong>
                                </label>
                                <div className={`${styles.val} heading`}>
                                  USD 70
                                </div>
                              </div>
                            </div>
                            <div
                              className={`${styles.filed} d-flex justify-content-start align-content-center col-md-4 col-sm-6`}
                            >
                              <div
                                className={`${styles.alphabet} d-flex justify-content-center align-content-center`}
                              >
                                <span>C</span>
                              </div>
                              <div className={`${styles.val_wrapper} ml-3`}>
                                <label
                                  className={`${styles.label_heading} label_heading`}
                                  id="textInput"
                                >
                                  Conversion Rate
                                  <strong className="text-danger">*</strong>
                                </label>
                                <div className={`${styles.val} heading`}>
                                  75
                                </div>
                              </div>
                            </div>
                            <div
                              className={`${styles.filed} d-flex justify-content-start align-content-center col-md-4 col-sm-6`}
                            >
                              <div
                                className={`${styles.alphabet} d-flex justify-content-center align-content-center`}
                              >
                                <span>D</span>
                              </div>
                              <div className={`${styles.val_wrapper} ml-3`}>
                                <label
                                  className={`${styles.label_heading} label_heading`}
                                  id="textInput"
                                >
                                  Usance Interest (%) (For 90 Days)
                                  <strong className="text-danger">*</strong>
                                </label>
                                <div
                                  className={`${styles.val} heading d-flex align-items-center`}
                                >
                                  4%
                                  <div className={` d-flex align-items-center`}>
                                    <label
                                      className={`${styles.label_heading} ml-3 label_heading mb-0`}
                                      id="textInput"
                                    >
                                      Include in Calculation
                                    </label>
                                    <Form>
                                      {['radio'].map((type) => (
                                        <div
                                          key={`inline-${type}`}
                                          className={`${styles.radio_group} d-flex ml-3`}
                                        >
                                          <Form.Check
                                            className={`${styles.radio} radio`}
                                            inline
                                            label="Yes"
                                            name="group1"
                                            type={type}
                                            id={`inline-${type}-1`}
                                          />
                                          <Form.Check
                                            className={`${styles.radio} radio`}
                                            inline
                                            label="No"
                                            name="group1"
                                            type={type}
                                            id={`inline-${type}-2`}
                                          />
                                        </div>
                                      ))}
                                    </Form>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              className={`${styles.filed} d-flex justify-content-start align-content-center col-md-4 col-sm-6`}
                            >
                              <div
                                className={`${styles.alphabet} d-flex justify-content-center align-content-center`}
                              >
                                <span>E</span>
                              </div>
                              <div className={`${styles.val_wrapper} ml-3`}>
                                <label
                                  className={`${styles.label_heading} label_heading`}
                                  id="textInput"
                                >
                                  Trade Margin (%)
                                  <strong className="text-danger">*</strong>
                                </label>
                                <div className={`${styles.val} heading`}>
                                  75
                                </div>
                              </div>
                            </div>
                            <div
                              className={`${styles.filed} d-flex justify-content-start align-content-center col-md-4 col-sm-6`}
                            >
                              <div
                                className={`${styles.alphabet} d-flex justify-content-center align-content-center`}
                              >
                                <span>F</span>
                              </div>
                              <div className={`${styles.val_wrapper} ml-3`}>
                                <label
                                  className={`${styles.label_heading} label_heading`}
                                  id="textInput"
                                >
                                  Tolerance (+/-) Percentage
                                  <strong className="text-danger">*</strong>
                                </label>
                                <div className={`${styles.val} heading`}>
                                  75
                                </div>
                              </div>
                            </div>
                            <div
                              className={`${styles.filed} d-flex justify-content-start align-content-center col-md-4 col-sm-6`}
                            >
                              <div
                                className={`${styles.alphabet} d-flex justify-content-center align-content-center`}
                              >
                                <span>G</span>
                              </div>
                              <div className={`${styles.val_wrapper} ml-3`}>
                                <label
                                  className={`${styles.label_heading} label_heading`}
                                  id="textInput"
                                >
                                  Margin Money (%)
                                  <strong className="text-danger">*</strong>
                                </label>
                                <div className={`${styles.val} heading`}>
                                  75
                                </div>
                              </div>
                            </div>
                            <div
                              className={`${styles.filed} d-flex justify-content-start align-content-center col-md-4 col-sm-6`}
                            >
                              <div
                                className={`${styles.alphabet} d-flex justify-content-center align-content-center`}
                              >
                                <span>F</span>
                              </div>
                              <div className={`${styles.val_wrapper} ml-3`}>
                                <label
                                  className={`${styles.label_heading} label_heading`}
                                  id="textInput"
                                >
                                  {`No. of PDC's`}
                                  <strong className="text-danger">*</strong>
                                </label>
                                <div className={`${styles.val} heading`}>
                                  75
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className={`${styles.content} border_color`}>
                          <span>Calculation</span>
                          <div className={`${styles.input_container} row`}>
                            <div
                              className={`${styles.filed} d-flex justify-content-start align-content-center col-md-3 col-sm-6`}
                            >
                              <div
                                className={`${styles.alphabet} d-flex justify-content-center align-content-center`}
                              >
                                <span>I</span>
                              </div>
                              <div className={`${styles.val_wrapper} ml-3`}>
                                <label
                                  className={`${styles.label_heading} label_heading`}
                                  id="textInput"
                                >
                                  Order Value{' '}
                                  <strong className="text-danger">*</strong>
                                  <span
                                    className={`${styles.blue}`}
                                  >{`(A*B)`}</span>
                                </label>
                                <div className={`${styles.val} heading`}>
                                  USD 38,50,000.00
                                </div>
                              </div>
                            </div>

                            <div
                              className={`${styles.filed} d-flex justify-content-start align-content-center col-md-3 col-sm-6`}
                            >
                              <div
                                className={`${styles.alphabet} d-flex justify-content-center align-content-center`}
                              >
                                <span>J</span>
                              </div>
                              <div className={`${styles.val_wrapper} ml-3`}>
                                <label
                                  className={`${styles.label_heading} label_heading`}
                                  id="textInput"
                                >
                                  Order Value (INR){' '}
                                  <strong className="text-danger">*</strong>
                                  <span
                                    className={`${styles.blue}`}
                                  >{`(I*C)`}</span>
                                </label>
                                <div className={`${styles.val} heading`}>
                                  USD 38,50,000.00
                                </div>
                              </div>
                            </div>
                            <div
                              className={`${styles.filed} d-flex justify-content-start align-content-center col-md-3 col-sm-6`}
                            >
                              <div
                                className={`${styles.alphabet} d-flex justify-content-center align-content-center`}
                              >
                                <span>K</span>
                              </div>
                              <div className={`${styles.val_wrapper} ml-3`}>
                                <label
                                  className={`${styles.label_heading} label_heading`}
                                  id="textInput"
                                >
                                  Usance Interest (%) for 90 days (INR)
                                  <strong className="text-danger">*</strong>
                                  <span
                                    className={`${styles.blue}`}
                                  >{`(J*D/365*90)`}</span>
                                </label>
                                <div className={`${styles.val} heading`}>
                                  USD 38,50,000.00
                                </div>
                              </div>
                            </div>
                            <div
                              className={`${styles.filed} d-flex justify-content-start align-content-center col-md-3 col-sm-6`}
                            >
                              <div
                                className={`${styles.alphabet} d-flex justify-content-center align-content-center`}
                              >
                                <span>L</span>
                              </div>
                              <div className={`${styles.val_wrapper} ml-3`}>
                                <label
                                  className={`${styles.label_heading} label_heading`}
                                  id="textInput"
                                >
                                  Trade Margin (INR)
                                  <strong className="text-danger">*</strong>
                                  <span
                                    className={`${styles.blue}`}
                                  >{`(J*E)`}</span>
                                </label>
                                <div className={`${styles.val} heading`}>
                                  USD 38,50,000.00
                                </div>
                              </div>
                            </div>
                            <div
                              className={`${styles.filed} d-flex justify-content-start align-content-center col-md-3 col-sm-6`}
                            >
                              <div
                                className={`${styles.alphabet} d-flex justify-content-center align-content-center`}
                              >
                                <span>L</span>
                              </div>
                              <div className={`${styles.val_wrapper} ml-3`}>
                                <label
                                  className={`${styles.label_heading} label_heading`}
                                  id="textInput"
                                >
                                  Gross Order Value (INR)
                                  <strong className="text-danger">*</strong>
                                  <span
                                    className={`${styles.blue}`}
                                  >{`(J+K+L)`}</span>
                                </label>
                                <div className={`${styles.val} heading`}>
                                  USD 38,50,000.00
                                </div>
                              </div>
                            </div>
                            <div
                              className={`${styles.filed} d-flex justify-content-start align-content-center col-md-3 col-sm-6`}
                            >
                              <div
                                className={`${styles.alphabet} d-flex justify-content-center align-content-center`}
                              >
                                <span>L</span>
                              </div>
                              <div className={`${styles.val_wrapper} ml-3`}>
                                <label
                                  className={`${styles.label_heading} label_heading`}
                                  id="textInput"
                                >
                                  Tolerance Value (INR)
                                  <strong className="text-danger">*</strong>
                                  <span
                                    className={`${styles.blue}`}
                                  >{`(M*F)`}</span>
                                </label>
                                <div className={`${styles.val} heading`}>
                                  USD 38,50,000.00
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade show active"
                id="Profile"
                role="tabpanel"
              >
                <div className="accordion" id="profileAccordion">
                  <div className={`${styles.card}  accordion card`}>
                    <div
                      className={`${styles.cardHeader} card-header d-flex align-items-center justify-content-between p-3 bg-transparent`}
                      data-toggle="collapse"
                      data-target="#companyDetails"
                      aria-expanded="true"
                      aria-controls="companyDetails"
                    >
                      <h2 className="mb-0">Invoice Details</h2>
                      <span>+</span>
                    </div>
                    <div
                      id="companyDetails"
                      className="collapse"
                      aria-labelledby="companyDetails"
                      data-parent="#profileAccordion"
                    >
                      <div className={`${styles.cardBody} card-body `}>
                        <div className={`${styles.content} border_color`}>
                          <div className={`${styles.input_container} row`}>
                            <div
                              className={`${styles.each_input} col-md-4 col-sm-6`}
                            >
                              <input
                                type="text"
                                id="textInput"
                                name="companyPan"
                                className={`${styles.input_field} input form-control`}
                                required
                              />
                              <label
                                className={`${styles.label_heading} label_heading`}
                                id="textInput"
                              >
                                Buyer Name
                                <strong className="text-danger">*</strong>
                              </label>
                            </div>
                            <div
                              className={`${styles.each_input} col-md-4 col-sm-6`}
                            >
                              <select
                                id="Code"
                                name="typeOfBussiness"
                                className={`${styles.input_field} input form-control`}
                                required
                              >
                                <option value="GTSDT789652JKH">
                                  GTSDT789652JKH
                                </option>
                                <option value="Retailer">Retailer</option>
                                <option value="Trading">Trading</option>
                              </select>
                              <label
                                className={`${styles.label_heading} label_heading`}
                                id="textInput"
                              >
                                Buyer GSTIN
                                <strong className="text-danger">*</strong>
                              </label>
                            </div>
                            <div
                              className={`${styles.each_input} col-md-4 col-sm-6`}
                            >
                              <input
                                type="text"
                                id="textInput"
                                name="companyPan"
                                className={`${styles.input_field} input form-control`}
                                required
                              />
                              <label
                                className={`${styles.label_heading} label_heading`}
                                id="textInput"
                              >
                                Buyer Address
                                <strong className="text-danger">*</strong>
                              </label>
                            </div>
                            <div className={`${styles.radio_form} col-md-12`}>
                              <div
                                className={`${styles.label_heading} label_heading`}
                              >
                                Is Consignee same as Buyer
                                <strong className="text-danger">*</strong>
                              </div>
                              <Form>
                                {['radio'].map((type) => (
                                  <div
                                    key={`inline-${type}`}
                                    className={styles.radio_group}
                                  >
                                    <Form.Check
                                      className={`${styles.radio} radio`}
                                      inline
                                      label="Yes"
                                      onChange={() =>
                                        saveOrderData('IncoTerms', 'FOB')
                                      }
                                      name="group1"
                                      type={type}
                                      id={`inline-${type}-1`}
                                    />
                                    <Form.Check
                                      className={`${styles.radio} radio`}
                                      inline
                                      label="No"
                                      onChange={() =>
                                        saveOrderData('IncoTerms', 'CFR')
                                      }
                                      name="group1"
                                      type={type}
                                      id={`inline-${type}-2`}
                                    />
                                  </div>
                                ))}
                              </Form>
                            </div>
                            <div
                              className={`${styles.each_input} col-md-4 col-sm-6`}
                            >
                              <input
                                type="text"
                                id="textInput"
                                name="companyPan"
                                className={`${styles.input_field} input form-control`}
                                required
                              />
                              <label
                                className={`${styles.label_heading} label_heading`}
                                id="textInput"
                              >
                                Consignee Name
                              </label>
                            </div>
                            <div
                              className={`${styles.each_input} col-md-4 col-sm-6`}
                            >
                              <select
                                id="Code"
                                name="typeOfBussiness"
                                className={`${styles.input_field} input form-control`}
                                required
                              >
                                <option value="GTSDT789652JKH">
                                  GTSDT789652JKH
                                </option>
                                <option value="Retailer">Retailer</option>
                                <option value="Trading">Trading</option>
                              </select>
                              <label
                                className={`${styles.label_heading} label_heading`}
                                id="textInput"
                              >
                                Consignee GSTIN
                                <strong className="text-danger">*</strong>
                              </label>
                            </div>
                            <div
                              className={`${styles.each_input} col-md-4 col-sm-6`}
                            >
                              <input
                                type="text"
                                id="textInput"
                                name="companyPan"
                                className={`${styles.input_field} input form-control`}
                                required
                              />
                              <label
                                className={`${styles.label_heading} label_heading`}
                                id="textInput"
                              >
                                Consignee Address
                                <strong className="text-danger">*</strong>
                              </label>
                            </div>
                            <div className={`${styles.radio_form} col-md-12`}>
                              <div
                                className={`${styles.label_heading} label_heading`}
                              >
                                Is Consignee same as Buyer{' '}
                                <span className="ml-4">
                                 {` Comments: In Case User Selects "No"`}
                                </span>
                              </div>
                              <Form>
                                {['radio'].map((type) => (
                                  <div
                                    key={`inline-${type}`}
                                    className={styles.radio_group}
                                  >
                                    <Form.Check
                                      className={`${styles.radio} radio`}
                                      inline
                                      label="Yes"
                                      onChange={() =>
                                        saveOrderData('IncoTerms', 'FOB')
                                      }
                                      name="group1"
                                      type={type}
                                      id={`inline-${type}-1`}
                                    />
                                    <Form.Check
                                      className={`${styles.radio} radio`}
                                      inline
                                      label="No"
                                      onChange={() =>
                                        saveOrderData('IncoTerms', 'CFR')
                                      }
                                      name="group1"
                                      type={type}
                                      id={`inline-${type}-2`}
                                    />
                                  </div>
                                ))}
                              </Form>
                            </div>
                            <div
                              className={`${styles.each_input} col-md-4 col-sm-6`}
                            >
                              <input
                                type="text"
                                id="textInput"
                                name="companyPan"
                                className={`${styles.input_field} input form-control`}
                                required
                              />
                              <label
                                className={`${styles.label_heading} label_heading`}
                                id="textInput"
                              >
                                Consignee Name
                              </label>
                            </div>
                            <div
                              className={`${styles.each_input} col-md-4 col-sm-6`}
                            >
                              <select
                                id="Code"
                                name="typeOfBussiness"
                                className={`${styles.input_field} input form-control`}
                                required
                              >
                                <option value="GTSDT789652JKH">
                                  GTSDT789652JKH
                                </option>
                                <option value="Retailer">Retailer</option>
                                <option value="Trading">Trading</option>
                              </select>
                              <label
                                className={`${styles.label_heading} label_heading`}
                                id="textInput"
                              >
                                Consignee GSTIN
                                <strong className="text-danger">*</strong>
                              </label>
                            </div>
                            <div
                              className={`${styles.each_input} col-md-4 col-sm-6`}
                            >
                              <input
                                type="text"
                                id="textInput"
                                name="companyPan"
                                className={`${styles.input_field} input form-control`}
                                required
                              />
                              <label
                                className={`${styles.label_heading} label_heading`}
                                id="textInput"
                              >
                                Consignee Address
                                <strong className="text-danger">*</strong>
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className={`${styles.content} border_color`}>
                          <div className={`${styles.input_container} row`}>
                            <div
                              className={`${styles.each_input} col-md-3 col-sm-6`}
                            >
                              <input
                                type="text"
                                id="textInput"
                                name="companyPan"
                                className={`${styles.input_field} input form-control`}
                                required
                              />
                              <label
                                className={`${styles.label_heading} label_heading`}
                                id="textInput"
                              >
                                Importer Name
                                <strong className="text-danger">*</strong>
                              </label>
                            </div>
                            <div
                              className={`${styles.each_input} col-md-3 col-sm-6`}
                            >
                              <input
                                type="text"
                                id="textInput"
                                name="companyPan"
                                className={`${styles.input_field} input form-control`}
                                required
                              />
                              <label
                                className={`${styles.label_heading} label_heading`}
                                id="textInput"
                              >
                                Branch Office
                                <strong className="text-danger">*</strong>
                              </label>
                            </div>
                            <div
                              className={`${styles.each_input} col-md-3 col-sm-6`}
                            >
                              <input
                                type="text"
                                id="textInput"
                                name="companyPan"
                                className={`${styles.input_field} input form-control`}
                                required
                              />
                              <label
                                className={`${styles.label_heading} label_heading`}
                                id="textInput"
                              >
                                Company Address
                                <strong className="text-danger">*</strong>
                              </label>
                            </div>
                            <div
                              className={`${styles.each_input} col-md-3 col-sm-6`}
                            >
                              <input
                                type="text"
                                id="textInput"
                                name="companyPan"
                                className={`${styles.input_field} input form-control`}
                                required
                              />
                              <label
                                className={`${styles.label_heading} label_heading`}
                                id="textInput"
                              >
                                Importer GSTIN
                                <strong className="text-danger">*</strong>
                              </label>
                            </div>
                            <div
                              className={`${styles.each_input} col-md-3 col-sm-6`}
                            >
                              <input
                                type="text"
                                id="textInput"
                                name="companyPan"
                                className={`${styles.input_field} input form-control`}
                                required
                              />
                              <label
                                className={`${styles.label_heading} label_heading`}
                                id="textInput"
                              >
                                Bank Name
                                <strong className="text-danger">*</strong>
                              </label>
                            </div>
                            <div
                              className={`${styles.each_input} col-md-3 col-sm-6`}
                            >
                              <input
                                type="text"
                                id="textInput"
                                name="companyPan"
                                className={`${styles.input_field} input form-control`}
                                required
                              />
                              <label
                                className={`${styles.label_heading} label_heading`}
                                id="textInput"
                              >
                                Branch<strong className="text-danger">*</strong>
                              </label>
                            </div>
                            <div
                              className={`${styles.each_input} col-md-3 col-sm-6`}
                            >
                              <input
                                type="text"
                                id="textInput"
                                name="companyPan"
                                className={`${styles.input_field} input form-control`}
                                required
                              />
                              <label
                                className={`${styles.label_heading} label_heading`}
                                id="textInput"
                              >
                                Branch Address
                                <strong className="text-danger">*</strong>
                              </label>
                            </div>
                            <div
                              className={`${styles.each_input} col-md-3 col-sm-6`}
                            >
                              <input
                                type="text"
                                id="textInput"
                                name="companyPan"
                                className={`${styles.input_field} input form-control`}
                                required
                              />
                              <label
                                className={`${styles.label_heading} label_heading`}
                                id="textInput"
                              >
                                IFSC Code
                                <strong className="text-danger">*</strong>
                              </label>
                            </div>
                            <div
                              className={`${styles.each_input} col-md-3 col-sm-6`}
                            >
                              <input
                                type="text"
                                id="textInput"
                                name="companyPan"
                                className={`${styles.input_field} input form-control`}
                                required
                              />
                              <label
                                className={`${styles.label_heading} label_heading`}
                                id="textInput"
                              >
                                A/C Number
                                <strong className="text-danger">*</strong>
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="tab-pane fade" id="Financials" role="tabpanel">
                                <div className="accordion" id="FinancialsAccordion">
                                    <div className={`${styles.card} card`}>
                                        <div className={`${styles.cardHeader} card-header d-flex align-items-center justify-content-between p-3 bg-transparent`} data-toggle="collapse" data-target="#balanceSheet1" aria-expanded="true" aria-controls="balanceSheet1">
                                            <h2 className="mb-0">Balance Sheet</h2>
                                            <div className={`${styles.unit_container} d-flex align-items-center`}>
                                          <h5 className={`${styles.unit_label} accordion_Text`}>Units :</h5>
                                          <select className={`${styles.options} accordion_DropDown`}>
                                              <option>Crores</option>
                                          </select>
                                               <span>+</span>
                                              </div>
                                          
                                        </div>
                                        <div id="balanceSheet1" className="collapse show" aria-labelledby="balanceSheet1" data-parent="#FinancialsAccordion">
                                            <div className={`${styles.noBorderTable} ${styles.cardBody} card-body border_color`}>
                                              <table className={`${styles.table} table`} cellPadding="0" cellSpacing="0" border="0">
                                                <thead>
                                                  <tr>
                                                    <th width="50%"><h3>Liabilities</h3></th>
                                                    <th className="text-center" width="12.5%">MAR-20</th>
                                                    <th className="text-center" width="12.5%">MAR-19</th>
                                                    <th className="text-center" width="12.5%">MAR-18</th>
                                                    <th className="text-center" width="12.5%">TREND</th>
                                                  </tr>
                                                </thead>
                                                <tbody>
                                                  <tr>
                                                    <td>Capital</td>
                                                    <td className="text-center">1,900.00</td>
                                                    <td className="text-center">1,900.00</td>
                                                    <td className="text-center">1,900.00</td>
                                                    <td className="text-center"><img src="/static/profit.svg" alt="Profit" className="img-fluid" /></td>
                                                  </tr>
                                                  <tr>
                                                    <td>Reserves</td>
                                                    <td className="text-center">1,900.00</td>
                                                    <td className="text-center">1,900.00</td>
                                                    <td className="text-center">1,900.00</td>
                                                    <td className="text-center"><img src="/static/average.svg" alt="Average" className="img-fluid" /></td>
                                                  </tr>
                                                  <tr>
                                                    <td><strong>Total Equity / Net Worth</strong></td>
                                                    <td className="text-center"><strong>2,480.00</strong></td>
                                                    <td className="text-center"><strong>1,260.00</strong></td>
                                                    <td className="text-center"><strong>7,400.00</strong></td>
                                                    <td className="text-center"><img src="/static/loss.svg" alt="Loss" className="img-fluid" /></td>
                                                  </tr>
                                                  <tr>
                                                    <td colSpan="5" height="5px"></td>
                                                  </tr>
                                                  <tr>
                                                    <td>Long Term Borrowings</td>
                                                    <td className="text-center">1,900.00</td>
                                                    <td className="text-center">1,900.00</td>
                                                    <td className="text-center">1,900.00</td>
                                                    <td className="text-center"><img src="/static/loss.svg" alt="Loss" className="img-fluid" /></td>
                                                  </tr>
                                                  <tr>
                                                    <td>Short Term Borrowings</td>
                                                    <td className="text-center">1,900.00</td>
                                                    <td className="text-center">1,900.00</td>
                                                    <td className="text-center">1,900.00</td>
                                                    <td className="text-center"><img src="/static/loss.svg" alt="Loss" className="img-fluid" /></td>
                                                  </tr>
                                                  <tr>
                                                    <td><strong>Total Borrowings</strong></td>
                                                    <td className="text-center"><strong>2,480.00</strong></td>
                                                    <td className="text-center"><strong>1,260.00</strong></td>
                                                    <td className="text-center"><strong>7,400.00</strong></td>
                                                    <td className="text-center"><img src="/static/loss.svg" alt="Loss" className="img-fluid" /></td>
                                                  </tr>
                                                  <tr>
                                                    <td colSpan="5" height="5px"></td>
                                                  </tr>
                                                  <tr>
                                                    <td>Creditors</td>
                                                    <td className="text-center">1,900.00</td>
                                                    <td className="text-center">1,900.00</td>
                                                    <td className="text-center">1,900.00</td>
                                                    <td className="text-center"><img src="/static/profit.svg" alt="Profit" className="img-fluid" /></td>
                                                  </tr>
                                                  <tr>
                                                    <td>Other Current Liabilities</td>
                                                    <td className="text-center">1,900.00</td>
                                                    <td className="text-center">1,900.00</td>
                                                    <td className="text-center">1,900.00</td>
                                                    <td className="text-center"><img src="/static/average.svg" alt="Average" className="img-fluid" /></td>
                                                  </tr>
                                                  <tr>
                                                    <td colSpan="5" height="5px"></td>
                                                  </tr>
                                                  <tr>
                                                    <td className="border-top"><strong>Total Liabilities</strong></td>
                                                    <td className="text-center border-top"><strong>1,900.00</strong></td>
                                                    <td className="text-center border-top"><strong>1,900.00</strong></td>
                                                    <td className="text-center border-top"><strong>1,900.00</strong></td>
                                                    <td className="text-center border-top"><img src="/static/profit.svg" alt="Profit" className="img-fluid" /></td>
                                                  </tr>

                                                  <tr>
                                                    <td>Net Block (Land, Building, Plant & Machinery)</td>
                                                    <td className="text-center">1,900.00</td>
                                                    <td className="text-center">1,900.00</td>
                                                    <td className="text-center">1,900.00</td>
                                                    <td className="text-center"><img src="/static/profit.svg" alt="Profit" className="img-fluid" /></td>
                                                  </tr>
                                                  <tr>
                                                    <td>Net Block (Other Assets)</td>
                                                    <td className="text-center">1,900.00</td>
                                                    <td className="text-center">1,900.00</td>
                                                    <td className="text-center">1,900.00</td>
                                                    <td className="text-center"><img src="/static/average.svg" alt="Average" className="img-fluid" /></td>
                                                  </tr>
                                                  <tr>
                                                    <td>CWIP</td>
                                                    <td className="text-center">1,900.00</td>
                                                    <td className="text-center">1,900.00</td>
                                                    <td className="text-center">1,900.00</td>
                                                    <td className="text-center"><img src="/static/average.svg" alt="Average" className="img-fluid" /></td>
                                                  </tr>
                                                  <tr>
                                                    <td>Investment</td>
                                                    <td className="text-center">1,900.00</td>
                                                    <td className="text-center">1,900.00</td>
                                                    <td className="text-center">1,900.00</td>
                                                    <td className="text-center"><img src="/static/average.svg" alt="Average" className="img-fluid" /></td>
                                                  </tr>
                                                  <tr>
                                                    <td><strong>Total Non-Current Assets</strong></td>
                                                    <td className="text-center"><strong>2,480.00</strong></td>
                                                    <td className="text-center"><strong>1,260.00</strong></td>
                                                    <td className="text-center"><strong>7,400.00</strong></td>
                                                    <td className="text-center"><img src="/static/loss.svg" alt="Loss" className="img-fluid" /></td>
                                                  </tr>
                                                  <tr>
                                                    <td colSpan="5" height="5px"></td>
                                                  </tr>
                                                  <tr>
                                                    <td>Inventories</td>
                                                    <td className="text-center">1,900.00</td>
                                                    <td className="text-center">1,900.00</td>
                                                    <td className="text-center">1,900.00</td>
                                                    <td className="text-center"><img src="/static/loss.svg" alt="Loss" className="img-fluid" /></td>
                                                  </tr>
                                                  <tr>
                                                    <td>Trade Receivables (Debtors)</td>
                                                    <td className="text-center">1,900.00</td>
                                                    <td className="text-center">1,900.00</td>
                                                    <td className="text-center">1,900.00</td>
                                                    <td className="text-center"><img src="/static/loss.svg" alt="Loss" className="img-fluid" /></td>
                                                  </tr>
                                                  <tr>
                                                    <td>Cash & Bank Balance</td>
                                                    <td className="text-center">1,900.00</td>
                                                    <td className="text-center">1,900.00</td>
                                                    <td className="text-center">1,900.00</td>
                                                    <td className="text-center"><img src="/static/loss.svg" alt="Loss" className="img-fluid" /></td>
                                                  </tr>
                                                  <tr>
                                                    <td>Loans & Advances</td>
                                                    <td className="text-center">1,900.00</td>
                                                    <td className="text-center">1,900.00</td>
                                                    <td className="text-center">1,900.00</td>
                                                    <td className="text-center"><img src="/static/loss.svg" alt="Loss" className="img-fluid" /></td>
                                                  </tr>
                                                  <tr>
                                                    <td>Other Current Assets</td>
                                                    <td className="text-center">1,900.00</td>
                                                    <td className="text-center">1,900.00</td>
                                                    <td className="text-center">1,900.00</td>
                                                    <td className="text-center"><img src="/static/loss.svg" alt="Loss" className="img-fluid" /></td>
                                                  </tr>
                                                  <tr>
                                                    <td><strong>Total Current Assets</strong></td>
                                                    <td className="text-center">1,900.00</td>
                                                    <td className="text-center">1,900.00</td>
                                                    <td className="text-center">1,900.00</td>
                                                    <td className="text-center"><img src="/static/loss.svg" alt="Loss" className="img-fluid" /></td>
                                                  </tr>
                                                  <tr>
                                                    <td colSpan="5" height="5px"></td>
                                                  </tr>
                                                  <tr>
                                                    <td className="border-top"><strong>Total Assets</strong></td>
                                                    <td className="text-center border-top"><strong>1,900.00</strong></td>
                                                    <td className="text-center border-top"><strong>1,900.00</strong></td>
                                                    <td className="text-center border-top"><strong>1,900.00</strong></td>
                                                    <td className="text-center border-top"><img src="/static/profit.svg" alt="Profit" className="img-fluid" /></td>
                                                  </tr>
                                              
                                                </tbody>
                                              </table>
                                            </div>
                                        </div>
                                    </div>

                                    <div className={`${styles.card} card`}>
                                        <div className={`${styles.cardHeader} card-header d-flex align-items-center justify-content-between p-3 bg-transparent`} data-toggle="collapse" data-target="#incomeStatement" aria-expanded="true" aria-controls="incomeStatement">
                                            <h2 className="mb-0">Income Statement</h2>
                                            <div className={`${styles.unit_container} d-flex align-items-center`}>
                                          <h5 className={`${styles.unit_label} accordion_Text`}>Units :</h5>
                                          <select className={`${styles.options} accordion_DropDown`}>
                                              <option>Crores</option>
                                          </select>
                                               <span>+</span>
                                              </div>
                                        </div>
                                        <div id="incomeStatement" className="collapse" aria-labelledby="incomeStatement" data-parent="#FinancialsAccordion">
                                            <div className={`${styles.noBorderTable} ${styles.cardBody} card-body border_color`}>
                                              <table className={`${styles.table} table`} cellPadding="0" cellSpacing="0" border="0">
                                                <thead>
                                                  <tr>
                                                    <th width="50%"></th>
                                                    <th className="text-center" width="12.5%">MAR-20</th>
                                                    <th className="text-center" width="12.5%">MAR-19</th>
                                                    <th className="text-center" width="12.5%">MAR-18</th>
                                                    <th className="text-center" width="12.5%">TREND</th>
                                                  </tr>
                                                </thead>
                                                <tbody>
                                                  <tr>
                                                    <td>Revenue From Operation</td>
                                                    <td className="text-center">1,900.00</td>
                                                    <td className="text-center">1,900.00</td>
                                                    <td className="text-center">1,900.00</td>
                                                    <td className="text-center"><img src="/static/profit.svg" alt="Profit" className="img-fluid" /></td>
                                                  </tr>
                                                  <tr>
                                                    <td>Other Income</td>
                                                    <td className="text-center">1,900.00</td>
                                                    <td className="text-center">1,900.00</td>
                                                    <td className="text-center">1,900.00</td>
                                                    <td className="text-center"><img src="/static/average.svg" alt="Average" className="img-fluid" /></td>
                                                  </tr>
                                                  <tr>
                                                    <td><strong>Total Income</strong></td>
                                                    <td className="text-center"><strong>2,480.00</strong></td>
                                                    <td className="text-center"><strong>1,260.00</strong></td>
                                                    <td className="text-center"><strong>7,400.00</strong></td>
                                                    <td className="text-center"><img src="/static/loss.svg" alt="Loss" className="img-fluid" /></td>
                                                  </tr>
                                                  
                                                  <tr>
                                                    <td>Purchases</td>
                                                    <td className="text-center">1,900.00</td>
                                                    <td className="text-center">1,900.00</td>
                                                    <td className="text-center">1,900.00</td>
                                                    <td className="text-center"><img src="/static/profit.svg" alt="Profit" className="img-fluid" /></td>
                                                  </tr>
                                                  <tr>
                                                    <td>Other Expenses (Ex Dep, Int, Tax)</td>
                                                    <td className="text-center">1,900.00</td>
                                                    <td className="text-center">1,900.00</td>
                                                    <td className="text-center">1,900.00</td>
                                                    <td className="text-center"><img src="/static/profit.svg" alt="Profit" className="img-fluid" /></td>
                                                  </tr>
                                                  <tr>
                                                    <td><strong>Total Expenses</strong></td>
                                                    <td className="text-center"><strong>2,480.00</strong></td>
                                                    <td className="text-center"><strong>1,260.00</strong></td>
                                                    <td className="text-center"><strong>7,400.00</strong></td>
                                                    <td className="text-center"><img src="/static/profit.svg" alt="Profit" className="img-fluid" /></td>
                                                  </tr>
                                                  
                                                  <tr>
                                                    <td><strong>EBITA</strong></td>
                                                    <td className="text-center">1,900.00</td>
                                                    <td className="text-center">1,900.00</td>
                                                    <td className="text-center">1,900.00</td>
                                                    <td className="text-center"><img src="/static/profit.svg" alt="Profit" className="img-fluid" /></td>
                                                  </tr>
                                                  <tr>
                                                    <td>Depreciation</td>
                                                    <td className="text-center">1,900.00</td>
                                                    <td className="text-center">1,900.00</td>
                                                    <td className="text-center">1,900.00</td>
                                                    <td className="text-center"><img src="/static/profit.svg" alt="Profit" className="img-fluid" /></td>
                                                  </tr>
                                                  <tr>
                                                    <td><strong>EBIT</strong></td>
                                                    <td className="text-center">1,900.00</td>
                                                    <td className="text-center">1,900.00</td>
                                                    <td className="text-center">1,900.00</td>
                                                    <td className="text-center"><img src="/static/profit.svg" alt="Profit" className="img-fluid" /></td>
                                                  </tr>
                                                  <tr>
                                                    <td>Interest Cost</td>
                                                    <td className="text-center">1,900.00</td>
                                                    <td className="text-center">1,900.00</td>
                                                    <td className="text-center">1,900.00</td>
                                                    <td className="text-center"><img src="/static/profit.svg" alt="Profit" className="img-fluid" /></td>
                                                  </tr>
                                                  <tr>
                                                    <td><strong>PBT</strong></td>
                                                    <td className="text-center">1,900.00</td>
                                                    <td className="text-center">1,900.00</td>
                                                    <td className="text-center">1,900.00</td>
                                                    <td className="text-center"><img src="/static/profit.svg" alt="Profit" className="img-fluid" /></td>
                                                  </tr>
                                                  <tr>
                                                  <td>Less: Tax</td>
                                                    <td className="text-center">1,900.00</td>
                                                    <td className="text-center">1,900.00</td>
                                                    <td className="text-center">1,900.00</td>
                                                    <td className="text-center"><img src="/static/profit.svg" alt="Profit" className="img-fluid" /></td>
                                                  </tr>
                                                  <tr>
                                                    <td><strong>PAT</strong></td>
                                                    <td className="text-center">1,900.00</td>
                                                    <td className="text-center">1,900.00</td>
                                                    <td className="text-center">1,900.00</td>
                                                    <td className="text-center"><img src="/static/profit.svg" alt="Profit" className="img-fluid" /></td>
                                                  </tr>
                                                  <tr>
                                                  <td>Effective Tax Rate %</td>
                                                    <td className="text-center">1,900.00</td>
                                                    <td className="text-center">1,900.00</td>
                                                    <td className="text-center">1,900.00</td>
                                                    <td className="text-center"><img src="/static/profit.svg" alt="Profit" className="img-fluid" /></td>
                                                  </tr>
                                                </tbody>
                                              </table>
                                            </div>
                                        </div>
                                    </div>

                                    <div className={`${styles.card} card`}>
                                        <div className={`${styles.cardHeader} card-header d-flex align-items-center justify-content-between p-3 bg-transparent`} data-toggle="collapse" data-target="#cashFlowStatement" aria-expanded="true" aria-controls="cashFlowStatement">
                                            <h2 className="mb-0">Cash Flow Statement</h2>
                                            <div className={`${styles.unit_container} d-flex align-items-center`}>
                                          <h5 className={`${styles.unit_label} accordion_Text`}>Units :</h5>
                                          <select className={`${styles.options} accordion_DropDown`}>
                                              <option>Crores</option>
                                          </select>
                                               <span>+</span>
                                              </div>
                                           
                                        </div>
                                        <div id="cashFlowStatement" className="collapse" aria-labelledby="cashFlowStatement" data-parent="#FinancialsAccordion">
                                            <div className={`${styles.noBorderTable} ${styles.cardBody} card-body border_color`}>
                                              <table className={`${styles.table} table`} cellPadding="0" cellSpacing="0" border="0">
                                                <thead>
                                                  <tr>
                                                    <th width="50%"></th>
                                                    <th className="text-center" width="12.5%">MAR-20</th>
                                                    <th className="text-center" width="12.5%">MAR-19</th>
                                                    <th className="text-center" width="12.5%">MAR-18</th>
                                                    <th className="text-center" width="12.5%">TREND</th>
                                                  </tr>
                                                </thead>
                                                <tbody>
                                                  <tr>
                                                    <td>Operating Cash Flow</td>
                                                    <td className="text-center">1,900.00</td>
                                                    <td className="text-center">1,900.00</td>
                                                    <td className="text-center">1,900.00</td>
                                                    <td className="text-center"><img src="/static/profit.svg" alt="Profit" className="img-fluid" /></td>
                                                  </tr>
                                                  <tr>
                                                    <td>Investing Cash Flow</td>
                                                    <td className="text-center">1,900.00</td>
                                                    <td className="text-center">1,900.00</td>
                                                    <td className="text-center">1,900.00</td>
                                                    <td className="text-center"><img src="/static/average.svg" alt="Average" className="img-fluid" /></td>
                                                  </tr>
                                                 
                                                  <tr>
                                                    <td>Financing Cash Flow</td>
                                                    <td className="text-center">1,900.00</td>
                                                    <td className="text-center">1,900.00</td>
                                                    <td className="text-center">1,900.00</td>
                                                    <td className="text-center"><img src="/static/loss.svg" alt="Loss" className="img-fluid" /></td>
                                                  </tr>
                                                  <tr>
                                                    <td>Net Change in Cash</td>
                                                    <td className="text-center">1,900.00</td>
                                                    <td className="text-center">1,900.00</td>
                                                    <td className="text-center">1,900.00</td>
                                                    <td className="text-center"><img src="/static/loss.svg" alt="Loss" className="img-fluid" /></td>
                                                  </tr>
                                                  <tr>
                                                    <td>Free Cash Flow</td>
                                                    <td className="text-center">1,900.00</td>
                                                    <td className="text-center">1,900.00</td>
                                                    <td className="text-center">1,900.00</td>
                                                    <td className="text-center"><img src="/static/loss.svg" alt="Loss" className="img-fluid" /></td>
                                                  </tr>
                                                  <tr>
                                                    <td>Capex</td>
                                                    <td className="text-center">1,900.00</td>
                                                    <td className="text-center">1,900.00</td>
                                                    <td className="text-center">1,900.00</td>
                                                    <td className="text-center"><img src="/static/loss.svg" alt="Loss" className="img-fluid" /></td>
                                                  </tr>
                                                 
                                                </tbody>
                                              </table>
                                            </div>
                                        </div>
                                    </div>

                                    <div className={`${styles.card} card`}>
                                        <div className={`${styles.cardHeader} card-header d-flex align-items-center justify-content-between p-3 bg-transparent`} data-toggle="collapse" data-target="#ratioAnalysis" aria-expanded="true" aria-controls="ratioAnalysis">
                                            <h2 className="mb-0">Ratio Analysis</h2>
                                            <div className={`${styles.unit_container} d-flex align-items-center`}>
                                          <h5 className={`${styles.unit_label} accordion_Text`}>Units :</h5>
                                          <select className={`${styles.options} accordion_DropDown`}>
                                              <option>Crores</option>
                                          </select>
                                               <span>+</span>
                                              </div>
                                        </div>
                                        <div id="ratioAnalysis" className="collapse" aria-labelledby="ratioAnalysis" data-parent="#FinancialsAccordion">
                                            <div className={`${styles.noBorderTable} ${styles.cardBody} card-body border_color`}>
                                              <table className={`${styles.table} table`} cellPadding="0" cellSpacing="0" border="0">
                                                <thead>
                                                  <tr>
                                                    <th width="50%"><h3>Activity & Profitibility Ratio</h3></th>
                                                    <th className="text-center" width="12.5%">MAR-20</th>
                                                    <th className="text-center" width="12.5%">MAR-19</th>
                                                    <th className="text-center" width="12.5%">MAR-18</th>
                                                    <th className="text-center" width="12.5%">TREND</th>
                                                  </tr>
                                                </thead>
                                                <tbody>
                                                  <tr>
                                                    <td className='text-primary font-weight-bold'>ACTIVITY RATIO</td>
                                                  </tr>
                                                  <tr>
                                                    <td>Working Capital Turnover Ratio</td>
                                                    <td className="text-center">20.00</td>
                                                    <td className="text-center">20.00</td>
                                                    <td className="text-center">20.00</td>
                                                    <td className="text-center"><img src="/static/profit.svg" alt="Profit" className="img-fluid" /></td>
                                                  </tr>
                                                  <tr>
                                                    <td>Fixed Assets Turnover Ratio</td>
                                                    <td className="text-center">20.00</td>
                                                    <td className="text-center">20.00</td>
                                                    <td className="text-center">20.00</td>
                                                    <td className="text-center"><img src="/static/average.svg" alt="Average" className="img-fluid" /></td>
                                                  </tr>
                                                  <tr>
                                                    <td>Working Capital Cycle (Days)</td>
                                                    <td className="text-center">360</td>
                                                    <td className="text-center">360</td>
                                                    <td className="text-center">360</td>
                                                    <td className="text-center"><img src="/static/loss.svg" alt="Loss" className="img-fluid" /></td>
                                                  </tr>
                                                 
                                                  <tr>
                                                    <td>Debtors Period (Days)</td>
                                                    <td className="text-center">360</td>
                                                    <td className="text-center">360</td>
                                                    <td className="text-center">360</td>
                                                    <td className="text-center"><img src="/static/profit.svg" alt="Profit" className="img-fluid" /></td>
                                                  </tr>
                                                  <tr>
                                                    <td>Inventory Period (Days)</td>
                                                    <td className="text-center">360</td>
                                                    <td className="text-center">360</td>
                                                    <td className="text-center">360</td>
                                                    <td className="text-center"><img src="/static/profit.svg" alt="Profit" className="img-fluid" /></td>
                                                  </tr>
                                                  <tr>
                                                    <td>Creditors Period (Days)</td>
                                                    <td className="text-center">360</td>
                                                    <td className="text-center">360</td>
                                                    <td className="text-center">360</td>
                                                    <td className="text-center"><img src="/static/profit.svg" alt="Profit" className="img-fluid" /></td>
                                                  </tr>
                                                  <tr>
                                                    <td colSpan="5" height="5px"></td>
                                                  </tr>
                                                  <tr>
                                                    <td className='text-primary font-weight-bold'>PROFITIBILITY RATIO</td>
                                                  </tr>
                                                  <tr>
                                                    <td>Operating Profit Margin (EBITDA Margin)</td>
                                                    <td className="text-center">80%</td>
                                                    <td className="text-center">80%</td>
                                                    <td className="text-center">80%</td>
                                                    <td className="text-center"><img src="/static/profit.svg" alt="Profit" className="img-fluid" /></td>
                                                  </tr>
                                                  <tr>
                                                    <td>Return On Capital Emplyed (%)</td>
                                                    <td className="text-center">80%</td>
                                                    <td className="text-center">80%</td>
                                                    <td className="text-center">80%</td>
                                                    <td className="text-center"><img src="/static/profit.svg" alt="Profit" className="img-fluid" /></td>
                                                  </tr>
                                                  <tr>
                                                    <td>Return On Total Assets (%)</td>
                                                    <td className="text-center">80%</td>
                                                    <td className="text-center">80%</td>
                                                    <td className="text-center">80%</td>
                                                    <td className="text-center"><img src="/static/profit.svg" alt="Profit" className="img-fluid" /></td>
                                                  </tr>
                                                  <tr>
                                                    <td colSpan="5" height="5px"></td>
                                                  </tr>
                                                </tbody>
                                              </table>
                                              
                                              <table className={`${styles.table} table`} cellPadding="0" cellSpacing="0" border="0">
                                                <thead>
                                                  <tr>
                                                    <th width="50%"><h3>Coverage, Liquidity & Growth Ratio</h3></th>
                                                    <th className="text-center" width="12.5%">MAR-20</th>
                                                    <th className="text-center" width="12.5%">MAR-19</th>
                                                    <th className="text-center" width="12.5%">MAR-18</th>
                                                    <th className="text-center" width="12.5%">TREND</th>
                                                  </tr>
                                                </thead>
                                                <tbody>
                                                  <tr>
                                                    <td className='text-primary font-weight-bold'>COVERAGE RATIO</td>
                                                  </tr>
                                                  <tr>
                                                    <td>Debt Equity Ratio</td>
                                                    <td className="text-center">20.00</td>
                                                    <td className="text-center">20.00</td>
                                                    <td className="text-center">20.00</td>
                                                    <td className="text-center"><img src="/static/profit.svg" alt="Profit" className="img-fluid" /></td>
                                                  </tr>
                                                  <tr>
                                                    <td>Debt EBITDA Ratio (EBITDA Coverage)</td>
                                                    <td className="text-center">20.00</td>
                                                    <td className="text-center">20.00</td>
                                                    <td className="text-center">20.00</td>
                                                    <td className="text-center"><img src="/static/average.svg" alt="Average" className="img-fluid" /></td>
                                                  </tr>
                                                  <tr>
                                                    <td>Interest Coverage Ratio</td>
                                                    <td className="text-center">360</td>
                                                    <td className="text-center">360</td>
                                                    <td className="text-center">360</td>
                                                    <td className="text-center"><img src="/static/loss.svg" alt="Loss" className="img-fluid" /></td>
                                                  </tr>
                                                 
                                                  <tr>
                                                    <td>Debt Service Ratio</td>
                                                    <td className="text-center">360</td>
                                                    <td className="text-center">360</td>
                                                    <td className="text-center">360</td>
                                                    <td className="text-center"><img src="/static/profit.svg" alt="Profit" className="img-fluid" /></td>
                                                  </tr>
                                                 
                                                  <tr>
                                                    <td colSpan="5" height="5px"></td>
                                                  </tr>
                                                  <tr>
                                                    <td className='text-primary font-weight-bold'>LIQUIDITY RATIO</td>
                                                  </tr>
                                                  
                                                  <tr>
                                                    <td>Curent Ratio</td>
                                                    <td className="text-center">80%</td>
                                                    <td className="text-center">80%</td>
                                                    <td className="text-center">80%</td>
                                                    <td className="text-center"><img src="/static/profit.svg" alt="Profit" className="img-fluid" /></td>
                                                  </tr>
                                                  <tr>
                                                    <td>Quick Ratio</td>
                                                    <td className="text-center">80%</td>
                                                    <td className="text-center">80%</td>
                                                    <td className="text-center">80%</td>
                                                    <td className="text-center"><img src="/static/average.svg" alt="Average" className="img-fluid" /></td>
                                                  </tr>
                                                  <tr>
                                                    <td colSpan="5" height="5px"></td>
                                                  </tr>
                                                  <tr>
                                                    <td className='text-primary font-weight-bold'>GROWTH RATIO</td>
                                                  </tr>
                                                  <tr>
                                                    <td>Asset Growth Ratio</td>
                                                    <td className="text-center">80%</td>
                                                    <td className="text-center">80%</td>
                                                    <td className="text-center">80%</td>
                                                    <td className="text-center"><img src="/static/profit.svg" alt="Profit" className="img-fluid" /></td>
                                                  </tr>
                                                  <tr>
                                                    <td>Net Worth Growth Ratio</td>
                                                    <td className="text-center">80%</td>
                                                    <td className="text-center">80%</td>
                                                    <td className="text-center">80%</td>
                                                    <td className="text-center"><img src="/static/average.svg" alt="Average" className="img-fluid" /></td>
                                                  </tr>
                                                  <tr>
                                                    <td>Sales Growth Ratio</td>
                                                    <td className="text-center">80%</td>
                                                    <td className="text-center">80%</td>
                                                    <td className="text-center">80%</td>
                                                    <td className="text-center"><img src="/static/average.svg" alt="Average" className="img-fluid" /></td>
                                                  </tr>
                                                </tbody>
                                              </table>
                                            </div>
                                        </div>
                                    </div>

                                    <div className={`${styles.card} card`}>
                                        <div className={`${styles.cardHeader} card-header d-flex align-items-center justify-content-between p-3 bg-transparent`} data-toggle="collapse" data-target="#peerComparison" aria-expanded="true" aria-controls="peerComparison">
                                            <h2 className="mb-0">Peer Comparison</h2>
                                            <div className={`${styles.unit_container} d-flex align-items-center`}>
                                          <h5 className={`${styles.unit_label} accordion_Text`}>Units :</h5>
                                          <select className={`${styles.options} accordion_DropDown`}>
                                              <option>Crores</option>
                                          </select>
                                               <span>+</span>
                                              </div>
                                        </div>
                                        <div id="peerComparison" className="collapse" aria-labelledby="peerComparison" data-parent="#FinancialsAccordion">
                                            <div className={`${styles.noBorderTable} ${styles.cardBody} card-body border_color`}>
                                              <table className={`${styles.table} table`} cellPadding="0" cellSpacing="0" border="0">
                                                <thead>
                                                  <tr>
                                                    <th width="30%">COMPANY</th>
                                                    <th className="text-center" width="14%">FY ENDING</th>
                                                    <th className="text-center" width="14%">REVENUE</th>
                                                    <th className="text-center" width="14%">EBDITA MARGIN (%)</th>
                                                    <th className="text-center" width="14%">PAT MARGIN (%)</th>
                                                    <th className="text-center" width="14%">BORROWINGS</th>

                                                  </tr>
                                                </thead>
                                                <tbody>
                                                  <tr>
                                                    <td>Empee Hotels Limited</td>
                                                    <td className="text-center">Mar-2018</td>
                                                    <td className="text-center">96.17</td>
                                                    <td className="text-center">45.26%</td>
                                                    <td className="text-center">45.26%</td>
                                                    <td className="text-center">285.01</td>
                                                  </tr>
                                                  <tr>
                                                    <td>Ascent Hotels Private Limited</td>
                                                    <td className="text-center">Mar-2018</td>
                                                    <td className="text-center">96.17</td>
                                                    <td className="text-center">45.26%</td>
                                                    <td className="text-center">45.26%</td>
                                                    <td className="text-center">285.01</td>
                                                  </tr>
                                                  <tr>
                                                    <td>Orange Country Resorts & Hotels Limited</td>
                                                    <td className="text-center">Mar-2018</td>
                                                    <td className="text-center">96.17</td>
                                                    <td className="text-center">45.26%</td>
                                                    <td className="text-center">45.26%</td>
                                                    <td className="text-center">285.01</td>
                                                  </tr>
                                                  <tr>
                                                    <td>Divine Infracon Private Limited</td>
                                                    <td className="text-center">Mar-2018</td>
                                                    <td className="text-center">96.17</td>
                                                    <td className="text-center">45.26%</td>
                                                    <td className="text-center">45.26%</td>
                                                    <td className="text-center">285.01</td>
                                                  </tr>
                                                  <tr>
                                                    <td>Gujarat Jhm Hotels Limited</td>
                                                    <td className="text-center">Mar-2018</td>
                                                    <td className="text-center">96.17</td>
                                                    <td className="text-center">45.26%</td>
                                                    <td className="text-center">45.26%</td>
                                                    <td className="text-center">285.01</td>
                                                  </tr>
                                                 
                                                </tbody>
                                              </table>
                                            </div>
                                        </div>
                                    </div>

                                    <div className={`${styles.card} card`}>
                                        <div className={`${styles.cardHeader} card-header d-flex align-items-center justify-content-between p-3 bg-transparent`} data-toggle="collapse" data-target="#openCharges" aria-expanded="true" aria-controls="openCharges">
                                            <h2 className="mb-0">Open Charges</h2>
                                            
                                            <div className={`${styles.unit_container} d-flex align-items-center`}>
                                          <h5 className={`${styles.unit_label} accordion_Text`}>Units :</h5>
                                          <select className={`${styles.options} accordion_DropDown`}>
                                              <option>Crores</option>
                                          </select>
                                               <span>+</span>
                                              </div>
                                        </div>
                                        <div id="openCharges" className="collapse" aria-labelledby="openCharges" data-parent="#FinancialsAccordion">
                                            <div className={`${styles.noBorderTable} ${styles.cardBody} card-body border_color`}>
                                              <table className={`${styles.table} table`} cellPadding="0" cellSpacing="0" border="0">
                                                <thead>
                                                  <tr>
                                                    <th width="15%">CHARGE ID</th>
                                                    <th width="25%">CHARGE HOLDER</th>
                                                    <th className="text-center" width="12%">AMOUNT</th>
                                                    <th className="text-center" width="12%">CREATION</th>
                                                    <th className="text-center" width="12%">SECURITY</th>
                                                    <th className="text-center" width="12%">MODIFICATION</th>
                                                    <th className="text-center" width="12%">SATISFACTION</th>

                                                  </tr>
                                                </thead>
                                                <tbody>
                                                  <tr>
                                                    <td>100310953</td>
                                                    <td>Capital India Finance Limited</td>
                                                    <td className="text-center">96.17</td>
                                                    <td className="text-center">08-12-2019</td>
                                                    <td className="text-center" ><img src="/static/eye.svg" alt="Eye" className="img-fluid" /></td>
                                                    <td className="text-center">08-12-2019</td>
                                                    <td className="text-center">08-12-2019</td>
                                                    
                                                  </tr>
                                                  <tr>
                                                    <td>100310953</td>
                                                    <td>Divine Infracon Private Limited</td>
                                                    <td className="text-center">96.17</td>
                                                    <td className="text-center">08-12-2019</td>
                                                    <td className="text-center" ><img src="/static/eye.svg" alt="Eye" className="img-fluid" /></td>
                                                    <td className="text-center">08-12-2019</td>
                                                    <td className="text-center">08-12-2019</td>
                                                    
                                                  </tr>
                                                  <tr>
                                                    <td>100310953</td>
                                                    <td>Gujarat Jhm Hotels Limited</td>
                                                    <td className="text-center">96.17</td>
                                                    <td className="text-center">08-12-2019</td>
                                                    <td className="text-center" ><img src="/static/eye.svg" alt="Eye" className="img-fluid" /></td>
                                                    <td className="text-center">08-12-2019</td>
                                                    <td className="text-center">08-12-2019</td>
                                                    
                                                  </tr>
                                                 
                                                </tbody>
                                              </table>
                                            </div>
                                        </div>
                                    </div>

                                   
                                </div>
                            </div>
                            <div className="tab-pane fade" id="gst" role="tabpanel">
                                <div className={`${styles.card}  accordion_body`}>
                                  <GST/>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="Compliance" role="tabpanel">
                                <div className={`${styles.card} card`}>
                                   
                                        <div className={`${styles.cardHeader} card-header d-flex align-items-center justify-content-between bg-transparent`} data-toggle="collapse" data-target="#compliance" aria-expanded="true" aria-controls="compliance">
                                            <div className={`${styles.detail_head_container}  d-flex align-items-center justify-content-between w-100`}>
                                              <h2 className="mb-0 w-100 ">Compliance</h2>
                                              <div className={`${styles.categories} mb-0  d-flex align-items-center justify-content-end `}>
                                                <label className={styles.label}>Status:</label>
                                                <div className={`${styles.status} d-flex align-items-center justify-content-between`}>
                                                  <span> NON-COMPLIANT HIGH RISK</span>
                                                </div>
                                              </div>
                                            </div>
                                            <span>+</span>
                                        </div>
                                        <div id="compliance" className="collapse" aria-labelledby="compliance" data-parent="#profileAccordion">
                                            <div className={` ${styles.cardBody_compliance} card-body border_color` }>
                                              <Row className={` ${styles.row} mt-1 mb-1`}>
                                                <Col className={`${styles.col}`}  sm={2}>
                                                <span className={`${styles.head} d-flex align-items-center justify-content-flex-start`}>
                                                  Severe Risk (1)
                                                </span></Col>
                                                <Col className={`${styles.col}`}>
                                                 <div className={`${styles.card_compliance_wrapper} d-flex align-items-center justify-content-flex-start`}>
                                              
                                                <div className={`${styles.val} heading d-flex align-items-center justify-content-flex-start`}>
                                                  <div className={`${styles.compliance_purple} d-flex align-items-center justify-content-center`}>
                                                    <div className={styles.purple_dot}></div>
                                                     <div className={`${styles.compliance_content} Compliance ml-1`}>
                                                       IBBB
                                                     </div>
                                                  </div>
                                                 
                                               
                                                </div>
                                              </div>
                                                </Col>
                                              </Row>
                                               <Row className={` ${styles.row} mt-1 mb-1`} >
                                                <Col className={`${styles.col}`} sm={2}>
                                                <span className={styles.head}>
                                                 High Risk (4)
                                                </span></Col>
                                                <Col className={`${styles.col}`} >
                                                 <div className={`${styles.card_compliance_wrapper} d-flex align-items-center justify-content-flex-start`}>
                                              
                                                <div className={`${styles.val} heading d-flex align-items-center justify-content-flex-start`}>
                                                <div className={`${styles.compliance_red} d-flex align-items-center justify-content-center`}>
                                                    <div className={styles.red_dot}></div>
                                                     <div className={`${styles.compliance_content} Compliance ml-1`}>
                                                      EPF Transaction Default
                                                     </div>
                                                  </div>
                                                   <div className={`${styles.compliance_red} d-flex align-items-center justify-content-center`}>
                                                    <div className={styles.red_dot}></div>
                                                     <div className={`${styles.compliance_content} Compliance ml-1`}>
                                                     Credit Rating Suspended
                                                     </div>
                                                  </div>
                                                   <div className={`${styles.compliance_red} d-flex align-items-center justify-content-center`}>
                                                    <div className={styles.red_dot}></div>
                                                     <div className={`${styles.compliance_content} Compliance ml-1`}>
                                                      Credit Rating Withdrawn
                                                     </div>
                                                  </div>
                                                   <div className={`${styles.compliance_red} d-flex align-items-center justify-content-center`}>
                                                    <div className={styles.red_dot}></div>
                                                     <div className={`${styles.compliance_content} Compliance ml-1`}>
                                                     Qualified Opinion
                                                     </div>
                                                  </div>
                                                 
                                               
                                                </div>
                                              </div>
                                                </Col>
                                              </Row>
                                                <Row className={` ${styles.row} mt-1 mb-1`} >
                                                <Col className={`${styles.col}`} sm={2}>
                                                <span className={styles.head}>
                                                 Medium Risk (2)
                                                </span></Col>
                                                <Col className={`${styles.col}`} >
                                                 <div className={`${styles.card_compliance_wrapper} d-flex align-items-center justify-content-flex-start`}>
                                              
                                                <div className={`${styles.val} d-flex align-items-center justify-content-flex-start`}>
                                                <div className={`${styles.compliance_yellow} d-flex align-items-center justify-content-center`}>
                                                    <div className={styles.yellow_dot}></div>
                                                     <div className={`${styles.compliance_content} Compliance ml-1`}>
                                                      Generic Address
                                                     </div>
                                                  </div>
                                                   <div className={`${styles.compliance_yellow} d-flex align-items-center justify-content-center`}>
                                                    <div className={styles.yellow_dot}></div>
                                                     <div className={`${styles.compliance_content} Compliance ml-1`}>
                                                   GST Transaction Delay
                                                     </div>
                                                  </div>
                                              
                                                 
                                               
                                                </div>
                                              </div>
                                                </Col>
                                              </Row>
                                                <Row className={` ${styles.row} mt-1 mb-1`} >
                                                <Col className={`${styles.col}`} sm={2}>
                                                <span className={styles.head}>
                                                 High Risk (4)
                                                </span></Col>
                                                <Col className={`${styles.col}`} >
                                                 <div className={`${styles.card_compliance_wrapper} d-flex align-items-center justify-content-flex-start`}>
                                              
                                                <div className={`${styles.val} d-flex align-items-center justify-content-flex-start`}>
                                                <div className={`${styles.compliance_orange} d-flex align-items-center justify-content-center`}>
                                                    <div className={styles.orange_dot}></div>
                                                     <div className={`${styles.compliance_content} Compliance ml-1`}>
                                                     GST Inactive
                                                     </div>
                                                  </div>
                                                   <div className={`${styles.compliance_orange} d-flex align-items-center justify-content-center`}>
                                                    <div className={styles.orange_dot}></div>
                                                     <div className={`${styles.compliance_content} Compliance ml-1`}>
                                                     GST Transaction Default
                                                     </div>
                                                  </div>
                                                   <div className={`${styles.compliance_orange} d-flex align-items-center justify-content-center`}>
                                                    <div className={styles.orange_dot}></div>
                                                     <div className={`${styles.compliance_content} Compliance ml-1`}>
                                                      IEC In Denied Entity List
                                                     </div>
                                                  </div>
                                                   <div className={`${styles.compliance_orange} d-flex align-items-center justify-content-center`}>
                                                    <div className={styles.orange_dot}></div>
                                                     <div className={`${styles.compliance_content} Compliance ml-1`}>
                                                     TDS Payment Delay
                                                     </div>
                                                  </div>
                                                    <div className={`${styles.compliance_orange} d-flex align-items-center justify-content-center`}>
                                                    <div className={styles.orange_dot}></div>
                                                     <div className={`${styles.compliance_content} Compliance ml-1`}>
                                                    EPF Closed
                                                     </div>
                                                  </div>
                                                    <div className={`${styles.compliance_orange} d-flex align-items-center justify-content-center`}>
                                                    <div className={styles.orange_dot}></div>
                                                     <div className={`${styles.compliance_content} Compliance ml-1`}>
                                                  EPF Transaction Delay
                                                     </div>
                                                  </div>
                                                      <div className={`${styles.compliance_orange} d-flex align-items-center justify-content-center`}>
                                                    <div className={styles.orange_dot}></div>
                                                     <div className={`${styles.compliance_content} Compliance ml-1`}>
                                                 Credit Rating Outlook Negative
                                                     </div>
                                                  </div>
                                                 
                                               
                                                </div>
                                              </div>
                                                </Col>
                                              </Row>
                                             
                                              

                                             

                                             
                                             
                                              
                                            
                                              
                                            </div>
                                             
                                              
                                            
                                              
                                              
                                      
                                    </div>
                                </div>
                                {/* details */}
              {/* <div className={`${styles.card} card`}>
                                   
                                        <div className={`${styles.cardHeader} card-header d-flex align-items-center justify-content-between bg-transparent`} data-toggle="collapse" data-target="#details" aria-expanded="true" aria-controls="details">
                                            <div className={`${styles.detail_head_container}  d-flex align-items-center justify-content-between w-100`}>
                                              <h2 className="mb-0 w-100 ">Details</h2>
                                              <div className={`${styles.categories} mb-0  d-flex align-items-center justify-content-between `}>
                                                <label className={styles.label}>Categories:</label>
                                                <select class="form-control">
                                                  <option>Statutory Compliance</option>
                                                </select>
                                              </div>
                                            </div>
                                            <span>+</span>
                                        </div>
                                        <div id="details" className="collapse" aria-labelledby="details" data-parent="#profileAccordion">
                                            <div className={` ${styles.cardBody_details} card-body border_color`}>
                                           
                                              
                                            {table2()}
                                             

                                             
                                             
                                              
                                            
                                              
                                            </div>
                                             
                                              
                                            
                                              
                                              
                                      
                                    </div>
                                </div>
                                 <div className={`${styles.card} card`}>
                                   
                                        <div className={`${styles.cardHeader} card-header d-flex align-items-center justify-content-between bg-transparent`} data-toggle="collapse" data-target="#litigations" aria-expanded="true" aria-controls="litigations">
                                            <h2 className="mb-0">Litigations</h2>
                                            <span>+</span>
                                        </div>
                                        <div id="litigations" className="collapse" aria-labelledby="litigations" data-parent="#profileAccordion">
                                          <div className={` ${styles.cardBody_litigations} card-body border_color`}>
                                           <div className={`${styles.checkbox_Container} d-flex align-items-center justify-content-between`} data-toggle="collapse">
                                             <div className={`${styles.leftGroup}  d-flex align-items-center justify-content-start`}>
                                               <div className="form-check">
                                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                                <label className="form-check-label" for="flexCheckDefault">
                                                 Pending (4)
                                                </label>
                                              </div>
                                               <div className="form-check ml-4">
                                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                                <label className="form-check-label" for="flexCheckDefault">
                                                 Disposed (2)
                                                </label>
                                              </div>
                                               <div className="form-check  ml-4">
                                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                                <label className="form-check-label" for="flexCheckDefault">
                                                 Total Cases (5)
                                                </label>
                                              </div>
                                             </div>
                                              <div className={`${styles.rightGroup} d-flex align-items-center justify-content-start`}>
                                           <div className="form-check mr-4">
                                              <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                                              <label className="form-check-label" for="flexRadioDefault1">
                                                Respondent
                                              </label>
                                            </div>
                                            <div className="form-check">
                                              <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked/>
                                              <label className="form-check-label" for="flexRadioDefault2">
                                               Petitioner
                                              </label>
                                            </div>

                                              </div>
                                            
                                           </div>
                                           <div className={`${styles.risk_Container} d-flex align-items-center justify-content-between mt-4 mb-4`}>
                                            <ComplianceLigitations 
                                            icon={"/static/danger.svg"} 
                                            backColor={"#E3F0FF"} 
                                            iconBackGroudColor={"#3687E8 "}
                                            heading={"High Risk (5)"}
                                            content={"Pending Case: 4 Disposed Case: 4"}

                                            />
                                              <ComplianceLigitations 
                                            icon={"/static/danger.svg"} 
                                            backColor={"#FFE9C5"} 
                                            iconBackGroudColor={"#FF9D00"}
                                            heading={"Medium Risk (5)"}
                                            content={"Pending Case: 4 Disposed Case: 4"}

                                            />
                                              <ComplianceLigitations 
                                            icon={"/static/Path 3369.svg"} 
                                            backColor={"#F3F4F7"} 
                                            iconBackGroudColor={"#9EB6FF"}
                                            heading={"High Priority (5)"}
                                            content={"Pending Case: 4 Disposed Case: 4"}

                                            />
                                              <ComplianceLigitations 
                                            icon={"/static/Group 1240.svg"} 
                                            backColor={"#FFE8E8"} 
                                            iconBackGroudColor={"#EA3F3F"}
                                            heading={"Stagnant Cases (5)"}
                                            content={"Pending Case: 4 Disposed Case: 4"}

                                            />
                                            
                                           </div>

                                           <div>
                                           {ligitations()}
                                           </div>
                                         

                                          </div>
            
                                    </div>
                                </div>
                            </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default index
