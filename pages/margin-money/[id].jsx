/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/no-unknown-property */
/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import styles from './index.module.scss'
import RevisedMargin from '../../src/components/RevisedMargin'
import { Form } from 'react-bootstrap'

import UploadOther from '../../src/components/UploadOther'
import DownloadBar from '../../src/components/DownloadBar'
import Router from 'next/router'
import { useSelector, useDispatch } from 'react-redux'
import { UpdateMarginMoney } from '../../src/redux/marginMoney/action'
import { setPageName,setDynamicName } from '../../src/redux/userData/action'
// import { Row, Col } from 'react-bootstrap'

function Index() {
  const dispatch = useDispatch()


  const [darkMode, setDarkMode] = useState(false)

  const { margin} = useSelector((state) => state.marginMoney)
  console.log(margin, 'id.jsx response')
  useEffect(() => {
    dispatch(setPageName('margin-money'))
    dispatch(setDynamicName(margin?.data[0].company.companyName))
  },[margin])
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

  const [forCalculation, setForCalculation] = useState({
    isUsanceInterestIncluded: margin?.data[0]?.isUsanceInterestIncluded,
    status: margin?.data[0]?.status,
    quantity: margin?.data[0]?.order?.quantity,
    additionalPDC: margin?.data[0]?.additionalPDC,
    conversionRate: margin?.data[0]?.conversionRate,
    perUnitPrice: margin?.data[0]?.order?.perUnitPrice,
    usanceInterestPercetage: margin?.data[0]?.order?.termsheet?.commercials?.usanceInterestPercetage,
    numberOfPDC: margin?.data[0]?.numberOfPDC,
    tradeMarginPercentage: margin?.data[0]?.order?.termsheet?.commercials?.tradeMarginPercentage,
    tolerance: margin?.data[0]?.order?.tolerance,
    marginMoney: margin?.data[0]?.order?.termsheet?.transactionDetails?.marginMoney
  })

  const saveForCalculation = (name, value) => {
    const newInput = { ...forCalculation }
    newInput[name] = value
    // console.log(newInput)
    setForCalculation(newInput)
  }

  const [invoiceData, setInvoiceData] = useState({
    buyerName: margin?.data[0]?.invoiceDetail?.buyerName,
    buyerGSTIN: margin?.data[0]?.invoiceDetail?.buyerGSTIN,
    buyerAddress: margin?.data[0]?.invoiceDetail?.buyerAddress,
    isConsigneeSameAsBuyer: margin?.data[0]?.invoiceDetail?.isConsigneeSameAsBuyer,
    consigneeName: margin?.data[0]?.invoiceDetail?.consigneeName,
    consigneeGSTIN: margin?.data[0]?.invoiceDetail?.consigneeGSTIN,
    consigneeAddress: margin?.data[0]?.invoiceDetail?.consigneeAddress,
    importerName: margin?.data[0]?.invoiceDetail?.importerName,
    branchOffice: margin?.data[0]?.invoiceDetail?.branchOffice,
    companyAddress: margin?.data[0]?.invoiceDetail?.companyAddress,
    importerGSTIN: margin?.data[0]?.invoiceDetail?.importerGSTIN,
    bankName: margin?.data[0]?.invoiceDetail?.bankName,
    branch: margin?.data[0]?.invoiceDetail?.branch,
    branchAddress: margin?.data[0]?.invoiceDetail?.branchAddress,
    IFSCcode: margin?.data[0]?.invoiceDetail?.IFSCcode,
    accountNo: margin?.data[0]?.invoiceDetail?.accountNo,
  })

  const saveInvoiceData = (name, value) => {
    const newInput = { ...invoiceData }
    newInput[name] = value
    // console.log(newInput)
    setInvoiceData(newInput)
  }

  const [calcData, setCalcData] = useState({
    orderValue: margin?.data[0]?.calculation?.orderValue ,
    orderValueCurrency: margin?.data[0]?.calculation?.orderValueCurrency,
    orderValueInINR: margin?.data[0]?.calculation?.orderValueInINR,
    usanceInterest: margin?.data[0]?.calculation?.usanceInterest,
    tradeMargin: margin?.data[0]?.calculation?.tradeMargin,
    grossOrderValue: margin?.data[0]?.calculation?.grossOrderValue,
    toleranceValue: margin?.data[0]?.calculation?.toleranceValue,
    totalOrderValue: margin?.data[0]?.calculation?.totalOrderValue,
    provisionalUnitPricePerTon: margin?.data[0]?.calculation?.provisionalUnitPricePerTon,
    marginMoney: margin?.data[0]?.calculation?.marginMoney,
    totalSPDC: margin?.data[0]?.calculation?.totalSPDC,
    amountPerSPDC: margin?.data[0]?.calculation?.amountPerSPDC,
  })

  const [termsheetData, setTermsheetData] = useState({

  })

  const routeChange = () => {
    Router.push('/margin-preview')
  }

  const handleUpdate = () => {
    const obj = {
        marginMoneyId: margin?.data[0]?._id,
        conversionRate: forCalculation.conversionRate,
        isUsanceInterestIncluded: forCalculation.isUsanceInterestIncluded,
        numberOfPDC: forCalculation.numberOfPDC,
        additionalPDC: forCalculation.additionalPDC,
        invoiceDetail: {...invoiceData}
    }

    dispatch(UpdateMarginMoney(obj))
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
            <div className="col-md-12 accordion_body">
              <div className={`${styles.tabContent} tab-content`}>
                <div
                  className="tab-pane fade show active"
                  id="Margin"
                  role="tabpanel"
                >
                  <div className={`${styles.card}  accordionMargin card`}>
                    <div
                      className={`${styles.cardHeader} d-flex align-items-center justify-content-between`}
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
                          {margin?.data[0]?.order?.commodity}
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
                          Unit :
                        </h5>
                        <select
                          className={`${styles.options} mr-4 accordion_DropDown`}
                        >
                            <option> {margin?.data[0]?.order?.unitOfValue=="Cr"?"Crores":null}</option>
                          <option>Million</option>
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
                              className={`${styles.each_input} d-flex justify-content-start align-content-center col-md-4 col-sm-6`}
                            >
                              <div
                                className={`${styles.alphabet} mr-3 d-flex justify-content-center align-content-center`}
                              >
                                <span>A</span>
                              </div>
                              <input
                                type="text"
                                id="textInput"
                                name="quantity"
                                defaultValue={margin?.data[0]?.order?.quantity}
                                onChange={(e)=>saveForCalculation(e.target.name, e.target.value)}
                                className={`${styles.input_field} input form-control`}
                                required
                              />
                              <label
                                className={`${styles.label_heading} label_heading`}
                                id="textInput"
                                style={{ left: '70px' }}
                              >
                                Quantity
                                <strong className="text-danger">*</strong>
                              </label>
                            </div>
                            <div
                              className={`${styles.each_input} d-flex justify-content-start align-content-center col-md-4 col-sm-6`}
                            >
                              <div
                                className={`${styles.alphabet} mr-3 d-flex justify-content-center align-content-center`}
                              >
                                <span>B</span>
                              </div>
                              <input
                                type="text"
                                disabled
                                id="textInput"
                                defaultValue={margin?.data[0]?.order?.perUnitPrice}
                                name="perUnitPrice"
                                onChange={(e)=>saveForCalculation(e.target.name, e.target.value)}
                                className={`${styles.input_field} input form-control`}
                                required
                              />
                              <label
                                className={`${styles.label_heading} label_heading`}
                                id="textInput"
                                style={{ left: '70px' }}
                              >
                                Unit Price
                                <strong className="text-danger">*</strong>
                              </label>
                            </div>
                            <div
                              className={`${styles.each_input} d-flex justify-content-start align-content-center col-md-4 col-sm-6`}
                            >
                              <div
                                className={`${styles.alphabet} mr-3 d-flex justify-content-center align-content-center`}
                              >
                                <span>C</span>
                              </div>
                              <input
                                type="text"
                                id="textInput"
                                name="conversionRate"
                                onChange={(e)=>saveForCalculation(e.target.name, e.target.value)}
                                defaultValue={margin?.data[0]?.conversionRate}
                                className={`${styles.input_field} input form-control`}
                                required
                              />
                              <label
                                className={`${styles.label_heading} label_heading`}
                                id="textInput"
                                style={{ left: '70px' }}
                              >
                                Conversation Rate
                                <strong className="text-danger">*</strong>
                              </label>
                            </div>
                            <div
                              className={`${styles.each_input} d-flex justify-content-start align-content-center col-md-4 col-sm-4`}
                            >
                              <div
                                className={`${styles.alphabet} mr-3 d-flex justify-content-center align-content-center`}
                              >
                                <span>D</span>
                              </div>
                              <input
                                type="text"
                                disabled
                                id="textInput"
                                name="usanceInterestPercetage"
                                defaultValue={margin?.data[0]?.order?.termsheet?.commercials?.usanceInterestPercetage}
                                onChange={(e)=>saveForCalculation(e.target.name, e.target.value)}
                                className={`${styles.input_field} input form-control`}
                                style={{ width: '50%' }}
                                required
                              />

                              <label
                                className={`${styles.label_heading} label_heading`}
                                id="textInput"
                                style={{ left: '70px' }}
                              >
                                Usance Interest (%)
                                <strong className="text-danger">*</strong>
                              </label>
                            </div>
                            <div
                              className={`${styles.radio_heading} ml-n5 mt-4 form-check form-check-inline`}
                              //style={{top:"50px", left:"100px"}}
                            >
                              {' '}
                              Include in Calculation
                              <input
                                className="form-check-input ml-3"
                                type="radio"
                                name="isUsanceInterestIncluded"
                                defaultChecked={margin?.data[0]?.isUsanceInterestIncluded === true}
                                onChange={(e)=>saveForCalculation("isUsanceInterestIncluded", true)}
                              />
                              <label
                                className="form-check-label mr-2"
                                for="inlineRadio1"
                              >
                                Yes
                              </label>
                              <input
                                className="form-check-input ml-2"
                                type="radio"
                                name="isUsanceInterestIncluded"
                                defaultChecked={margin?.data[0]?.isUsanceInterestIncluded === false}
                                onChange={(e)=>saveForCalculation('isUsanceInterestIncluded', false)}
                              />
                              <label
                                className="form-check-label"
                                for="inlineRadio2"
                              >
                                No
                              </label>
                            </div>
                            <div
                              className={`${styles.each_input} d-flex justify-content-start align-content-center col-md-4 col-sm-6`}
                            >
                              <div
                                className={`${styles.alphabet} mr-3 d-flex justify-content-center align-content-center`}
                              >
                                <span>E</span>
                              </div>
                              <input
                                type="text"
                                disabled
                                id="textInput"
                                name="tradeMarginPercentage"
                                defaultValue={margin?.data[0]?.order?.termsheet?.commercials?.tradeMarginPercentage}
                                onChange={(e)=>saveForCalculation(e.target.name, e.target.value)}
                                className={`${styles.input_field} input form-control`}
                                required
                              />
                              <label
                                className={`${styles.label_heading} label_heading`}
                                id="textInput"
                                style={{ left: '70px' }}
                              >
                                Trade Margin (%)
                                <strong className="text-danger">*</strong>
                              </label>
                            </div>{' '}
                            <div
                              className={`${styles.each_input} d-flex justify-content-start align-content-center col-md-4 col-sm-6`}
                            >
                              <div
                                className={`${styles.alphabet} mr-3 d-flex justify-content-center align-content-center`}
                              >
                                <span>F</span>
                              </div>
                              <input
                                type="text"
                                disabled
                                id="textInput"
                                name="tolerance"
                                defaultValue={margin?.data[0]?.order?.tolerance}
                                onChange={(e)=>saveForCalculation(e.target.name, e.target.value)}
                                className={`${styles.input_field} input form-control`}
                                required
                              />
                              <label
                                className={`${styles.label_heading} label_heading`}
                                id="textInput"
                                style={{ left: '70px' }}
                              >
                                Tolerance (+/-) Percentage
                                <strong className="text-danger">*</strong>
                              </label>
                            </div>{' '}
                            <div
                              className={`${styles.each_input} d-flex justify-content-start align-content-center col-md-4 col-sm-6`}
                            >
                              <div
                                className={`${styles.alphabet} mr-3 d-flex justify-content-center align-content-center`}
                              >
                                <span>G</span>
                              </div>
                              <input
                                type="text"
                                id="textInput"
                                name="marginMoney"
                                defaultValue={margin?.data[0]?.order?.termsheet?.transactionDetails?.marginMoney}
                                onChange={(e)=>saveForCalculation(e.target.name, e.target.value)}
                                className={`${styles.input_field} input form-control`}
                                required
                              />
                              <label
                                className={`${styles.label_heading} label_heading`}
                                id="textInput"
                                style={{ left: '70px' }}
                              >
                                Margin Money (%)
                                <strong className="text-danger">*</strong>
                              </label>
                            </div>{' '}
                            <div
                              className={`${styles.each_input} d-flex justify-content-start align-content-center col-md-4 col-sm-6`}
                            >
                              <div
                                className={`${styles.alphabet} mr-3 d-flex justify-content-center align-content-center`}
                              >
                                <span>H</span>
                              </div>
                              <input
                                type="text"
                                id="textInput"
                                name="numberOfPDC"
                                onChange={(e)=>saveForCalculation(e.target.name, e.target.value)}
                                defaultValue={margin?.data[0]?.numberOfPDC}
                                className={`${styles.input_field} input form-control`}
                                required
                              />
                              <label
                                className={`${styles.label_heading} label_heading`}
                                id="textInput"
                                style={{ left: '70px' }}
                              >
                                No. of PDC's
                                <strong className="text-danger">*</strong>
                              </label>
                            </div>
                            <div
                              className={`${styles.each_input} d-flex justify-content-start align-content-center col-md-4 col-sm-6`}
                            >
                              <div
                                className={`${styles.alphabet} mr-3 d-flex justify-content-center align-content-center`}
                              >
                                <span>I</span>
                              </div>
                              <input
                                type="text"
                                id="textInput"
                                name="additionalPDC"
                                onChange={(e)=>saveForCalculation(e.target.name, e.target.value)}
                                defaultValue={margin?.data[0]?.additionalPDC}
                                className={`${styles.input_field} input form-control`}
                                required
                              />
                              <label
                                className={`${styles.label_heading} label_heading`}
                                id="textInput"
                                style={{ left: '70px' }}
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
                              className={`${styles.each_input} d-flex justify-content-start align-content-center col-md-4 col-sm-6`}
                            >
                              <div
                                className={`${styles.alphabet} mr-3 d-flex justify-content-center align-content-center`}
                              >
                                <span>J</span>
                              </div>
                              <input
                                disabled={true}
                                type="text"
                                id="textInput"
                                defaultValue={margin?.data[0]?.calculation?.orderValue}
                                name="companyPan"
                                className={`${styles.input_field} input form-control`}
                                required
                              />
                              <label
                                className={`${styles.label_heading} label_heading`}
                                id="textInput"
                                style={{ left: '70px', top: '17px' }}
                              >
                                Order Value{' '}
                                <strong className="text-danger">*</strong>
                                <span
                                  className={`${styles.blue}`}
                                >{`(A*B)`}</span>
                              </label>
                            </div>
                            <div
                              className={`${styles.each_input} d-flex justify-content-start align-content-center col-md-4 col-sm-6`}
                            >
                              <div
                                className={`${styles.alphabet} mr-3 d-flex justify-content-center align-content-center`}
                              >
                                <span>K</span>
                              </div>
                              <input
                                disabled={true}
                                type="text"
                                id="textInput"
                                defaultValue={margin?.data[0]?.calculation?.orderValueInINR}
                                name="companyPan"
                                className={`${styles.input_field} input form-control`}
                                required
                              />
                              <label
                                className={`${styles.label_heading} label_heading`}
                                id="textInput"
                                style={{ left: '70px', top: '17px' }}
                              >
                                Order Value (INR){' '}
                                <strong className="text-danger">*</strong>
                                <span
                                  className={`${styles.blue}`}
                                >{`(J*C)`}</span>
                              </label>
                            </div>
                            <div
                              className={`${styles.each_input} d-flex justify-content-start align-content-center col-md-4 col-sm-6`}
                            >
                              <div
                                className={`${styles.alphabet} mr-3 d-flex justify-content-center align-content-center`}
                              >
                                <span>L</span>
                              </div>
                              <input
                                disabled={true}
                                
                                type="text"
                                id="textInput"
                                name="companyPan"
                                defaultValue={margin?.data[0]?.calculation?.usanceInterest}
                                className={`${styles.input_field} input form-control`}
                                required
                              />
                              <label
                                className={`${styles.label_heading} label_heading`}
                                id="textInput"
                                style={{ left: '70px', top: '17px' }}
                              >
                                Usance Interest (%) for 90 days (INR)
                                <strong className="text-danger">*</strong>
                                <span
                                  className={`${styles.blue}`}
                                >{`(K*D*90/365)`}</span>
                              </label>
                            </div>
                            <div
                              className={`${styles.each_input} d-flex justify-content-start align-content-center col-md-4 col-sm-6`}
                            >
                              <div
                                className={`${styles.alphabet} mr-3 d-flex justify-content-center align-content-center`}
                              >
                                <span>M</span>
                              </div>
                              <input
                                disabled={true}
                                type="text"
                                id="textInput"
                                name="companyPan"
                                defaultValue={margin?.data[0]?.calculation?.tradeMargin}
                                className={`${styles.input_field} input form-control`}
                                required
                              />
                              <label
                                className={`${styles.label_heading} label_heading`}
                                id="textInput"
                                style={{ left: '70px', top: '17px' }}
                              >
                                Trade Margin (INR)
                                <strong className="text-danger">*</strong>
                                <span
                                  className={`${styles.blue}`}
                                >{`(K*E)`}</span>
                              </label>
                            </div>
                            <div
                              className={`${styles.each_input} d-flex justify-content-start align-content-center col-md-4 col-sm-6`}
                            >
                              <div
                                className={`${styles.alphabet} mr-3 d-flex justify-content-center align-content-center`}
                              >
                                <span>N</span>
                              </div>
                              <input
                                disabled={true}
                                type="text"
                                id="textInput"
                                name="companyPan"
                                defaultValue={margin?.data[0]?.calculation?.grossOrderValue}
                                className={`${styles.input_field} input form-control`}
                                required
                              />
                              <label
                                className={`${styles.label_heading} label_heading`}
                                id="textInput"
                                style={{ left: '70px', top: '17px' }}
                              >
                                Gross Order Value (INR)
                                <strong className="text-danger">*</strong>
                                <span
                                  className={`${styles.blue}`}
                                >{`(K+L+M)`}</span>
                              </label>
                            </div>

                            <div
                              className={`${styles.each_input} d-flex justify-content-start align-content-center col-md-4 col-sm-6`}
                            >
                              <div
                                className={`${styles.alphabet} mr-3 d-flex justify-content-center align-content-center`}
                              >
                                <span>O</span>
                              </div>
                              <input
                                disabled={true}
                                type="text"
                                id="textInput"
                                name="companyPan"
                                defaultValue={margin?.data[0]?.calculation?.toleranceValue}
                                className={`${styles.input_field} input form-control`}
                                required
                              />
                              <label
                                className={`${styles.label_heading} label_heading`}
                                id="textInput"
                                style={{ left: '70px', top: '17px' }}
                              >
                                Tolerance Value (INR)
                                <strong className="text-danger">*</strong>
                                <span
                                  className={`${styles.blue}`}
                                >{`(N*F)`}</span>
                              </label>
                            </div>
                            <div
                              className={`${styles.each_input} d-flex justify-content-start align-content-center col-md-4 col-sm-6`}
                            >
                              <div
                                className={`${styles.alphabet} mr-3 d-flex justify-content-center align-content-center`}
                              >
                                <span>P</span>
                              </div>
                              <input
                                disabled={true}
                                type="text"
                                id="textInput"
                                name="companyPan"
                                defaultValue={margin?.data[0]?.calculation?.totalOrderValue}
                                className={`${styles.input_field} input form-control`}
                                required
                              />
                              <label
                                className={`${styles.label_heading} label_heading`}
                                id="textInput"
                                style={{ left: '70px', top: '17px' }}
                              >
                                Total Order Value (INR)
                                <strong className="text-danger">*</strong>
                                <span
                                  className={`${styles.blue}`}
                                >{`(N+O)`}</span>
                              </label>
                            </div>
                            <div
                              className={`${styles.each_input} d-flex justify-content-start align-content-center col-md-4 col-sm-6`}
                            >
                              <div
                                className={`${styles.alphabet} mr-3 d-flex justify-content-center align-content-center`}
                              >
                                <span>Q</span>
                              </div>
                              <input
                                disabled={true}
                                type="text"
                                id="textInput"
                                name="companyPan"
                                defaultValue={margin?.data[0]?.calculation?.provisionalUnitPricePerTon}
                                className={`${styles.input_field} input form-control`}
                                required
                              />
                              <label
                                className={`${styles.label_heading} label_heading`}
                                id="textInput"
                                style={{ left: '70px', top: '17px' }}
                              >
                                Provisional Unit Price Per Ton (INR)
                                <strong className="text-danger">*</strong>
                                <span
                                  className={`${styles.blue}`}
                                >{`(N/A)`}</span>
                              </label>
                            </div>
                            <div
                              className={`${styles.each_input} d-flex justify-content-start align-content-center col-md-4 col-sm-6`}
                            >
                              <div
                                className={`${styles.alphabet} mr-3 d-flex justify-content-center align-content-center`}
                              >
                                <span>R</span>
                              </div>
                              <input
                                disabled={true}
                                type="text"
                                id="textInput"
                                name="companyPan"
                                defaultValue={margin?.data[0]?.calculation?.marginMoney}
                                className={`${styles.input_field} input form-control`}
                                required
                              />
                              <label
                                className={`${styles.label_heading} label_heading`}
                                id="textInput"
                                style={{ left: '70px', top: '17px' }}
                              >
                                Margin Money (INR)
                                <strong className="text-danger">*</strong>
                                <span
                                  className={`${styles.blue}`}
                                >{`(P*G)`}</span>
                              </label>
                            </div>

                            <div
                              className={`${styles.each_input} d-flex justify-content-start align-content-center col-md-4 col-sm-6`}
                            >
                              <div
                                className={`${styles.alphabet} mr-3 d-flex justify-content-center align-content-center`}
                              >
                                <span>S</span>
                              </div>
                              <input
                                disabled={true}
                                type="text"
                                id="textInput"
                                name="companyPan"
                                defaultValue={margin?.data[0]?.calculation?.totalSPDC}
                                className={`${styles.input_field} input form-control`}
                                required
                              />
                              <label
                                className={`${styles.label_heading} label_heading`}
                                id="textInput"
                                style={{ left: '70px', top: '17px' }}
                              >
                                Total SPDC Amount Req. (INR)
                                <strong className="text-danger">*</strong>
                                <span
                                  className={`${styles.blue}`}
                                >{`(P-R)`}</span>
                              </label>
                            </div>
                            <div
                              className={`${styles.each_input} d-flex justify-content-start align-content-center col-md-4 col-sm-6`}
                            >
                              <div
                                className={`${styles.alphabet} mr-3 d-flex justify-content-center align-content-center`}
                              >
                                <span>T</span>
                              </div>
                              <input
                                disabled={true}
                                type="text"
                                id="textInput"
                                name="companyPan"
                                defaultValue={margin?.data[0]?.calculation?.amountPerSPDC}
                                className={`${styles.input_field} input form-control`}
                                required
                              />
                              <label
                                className={`${styles.label_heading} label_heading`}
                                id="textInput"
                                style={{ left: '70px', top: '17px' }}
                              >
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
                      className={`${styles.cardHeader} d-flex align-items-center justify-content-between`}
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
                              className={`${styles.each_input} col-md-4 col-sm-6`}
                            >
                              <input
                                type="text"
                                id="textInput"
                                name="buyerName"
                                defaultValue={margin?.data[0]?.invoiceDetail?.buyerName}
                                className={`${styles.input_field} input form-control`}
                                required
                                onChange={(e)=>saveInvoiceData(e.target.name, e.target.value)}
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
                                name="buyerGSTIN"
                                className={`${styles.input_field} input form-control`}
                                required
                                onChange={(e)=>saveInvoiceData(e.target.name, e.target.value)}
                              >
                                <option value="GTSDT789652JKH">
                                  {margin?.data[0]?.invoiceDetail?.buyerGSTIN}
                                </option>
                                <option value="GTSDT789652JKH">GTSDT789652JKH</option>
                                <option value="GTSDT789652JKH">GTSDT789652JKH</option>
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
                                name="buyerAddress"
                                defaultValue={margin?.data[0]?.invoiceDetail?.buyerAddress}
                                className={`${styles.input_field} input form-control`}
                                required
                                onChange={(e)=>saveInvoiceData(e.target.name, e.target.value)}
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
                                      defaultChecked={margin?.data[0]?.invoiceDetail?.isConsigneeSameAsBuyer === true}
                                      onChange={() =>
                                        saveInvoiceData('isConsigneeSameAsBuyer', true )
                                      }
                                      name="group1"
                                      type={type}
                                      id={`inline-${type}-1`}
                                    />
                                    <Form.Check
                                      className={`${styles.radio} radio`}
                                      inline
                                      label="No"
                                      defaultChecked={margin?.data[0]?.invoiceDetail?.isConsigneeSameAsBuyer === false}
                                      onChange={() =>
                                        saveInvoiceData('isConsigneeSameAsBuyer', false)
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
                                name="consigneeName"
                                defaultValue={margin?.data[0]?.invoiceDetail?.consigneeName}
                                onChange={(e)=>saveInvoiceData(e.target.name, e.target.value)}
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
                                name="consigneeGSTIN"
                                className={`${styles.input_field} input form-control`}
                                required
                                onChange={(e)=>saveInvoiceData(e.target.name, e.target.value)}
                              >
                                <option value="GTSDT789652JKH">
                                  {margin?.data[0]?.invoiceDetail?.consigneeGSTIN}
                                </option>
                                <option value="GTSDT789652JKH">GTSDT789652JKH</option>
                                <option value="GTSDT789652JKH">GTSDT789652JKH</option>
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
                                name="consigneeAddress"
                                onChange={(e)=>saveInvoiceData(e.target.name, e.target.value)}
                                defaultValue={margin?.data[0]?.invoiceDetail?.consigneeAddress}
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
                                      defaultChecked={margin?.data[0]?.invoiceDetail?.isConsigneeSameAsBuyer === true}
                                      onChange={() =>
                                        saveInvoiceData('isConsigneeSameAsBuyer', true)
                                      }
                                      name="group1"
                                      type={type}
                                      id={`inline-${type}-1`}
                                    />
                                    <Form.Check
                                      className={`${styles.radio} radio`}
                                      inline
                                      label="No"
                                      defaultChecked={margin?.data[0]?.invoiceDetail?.isConsigneeSameAsBuyer === false}
                                      onChange={() =>
                                        saveInvoiceData('isConsigneeSameAsBuyer', false)
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
                                name="consigneeName"
                                onChange={(e)=>saveInvoiceData(e.target.name, e.target.value)}
                                defaultValue={margin?.data[0]?.invoiceDetail?.consigneeName}
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
                                name="consigneeGSTIN"
                                onChange={(e)=>saveInvoiceData(e.target.name, e.target.value)}
                                className={`${styles.input_field} input form-control`}
                                required
                              >
                                <option value="GTSDT789652JKH">
                                  {margin?.data[0]?.invoiceDetail?.consigneeGSTIN}
                                </option>
                                <option value="GTSDT789652JKH">GTSDT789652JKH</option>
                                <option value="GTSDT789652JKH">GTSDT789652JKH</option>
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
                                name="consigneeAddress"
                                onChange={(e)=>saveInvoiceData(e.target.name, e.target.value)}
                                defaultValue={margin?.data[0]?.invoiceDetail?.consigneeAddress}
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
                                name='importerName'
                                onChange={(e)=>saveInvoiceData(e.target.name, e.target.value)}
                                defaultValue={margin?.data[0]?.invoiceDetail?.importerName}
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
                                name="branchOffice"
                                onChange={(e)=>saveInvoiceData(e.target.name, e.target.value)}
                                defaultValue={margin?.data[0]?.invoiceDetail?.branchOffice}
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
                                name="companyAddress"
                                onChange={(e)=>saveInvoiceData(e.target.name, e.target.value)}
                                defaultValue={margin?.data[0]?.invoiceDetail?.companyAddress}
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
                                name="importerGSTIN"
                                onChange={(e)=>saveInvoiceData(e.target.name, e.target.value)}
                                defaultValue={margin?.data[0]?.invoiceDetail?.importerGSTIN}
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
                                name="bankName"
                                onChange={(e)=>saveInvoiceData(e.target.name, e.target.value)}
                                defaultValue={margin?.data[0]?.invoiceDetail?.bankName}
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
                                name="branch"
                                onChange={(e)=>saveInvoiceData(e.target.name, e.target.value)}
                                defaultValue={margin?.data[0]?.invoiceDetail?.branch}
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
                                name="branchAddress"
                                onChange={(e)=>saveInvoiceData(e.target.name, e.target.value)}
                                defaultValue={margin?.data[0]?.invoiceDetail?.branchAddress}
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
                                name="IFSCcode"
                                onChange={(e)=>saveInvoiceData(e.target.name, e.target.value)}
                                defaultValue={margin?.data[0]?.invoiceDetail?.IFSCcode}
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
                                name="accountNo"
                                onChange={(e)=>saveInvoiceData(e.target.name, e.target.value)}
                                defaultValue={margin?.data[0]?.invoiceDetail?.accountNo}
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
        handleUpdate={handleUpdate}
        leftButtonName={`Save`}
        rightButtonName={`Preview`}
        handleApprove={routeChange}
      />
    </>
  )
}
export default Index
