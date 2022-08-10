/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/no-unknown-property */
/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import styles from './index.module.scss'
import RevisedMargin from '../../src/components/RevisedMargin'
import { Form } from 'react-bootstrap'

import _get from 'lodash/get'
import UploadOther from '../../src/components/UploadOther'
import DownloadBar from '../../src/components/DownloadBar'
import Router from 'next/router'
import { useSelector, useDispatch } from 'react-redux'
import {
  UpdateMarginMoney,
  GetMarginMoney,
} from '../../src/redux/marginMoney/action'
import { setPageName, setDynamicName } from '../../src/redux/userData/action'
// import { Row, Col } from 'react-bootstrap'

function Index() {
  const dispatch = useDispatch()

  const [darkMode, setDarkMode] = useState(false)

  const { margin } = useSelector((state) => state.marginMoney)

  const marginData = margin?.data?.data[0]
  let id = sessionStorage.getItem('marginId')
  const RevisedMarginMoneyTrue = _get(
    margin,
    'data.data[0].revisedMarginMoney.isActive',
    false,
  )

  useEffect(() => {
    let id = sessionStorage.getItem('marginId')
    dispatch(GetMarginMoney({ orderId: id }))

    dispatch(setPageName('margin-money'))
    dispatch(setDynamicName(marginData?.company.companyName))
  }, [dispatch, marginData?.company.companyName])

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
    isUsanceInterestIncluded: marginData?.isUsanceInterestIncluded || '',
    status: marginData?.status || '',
    quantity: marginData?.order?.quantity || '',
    additionalPDC: marginData?.additionalPDC || '',
    conversionRate: marginData?.conversionRate || '',
    perUnitPrice: marginData?.order?.perUnitPrice || '',
    usanceInterestPercentage:
      marginData?.order?.termsheet?.commercials?.usanceInterestPercetage || '',
    numberOfPDC: marginData?.numberOfPDC || '',
    tradeMarginPercentage:
      marginData?.order?.termsheet?.commercials?.tradeMarginPercentage || '',
    tolerance: marginData?.order?.tolerance || '',
    marginMoney:
      marginData?.order?.termsheet?.transactionDetails?.marginMoney || '',
  })

  // console.log(marginData?.order?.quantity, ' marginData?.order?.quantity')
  const saveForCalculation = (name, value) => {
    const newInput = { ...forCalculation }
    newInput[name] = value
    // console.log(newInput)
    setForCalculation(newInput)
    getData2()
  }

  const [finalCal, setFinalCal] = useState({
    orderValue: '',
    orderValueCurrency: 'USD',
    orderValueInINR: '',
    usanceInterest: '',
    tradeMargin: '',
    grossOrderValue: '',
    toleranceValue: '',
    totalOrderValue: '',
    provisionalUnitPricePerTon: '',
    marginMoney: '',
    totalSPDC: '',
    amountPerSPDC: '',
  })
  useEffect(() => {
    getData()
  }, [marginData])
  const getData = () => {
    setForCalculation({
      isUsanceInterestIncluded: marginData?.isUsanceInterestIncluded,
      status: marginData?.status,
      quantity: marginData?.order?.quantity,
      additionalPDC: marginData?.additionalPDC,
      conversionRate: marginData?.conversionRate,
      perUnitPrice: marginData?.order?.perUnitPrice,
      usanceInterestPercentage:
        marginData?.order?.termsheet?.commercials?.usanceInterestPercetage,
      numberOfPDC: marginData?.numberOfPDC,
      tradeMarginPercentage:
        marginData?.order?.termsheet?.commercials?.tradeMarginPercentage,
      tolerance: marginData?.order?.tolerance,
      marginMoney:
        marginData?.order?.termsheet?.transactionDetails?.marginMoney,
    })
    let orderValue = parseFloat(
      Number(forCalculation.quantity) * Number(forCalculation.perUnitPrice),
    ).toFixed(2) //J
    let orderValueCurrency = 'USD'
    let orderValueInINR = parseFloat(
      Number(orderValue) * forCalculation.conversionRate,
    ).toFixed(2) //K
    let usanceInterest = parseFloat(
      (Number(orderValueInINR) *
        (forCalculation.isUsanceInterestIncluded
          ? Number(forCalculation.usanceInterestPercentage / 100)
          : 1) *
        90) /
        365,
    ).toFixed(2) //L
    let tradeMargin = parseFloat(
      Number(orderValueInINR) *
        Number(Number(forCalculation.tradeMarginPercentage) / 100),
    ).toFixed(2) //M
    let grossOrderValue = parseFloat(
      Number(orderValueInINR) + Number(usanceInterest) + Number(tradeMargin),
    ).toFixed(2) //N
    let toleranceValue = parseFloat(
      Number(grossOrderValue) * Number(forCalculation.tolerance / 100),
    ).toFixed(2) //O
    let totalOrderValue = parseFloat(
      Number(grossOrderValue) + Number(toleranceValue),
    ).toFixed(2) //P
    let provisionalUnitPricePerTon = parseFloat(
      Number(grossOrderValue) / Number(forCalculation.quantity),
    ).toFixed(2) //Q
    let marginMoney = parseFloat(
      Number(totalOrderValue) *
        Number(Number(forCalculation.marginMoney) / 100),
    ).toFixed(2) //R
    let totalSPDC = parseFloat(
      Number(totalOrderValue) - Number(marginMoney),
    ).toFixed(2) //S
    let amountPerSPDC = parseFloat(
      Number(totalSPDC) / Number(forCalculation.numberOfPDC),
    ).toFixed(2) //T

    // console.log(orderValue, 'orderValue')
    setFinalCal({
      orderValue: orderValue,
      orderValueCurrency: orderValueCurrency,
      orderValueInINR: orderValueInINR,
      usanceInterest: usanceInterest,
      tradeMargin: tradeMargin,
      grossOrderValue: grossOrderValue,
      toleranceValue: toleranceValue,
      totalOrderValue: totalOrderValue,
      provisionalUnitPricePerTon: provisionalUnitPricePerTon,
      marginMoney: marginMoney,
      totalSPDC: totalSPDC,
      amountPerSPDC: amountPerSPDC,
    })
  }
  useEffect(() => {
    getData2()
  }, [forCalculation])

  const getData2 = () => {
    let orderValue = parseFloat(
      Number(forCalculation.quantity) * Number(forCalculation.perUnitPrice),
    ).toFixed(2) //J
    let orderValueCurrency = 'USD'
    let orderValueInINR = parseFloat(
      Number(orderValue) * forCalculation.conversionRate,
    ).toFixed(2) //K
    let usanceInterest = parseFloat(
      (Number(orderValueInINR) *
        (forCalculation.isUsanceInterestIncluded
          ? Number(forCalculation.usanceInterestPercentage / 100)
          : 1) *
        90) /
        365,
    ).toFixed(2) //L
    let tradeMargin = parseFloat(
      Number(orderValueInINR) *
        Number(Number(forCalculation.tradeMarginPercentage) / 100),
    ).toFixed(2) //M
    let grossOrderValue = parseFloat(
      Number(orderValueInINR) + Number(usanceInterest) + Number(tradeMargin),
    ).toFixed(2) //N
    let toleranceValue = parseFloat(
      Number(grossOrderValue) * Number(forCalculation.tolerance / 100),
    ).toFixed(2) //O
    let totalOrderValue = parseFloat(
      Number(grossOrderValue) + Number(toleranceValue),
    ).toFixed(2) //P
    let provisionalUnitPricePerTon = parseFloat(
      Number(grossOrderValue) / Number(forCalculation.quantity),
    ).toFixed(2) //Q
    let marginMoney = parseFloat(
      Number(totalOrderValue) *
        Number(Number(forCalculation.marginMoney) / 100),
    ).toFixed(2) //R
    let totalSPDC = parseFloat(
      Number(totalOrderValue) - Number(marginMoney),
    ).toFixed(2) //S
    let amountPerSPDC = parseFloat(
      Number(totalSPDC) / Number(forCalculation.numberOfPDC),
    ).toFixed(2) //T

    // console.log(orderValue, 'orderValue')
    setFinalCal({
      orderValue: orderValue,
      orderValueCurrency: orderValueCurrency,
      orderValueInINR: orderValueInINR,
      usanceInterest: usanceInterest,
      tradeMargin: tradeMargin,
      grossOrderValue: grossOrderValue,
      toleranceValue: toleranceValue,
      totalOrderValue: totalOrderValue,
      provisionalUnitPricePerTon: provisionalUnitPricePerTon,
      marginMoney: marginMoney,
      totalSPDC: totalSPDC,
      amountPerSPDC: amountPerSPDC,
    })
  }

  const routeChange = () => {
    Router.push('/margin-preview')
  }

  const [invoiceData, setInvoiceData] = useState({
    buyerName: marginData?.invoiceDetail?.buyerName || '',
    buyerGSTIN: marginData?.invoiceDetail?.buyerGSTIN || '',
    buyerAddress: marginData?.invoiceDetail?.buyerAddress || '',
    isConsigneeSameAsBuyer: marginData?.invoiceDetail?.isConsigneeSameAsBuyer,
    consigneeName: marginData?.invoiceDetail?.consigneeName || '',
    consigneeGSTIN: marginData?.invoiceDetail?.consigneeGSTIN || '',
    consigneeAddress: marginData?.invoiceDetail?.consigneeAddress || '',
    importerName: marginData?.invoiceDetail?.importerName || '',
    branchOffice: marginData?.invoiceDetail?.branchOffice || '',
    companyAddress: marginData?.invoiceDetail?.companyAddress || '',
    importerGSTIN: marginData?.invoiceDetail?.importerGSTIN || '',
    bankName: marginData?.invoiceDetail?.bankName || '',
    branch: marginData?.invoiceDetail?.branch || '',
    branchAddress: marginData?.invoiceDetail?.branchAddress || '',
    IFSCcode: marginData?.invoiceDetail?.IFSCcode || '',
    accountNo: marginData?.invoiceDetail?.accountNo || '',
  })
  // console.log(invoiceData, 'invoiceData')

  const saveInvoiceData = (name, value) => {
    const newInput = { ...invoiceData }
    newInput[name] = value
    console.log(newInput, 'nnto', name, value)

    setInvoiceData({ ...newInput })
  }

  console.log(invoiceData, 'INVOICE DATA')

  const setSame = (val) => {
    if (val == true) {
      setInvoiceData({
        ...invoiceData,
        consigneeName: invoiceData.buyerName,
        consigneeGSTIN: invoiceData.buyerGSTIN,
        consigneeAddress: invoiceData.buyerAddress,
      })
    } else {
      setInvoiceData({
        ...invoiceData,
        consigneeName: '',
        consigneeGSTIN: '',
        consigneeAddress: '',
      })
    }
  }

  const handleUpdate = () => {
    let obj = {
      marginMoneyId: marginData?._id,
      conversionRate: forCalculation.conversionRate,
      isUsanceInterestIncluded: forCalculation.isUsanceInterestIncluded,
      numberOfPDC: forCalculation.numberOfPDC,
      additionalPDC: forCalculation.additionalPDC,
      invoiceDetail: { ...invoiceData },
      calculation: {
        orderValue: finalCal.orderValue,
        orderValueCurrency: finalCal.orderValueCurrency,
        orderValueInINR: finalCal.orderValueInINR,
        usanceInterest: finalCal.usanceInterest,
        tradeMargin: finalCal.tradeMargin,
        grossOrderValue: finalCal.grossOrderValue,
        toleranceValue: finalCal.toleranceValue,
        totalOrderValue: finalCal.totalOrderValue,
        provisionalUnitPricePerTon: finalCal.provisionalUnitPricePerTon,
        marginMoney: finalCal.marginMoney,
        totalSPDC: finalCal.totalSPDC,
        amountPerSPDC: finalCal.amountPerSPDC,
      },
    }
    if (
      marginData?.order?.perUnitPrice !== forCalculation.perUnitPrice ||
      marginData?.order?.quantity !== forCalculation.quantity
    ) {
      obj = {
        ...obj,
        orderObj: {
          quantity: forCalculation.quantity,
          perUnitPrice: forCalculation.perUnitPrice,
        },
      }
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
                src={`${darkMode
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
            {RevisedMarginMoneyTrue ? (
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
            ) : null}
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
            <div className="col-md-12 px-0 accordion_body">
              <div className={`${styles.tabContent} tab-content`}>
                <div
                  className="tab-pane fade show active"
                  id="Margin"
                  role="tabpanel"
                >
                  <div className={`${styles.card} vessel_card accordionMargin card`}>
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
                          {marginData?.order?.commodity}
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
                          <option>
                            {' '}
                            {marginData?.order?.unitOfValue == 'Cr'
                              ? 'Crores'
                              : null}
                          </option>
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
                                <div className={`${styles.val} heading`}>
                                  {marginData?.order?.quantity?.toLocaleString()}
                                </div>
                              </div>
                            </div>
                            {/* <div
                              className={`${styles.each_input} d-flex justify-content-start align-content-center col-md-4 col-sm-6`}
                            >
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
                                <div className={`${styles.val} heading`}>
                                  {marginData?.order?.quantity?.toLocaleString()}
                                </div>
                              </div>
                            </div>
                              {/* <div
                                className={`${styles.alphabet} mr-3 d-flex justify-content-center align-content-center`}
                              >
                                <span>A</span>
                              </div>
                              <input
                                type="text"
                                id="textInput"
                                name="quantity"
                                defaultValue={marginData?.order?.quantity?.toLocaleString()}
                                onChange={(e) =>
                                  saveForCalculation(
                                    e.target.name,
                                    e.target.value,
                                  )
                                }
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
                              </label> */}
                            {/* </div> */}

                            {/* <div
                              className={`${styles.each_input} d-flex justify-content-start align-content-center col-md-4 col-sm-6`}
                            >
                              <div
                                className={`${styles.alphabet} mr-3 d-flex justify-content-center align-content-center`}
                              >
                                <span>B</span>
                              </div>
                              <input
                                type="text"
                                id="textInput"
                                defaultValue={marginData?.order?.perUnitPrice}
                                name="perUnitPrice"
                                onChange={(e) =>
                                  saveForCalculation(
                                    e.target.name,
                                    e.target.value,
                                  )
                                }
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
                            </div> */}
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
                                  {marginData?.order?.perUnitPrice}
                                </div>
                              </div>
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
                                type="number"
                                id="textInput"
                                name="conversionRate"
                                onChange={(e) =>
                                  saveForCalculation(
                                    e.target.name,
                                    e.target.value,
                                  )
                                }
                                defaultValue={marginData?.conversionRate}
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
                                  Usance Interest (%)
                                  <strong className="text-danger">*</strong>
                                </label>
                                <div
                                  className={`${styles.val} heading d-flex align-items-center`}
                                >
                                  {
                                    marginData?.order?.termsheet?.commercials
                                      ?.usanceInterestPercetage
                                  }
                                  <div className={` d-flex align-items-center`}>
                                    <label
                                      className={`${styles.label_heading} ${styles.subHeading} ml-3 label_heading mb-0`}
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
                                            defaultChecked={
                                              marginData?.isUsanceInterestIncluded ===
                                              true
                                            }
                                            onChange={(e) =>
                                              saveForCalculation(
                                                'isUsanceInterestIncluded',
                                                true,
                                              )
                                            }
                                          />
                                          <Form.Check
                                            className={`${styles.radio} radio`}
                                            inline
                                            label="No"
                                            name="group1"
                                            type={type}
                                            id={`inline-${type}-2`}
                                            defaultChecked={
                                              marginData?.isUsanceInterestIncluded ===
                                              false
                                            }
                                            onChange={(e) =>
                                              saveForCalculation(
                                                'isUsanceInterestIncluded',
                                                false,
                                              )
                                            }
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
                                  {
                                    marginData?.order?.termsheet?.commercials
                                      ?.tradeMarginPercentage
                                  }
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
                                  {marginData?.order?.tolerance}
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
                                  {
                                    marginData?.order?.termsheet
                                      ?.transactionDetails?.marginMoney
                                  }
                                </div>
                              </div>
                            </div>

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
                                onChange={(e) =>
                                  saveForCalculation(
                                    e.target.name,
                                    e.target.value,
                                  )
                                }
                                defaultValue={marginData?.numberOfPDC}
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
                              className={`${styles.filed} d-flex justify-content-start align-content-center col-md-4 col-sm-6`}
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
                                  Additional PDC's
                                  <strong className="text-danger">*</strong>
                                </label>
                                <div className={`${styles.val} heading`}>
                                  {marginData?.additionalPDC}
                                </div>
                              </div>
                            </div>
                            {/* <div
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
                                onChange={(e) =>
                                  saveForCalculation(
                                    e.target.name,
                                    e.target.value,
                                  )
                                }
                                defaultValue={marginData?.additionalPDC}
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
                            </div> */}
                          </div>
                        </div>
                        <div className={`${styles.content} border_color`}>
                          <span>Calculation</span>
                          <div className={`${styles.input_container} row`}>
                            <div
                              className={`${styles.filed} d-flex justify-content-start align-content-center col-md-4 col-sm-6`}
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
                                  Order Value{' '}
                                  <strong className="text-danger">*</strong>
                                  <span
                                    className={`${styles.blue}`}
                                  >{`(A*B)`}</span>
                                </label>
                                <div className={`${styles.val} heading`}>
                                  {finalCal.orderValue}
                                </div>
                              </div>
                            </div>
                            <div
                              className={`${styles.filed} d-flex justify-content-start align-content-center col-md-4 col-sm-6`}
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
                                  Order Value (INR){' '}
                                  <strong className="text-danger">*</strong>
                                  <span
                                    className={`${styles.blue}`}
                                  >{`(J*C)`}</span>
                                </label>
                                <div className={`${styles.val} heading`}>
                                  {finalCal.orderValueInINR}
                                </div>
                              </div>
                            </div>
                            <div
                              className={`${styles.filed} d-flex justify-content-start align-content-center col-md-4 col-sm-6`}
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
                                  Usance Interest (%) for 90 days (INR){' '}
                                  <strong className="text-danger">*</strong>
                                  <span
                                    className={`${styles.blue}`}
                                  >{`(K*D*90/365)`}</span>
                                </label>
                                <div className={`${styles.val} heading`}>
                                  {finalCal.usanceInterest}
                                </div>
                              </div>
                            </div>
                            <div
                              className={`${styles.filed} d-flex justify-content-start align-content-center col-md-4 col-sm-6`}
                            >
                              <div
                                className={`${styles.alphabet} d-flex justify-content-center align-content-center`}
                              >
                                <span>M</span>
                              </div>
                              <div className={`${styles.val_wrapper} ml-3`}>
                                <label
                                  className={`${styles.label_heading} label_heading`}
                                  id="textInput"
                                >
                                  Trade Margin (INR){' '}
                                  <strong className="text-danger">*</strong>
                                  <span className={`${styles.blue}`}>
                                    {`(K*E)`}
                                  </span>
                                </label>
                                <div className={`${styles.val} heading`}>
                                  {finalCal.tradeMargin}
                                </div>
                              </div>
                            </div>
                            <div
                              className={`${styles.filed} d-flex justify-content-start align-content-center col-md-4 col-sm-6`}
                            >
                              <div
                                className={`${styles.alphabet} d-flex justify-content-center align-content-center`}
                              >
                                <span>N</span>
                              </div>
                              <div className={`${styles.val_wrapper} ml-3`}>
                                <label
                                  className={`${styles.label_heading} label_heading`}
                                  id="textInput"
                                >
                                  Gross Order Value (INR){' '}
                                  <strong className="text-danger">*</strong>
                                  <span className={`${styles.blue}`}>
                                    {`(K+L+M)`}
                                  </span>
                                </label>
                                <div className={`${styles.val} heading`}>
                                  {finalCal.grossOrderValue}
                                </div>
                              </div>
                            </div>
                            <div
                              className={`${styles.filed} d-flex justify-content-start align-content-center col-md-4 col-sm-6`}
                            >
                              <div
                                className={`${styles.alphabet} d-flex justify-content-center align-content-center`}
                              >
                                <span>O</span>
                              </div>
                              <div className={`${styles.val_wrapper} ml-3`}>
                                <label
                                  className={`${styles.label_heading} label_heading`}
                                  id="textInput"
                                >
                                  Tolerance Value (INR){' '}
                                  <strong className="text-danger">*</strong>
                                  <span className={`${styles.blue}`}>
                                    {`(N*F)`}
                                  </span>
                                </label>
                                <div className={`${styles.val} heading`}>
                                  {finalCal.toleranceValue}
                                </div>
                              </div>
                            </div>
                            <div
                              className={`${styles.filed} d-flex justify-content-start align-content-center col-md-4 col-sm-6`}
                            >
                              <div
                                className={`${styles.alphabet} d-flex justify-content-center align-content-center`}
                              >
                                <span>P</span>
                              </div>
                              <div className={`${styles.val_wrapper} ml-3`}>
                                <label
                                  className={`${styles.label_heading} label_heading`}
                                  id="textInput"
                                >
                                  Total Order Value (INR){' '}
                                  <strong className="text-danger">*</strong>
                                  <span className={`${styles.blue}`}>
                                    {`(N+O)`}
                                  </span>
                                </label>
                                <div className={`${styles.val} heading`}>
                                  {finalCal.totalOrderValue}
                                </div>
                              </div>
                            </div>
                            <div
                              className={`${styles.filed} d-flex justify-content-start align-content-center col-md-4 col-sm-6`}
                            >
                              <div
                                className={`${styles.alphabet} d-flex justify-content-center align-content-center`}
                              >
                                <span>Q</span>
                              </div>
                              <div className={`${styles.val_wrapper} ml-3`}>
                                <label
                                  className={`${styles.label_heading} label_heading`}
                                  id="textInput"
                                >
                                  Provisional Unit Price Per Ton (INR){' '}
                                  <strong className="text-danger">*</strong>
                                  <span className={`${styles.blue}`}>
                                    {`(N/A)`}
                                  </span>
                                </label>
                                <div className={`${styles.val} heading`}>
                                  {finalCal.provisionalUnitPricePerTon}
                                </div>
                              </div>
                            </div>
                            <div
                              className={`${styles.filed} d-flex justify-content-start align-content-center col-md-4 col-sm-6`}
                            >
                              <div
                                className={`${styles.alphabet} d-flex justify-content-center align-content-center`}
                              >
                                <span>R</span>
                              </div>
                              <div className={`${styles.val_wrapper} ml-3`}>
                                <label
                                  className={`${styles.label_heading} label_heading`}
                                  id="textInput"
                                >
                                  Margin Money (INR)
                                  <strong className="text-danger">*</strong>
                                  <span className={`${styles.blue}`}>
                                    {`(P*G)`}
                                  </span>
                                </label>
                                <div className={`${styles.val} heading`}>
                                  {finalCal.marginMoney}
                                </div>
                              </div>
                            </div>
                            <div
                              className={`${styles.filed} d-flex justify-content-start align-content-center col-md-4 col-sm-6`}
                            >
                              <div
                                className={`${styles.alphabet} d-flex justify-content-center align-content-center`}
                              >
                                <span>S</span>
                              </div>
                              <div className={`${styles.val_wrapper} ml-3`}>
                                <label
                                  className={`${styles.label_heading} label_heading`}
                                  id="textInput"
                                >
                                  Total SPDC Amount Req. (INR)
                                  <strong className="text-danger">*</strong>
                                  <span className={`${styles.blue}`}>
                                    {`(P-R)`}
                                  </span>
                                </label>
                                <div className={`${styles.val} heading`}>
                                  {finalCal.totalSPDC}
                                </div>
                              </div>
                            </div>
                            <div
                              className={`${styles.filed} d-flex justify-content-start align-content-center col-md-4 col-sm-6`}
                            >
                              <div
                                className={`${styles.alphabet} d-flex justify-content-center align-content-center`}
                              >
                                <span>T</span>
                              </div>
                              <div className={`${styles.val_wrapper} ml-3`}>
                                <label
                                  className={`${styles.label_heading} label_heading`}
                                  id="textInput"
                                >
                                  Amount per SPDC (INR)
                                  <strong className="text-danger">*</strong>
                                  <span className={`${styles.blue}`}>
                                    {`(S/H)`}
                                  </span>
                                </label>
                                <div className={`${styles.val} heading`}>
                                  {finalCal.amountPerSPDC}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    className={`${styles.card} ${styles.lastComponent} vessel_card accordionMargin card`}
                  >
                    <div
                      className={`${styles.cardHeader}  d-flex align-items-center justify-content-between`}
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
                                defaultValue={
                                  marginData?.invoiceDetail?.buyerName
                                }
                                className={`${styles.input_field} input form-control`}
                                required
                                onChange={(e) =>
                                  saveInvoiceData(e.target.name, e.target.value)
                                }
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
                              <div className="d-flex">
                                <select
                                  id="Code"
                                  name="buyerGSTIN"
                                  className={`${styles.input_field} ${styles.customSelect} input form-control`}
                                  required
                                  onChange={(e) =>
                                    saveInvoiceData(
                                      e.target.name,
                                      e.target.value,
                                    )
                                  }
                                  value={marginData?.invoiceDetail?.buyerGSTIN}
                                >
                                  {/* <option value="GTSDT789652JKH">
                                    {marginData?.invoiceDetail?.buyerGSTIN}
                                  </option> */}
                                  <option value="GTSDT789652JKH">
                                    GTSDT789652JKH
                                  </option>
                                  <option value="GTSDT789652JKH">
                                    GTSDT789652JKH
                                  </option>
                                </select>
                                <label
                                  className={`${styles.label_heading} label_heading`}
                                  id="textInput"
                                >
                                  Buyer GSTIN
                                  <strong className="text-danger">*</strong>
                                </label>
                                <img
                                  className={`img-fluid ${styles.arrow}`}
                                  src="/static/inputDropDown.svg"
                                ></img>
                              </div>
                            </div>
                            <div
                              className={`${styles.each_input} col-md-4 col-sm-6`}
                            >
                              <input
                                type="text"
                                id="textInput"
                                name="buyerAddress"
                                defaultValue={
                                  marginData?.invoiceDetail?.buyerAddress
                                }
                                className={`${styles.input_field} input form-control`}
                                required
                                onChange={(e) =>
                                  saveInvoiceData(e.target.name, e.target.value)
                                }
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
                                      defaultChecked={
                                        invoiceData?.isConsigneeSameAsBuyer ==
                                        true
                                      }
                                      onChange={() => {
                                        saveInvoiceData(
                                          'isConsigneeSameAsBuyer',
                                          true,
                                        )
                                        setSame(true)
                                      }}
                                      name="group1"
                                      type={type}
                                      id={`inline-${type}-1`}
                                    />
                                    <Form.Check
                                      className={`${styles.radio} radio`}
                                      inline
                                      label="No"
                                      defaultChecked={
                                        invoiceData?.isConsigneeSameAsBuyer ==
                                        false
                                      }
                                      onChange={() => {
                                        saveInvoiceData(
                                          'isConsigneeSameAsBuyer',
                                          false,
                                        )
                                        setSame(false)
                                      }}
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
                                value={invoiceData?.consigneeName}
                                onChange={(e) =>
                                  saveInvoiceData(e.target.name, e.target.value)
                                }
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
                              <div className="d-flex">
                                <select
                                  id="Code"
                                  name="consigneeGSTIN"
                                  className={`${styles.input_field} ${styles.customSelect} input form-control`}
                                  required
                                  onChange={(e) =>
                                    saveInvoiceData(
                                      e.target.name,
                                      e.target.value,
                                    )
                                  }
                                  value={invoiceData?.consigneeGSTIN}
                                >
                                  <option value="GTSDT789652JKH">
                                    GTSDT789652JKH
                                  </option>
                                  <option value="GTSDT789652JKH">
                                    GTSDT789652JKH
                                  </option>
                                </select>
                                <label
                                  className={`${styles.label_heading} label_heading`}
                                  id="textInput"
                                >
                                  Consignee GSTIN
                                  <strong className="text-danger">*</strong>
                                </label>
                                <img
                                  className={`img-fluid ${styles.arrow}`}
                                  src="/static/inputDropDown.svg"
                                ></img>
                              </div>
                            </div>
                            <div
                              className={`${styles.each_input} col-md-4 col-sm-6`}
                            >
                              <input
                                type="text"
                                id="textInput"
                                name="consigneeAddress"
                                onChange={(e) =>
                                  saveInvoiceData(e.target.name, e.target.value)
                                }
                                value={invoiceData?.consigneeAddress}
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
                              <div className="d-flex">
                                <select
                                  id="Code"
                                  name="importerName"
                                  className={`${styles.input_field} ${styles.customSelect} input form-control`}
                                  required
                                  defaultValue={
                                    marginData?.invoiceDetail?.importerName
                                  }
                                  onChange={(e) =>
                                    saveInvoiceData(
                                      e.target.name,
                                      e.target.value,
                                    )
                                  }
                                >
                                  <option value="Ramakrishna Traders">
                                    Ramakrishna Traders
                                  </option>
                                  <option value="Balaji Traders">
                                    Balaji Traders
                                  </option>
                                </select>
                                <label
                                  className={`${styles.label_heading} label_heading`}
                                  id="textInput"
                                >
                                  Importer Name
                                  <strong className="text-danger">*</strong>
                                </label>
                                <img
                                  className={`img-fluid ${styles.arrow}`}
                                  src="/static/inputDropDown.svg"
                                ></img>
                              </div>
                            </div>
                            <div
                              className={`${styles.each_input} col-md-3 col-sm-6`}
                            >
                              <div className="d-flex">
                                <select
                                  id="Code"
                                  name="branchOffice"
                                  className={`${styles.input_field} ${styles.customSelect} input form-control`}
                                  required
                                  defaultValue={
                                    marginData?.invoiceDetail?.importerName
                                  }
                                  onChange={(e) =>
                                    saveInvoiceData(
                                      e.target.name,
                                      e.target.value,
                                    )
                                  }
                                >
                                  <option value="Visakhapatnam, India">
                                    {'Visakhapatnam, India'}
                                  </option>
                                  <option value="Mumbai, India">
                                    Mumbai, India
                                  </option>
                                </select>
                                <label
                                  className={`${styles.label_heading} label_heading`}
                                  id="textInput"
                                >
                                  Branch Office
                                  <strong className="text-danger">*</strong>
                                </label>
                                <img
                                  className={`img-fluid ${styles.arrow}`}
                                  src="/static/inputDropDown.svg"
                                ></img>
                              </div>
                            </div>

                            <div
                              className={`${styles.each_input} col-md-3 col-sm-6`}
                            >
                              <input
                                type="text"
                                id="textInput"
                                name="companyAddres"
                                onChange={(e) =>
                                  saveInvoiceData(e.target.name, e.target.value)
                                }
                                defaultValue={'Address'}
                                className={`${styles.input_field} input form-control`}
                                required
                              />
                              <label
                                className={`${styles.label_heading} label_heading`}
                                id="textInput"
                              >
                                Company Address*
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
                                onChange={(e) =>
                                  saveInvoiceData(e.target.name, e.target.value)
                                }
                                defaultValue={
                                  marginData?.invoiceDetail?.importerGSTIN
                                }
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
                              <div className="d-flex">
                                <select
                                  id="Code"
                                  name="bankName"
                                  className={`${styles.input_field} ${styles.customSelect} input form-control`}
                                  required
                                  defaultValue={
                                    marginData?.invoiceDetail?.importerName
                                  }
                                  onChange={(e) =>
                                    saveInvoiceData(
                                      e.target.name,
                                      e.target.value,
                                    )
                                  }
                                >
                                  <option value="HDFC">HDFC</option>
                                  <option value="SBI">SBI</option>
                                </select>
                                <label
                                  className={`${styles.label_heading} label_heading`}
                                  id="textInput"
                                >
                                  Bank Name
                                  <strong className="text-danger">*</strong>
                                </label>
                                <img
                                  className={`img-fluid ${styles.arrow}`}
                                  src="/static/inputDropDown.svg"
                                ></img>
                              </div>
                            </div>
                            <div
                              className={`${styles.each_input} col-md-3 col-sm-6`}
                            >
                              <div className="d-flex">
                                <select
                                  id="Code"
                                  name="branch"
                                  className={`${styles.input_field} ${styles.customSelect} input form-control`}
                                  required
                                  defaultValue={
                                    marginData?.invoiceDetail?.branch
                                  }
                                  onChange={(e) =>
                                    saveInvoiceData(
                                      e.target.name,
                                      e.target.value,
                                    )
                                  }
                                >
                                  <option value="DELHI, INDIA">
                                    DELHI, INDIA
                                  </option>
                                  <option value="VIZAG, INDIA">
                                    VIZAG, INDIA
                                  </option>
                                </select>
                                <label
                                  className={`${styles.label_heading} label_heading`}
                                  id="textInput"
                                >
                                  Branch
                                  <strong className="text-danger">*</strong>
                                </label>
                                <img
                                  className={`img-fluid ${styles.arrow}`}
                                  src="/static/inputDropDown.svg"
                                ></img>
                              </div>
                            </div>

                            <div
                              className={`${styles.each_input} col-md-3 col-sm-6`}
                            >
                              <input
                                type="text"
                                id="textInput"
                                name="branchAddress"
                                onChange={(e) =>
                                  saveInvoiceData(e.target.name, e.target.value)
                                }
                                defaultValue={
                                  marginData?.invoiceDetail?.branchAddress
                                }
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
                                onChange={(e) =>
                                  saveInvoiceData(e.target.name, e.target.value)
                                }
                                defaultValue={
                                  marginData?.invoiceDetail?.IFSCcode
                                }
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
                                onChange={(e) =>
                                  saveInvoiceData(e.target.name, e.target.value)
                                }
                                defaultValue={
                                  marginData?.invoiceDetail?.accountNo
                                }
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

                {RevisedMarginMoneyTrue ? (
                  <div
                    className="tab-pane fade"
                    id="revisedMargin"
                    role="tabpanel"
                  >
                    <div className={`${styles.card}  accordion_body`}>
                      <RevisedMargin
                        marginData={marginData}
                        finalCal={finalCal}
                      />
                    </div>
                  </div>
                ) : null}

                <div className="tab-pane fade" id="Documents" role="tabpanel">
                  <div className={`${styles.card}  accordion_body`}>
                    <UploadOther
                      orderid={id}
                      module="LeadOnboardingOrderApproval"
                    />
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
