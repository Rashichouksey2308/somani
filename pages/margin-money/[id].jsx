/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import styles from './index.module.scss'
import RevisedMargin from '../../src/components/RevisedMargin'
import { Form } from 'react-bootstrap'

import UploadOther from '../../src/components/UploadOther'
import DownloadBar from '../../src/components/DownloadBar'
import Router from 'next/router';
import { useSelector } from 'react-redux';

// import { Row, Col } from 'react-bootstrap'

function Index() {

  const [darkMode, setDarkMode] = useState(false)

  const { marginMoneyResponse } = useSelector((state) => state.marginMoney)
   


  useEffect(() => {
    if (
      localStorage.getItem('darkMode') == 'true' ||
      localStorage.getItem('darkMode') == true
    ) {
      setDarkMode(true)
    } else {
      setDarkMode(false)
    }
  }, [])

  const routeChange = () => {
    Router.push('/margin-preview')
  }

  return (
    <>
      <div className={`${styles.dashboardTab} tabHeader w-100`}>
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
              <span>Margin Money</span>
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
                href="#Margin"
                role="tab"
                aria-controls="Margin"
                aria-selected="true"
              >
                Margin Money
              </a>
            </li>
            <li className={`${styles.navItem} nav-item`}>
              <a
                className={`${styles.navLink} navLink nav-link`}
                data-toggle="tab"
                href="#revisedMargin"
                role="tab"
                aria-controls="revisedMargin"
                aria-selected="false"
              >
                Revised Margin Money
              </a>
            </li>
            {/* <li className={`${styles.navItem} nav-item`}>
                      <a className={`${styles.navLink} navLink nav-link`} data-toggle="tab" href="#gst" role="tab" aria-controls="GST" aria-selected="false">Payment</a>
                  </li> */}
            <li className={`${styles.navItem} nav-item`}>
              <a
                className={`${styles.navLink} navLink nav-link`}
                data-toggle="tab"
                href="#Documents"
                role="tab"
                aria-controls="Documents"
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
                  id="Margin"
                  role="tabpanel"
                >
                  <div className={`${styles.card}  accordionMargin card`}>
                    <div
                      className={`${styles.cardHeader} card-header d-flex align-items-center justify-content-between`}
                      data-toggle="collapse"
                      data-target="#commodityAccordion"
                      aria-expanded="true"
                      aria-controls="commodityAccordion"
                    >
                      <div className={`${styles.commodity}`}>
                        <span
                          className={`${styles.comm_head} sub_heading mb-2`}
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
                        <div className={`${styles.pay} mr-5`}>
                          <strong className={`mr-2`}>Status</strong>
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
                              className={`${styles.each_input} d-flex justify-content-start align-content-center col-md-4 col-sm-6`}>
                                <div
                                className={`${styles.alphabet} mr-3 d-flex justify-content-center align-content-center`}>
                                <span>A</span>
                              </div>
                              <input
                              disabled={true}
                                type="text"
                                id="textInput"
                                name="companyPan"
                                className={`${styles.input_field} input form-control`}
                                required
                              />
                              <label
                                className={`${styles.label_heading} label_heading`}
                                id="textInput"
                                style={{left:"70px"}}
                                >
                                Quantity
                                <strong className="text-danger">*</strong>
                              </label>
  
                            </div>
                            <div
                              className={`${styles.each_input} d-flex justify-content-start align-content-center col-md-4 col-sm-6`}>
                                <div
                                className={`${styles.alphabet} mr-3 d-flex justify-content-center align-content-center`}>
                                <span>B</span>
                              </div>
                              <input
                               disabled={true}
                                type="text"
                                id="textInput"
                                name="companyPan"
                                className={`${styles.input_field} input form-control`}
                                required
                              />
                              <label
                                  className={`${styles.label_heading} label_heading`}
                                  id="textInput"
                                  style={{left:"70px"}}
                                >
                                  Unit Price
                                  <strong className="text-danger">*</strong>
                                </label>
  
                            </div>
                           
                            <div
                              className={`${styles.each_input} d-flex justify-content-start align-content-center col-md-4 col-sm-6`}>
                                <div
                                className={`${styles.alphabet} mr-3 d-flex justify-content-center align-content-center`}>
                                <span>C</span>
                              </div>
                              <input
                               disabled={true}
                                type="text"
                                id="textInput"
                                name="companyPan"
                                className={`${styles.input_field} input form-control`}
                                required
                              />
                              <label
                                  className={`${styles.label_heading} label_heading`}
                                  id="textInput"
                                  style={{left:"70px"}}
                                >
                                  Conversation Rate
                                  <strong className="text-danger">*</strong>
                                </label>
  
                            </div>
                            <div
                              className={`${styles.each_input} d-flex justify-content-start align-content-center col-md-2 col-sm-4`}>
                                <div
                                className={`${styles.alphabet} mr-3 d-flex justify-content-center align-content-center`}>
                                <span>D</span>
                              </div>
                              <input
                                disabled={true}
                                type="text"
                                id="textInput"
                                name="companyPan"
                                className={`${styles.input_field} input form-control`}
                                style={{width:"50%"}}
                                required
                              />
                             
                              <label
                                  className={`${styles.label_heading} label_heading`}
                                  id="textInput"
                                  style={{left:"70px"}}
                                >
                                  Usance Interest (%)
                                  <strong className="text-danger">*</strong>
                                </label>
  
                            </div>
                            <div className={`${styles.radio_heading} ml-n5 mt-4 form-check form-check-inline`}
                              //style={{top:"50px", left:"100px"}}
                              > Include in Calculation

                                <input className="form-check-input ml-3" type="radio" name="inlineRadioOptions"/>
                                <label className="form-check-label mr-2" for="inlineRadio1">Yes</label>
                             
                                <input className="form-check-input ml-2" type="radio" name="inlineRadioOptions"/>
                                <label className="form-check-label" for="inlineRadio2">No</label>
                              </div>
                            <div
                              className={`${styles.each_input} d-flex justify-content-start align-content-center col-md-4 col-sm-6`}>
                                <div
                                className={`${styles.alphabet} mr-3 d-flex justify-content-center align-content-center`}>
                                <span>E</span>
                              </div>
                              <input
                              disabled={true}
                                type="text"
                                id="textInput"
                                name="companyPan"
                                className={`${styles.input_field} input form-control`}
                                required
                              />
                              <label
                                  className={`${styles.label_heading} label_heading`}
                                  id="textInput"
                                  style={{left:"70px"}}
                                >
                                  Trade Margin (%)
                                  <strong className="text-danger">*</strong>
                                </label>
  
                            </div> <div
                              className={`${styles.each_input} d-flex justify-content-start align-content-center col-md-4 col-sm-6`}>
                                <div
                                className={`${styles.alphabet} mr-3 d-flex justify-content-center align-content-center`}>
                                <span>F</span>
                              </div>
                              <input
                              disabled={true}
                                type="text"
                                id="textInput"
                                name="companyPan"
                                className={`${styles.input_field} input form-control`}
                                required
                              />
                              <label
                                  className={`${styles.label_heading} label_heading`}
                                  id="textInput"
                                  style={{left:"70px"}}
                                >
                                  Tolerance (+/-) Percentage
                                  <strong className="text-danger">*</strong>
                                </label>
  
                            </div> <div
                              className={`${styles.each_input} d-flex justify-content-start align-content-center col-md-4 col-sm-6`}>
                                <div
                                className={`${styles.alphabet} mr-3 d-flex justify-content-center align-content-center`}>
                                <span>G</span>
                              </div>
                              <input
                              disabled={true}
                                type="text"
                                id="textInput"
                                name="companyPan"
                                className={`${styles.input_field} input form-control`}
                                required
                              />
                              <label
                                  className={`${styles.label_heading} label_heading`}
                                  id="textInput"
                                  style={{left:"70px"}}
                                >
                                  Margin Money (%)
                                  <strong className="text-danger">*</strong>
                                </label>
  
                            </div> <div
                              className={`${styles.each_input} d-flex justify-content-start align-content-center col-md-4 col-sm-6`}>
                                <div
                                className={`${styles.alphabet} mr-3 d-flex justify-content-center align-content-center`}>
                                <span>H</span>
                              </div>
                              <input
                              disabled={true}
                                type="text"
                                id="textInput"
                                name="companyPan"
                                className={`${styles.input_field} input form-control`}
                                required
                              />
                              <label
                                  className={`${styles.label_heading} label_heading`}
                                  id="textInput"
                                  style={{left:"70px"}}>
                                  No. of PDC's
                                  <strong className="text-danger">*</strong>
                                </label>
  
                            </div>
                            <div
                              className={`${styles.each_input} d-flex justify-content-start align-content-center col-md-4 col-sm-6`}>
                                <div
                                className={`${styles.alphabet} mr-3 d-flex justify-content-center align-content-center`}>
                                <span>I</span>
                              </div>
                              <input
                              disabled={true}
                                type="text"
                                id="textInput"
                                name="companyPan"
                                
                                className={`${styles.input_field} input form-control`}
                                required
                              />
                              <label
                                  className={`${styles.label_heading} label_heading`}
                                  id="textInput"
                                  style={{left:"70px"}}
                                >
                                  Additional PDC's
                                  <strong className="text-danger">*</strong>
                                </label>
  
                            </div>
                          </div>
                        </div>
                        <div className={`${styles.content} border_color`}>
                          <span>Calculation</span>
                          <div className={`${styles.input_container} row`}>
                          <div
                              className={`${styles.each_input} d-flex justify-content-start align-content-center col-md-4 col-sm-6`}>
                                <div
                                className={`${styles.alphabet} mr-3 d-flex justify-content-center align-content-center`}>
                                <span>J</span>
                              </div>
                              <input
                              disabled={true}
                                type="text"
                                id="textInput"
                                name="companyPan"
                                
                                className={`${styles.input_field} input form-control`}
                                required
                              />
                             <label
                                  className={`${styles.label_heading} label_heading`}
                                  id="textInput"
                                  style={{left:"70px" , top:"17px"}}>

                                  Order Value{' '}
                                  <strong className="text-danger">*</strong>
                                  <span
                                    className={`${styles.blue}`}
                                  >{`(A*B)`}</span>
                                </label>
  
                            </div>
                            <div
                              className={`${styles.each_input} d-flex justify-content-start align-content-center col-md-4 col-sm-6`}>
                                <div
                                className={`${styles.alphabet} mr-3 d-flex justify-content-center align-content-center`}>
                                <span>K</span>
                              </div>
                              <input
                              disabled={true}
                                type="text"
                                id="textInput"
                                name="companyPan"
                                
                                className={`${styles.input_field} input form-control`}
                                required
                              />
                             <label
                                  className={`${styles.label_heading} label_heading`}
                                  id="textInput"
                                  style={{left:"70px" , top:"17px"}}>
                                  Order Value (INR){' '}
                                  <strong className="text-danger">*</strong>
                                  <span
                                    className={`${styles.blue}`}
                                  >{`(J*C)`}</span>
                                </label>
  
                            </div>
                            <div
                              className={`${styles.each_input} d-flex justify-content-start align-content-center col-md-4 col-sm-6`}>
                                <div
                                className={`${styles.alphabet} mr-3 d-flex justify-content-center align-content-center`}>
                                <span>L</span>
                              </div>
                              <input
                              disabled={true}
                                type="text"
                                id="textInput"
                                name="companyPan"
                                
                                className={`${styles.input_field} input form-control`}
                                required
                              />
                              <label
                                  className={`${styles.label_heading} label_heading`}
                                  id="textInput"
                                  style={{left:"70px" , top:"17px"}}>
                                  Usance Interest (%) for 90 days (INR)
                                  <strong className="text-danger">*</strong>
                                  <span
                                    className={`${styles.blue}`}
                                  >{`(K*D*90/365)`}</span>
                                </label>
  
                            </div>
                            <div
                              className={`${styles.each_input} d-flex justify-content-start align-content-center col-md-4 col-sm-6`}>
                                <div
                                className={`${styles.alphabet} mr-3 d-flex justify-content-center align-content-center`}>
                                <span>M</span>
                              </div>
                              <input
                              disabled={true}
                                type="text"
                                id="textInput"
                                name="companyPan"
                                
                                className={`${styles.input_field} input form-control`}
                                required
                              />
                             <label
                                  className={`${styles.label_heading} label_heading`}
                                  id="textInput"
                                  style={{left:"70px" , top:"17px"}}>
                                  Trade Margin (INR)
                                  <strong className="text-danger">*</strong>
                                  <span
                                    className={`${styles.blue}`}
                                  >{`(K*E)`}</span>
                                </label>
  
                            </div>
                            <div
                              className={`${styles.each_input} d-flex justify-content-start align-content-center col-md-4 col-sm-6`}>
                                <div
                                className={`${styles.alphabet} mr-3 d-flex justify-content-center align-content-center`}>
                                <span>N</span>
                              </div>
                              <input
                              disabled={true}
                                type="text"
                                id="textInput"
                                name="companyPan"
                                
                                className={`${styles.input_field} input form-control`}
                                required
                              />
                             <label
                                  className={`${styles.label_heading} label_heading`}
                                  id="textInput"
                                  style={{left:"70px" , top:"17px"}}>
                                  Gross Order Value (INR)
                                  <strong className="text-danger">*</strong>
                                  <span
                                    className={`${styles.blue}`}
                                  >{`(K+L+M)`}</span>
                                </label>
  
                            </div>

                            <div
                              className={`${styles.each_input} d-flex justify-content-start align-content-center col-md-4 col-sm-6`}>
                                <div
                                className={`${styles.alphabet} mr-3 d-flex justify-content-center align-content-center`}>
                                <span>O</span>
                              </div>
                              <input
                              disabled={true}
                                type="text"
                                id="textInput"
                                name="companyPan"
                                
                                className={`${styles.input_field} input form-control`}
                                required
                              />
                              <label
                                  className={`${styles.label_heading} label_heading`}
                                  id="textInput"
                                  style={{left:"70px" , top:"17px"}}>
                                  Tolerance Value (INR)
                                  <strong className="text-danger">*</strong>
                                  <span
                                    className={`${styles.blue}`}
                                  >{`(N*F)`}</span>
                                </label>
  
                            </div>
                            <div
                              className={`${styles.each_input} d-flex justify-content-start align-content-center col-md-4 col-sm-6`}>
                                <div
                                className={`${styles.alphabet} mr-3 d-flex justify-content-center align-content-center`}>
                                <span>P</span>
                              </div>
                              <input
                              disabled={true}
                                type="text"
                                id="textInput"
                                name="companyPan"
                                
                                className={`${styles.input_field} input form-control`}
                                required
                              />
                            <label
                                  className={`${styles.label_heading} label_heading`}
                                  id="textInput"
                                  style={{left:"70px" , top:"17px"}}>
                                  Total Order Value (INR)
                                  <strong className="text-danger">*</strong>
                                  <span
                                    className={`${styles.blue}`}
                                  >{`(N+O)`}</span>
                                </label>
                            </div>
                             <div
                              className={`${styles.each_input} d-flex justify-content-start align-content-center col-md-4 col-sm-6`}>
                                <div
                                className={`${styles.alphabet} mr-3 d-flex justify-content-center align-content-center`}>
                                <span>Q</span>
                              </div>
                              <input
                              disabled={true}
                                type="text"
                                id="textInput"
                                name="companyPan"
                                
                                className={`${styles.input_field} input form-control`}
                                required
                              />
                              <label
                                  className={`${styles.label_heading} label_heading`}
                                  id="textInput"
                                  style={{left:"70px" , top:"17px"}}>
                                  Provisional Unit Price Per Ton (INR)
                                  <strong className="text-danger">*</strong>
                                  <span
                                    className={`${styles.blue}`}
                                  >{`(N/A)`}</span>
                                </label>
                            </div>
                            <div
                              className={`${styles.each_input} d-flex justify-content-start align-content-center col-md-4 col-sm-6`}>
                                <div
                                className={`${styles.alphabet} mr-3 d-flex justify-content-center align-content-center`}>
                                <span>R</span>
                              </div>
                              <input
                              disabled={true}
                                type="text"
                                id="textInput"
                                name="companyPan"
                                
                                className={`${styles.input_field} input form-control`}
                                required
                              />
                              <label
                                  className={`${styles.label_heading} label_heading`}
                                  id="textInput"
                                  style={{left:"70px" , top:"17px"}}>
                                  Margin Money (INR)
                                  <strong className="text-danger">*</strong>
                                  <span
                                    className={`${styles.blue}`}
                                  >{`(P*G)`}</span>
                                </label>
  
                            </div> 
                           
                            <div
                              className={`${styles.each_input} d-flex justify-content-start align-content-center col-md-4 col-sm-6`}>
                                <div
                                className={`${styles.alphabet} mr-3 d-flex justify-content-center align-content-center`}>
                                <span>S</span>
                              </div>
                              <input
                              disabled={true}
                                type="text"
                                id="textInput"
                                name="companyPan"
                                
                                className={`${styles.input_field} input form-control`}
                                required
                              />
                            <label
                                  className={`${styles.label_heading} label_heading`}
                                  id="textInput"
                                  style={{left:"70px" , top:"17px"}}>

                                  Total SPDC Amount Req. (INR)
                                  <strong className="text-danger">*</strong>
                                  <span
                                    className={`${styles.blue}`}
                                  >{`(P-R)`}</span>
                                </label>
  
                            </div>
                            <div
                              className={`${styles.each_input} d-flex justify-content-start align-content-center col-md-4 col-sm-6`}>
                                <div
                                className={`${styles.alphabet} mr-3 d-flex justify-content-center align-content-center`}>
                                <span>T</span>
                              </div>
                              <input
                              disabled={true}
                                type="text"
                                id="textInput"
                                name="companyPan"
                                
                                className={`${styles.input_field} input form-control`}
                                required
                              />
                            <label
                                  className={`${styles.label_heading} label_heading`}
                                  id="textInput"
                                  style={{left:"70px" , top:"17px"}}>
                                  Amount per SPDC (INR)
                                  <strong className="text-danger">*</strong>
                                  <span
                                    className={`${styles.blue}`}
                                  >{`(S/H)`}</span>
                                </label>
  
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className={`${styles.card}  accordionMargin card`}>
                    <div
                      className={`${styles.cardHeader} card-header d-flex align-items-center justify-content-between`}
                      data-toggle="collapse"
                      data-target="#invoiceDetails"
                      aria-expanded="true"
                      aria-controls="invoiceDetails"
                    >
                      <h2 className="mb-0">Invoice Details</h2>
                      <span className="ml-3">+</span>
                    </div>
                    <div
                      id="invoiceDetails"
                      className="collapse"
                      aria-labelledby="invoiceDetails"
                      data-parent="#invoiceDetails"
                    >
                      <div className={`${styles.cardBody} card-body `}>
                        <div className={`${styles.content} border_color`}>
                          <div className={`${styles.input_container} row`}>
                            <div
                              className={`${styles.each_input} col-md-4 col-sm-6`} >
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
                                <span className="ml-4">{`Comments: In Case User Selects "No"`}</span>
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

                <div
                  className="tab-pane fade"
                  id="revisedMargin"
                  role="tabpanel"
                >
                  <div className={`${styles.card}  accordion_body`}>
                    <RevisedMargin />
                  </div>
                </div>

                <div className="tab-pane fade" id="Documents" role="tabpanel">
                  <div className={`${styles.card}  accordion_body`}>
                    <UploadOther />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <DownloadBar
        downLoadButtonName={`Download`}
        isPrevious={true}
        leftButtonName={`Save`}
        rightButtonName={`Preview`}
        handleApprove={routeChange}
      />
    </>
  )
}
export default Index
